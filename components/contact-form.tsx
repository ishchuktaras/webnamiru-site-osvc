"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Neplatná emailová adresa"),
  company: z.string().optional(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
})

type FormData = z.infer<typeof formSchema>

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      let recaptchaToken: string | undefined

      if (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && typeof window !== "undefined" && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
            action: "contact_form",
          })
          console.log("[v0] reCAPTCHA token obtained successfully")
        } catch (error) {
          console.error("[v0] reCAPTCHA error:", error)
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken, // Přidán reCAPTCHA token do requestu
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Chyba při odesílání formuláře")
      }

      toast({
        title: "Zpráva odeslána!",
        description: "Děkujeme za váš zájem. Ozveme se vám do 24 hodin.",
      })

      reset()
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      toast({
        title: "Chyba",
        description: error instanceof Error ? error.message : "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Jméno a příjmení *</Label>
          <Input
            id="name"
            placeholder="Jan Novák"
            {...register("name")}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jan@firma.cz"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Název firmy</Label>
          <Input id="company" placeholder="Moje firma s.r.o." {...register("company")} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" type="tel" placeholder="+420 123 456 789" {...register("phone")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Předpokládaný rozpočet</Label>
        <select
          id="budget"
          {...register("budget")}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Vyberte rozpočet</option>
          <option value="50-100k">50 000 - 100 000 Kč</option>
          <option value="100-200k">100 000 - 200 000 Kč</option>
          <option value="200-500k">200 000 - 500 000 Kč</option>
          <option value="500k+">500 000 Kč+</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Popište váš projekt *</Label>
        <Textarea
          id="message"
          placeholder="Popište, co potřebujete, jaké jsou vaše cíle a co očekáváte od nového webu..."
          rows={6}
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Odesílám...
          </>
        ) : (
          "Odeslat poptávku"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Odesláním formuláře souhlasíte se zpracováním osobních údajů za účelem odpovědi na vaši poptávku.
      </p>
    </form>
  )
}
