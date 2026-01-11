// app/kontakt/page.tsx

import Link from "next/link"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, ShieldCheck, Zap, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/animations/AnimatedSection"

export const metadata: Metadata = {
  title: "Kontakt | webnamiru.site",
  description: "Kontaktujte nás pro nezávaznou konzultaci ohledně vašeho webového projektu",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-16 md:py-24">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Začněte svůj projekt <span className="text-primary">správně</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mt-4">
              Vyplňte krátký průvodce níže. Pomůže mi to pochopit vaše potřeby ještě předtím, než se poprvé spojíme.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Levý sloupec - Formulář (Širší) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="bg-card border rounded-2xl shadow-lg p-6 md:p-8">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Pravý sloupec - Info a Benefity */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 lg:sticky lg:top-8">
            <AnimatedSection direction="left" delay={0.3}>
              
              {/* Kontaktní údaje */}
              <Card className="border-none shadow-md bg-secondary/30">
                <CardContent className="p-6 space-y-6">
                  <h3 className="font-semibold text-lg mb-4">Rychlý kontakt</h3>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border group-hover:border-primary transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</div>
                      <a href="mailto:info@webnamiru.site" className="font-medium hover:text-primary transition-colors">
                        info@webnamiru.site
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border group-hover:border-primary transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Telefon</div>
                      <a href="tel:+420777596216" className="font-medium hover:text-primary transition-colors">
                        +420 777 596 216
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Sídlo</div>
                      <div className="font-medium text-sm">Jihlava - Horní Kosov</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Proč spolupracovat */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Rychlost doručení</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Díky modernímu stacku (Next.js) doručuji weby rychleji než tradiční agentury.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Odpověď do 24h</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Vážím si vašeho času. Na každou poptávku reaguji nejpozději do druhého dne.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-green-500 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Transparentnost</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Žádné skryté poplatky. Od začátku víte, za co platíte. Jsem OSVČ, neplátce DPH.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fakturační údaje - Minimalizované */}
              <div className="text-xs text-muted-foreground pt-8 border-t">
                <p className="font-semibold mb-1 text-foreground">Fakturační údaje:</p>
                <p>Taras Ishchuk, IČO: 23874694</p>
                <p>Rantířovská 123/36, 586 01 Jihlava</p>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}