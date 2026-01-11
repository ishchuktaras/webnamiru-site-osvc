import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Lock,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Scale,
  Eye,
  FileText,
  ArrowRight,
  Download,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"

export const metadata: Metadata = {
  title: "NDA - Ochrana důvěrných informací | webnamiru.site",
  description:
    "Dohoda o mlčenlivosti (NDA) chrání důvěrné informace obou stran před neoprávněným sdílením. Budujeme důvěru a zajišťujeme právní ochranu pro bezpečnou spolupráci.",
}

export const revalidate = 60

const protectedInformation = [
  {
    icon: FileText,
    title: "Obchodní tajemství",
    description: "Business model, cenové strategie, plány rozvoje, interní procesy a know-how",
    color: "text-blue-500",
  },
  {
    icon: Lock,
    title: "Technické informace",
    description: "Zdrojový kód, API klíče, přístupové údaje, databázové struktury, proprietární řešení",
    color: "text-purple-500",
  },
  {
    icon: Eye,
    title: "Osobní údaje",
    description: "Údaje zákazníků, obchodních partnerů a zaměstnanců v souladu s GDPR",
    color: "text-green-500",
  },
  {
    icon: Scale,
    title: "Nevydané produkty",
    description: "Inovace, nové funkce, redesigny a marketingové strategie před oficiálním spuštěním",
    color: "text-orange-500",
  },
]

const ndaBenefits = [
  {
    title: "Pro klienta",
    benefits: [
      "Ochrana obchodního tajemství a inovací",
      "Prevence úniku citlivých dat konkurenci",
      "Právní nástroj pro vymáhání škody při porušení",
      "Důvěra při sdílení citlivých informací",
    ],
  },
  {
    title: "Pro dodavatele (webnamiru.site)",
    benefits: [
      "Ochrana proprietárních technických řešení",
      "Prevence krádež kódu a procesů",
      "Možnost bezpečně sdílet osvědčené postupy",
      "Právní záštita při budoucích sporech",
    ],
  },
]

const ndaTerms = [
  {
    icon: Clock,
    title: "Doba trvání",
    description: "Typicky 2-5 let od ukončení projektu nebo dle dohody",
  },
  {
    icon: Shield,
    title: "Rozsah ochrany",
    description: "Veškeré důvěrné informace sdílené během spolupráce",
  },
  {
    icon: Scale,
    title: "Právní základ",
    description: "V souladu s českým právem a GDPR",
  },
  {
    icon: AlertTriangle,
    title: "Sankce",
    description: "Smluvní pokuta a náhrada škody při porušení",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Vyžádání NDA",
    description: "Klient nebo dodavatel požaduje podepsání NDA před sdílením citlivých informací",
  },
  {
    step: 2,
    title: "Přezkoumání podmínek",
    description: "Obě strany si projdou dokument a ujistí se o srozumitelnosti všech podmínek",
  },
  {
    step: 3,
    title: "Podpis",
    description: "Oboustranné podepsání NDA v elektronické nebo fyzické formě",
  },
  {
    step: 4,
    title: "Ochrana aktivní",
    description: "Od okamžiku podpisu jsou důvěrné informace právně chráněny",
  },
]

export default function NDAPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection direction="up">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              <Lock className="mr-2 h-3 w-3" />
              Ochrana důvěrných informací
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
              Dohoda o mlčenlivosti (NDA)
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
              Budujeme důvěru prostřednictvím právní ochrany. NDA zajišťuje, že vaše obchodní tajemství, technické
              informace a inovace zůstanou důvěrné během celé spolupráce i po jejím ukončení.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                <Link href="/kontakt">
                  Vyžádat NDA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <a href="/api/download-document?doc=nda" download>
                  <Download className="mr-2 h-4 w-4" />
                  Stáhnout vzor NDA
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What is Protected */}
      <AnimatedSection direction="right">
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Co NDA chrání?</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Kategorie informací chráněných dohodou o mlčenlivosti
              </p>
            </div>

            <StaggerContainer className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {protectedInformation.map((item) => (
                <Card key={item.title} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className={`h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection direction="left">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
                Výhody NDA pro obě strany
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Oboustranná ochrana buduje důvěru a umožňuje otevřenou spolupráci
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {ndaBenefits.map((side) => (
                <Card key={side.title} className="border-2">
                  <CardHeader className="bg-accent/5">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      {side.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {side.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Key Terms */}
      <AnimatedSection direction="up">
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Klíčové podmínky NDA</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Základní parametry dohody o mlčenlivosti
              </p>
            </div>

            <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ndaTerms.map((term) => (
                <Card key={term.title} className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <term.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{term.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{term.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection direction="right">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Proces NDA</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Jak probíhá podepsání dohody o mlčenlivosti
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />

                <div className="space-y-8">
                  {processSteps.map((item, index) => (
                    <div key={item.step} className="relative flex gap-6 items-start">
                      <div className="h-16 w-16 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shrink-0 z-10 shadow-lg">
                        {item.step}
                      </div>
                      <Card className="flex-1 border-2">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why NDA */}
      <AnimatedSection direction="up">
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="border-2 border-accent/20 bg-accent/5">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="flex items-start gap-4">
                    <FileCheck className="h-8 w-8 text-accent shrink-0 mt-1" />
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-balance">Proč je NDA důležitá?</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        V digitálním světě jsou informace nejcennějším aktivem. Únik obchodního modelu, technického
                        řešení nebo marketingové strategie může znamenat ztrátu konkurenční výhody v hodnotě statisíců
                        až milionů korun.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        NDA vytváří právní rámec, který oběma stranám umožňuje otevřeně sdílet citlivé informace
                        potřebné pro úspěšnou realizaci projektu, aniž by musely riskovat jejich zneužití.
                      </p>
                      <div className="pt-4 space-y-3">
                        <h3 className="font-semibold text-lg">Kdy NDA požadujeme:</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                            <span>Projekty s inovativním business modelem nebo unique selling proposition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                            <span>Přístup k citlivým obchodním nebo finančním datům</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                            <span>Vývoj proprietárních technických řešení</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                            <span>Projekty před oficiálním spuštěním (pre-launch)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Máte projekt, který vyžaduje NDA?</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Kontaktujte nás a domluvíme si podepsání dohody o mlčenlivosti před zahájením konzultace. Vaše informace
                budou v bezpečí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                  <Link href="/kontakt">
                    Vyžádat NDA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a href="/api/download-document?doc=nda" download>
                    <Download className="mr-2 h-4 w-4" />
                    Stáhnout vzor
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
