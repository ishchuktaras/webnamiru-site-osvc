import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code2,
  Figma,
  MessageSquare,
  GitBranch,
  Database,
  Rocket,
  CheckCircle2,
  Zap,
  Users,
  Calendar,
  FileCode,
  Layout,
  TestTube,
  Shield,
  Eye,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"

export const metadata: Metadata = {
  title: "Jak pracuji | Proces a nástroje | webnamiru.site",
  description:
    "Detailní pohled na můj pracovní proces, nástroje a metodologie. Od prvního kontaktu přes vývoj až po předání projektu.",
}

export const revalidate = 60

const workflowSteps = [
  {
    number: 1,
    title: "Konzultace a analýza",
    description: "Poznáme se, probereme vaše cíle, cílové publikum a specifické požadavky projektu.",
    icon: MessageSquare,
    duration: "1-2 týdny",
    deliverables: ["Projektová dokumentace", "Cenová nabídka", "Časový plán"],
    color: "bg-blue-500",
  },
  {
    number: 2,
    title: "Design a prototypování",
    description: "Vytvořím wireframy a vizuální návrhy. Iterujeme na základě vaší zpětné vazby.",
    icon: Figma,
    duration: "1-2 týdny",
    deliverables: ["Wireframy", "Mockupy", "Design systém"],
    color: "bg-purple-500",
  },
  {
    number: 3,
    title: "Vývoj a implementace",
    description: "Kódování funkčního webu s moderními technologiemi. Pravidelné updates o pokroku.",
    icon: Code2,
    duration: "3-8 týdnů",
    deliverables: ["Funkční web", "CMS setup", "Integrace"],
    color: "bg-green-500",
  },
  {
    number: 4,
    title: "Testování a QA",
    description: "Důkladné testování funkcionality, výkonu a kompatibility napříč zařízeními.",
    icon: TestTube,
    duration: "1 týden",
    deliverables: ["Testovací protokol", "Bug fixes", "Optimalizace"],
    color: "bg-orange-500",
  },
  {
    number: 5,
    title: "Spuštění a školení",
    description: "Nasazení na produkci, školení v používání CMS a předání všech přístupů.",
    icon: Rocket,
    duration: "1 týden",
    deliverables: ["Živý web", "Dokumentace", "Školení"],
    color: "bg-red-500",
  },
]

const tools = [
  {
    category: "Design & UX",
    icon: Layout,
    items: [
      { name: "Figma", description: "UI/UX design a prototypování" },
      { name: "Adobe Creative Suite", description: "Grafika a zpracování obrázků" },
      { name: "Unsplash", description: "Kvalitní stock fotografie" },
    ],
  },
  {
    category: "Vývoj",
    icon: Code2,
    items: [
      { name: "Next.js 15", description: "React framework pro produkční weby" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    ],
  },
  {
    category: "Backend & CMS",
    icon: Database,
    items: [
      { name: "Sanity.io", description: "Headless CMS pro správu obsahu" },
      { name: "PostgreSQL", description: "Relační databáze" },
      { name: "Vercel", description: "Hosting a nasazení" },
    ],
  },
  {
    category: "Verzování & CI/CD",
    icon: GitBranch,
    items: [
      { name: "Git & GitHub", description: "Verzování kódu" },
      { name: "Vercel CI/CD", description: "Automatické nasazení" },
      { name: "GitHub Actions", description: "Automatizace workflow" },
    ],
  },
  {
    category: "Testování & QA",
    icon: TestTube,
    items: [
      { name: "Playwright", description: "E2E testování" },
      { name: "Google PageSpeed", description: "Výkonnostní audit" },
      { name: "BrowserStack", description: "Cross-browser testování" },
    ],
  },
  {
    category: "Monitoring & Analytics",
    icon: Eye,
    items: [
      { name: "Google Analytics", description: "Webová analytika" },
      { name: "Vercel Analytics", description: "Real-time metriky výkonu" },
      { name: "Sentry", description: "Error tracking" },
    ],
  },
]

const principles = [
  {
    icon: Zap,
    title: "Rychlost a výkon",
    description:
      "Optimalizuji každý aspekt webu pro maximální rychlost. Cílím na PageSpeed skóre 85+, rychlé načítání a plynulé animace.",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "Navrhuji s důrazem na uživatele. Intuitivní navigace, přístupnost (WCAG 2.1) a responsivní design na všech zařízeních.",
  },
  {
    icon: Shield,
    title: "Bezpečnost",
    description:
      "Implementuji best practices pro bezpečnost: HTTPS, bezpečné formuláře s reCAPTCHA, GDPR compliance a pravidelné aktualizace.",
  },
  {
    icon: Code2,
    title: "Čistý kód",
    description:
      "Píši čitelný, udržovatelný a dobře dokumentovaný kód. Následuji TypeScript best practices a používám moderní patterns.",
  },
  {
    icon: Calendar,
    title: "Pravidelná komunikace",
    description:
      "Týdenní status updates, přístup k project board a rychlé odpovědi na dotazy. Transparentnost v každé fázi projektu.",
  },
  {
    icon: FileCode,
    title: "Dokumentace",
    description:
      "Poskytuji kompletní dokumentaci: uživatelský manuál pro CMS, technickou dokumentaci kódu a deployment guide.",
  },
]

const collaborationProcess = [
  {
    phase: "Komunikace",
    description: "Email, Slack, nebo videohovory podle vaší preference",
    frequency: "Týdenní updates + ad-hoc",
  },
  {
    phase: "Code Review",
    description: "Sdílím průběžné verze přes preview URL pro vaši zpětnou vazbu",
    frequency: "Po každém milníku",
  },
  {
    phase: "Iterace",
    description: "Rychle implementuji změny a vylepšení na základě vašeho feedbacku",
    frequency: "Průběžně",
  },
  {
    phase: "Reporting",
    description: "Detailní reporty o pokroku, splněných úkolech a dalších krocích",
    frequency: "Týdenní",
  },
]

export default function JakPracujiPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection direction="up">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              <Code2 className="mr-2 h-3 w-3" />
              Proces a metodologie
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Jak pracuji</h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
              Strukturovaný přístup kombinující moderní technologie, agile metodologii a transparentní komunikaci pro
              úspěšnou realizaci vašeho projektu.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                <Link href="/kontakt">
                  Zahájit spolupráci
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#proces">Prozkoumat proces</Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Workflow Steps */}
      <AnimatedSection direction="right">
        <section id="proces" className="border-y bg-muted/30 py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
                Workflow: Od myšlenky k živému webu
              </h2>
              <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
                Pěti-krokový proces pro efektivní a transparentní realizaci projektu
              </p>
            </div>

            <div className="mx-auto max-w-4xl lg:max-w-6xl">
              <div className="relative">
                {/* Connecting line - only visible on desktop */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden lg:block" />

                <div className="space-y-6 md:space-y-8 lg:space-y-12">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`relative flex flex-col lg:flex-row gap-6 lg:gap-8 items-start ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot - desktop only */}
                      <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
                        <div
                          className={`h-14 w-14 xl:h-16 xl:w-16 rounded-full ${step.color} flex items-center justify-center z-10`}
                        >
                          <step.icon className="h-7 w-7 xl:h-8 xl:w-8 text-white" />
                        </div>
                      </div>

                      {/* Content card */}
                      <div className="flex-1 lg:w-1/2 w-full">
                        <Card
                          className={`border-2 hover:shadow-lg transition-all ${
                            index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                          }`}
                        >
                          <CardHeader className="pb-3 md:pb-4">
                            <div className="flex items-start gap-3 mb-2">
                              {/* Mobile icon */}
                              <div
                                className={`lg:hidden h-10 w-10 md:h-12 md:w-12 rounded-full ${step.color} flex items-center justify-center shrink-0`}
                              >
                                <step.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <Badge variant="outline" className="text-xs">
                                    Krok {step.number}
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    {step.duration}
                                  </Badge>
                                </div>
                                <CardTitle className="text-lg md:text-xl leading-tight">{step.title}</CardTitle>
                              </div>
                            </div>
                            <CardDescription className="text-sm md:text-base leading-relaxed">
                              {step.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div>
                              <h4 className="font-semibold text-xs md:text-sm mb-2 md:mb-3">Výstupy:</h4>
                              <ul className="space-y-1.5 md:space-y-2">
                                {step.deliverables.map((deliverable) => (
                                  <li key={deliverable} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm leading-relaxed">{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Spacer for other side - desktop only */}
                      <div className="hidden lg:block flex-1 lg:w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tools & Technologies */}
      <AnimatedSection direction="up">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
                Nástroje a technologie
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Moderní tech stack pro výkonné, škálovatelné a udržovatelné webové aplikace
              </p>
            </div>

            <StaggerContainer className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((category) => (
                <Card key={category.category} className="border-2 hover:border-accent transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* Principles */}
      <AnimatedSection direction="left">
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">Moje principy</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Hodnoty a standardy, které dodržuji v každém projektu
              </p>
            </div>

            <StaggerContainer className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => (
                <Card key={principle.title} className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <principle.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </AnimatedSection>

      {/* Collaboration Process */}
      <AnimatedSection direction="right">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance">
                Spolupráce a komunikace
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-pretty leading-relaxed">
                Jak spolu budeme komunikovat během projektu
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 md:grid-cols-2">
                {collaborationProcess.map((item) => (
                  <Card key={item.phase} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.phase}</CardTitle>
                      <Badge variant="outline">{item.frequency}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-2 border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="h-6 w-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">Dostupnost</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Odpovídám na emaily během pracovních dnů do 24 hodin. Pro urgentní záležitosti během realizace
                        projektu jsem k dispozici i na telefonu.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Email: info@webnamiru.site</Badge>
                        <Badge variant="outline">Po-Pá 9:00-17:00</Badge>
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
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Připraveni začít projekt?</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Domluvme si nezávaznou konzultaci. Probereme váš projekt a najdeme nejlepší řešení pro vaše potřeby.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                  <Link href="/kontakt">
                    Kontaktovat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">Zobrazit portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
