"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  FileCheck,
  AlertCircle,
  TrendingUp,
  Users,
  Clock,
  Scale,
  CheckCircle2,
  XCircle,
  ArrowRight,
  FileText,
  Lock,
  Handshake,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"

export const revalidate = 60

const protectionPoints = [
  {
    icon: FileCheck,
    title: "Jasná dokumentace",
    description:
      "Každý projekt začíná detailní smlouvou o dílo s přesnými akceptačními kritérii, harmonogramem a rozpočtem. Víte přesně, co dostanete a kdy.",
    color: "text-blue-500",
  },
  {
    icon: Scale,
    title: "Právní ochrana",
    description:
      "Smlouvy vytvořené podle českého práva s jasným vymezením odpovědnosti, autorských práv a mechanismů řešení sporů.",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Garance kvality",
    description:
      "Testování, code review a akceptační procedura zajišťují, že projekt splňuje všechny dohodnuté parametry před předáním.",
    color: "text-green-500",
  },
  {
    icon: Clock,
    title: "Řízení změn",
    description:
      "Transparentní proces pro všechny změny nad rámec původního rozsahu. Žádné skryté poplatky ani nepříjemná překvapení.",
    color: "text-orange-500",
  },
]

const responsibilityMatrix = [
  {
    aspect: "Vývoj a kód",
    client: ["Poskytnutí požadavků", "Schválení designu", "Poskytnutí obsahu a materiálů"],
    provider: ["Implementace funkcionalit", "Testování a QA", "Technická dokumentace"],
  },
  {
    aspect: "Obsah a média",
    client: ["Dodání textů a obrázků", "Kontrola obsahu", "Schválení finální verze"],
    provider: ["Optimalizace médií", "SEO optimalizace textů", "Strukturování obsahu"],
  },
  {
    aspect: "Hosting a doména",
    client: ["Vlastnictví domény", "Volba hosting plánu", "Platba za hosting"],
    provider: ["Nastavení hostingu", "Konfigurace DNS", "Monitoring výkonu"],
  },
  {
    aspect: "Údržba po spuštění",
    client: ["Správa obsahu", "Reportování chyb", "Požadavky na změny"],
    provider: ["Technická podpora", "Bezpečnostní aktualizace", "Zálohování dat"],
  },
]

const changeManagementTiers = [
  {
    tier: "Drobné úpravy (do 10%)",
    description: "Zahrnuty v původní ceně projektu",
    examples: ["Změna barev nebo fontů", "Úprava textů", "Drobné layoutové změny"],
    cost: "Bez příplatku",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    tier: "Střední změny (10-30%)",
    description: "Vyžadují formální požadavek na změnu",
    examples: ["Přidání nové podstránky", "Změna funkcionalit", "Redesign sekce"],
    cost: "Hodinová sazba + odhad času",
    icon: AlertCircle,
    color: "text-orange-500",
  },
  {
    tier: "Rozsáhlé změny (nad 30%)",
    description: "Vyžadují novou smlouvu nebo dodatek",
    examples: ["Změna technologie", "Přidání e-shopu", "Kompletní redesign"],
    cost: "Nová cenová kalkulace",
    icon: XCircle,
    color: "text-red-500",
  },
]

const transparencyPrinciples = [
  {
    title: "Pravidelná komunikace",
    description:
      "Týdenní statusové reporty, pravidelné schůzky a přístup k nástrojům pro sledování pokroku v reálném čase.",
  },
  {
    title: "Předvídatelné náklady",
    description:
      "Jasně stanovená cena za projekt nebo transparentní hodinová sazba. Žádné skryté poplatky. Každou investici předem schvalujete.",
  },
  {
    title: "Vlastnictví kódu",
    description:
      "Po dokončení a zaplacení projektu získáváte plné vlastnictví zdrojového kódu, designu a všech vytvořených materiálů.",
  },
  {
    title: "Zpětná vazba",
    description:
      "Iterativní přístup s pravidelnými ukázkami rozpracované práce. Vaše připomínky zapracováváme průběžně.",
  },
]

export default function ProKlientyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection direction="up">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              <Shield className="mr-2 h-3 w-3" />
              Transparentnost a důvěra
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Pro klienty</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
              Spolupráce postavená na jasných procesech, férovosti a oboustranné ochraně. Získejte jistotu, že váš projekt
              bude dodán včas, v dohodnuté kvalitě a za jasně stanovenou cenu.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                <Link href="/kontakt">
                  Zahájit projekt
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#dokumenty">Vzory dokumentů</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Protection Points */}
      <AnimatedSection direction="right">
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
                Jak chráníme vaše zájmy
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Vytvořili jsme systém procesů, které zajišťují bezproblémový průběh od první schůzky až po spuštění.
              </p>
            </div>

            <StaggerContainer className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {protectionPoints.map((point) => (
                <Card key={point.title} className="border-2 hover:border-accent transition-colors shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <div
                      className={`h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center ${point.color}`}
                    >
                      <point.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* Responsibility Matrix */}
      <AnimatedSection direction="up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Matice odpovědností</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Jasně vymezené role zajišťují, že nikdo netápe a projekt se hýbe kupředu.
              </p>
            </div>

            <div className="mx-auto max-w-6xl space-y-6">
              {responsibilityMatrix.map((item) => (
                <Card key={item.aspect} className="border-2 overflow-hidden shadow-sm">
                  <CardHeader className="bg-muted/50 border-b">
                    <CardTitle className="text-xl">{item.aspect}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="h-5 w-5 text-blue-500" />
                          <h4 className="font-semibold text-blue-700 uppercase tracking-wider text-xs">Odpovědnost klienta</h4>
                        </div>
                        <ul className="space-y-3">
                          {item.client.map((responsibility) => (
                            <li key={responsibility} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                              <span className="text-sm leading-tight">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Shield className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold text-accent uppercase tracking-wider text-xs">Odpovědnost dodavatele</h4>
                        </div>
                        <ul className="space-y-3">
                          {item.provider.map((responsibility) => (
                            <li key={responsibility} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                              <span className="text-sm leading-tight">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Change Management */}
      <AnimatedSection direction="left">
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
                Řízení změn
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Transparentní způsob, jakým řešíme situace, kdy se v průběhu projektu rozhodnete pro změnu zadání.
              </p>
            </div>

            <StaggerContainer className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {changeManagementTiers.map((tier) => (
                <Card key={tier.tier} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1 bg-background">
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 ${tier.color}`}
                    >
                      <tier.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{tier.tier}</CardTitle>
                    <CardDescription className="text-xs">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-xs mb-2 uppercase tracking-wide text-muted-foreground">Příklady:</h4>
                      <ul className="space-y-1">
                        {tier.examples.map((example) => (
                          <li key={example} className="text-sm text-muted-foreground">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <Badge variant="secondary" className="font-medium text-[10px] uppercase">
                        {tier.cost}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>

            <Card className="mt-12 mx-auto max-w-3xl border-2 border-accent/20 bg-accent/5">
              <CardContent className="p-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Proč je proces změn důležitý?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Změny jsou přirozenou součástí vývoje. Tento proces zajišťuje, že obě strany vždy vědí, jaký má změna dopad na rozpočet a termín dokončení. Předcházíme tak nedorozuměním při předávání díla.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Transparency Principles */}
      <AnimatedSection direction="right">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
                Naše principy
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Základní pilíře, na kterých stavíme každý vztah s klientem.
              </p>
            </div>

            <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {transparencyPrinciples.map((principle) => (
                <Card key={principle.title} className="border-2 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* Documents Section */}
      <AnimatedSection direction="up">
        <section id="dokumenty" className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Dokumentace a plánování</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Přístup k transparentním vzorům a nástrojům pro lepší přehled o vašem projektu.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Card className="border-2 hover:border-accent transition-colors shadow-sm bg-background">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg tracking-tight">Smlouva o dílo</CardTitle>
                  <CardDescription className="text-xs">Vzorová smlouva s jasnými termíny a pravidly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="/api/download-document?doc=smlouva" download>
                      Stáhnout vzor smlouvy
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors shadow-sm bg-background">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg tracking-tight">Plánování nákladů</CardTitle>
                  <CardDescription className="text-xs">Pomůžeme vám pochopit reálnou investici do webu v čase.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/zahajeni-projektu#naklady">Jak počítáme cenu</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors shadow-sm bg-background">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg tracking-tight">Ochrana nápadu (NDA)</CardTitle>
                  <CardDescription className="text-xs">Dohoda o mlčenlivosti pro ochranu vašeho know-how.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/nda">Více o NDA</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors shadow-sm bg-background">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg tracking-tight">Technické partnerství</CardTitle>
                  <CardDescription className="text-xs">Pomoc s výběrem technologie a strategií projektu.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/o-mne">Moje expertíza</Link>
                  </Button>
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
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Máte dotazy k procesu?</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Rád zodpovím jakékoliv otázky ohledně procesů, smluv nebo technologií. Domluvme si nezávaznou konzultaci.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                  <Link href="/kontakt">
                    Domluvit schůzku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/zahajeni-projektu">Jak začít projekt</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}