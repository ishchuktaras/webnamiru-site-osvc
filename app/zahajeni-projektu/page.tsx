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

      {/* Acceptance Criteria Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Akceptační kritéria projektu
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Jasně definovaná kritéria pro předání a akceptaci dokončeného díla
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            <Card className="border-2">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  Funkční požadavky
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Všechny dohodnuté stránky jsou vytvořeny a plně funkční</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Kontaktní formulář správně odesílá zprávy a obsahuje spam ochranu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Responsivní design funguje na všech zařízeních (desktop, tablet, mobil)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>CMS je plně funkční, konfigurovatelný a intuitivní</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  Výkonnostní požadavky
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Google PageSpeed Insights skóre minimálně 85/100</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Doba načtení hlavní stránky maximálně 3 sekundy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Web optimalizován pro SEO (meta tagy, strukturovaná data, sitemap)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="bg-accent/5">
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-accent" />
                  Kvalita a dokumentace
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Web je bez kritických chyb a testován ve všech moderních prohlížečích</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Design odpovídá schváleným mockupům a wireframům</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Uživatelská dokumentace pro správu CMS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                    <span>Technická dokumentace pro budoucí údržbu</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Celkové náklady vlastnictví (TCO)
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Transparentní přehled všech nákladů spojených s vlastnictvím webového řešení
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <Card className="border-2 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">Co je TCO?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Total Cost of Ownership (TCO) zahrnuje všechny náklady spojené s vlastnictvím řešení po celou jeho
                      životnost, nejen počáteční pořizovací cenu. Pro profesionální plánování je klíčové znát všechny
                      náklady dopředu.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardHeader className="bg-accent/5">
                  <CardTitle className="text-xl">Počáteční investice</CardTitle>
                  <CardDescription>Jednorázové náklady na vytvoření</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Analýza a plánování</span>
                    <span className="font-semibold">10-15%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Design a UX</span>
                    <span className="font-semibold">20-25%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Vývoj a implementace</span>
                    <span className="font-semibold">50-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Testování a spuštění</span>
                    <span className="font-semibold">5-10%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="bg-accent/5">
                  <CardTitle className="text-xl">Provozní náklady (roční)</CardTitle>
                  <CardDescription>Opakující se náklady na provoz</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Hosting a doména</span>
                    <span className="font-semibold">3-10 tis. Kč</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">CMS licence (Sanity.io)</span>
                    <span className="font-semibold">0-20 tis. Kč</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm">Technická podpora</span>
                    <span className="font-semibold">Volitelně</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Aktualizace a rozvoj</span>
                    <span className="font-semibold">Podle potřeby</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-2 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Důležité upozornění</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Údržba a rozvoj může po několika letech přesáhnout původní pořizovací náklady. Proto je důležité
                      plánovat dlouhodobě a vybírat řešení, která jsou snadno udržovatelná a škálovatelná.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/pro-klienty#dokumenty">Vyžádat TCO kalkulačku</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Change Management Section */}
      <section className="border-y bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
              Řízení změn (Change Management)
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
              Proces pro transparentní řešení změn rozsahu projektu během realizace
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Proč je Change Management důležitý?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Změny v rozsahu projektu jsou normální součástí vývoje. Mohou vzniknout z nových požadavků, změn na
                  trhu nebo zpřesnění původních představ. Change Management zajišťuje, že obě strany rozumí dopadu změn
                  na čas, náklady a kvalitu.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Clock className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Dopad na čas</h4>
                    <p className="text-xs text-muted-foreground">
                      Prodloužení termínu o počet dní nutných pro implementaci
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Dopad na náklady</h4>
                    <p className="text-xs text-muted-foreground">Dodatečné náklady dle hodinové sazby nebo paušálu</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Target className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-semibold text-sm mb-1">Dopad na rozsah</h4>
                    <p className="text-xs text-muted-foreground">Možné odložení jiných funkcionalit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="bg-green-50 dark:bg-green-950">
                  <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-lg">Drobné změny</CardTitle>
                  <CardDescription>Do 10% rozsahu</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Zahrnuty v původní ceně projektu bez dalších poplatků.
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Příklady:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Změna barev nebo typografie</li>
                      <li>• Úprava textů a copywritingu</li>
                      <li>• Drobné layoutové úpravy</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="font-mono text-green-600 border-green-600">
                    Bez příplatku
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="bg-orange-50 dark:bg-orange-950">
                  <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                    <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <CardTitle className="text-lg">Střední změny</CardTitle>
                  <CardDescription>10-30% rozsahu</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">Vyžadují formální Change Request a posouzení dopadu.</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Příklady:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Přidání nové podstránky</li>
                      <li>• Změna funkcionalit</li>
                      <li>• Redesign části webu</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="font-mono text-orange-600 border-orange-600">
                    Hodinová sazba
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="bg-red-50 dark:bg-red-950">
                  <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-lg">Rozsáhlé změny</CardTitle>
                  <CardDescription>Nad 30% rozsahu</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">Vyžadují novou smlouvu nebo dodatek ke smlouvě.</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Příklady:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Změna technologie</li>
                      <li>• Přidání e-shopu</li>
                      <li>• Kompletní redesign</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="font-mono text-red-600 border-red-600">
                    Nová kalkulace
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Proces Change Request</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mb-2">
                      1
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Požadavek</h4>
                    <p className="text-xs text-muted-foreground">Klient podává písemný požadavek na změnu</p>
                  </div>
                  <div>
                    <div className="h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mb-2">
                      2
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Analýza</h4>
                    <p className="text-xs text-muted-foreground">Posouzení dopadu na čas, náklady a rozsah</p>
                  </div>
                  <div>
                    <div className="h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mb-2">
                      3
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Schválení</h4>
                    <p className="text-xs text-muted-foreground">Klient schvaluje nebo zamítá dopad změny</p>
                  </div>
                  <div>
                    <div className="h-8 w-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm mb-2">
                      4
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Implementace</h4>
                    <p className="text-xs text-muted-foreground">Realizace schválené změny</p>
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
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Ochrana důvěrných informací</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Pro projekty s citlivými obchodními informacemi nebo inovativními řešeními doporučujeme před
                    konzultací podepsat NDA (Dohodu o mlčenlivosti). Vaše informace budou chráněny po celou dobu
                    spolupráce i po jejím ukončení.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/nda">Více o NDA</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

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
