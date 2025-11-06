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
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
          "Definujeme SMART cíle projektu a metriky, podle kterých budeme měřit úspěch. Stanovíme klíčové výkonnostní ukazatele (KPI) a očekávané výsledky.",
        deliverables: [
          "Dokument s definovanými cíli projektu",
          "SMART kritéria úspěchu",
          "KPI metriky a způsob jejich měření",
        ],
      },
      {
        title: "Čas a náklady projektu",
        description:
          "Vytvoříme realistický časový harmonogram a rozpočet projektu. Identifikujeme kritické milníky a alokujeme zdroje.",
        deliverables: ["Časový harmonogram projektu", "Rozpočet s rozpisem nákladů", "Identifikace kritických milníků"],
      },
      {
        title: "Zainteresované strany projektu",
        description:
          "Identifikujeme všechny stakeholdery projektu, jejich role, odpovědnosti a očekávání. Vytvoříme komunikační plán.",
        deliverables: ["Mapa zainteresovaných stran", "RACI matice (odpovědnosti)", "Komunikační plán"],
      },
    ],
  },
  {
    phase: "Plánování projektu",
    icon: FileText,
    duration: "2-4 týdny",
    description: "Detailní příprava projektu včetně analýz, designu a dokumentace",
    steps: [
      {
        title: "Příprava rámcového zadání projektu",
        description:
          "Vytvoříme strukturovaný dokument s požadavky, rozsahem a omezeními projektu. Definujeme funkční a nefunkční požadavky.",
        deliverables: ["Rámcové zadání projektu", "Seznam funkčních požadavků", "Seznam nefunkčních požadavků"],
      },
      {
        title: "IT/Business projektová analýza",
        description:
          "Provedeme hloubkovou analýzu trhu, konkurence, cílového publika a customer journey. Analyzujeme technické a netechnické aspekty řešení.",
        deliverables: [
          "Marketingová analýza",
          "Analýza konkurence",
          "Persony cílového publika",
          "Customer journey mapy",
          "Technická analýza",
        ],
      },
      {
        title: "Návrh informační architektury a wireframů",
        description:
          "Navrhneme strukturu webu, navigaci a základní rozvržení stránek. Vytvoříme wireframy klíčových stránek.",
        deliverables: ["Informační architektura (sitemap)", "Wireframy klíčových stránek", "Navigační struktura"],
      },
      {
        title: "Vypracování finální projektové dokumentace",
        description:
          "Připravíme kompletní projektovou dokumentaci včetně plánu projektu, harmonogramu, rozpočtu, designu a technického řešení.",
        deliverables: [
          "Plán projektu",
          "Detailní harmonogram",
          "Finální rozpočet",
          "UI/UX design",
          "Technická specifikace",
        ],
      },
    ],
  },
  {
    phase: "Realizace projektu",
    icon: Code2,
    duration: "4-12 týdnů",
    description: "Vývoj, implementace a testování webového řešení",
    steps: [
      {
        title: "Řízení projektu",
        description:
          "Koordinujeme všechny aktivity projektu, komunikujeme s týmem a stakeholdery, sledujeme pokrok a řešíme problémy.",
        deliverables: ["Pravidelné statusové reporty", "Řízení rizik a změn", "Koordinace týmu"],
      },
      {
        title: "Vývoj a implementace",
        description:
          "Implementujeme design a funkcionality podle specifikace. Používáme moderní technologie (Next.js, Sanity.io) a best practices.",
        deliverables: ["Funkční webové řešení", "Integrované systémy", "Dokumentace kódu"],
      },
      {
        title: "Testování projektu",
        description:
          "Provádíme komplexní testování funkcionality, výkonu, bezpečnosti a kompatibility. Opravujeme nalezené chyby.",
        deliverables: ["Testovací protokoly", "Seznam opravených chyb", "Výkonnostní reporty"],
      },
    ],
  },
  {
    phase: "Post-projektová fáze",
    icon: Rocket,
    duration: "Průběžně",
    description: "Spuštění, údržba a kontinuální zlepšování projektu",
    steps: [
      {
        title: "Spuštění a předání projektu",
        description:
          "Nasadíme web na produkční prostředí, provedeme školení a předáme projekt klientovi. Zajistíme hladký přechod do provozu.",
        deliverables: ["Nasazený web na produkci", "Školení pro správu obsahu", "Uživatelská dokumentace"],
      },
      {
        title: "Údržba a podpora",
        description:
          "Poskytujeme technickou podporu, provádíme aktualizace a řešíme případné problémy. Monitorujeme výkon a bezpečnost.",
        deliverables: ["SLA (Service Level Agreement)", "Pravidelné aktualizace", "Technická podpora"],
      },
      {
        title: "Continuous Discovery",
        description:
          "Pravidelně interagujeme s uživateli, validujeme nápady a experimentujeme s vylepšeními. Neustále zlepšujeme produkt na základě dat.",
        deliverables: [
          "Uživatelský výzkum",
          "A/B testy a experimenty",
          "Analytické reporty",
          "Doporučení pro zlepšení",
        ],
      },
    ],
  },
]

const projectBenefits = [
  {
    icon: ClipboardCheck,
    title: "Strukturovaný přístup",
    description: "Jasně definovaný proces s konkrétními kroky a výstupy v každé fázi projektu.",
  },
  {
    icon: BarChart3,
    title: "Měřitelné výsledky",
    description: "SMART cíle a KPI metriky pro sledování úspěšnosti projektu.",
  },
  {
    icon: Users,
    title: "Transparentní komunikace",
    description: "Pravidelné reporty, statusové schůzky a otevřená komunikace s týmem.",
  },
  {
    icon: TrendingUp,
    title: "Kontinuální zlepšování",
    description: "Neustálé vylepšování produktu na základě dat a zpětné vazby od uživatelů.",
  },
]

const projectMethodologies = [
  {
    name: "SMART cíle",
    description:
      "Specific, Measurable, Achievable, Relevant, Time-bound - Definujeme cíle, které jsou konkrétní, měřitelné, dosažitelné, relevantní a časově ohraničené.",
  },
  {
    name: "MoSCoW prioritizace",
    description:
      "Must have, Should have, Could have, Won't have - Prioritizujeme funkce podle důležitosti pro úspěch projektu.",
  },
  {
    name: "Agile přístup",
    description: "Iterativní vývoj s pravidelnými sprinty, denními stand-upy a průběžným testováním.",
  },
  {
    name: "EVM (Earned Value Management)",
    description: "Sledování pokroku projektu pomocí plánované hodnoty, skutečné hodnoty a získané hodnoty.",
  },
]

export default function ZahajeniProjektuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Životní cyklus projektu
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            Zahájení a realizace webového projektu
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
            Strukturovaný přístup k tvorbě webových projektů s důrazem na strategii, plánování a měřitelné výsledky. Od
            první konzultace po úspěšné spuštění a kontinuální zlepšování.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/kontakt">
                Zahájit projekt
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="#proces">Prozkoumat proces</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Proč strukturovaný přístup?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Profesionální řízení projektu zajišťuje úspěšnou realizaci v termínu a rozpočtu
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projectBenefits.map((benefit) => (
              <Card key={benefit.title} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases Section */}
      <section id="proces" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Fáze životního cyklu projektu
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Každý projekt prochází čtyři hlavními fázemi s konkrétními kroky a výstupy
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-8">
            {projectPhases.map((phase, index) => (
              <Card key={phase.phase} className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <phase.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">Fáze {index + 1}</Badge>
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
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                              {stepIndex + 1}
                            </span>
                            <span className="font-semibold">{step.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-9 space-y-4">
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Výstupy:</h4>
                              <ul className="space-y-2">
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

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Typický časový harmonogram
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Orientační délka trvání jednotlivých fází projektu
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    phase: "Iniciace",
                    duration: "1-2 týdny",
                    description: "Definování cílů a základních parametrů",
                  },
                  {
                    phase: "Plánování",
                    duration: "2-4 týdny",
                    description: "Analýzy, design a dokumentace",
                  },
                  {
                    phase: "Realizace",
                    duration: "4-12 týdnů",
                    description: "Vývoj, testování a implementace",
                  },
                  {
                    phase: "Spuštění",
                    duration: "1 týden",
                    description: "Nasazení a předání projektu",
                  },
                  {
                    phase: "Údržba",
                    duration: "Průběžně",
                    description: "Podpora a kontinuální zlepšování",
                  },
                ].map((item, index) => (
                  <div key={item.phase} className="relative flex items-center gap-4 md:gap-0">
                    {/* Timeline dot */}
                    <div className="absolute left-4 h-3 w-3 md:h-4 md:w-4 rounded-full border-4 border-background bg-accent md:left-1/2 md:-translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-10 w-full md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                      }`}
                    >
                      <Card className="shadow-sm">
                        <CardHeader className="p-4 md:p-6">
                          <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                            <Badge className="text-xs">{item.duration}</Badge>
                          </div>
                          <CardTitle className="text-lg md:text-xl">{item.phase}</CardTitle>
                          <CardDescription className="text-sm md:text-base">{item.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Metodologie a nástroje</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Používáme osvědčené metodologie pro efektivní řízení projektů
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {projectMethodologies.map((methodology) => (
              <Card key={methodology.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{methodology.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{methodology.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Připraveni zahájit váš projekt?</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Domluvme si nezávaznou konzultaci a probereme váš projekt. Připravíme strukturovaný plán s jasným
                harmonogramem a rozpočtem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                  <Link href="/kontakt">
                    Nezávazná konzultace
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Link href="/cenik">Zobrazit ceník</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
