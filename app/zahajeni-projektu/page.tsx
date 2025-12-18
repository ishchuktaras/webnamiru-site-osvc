// app/zahajeni-projektu/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  FileText,
  BarChart3,
  Code2,
  Rocket,
  TrendingUp,
  ClipboardCheck,
  AlertCircle,
  Clock,
  XCircle,
  Lock,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TCOCalculator } from "@/components/TCOCalculator"

export const metadata: Metadata = {
  title: "Zahájení projektu | Životní cyklus webového projektu | webnamiru.site",
  description:
    "Kompletní průvodce zahájením a realizací webového projektu. Od iniciace přes plánování až po spuštění a údržbu. Transparentní proces s měřitelnými výsledky.",
}

export const revalidate = 60

const projectPhases = [
  {
    phase: "Iniciace projektu",
    icon: Target,
    duration: "1-2 týdny",
    description: "Definování cílů, rozsahu a základních parametrů projektu",
    steps: [
      {
        title: "Cíl projektu a kritéria úspěchu",
        description:
          "Definujeme SMART cíle projektu a metriky, podle kterých budeme měřit úspěch. Stanovíme klíčové výkonnostní ukazatele (KPI).",
        deliverables: [
          "Dokument s definovanými cíli projektu",
          "SMART kritéria úspěchu",
          "KPI metriky a způsob jejich měření",
        ],
      },
      {
        title: "Čas a náklady projektu",
        description:
          "Vytvoříme realistický časový harmonogram a rozpočet projektu. Identifikujeme kritické milníky.",
        deliverables: ["Časový harmonogram projektu", "Rozpočet s rozpisem nákladů", "Identifikace kritických milníků"],
      },
      {
        title: "Zainteresované strany projektu",
        description:
          "Identifikujeme role a odpovědnosti (RACI). Vytvoříme komunikační plán.",
        deliverables: ["Mapa zainteresovaných stran", "RACI matice (odpovědnosti)", "Komunikační plán"],
      },
    ],
  },
  {
    phase: "Plánování a analýza",
    icon: FileText,
    duration: "2-4 týdny",
    description: "Detailní příprava projektu včetně analýz, designu a dokumentace",
    steps: [
      {
        title: "IT/Business projektová analýza",
        description:
          "Hloubková analýza trhu, konkurence a cílového publika. Analyzujeme technické aspekty řešení.",
        deliverables: [
          "Analýza konkurence",
          "Persony a User Journey mapy",
          "Technická specifikace",
        ],
      },
      {
        title: "Návrh architektury a wireframů",
        description:
          "Navrhneme strukturu webu a základní rozvržení stránek (UX).",
        deliverables: ["Informační architektura (sitemap)", "Wireframy klíčových stránek"],
      },
    ],
  },
  {
    phase: "Realizace",
    icon: Code2,
    duration: "4-12 týdnů",
    description: "Vývoj, implementace a testování webového řešení",
    steps: [
      {
        title: "Vývoj a implementace",
        description:
          "Implementujeme design a funkcionality pomocí moderních technologií jako Next.js a Sanity.io.",
        deliverables: ["Funkční webové řešení", "Dokumentace kódu"],
      },
      {
        title: "Testování projektu",
        description:
          "Komplexní testování funkcionality, výkonu (Lighthouse) a bezpečnosti.",
        deliverables: ["Testovací protokoly", "Výkonnostní reporty"],
      },
    ],
  },
  {
    phase: "Spuštění a podpora",
    icon: Rocket,
    duration: "Průběžně",
    description: "Nazazení na produkci a kontinuální rozvoj",
    steps: [
      {
        title: "Spuštění a předání",
        description:
          "Nasadíme web na Vercel, provedeme školení a předáme projekt klientovi.",
        deliverables: ["Nasazený web na produkci", "Školení pro správu obsahu"],
      },
      {
        title: "Údržba a Continuous Discovery",
        description:
          "Technická podpora, monitoring a neustálé zlepšování na základě reálných dat.",
        deliverables: ["SLA podpora", "Analytické reporty", "Doporučení pro rozvoj"],
      },
    ],
  },
]

const projectBenefits = [
  {
    icon: ClipboardCheck,
    title: "Strukturovaný přístup",
    description: "Jasně definovaný proces s konkrétními kroky a výstupy v každé fázi.",
  },
  {
    icon: BarChart3,
    title: "Měřitelné výsledky",
    description: "SMART cíle a KPI metriky pro sledování úspěšnosti vaší investice.",
  },
  {
    icon: Users,
    title: "Transparentnost",
    description: "Víte přesně, co se v každou chvíli děje a co za své peníze dostáváte.",
  },
  {
    icon: TrendingUp,
    title: "Dlouhodobý rozvoj",
    description: "Web není hotový spuštěním. Pomáháme s jeho dalším růstem.",
  },
]

export default function ZahajeniProjektuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Metodika a proces
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            Jak probíhá tvorba webu na míru
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
            Strukturovaný proces zajišťuje, že se vaše investice promění ve funkční digitální nástroj. 
            Od první konzultace až po dlouhodobou technickou správu.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/kontakt">
                Nezávazně konzultovat
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="#proces">Zobrazit fáze projektu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Proč stavíme na pevných základech?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Profesionální metodika minimalizuje rizika a maximalizuje návratnost projektu.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projectBenefits.map((benefit) => (
              <Card key={benefit.title} className="border-2 hover:border-accent transition-colors shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases Section */}
      <section id="proces" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Životní cyklus vašeho webu
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Průvodce procesem, který promění vaši vizi ve skutečnost.
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-8">
            {projectPhases.map((phase, index) => (
              <Card key={phase.phase} className="border-2 shadow-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <phase.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">Krok {index + 1}</Badge>
                        <Badge variant="secondary">{phase.duration}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{phase.phase}</CardTitle>
                      <CardDescription className="text-base">{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {phase.steps.map((step, stepIndex) => (
                      <AccordionItem key={stepIndex} value={`step-${index}-${stepIndex}`}>
                        <AccordionTrigger className="text-left py-4 hover:no-underline">
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">
                              {stepIndex + 1}
                            </span>
                            <span className="font-semibold">{step.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-9 space-y-4 pb-4">
                            <p className="text-muted-foreground leading-relaxed italic">{step.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2 text-xs uppercase tracking-wider text-accent">Klíčové výstupy:</h4>
                              <ul className="space-y-1.5 font-medium">
                                {step.deliverables.map((deliverable) => (
                                  <li key={deliverable} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                                    <span className="text-sm">{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance Criteria Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Kdy je projekt považován za hotový?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Jasná akceptační kritéria pro hladké předání a vaši stoprocentní spokojenost.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
            <Card className="border-2 shadow-sm">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Funkčnost
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span>•</span> Všechny stránky jsou plně funkční</li>
                  <li className="flex gap-2"><span>•</span> Formuláře odesílají data</li>
                  <li className="flex gap-2"><span>•</span> Web je responsivní na mobilu i tabletu</li>
                  <li className="flex gap-2"><span>•</span> Správa obsahu (CMS) je intuitivní</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Výkon a SEO
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span>•</span> Skóre Lighthouse nad 85/100</li>
                  <li className="flex gap-2"><span>•</span> Rychlé načítání do 3 sekund</li>
                  <li className="flex gap-2"><span>•</span> Nastavené meta tagy a sitemapa</li>
                  <li className="flex gap-2"><span>•</span> SSL certifikát a zabezpečení</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-sm">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <FileText className="h-5 w-5 text-accent" />
                  Dokumentace
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span>•</span> Předané přístupy k hostingu/doméně</li>
                  <li className="flex gap-2"><span>•</span> Video-návod pro správu webu</li>
                  <li className="flex gap-2"><span>•</span> Předání autorských práv ke kódu</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TCO Calculator Section - CÍL KOTVY */}
      <section id="tco-section" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Kolik web skutečně stojí v čase?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Transparentnost je u mě na prvním místě. Pomocí kalkulačky si můžete nasimulovat 
              <strong> Total Cost of Ownership (TCO)</strong> – tedy celkové náklady na vlastnictví webu v horizontu 3 let.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <TCOCalculator />
            </div>

            <Card className="border-2 border-dashed bg-muted/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <h3 className="font-semibold mb-2">Proč počítat TCO?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Počáteční investice do vývoje je jen špička ledovce. Profesionální přístup zahrnuje i plánování nákladů na 
                      bezpečný hosting, správu domén, technické aktualizace a průběžný marketingový rozvoj. 
                      U mě víte o všech nákladech dopředu.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="mb-8 mx-auto max-w-4xl border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Lock className="h-12 w-12 text-accent shrink-0" />
                <div className="text-center md:text-left">
                  <h3 className="font-semibold mb-2 text-xl">Bezpečnost vašich nápadů</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Máte inovativní byznys model nebo citlivá data? Před začátkem analýzy můžeme podepsat 
                    <strong> NDA (Dohodu o mlčenlivosti)</strong>. Vaše know-how zůstane v bezpečí.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/nda">Přečíst si o ochraně dat</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Rocket className="h-32 w-32 rotate-12" />
             </div>
            <CardContent className="p-12 text-center space-y-6 relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance tracking-tight">Vytvořme web, který vám vydělává</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Nezůstávejte u průměru. Domluvme si nezávaznou konzultaci a probereme, jak váš projekt nastartovat správným směrem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                  <Link href="/kontakt">
                    Domluvit konzultaci
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent shadow-sm"
                >
                  <Link href="/cenik">Předběžný ceník</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}