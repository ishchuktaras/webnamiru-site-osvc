import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  recaptchaToken: z.string().optional(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    console.log("[v0] Environment check:", {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasRecaptchaSecret: !!process.env.RECAPTCHA_SECRET_KEY,
    })

    const body = await request.json()
    console.log("[v0] Received form data:", { ...body, recaptchaToken: body.recaptchaToken ? "present" : "missing" })

    // Validace dat
    const validatedData = contactSchema.parse(body)

    if (validatedData.recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      console.log("[v0] Verifying reCAPTCHA token...")
      const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.recaptchaToken}`,
      })

      const recaptchaData = await recaptchaResponse.json()
      console.log("[v0] reCAPTCHA response:", recaptchaData)

      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        console.log("[v0] reCAPTCHA verification failed:", recaptchaData)
        return NextResponse.json({ error: "Ověření reCAPTCHA selhalo. Zkuste to prosím znovu." }, { status: 400 })
      }
      console.log("[v0] reCAPTCHA verification successful, score:", recaptchaData.score)
    } else {
      console.log("[v0] Skipping reCAPTCHA verification (token or secret missing)")
    }

    console.log("[v0] Sending email via Resend...")
    const emailResult = await resend.emails.send({
      from: "webnamiru.site <onboarding@resend.dev>",
      to: "info@webnamiru.site",
      replyTo: validatedData.email,
      subject: `Nová poptávka od ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0070f3; padding-bottom: 10px;">
            Nová poptávka z webu webnamiru.site
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong>Jméno:</strong> ${validatedData.name}
            </p>
            <p style="margin: 10px 0;">
              <strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a>
            </p>
            ${
              validatedData.company
                ? `<p style="margin: 10px 0;"><strong>Firma:</strong> ${validatedData.company}</p>`
                : ""
            }
            ${
              validatedData.phone
                ? `<p style="margin: 10px 0;"><strong>Telefon:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>`
                : ""
            }
            ${
              validatedData.budget
                ? `<p style="margin: 10px 0;"><strong>Rozpočet:</strong> ${validatedData.budget}</p>`
                : ""
            }
          </div>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Zpráva:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${validatedData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Tato zpráva byla odeslána z kontaktního formuláře na webnamiru.site</p>
          </div>
        </div>
      `,
    })

    console.log("[v0] Email sent successfully:", emailResult)

    return NextResponse.json({
      success: true,
      message: "Zpráva byla úspěšně odeslána",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Neplatná data formuláře", details: error.errors }, { status: 400 })
    }

    if (error && typeof error === "object" && "message" in error) {
      return NextResponse.json(
        { error: "Chyba při odesílání emailu", details: (error as Error).message },
        { status: 500 },
      )
    }

    return NextResponse.json({ error: "Chyba při odesílání zprávy" }, { status: 500 })
  }
}
