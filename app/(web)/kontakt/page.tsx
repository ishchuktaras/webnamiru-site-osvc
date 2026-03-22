import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Phone, ShieldCheck, Zap, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/animations/AnimatedSection"

export const metadata: Metadata = {
  title: "Kontakt | webnamiru.site",
  description: "Kontaktujte nás pro nezávaznou konzultaci ohledně vašeho webového projektu",
}

export default function ContactPage() {
  return (
    // Používáme specifické tmavé pozadí podle návrhu (navy blue)
    <div className="flex flex-col min-h-screen bg-[#0B142F] text-slate-50">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8 py-20 md:py-32">
        
        {/* Hlavička sekce */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <AnimatedSection direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Začněte svůj projekt
            </h1>
            <p className="text-lg md:text-xl text-slate-400 text-pretty">
              Vyplňte krátký průvodce níže. Pomůže mi to pochopit vaše potřeby 
              ještě předtím, než se poprvé spojíme.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Levý sloupec - Bílý formulář */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up" delay={0.2}>
              {/* Bílý box s formulářem, nucený světlý režim pro kontrast */}
              <div className="bg-white rounded-[24px] shadow-2xl p-6 md:p-10 text-slate-900">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Pravý sloupec - Informace */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
            <AnimatedSection direction="left" delay={0.3}>
              
              {/* Box Rychlý kontakt */}
              <div className="bg-[#475569]/40 backdrop-blur-sm rounded-[24px] p-8 md:p-10 border border-white/5 shadow-lg">
                <h3 className="font-semibold text-xl mb-8 text-white/90">Rychlý kontakt</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 text-[#0B142F]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:info@webnamiru.site" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                        info@webnamiru.site
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5 text-[#0B142F]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Telefon</div>
                      <a href="tel:+420777596216" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                        +420 777 596 216
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <MapPin className="h-5 w-5 text-[#0B142F]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Sídlo</div>
                      <div className="text-lg font-medium text-white/90">Jihlava - Horní Kosov</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefity pod boxem */}
              <div className="space-y-6 pt-10 px-2">
                <div className="flex gap-4">
                  <Zap className="h-6 w-6 text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Rychlost doručení</h4>
                    <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                      Díky modernímu stacku (Next.js) doručuji weby rychleji než tradiční agentury.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Odpověď do 24h</h4>
                    <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                      Vážím si vašeho času. Na každou poptávku reaguji nejpozději do druhého dne.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Transparentnost</h4>
                    <p className="text-sm text-slate-400 mt-1.5 leading-relaxed">
                      Žádné skryté poplatky. Od začátku víte, za co platíte. Jsem OSVČ, neplátce DPH.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fakturační údaje */}
              <div className="mt-10 pt-6 border-t border-slate-700/50 px-2">
                <p className="text-xs font-medium text-slate-500 mb-2">Fakturační údaje:</p>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>Taras Ishchuk, IČO: 23874694</p>
                  <p>Rantířovská 123/36, 586 01 Jihlava</p>
                </div>
              </div>

            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}