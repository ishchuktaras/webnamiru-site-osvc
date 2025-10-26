import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validace dat
    const validatedData = contactSchema.parse(body)

    // TODO: Integrace s Resend pro odesílání emailů
    // Pro nyní pouze logujeme data
    console.log("[v0] Contact form submission:", validatedData)

    // Simulace odeslání emailu
    // V produkci zde bude integrace s Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'web@webnamiru.site',
      to: 'info@webnamiru.site',
      subject: `Nová poptávka od ${validatedData.name}`,
      html: `
        <h2>Nová poptávka z webu</h2>
        <p><strong>Jméno:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Firma:</strong> ${validatedData.company || 'Neuvedeno'}</p>
        <p><strong>Telefon:</strong> ${validatedData.phone || 'Neuvedeno'}</p>
        <p><strong>Rozpočet:</strong> ${validatedData.budget || 'Neuvedeno'}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })
    */

    return NextResponse.json({
      success: true,
      message: "Zpráva byla úspěšně odeslána",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Neplatná data formuláře", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Chyba při odesílání zprávy" }, { status: 500 })
  }
}
