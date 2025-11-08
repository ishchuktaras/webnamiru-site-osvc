import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, TrendingUp, Users, Award, Languages, ArrowRight, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"

export const metadata: Metadata = {
  title: "O mně | webnamiru.site",
  description: "Taras Ishchuk - Web Developer s ekonomickým vzděláním a zkušenostmi z řízení rozsáhlých IT projektů",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection direction="up">
          <section className="py-20 md:py-32">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                    Taras Ishchuk
                  </h1>
                  <p className="text-xl text-accent font-medium">Web Developer</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Kombinuju ekonomické vzdělání, zkušenosti s řízením rozsáhlých IT projektů a moderní webové
                    technologie. Tato unikátní kombinace mi umožňuje vytvářet weby, které nejen skvěle vypadají, ale
                    především přinášejí měřitelné obchodní výsledky.
                  </p>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link href="/kontakt">
                      Pojďme spolupracovat <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src="/taras_ishchuk.jpg"
                    alt="Taras Ishchuk - Web Developer"
                    fill
                    className="object-contain bg-muted rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Unique Value Proposition */}
        <section className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection direction="up">
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Proč je moje nabídka unikátní?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nejsem jen programátor. Rozumím byznysu, strategii a tomu, jak technologie mohou skutečně pomoci
                  vašemu podnikání růst.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Ekonomické myšlení</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Magistr státní služby se specializací na ekonomiku. Rozumím ROI, metrikám a tomu, jak měřit úspěch
                    vašeho webu.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Projektové řízení</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Řídil jsem implementaci automatizačního systému prodeje pro 24 oblastí Ukrajiny. Vím, jak
                    koordinovat složité projekty a dodávat výsledky.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Moderní technologie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absolvoval jsem IT Step Academy Praha (Web Design/Web Programming). Používám Next.js, React,
                    TypeScript a další moderní nástroje.
                  </p>
                </CardContent>
              </Card>
            </StaggerContainer>
          </div>
        </section>

        {/* Education & Experience */}
        <AnimatedSection direction="left">
          <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Education */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Vzdělání</h2>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-accent">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">Management zahraničně ekonomické činnosti</h3>
                            <p className="text-muted-foreground">
                              Evropská univerzita financí, managementu a informačních systémů
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground">2000-2008</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Kvalifikace: Manažer-ekonom • Zaměření na mezinárodní obchod
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-accent">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">Magistr státní služby</h3>
                            <p className="text-muted-foreground">
                              Kyjevská národní ekonomická univerzita Vadyma Hetmana
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground">2010-2012</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Specializace: Ekonomika • Zaměření na státní správu a ekonomickou politiku
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-accent">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">Web Design & Web Programming</h3>
                            <p className="text-muted-foreground">IT Step Academy Praha</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2021-2022</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Moderní webové technologie • Next.js, React, TypeScript • UX/UI Design
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Klíčové zkušenosti</h2>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">Ekonom (státní úředník)</h3>
                            <p className="text-muted-foreground">Hlavní správa statistiky, Žytomyrská oblast</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2008-2012</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Analýza ekonomických dat, statistické výzkumy, reporting. Později specialista informační
                          bezpečnosti s přístupem ke státnímu tajemství III. stupně.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            Ekonomická analýza
                          </span>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Státní správa</span>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Data & Reporting</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">Specialista IT projektů</h3>
                            <p className="text-muted-foreground">TMG Kyjev</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2012-2015</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                          Řídil implementaci automatizačního systému prodeje <strong>"Sales Works"</strong> od{" "}
                          <strong>SoftServe</strong> v síti distributorů ve <strong>24 oblastech Ukrajiny</strong> a AR
                          Krym. Koordinace týmů, školení uživatelů, analýza dat a optimalizace procesů.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            Projektové řízení
                          </span>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            Automatizace prodeje
                          </span>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">SoftServe</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Skills & Languages */}
        <AnimatedSection direction="right">
          <section className="py-20 bg-secondary">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Technické dovednosti</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Next.js 16",
                      "React 19",
                      "TypeScript",
                      "Tailwind CSS",
                      "Sanity.io",
                      "Prisma",
                      "Node.js",
                      "Git & GitHub",
                      "Vercel",
                      "Figma",
                      "SEO",
                      "Web Analytics",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 p-3 bg-background rounded-lg border">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Languages className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Jazykové dovednosti</h2>
                  </div>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Čeština</h3>
                          <p className="text-sm text-muted-foreground">Střední pokročilý</p>
                        </div>
                        <span className="text-sm font-medium text-accent">B2</span>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Angličtina</h3>
                          <p className="text-sm text-muted-foreground">Střední</p>
                        </div>
                        <span className="text-sm font-medium text-accent">B1</span>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Ruština</h3>
                          <p className="text-sm text-muted-foreground">Rodilý mluvčí</p>
                        </div>
                        <span className="text-sm font-medium text-accent">C2</span>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Ukrajinština</h3>
                          <p className="text-sm text-muted-foreground">Rodilý mluvčí</p>
                        </div>
                        <span className="text-sm font-medium text-accent">C2</span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Philosophy */}
        <AnimatedSection>
          <section className="py-20">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-balance">Moje filozofie</h2>
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8 space-y-6">
                    <p className="text-lg leading-relaxed">
                      Věřím, že nejlepší weby vznikají na průsečíku <strong>strategie</strong>, <strong>designu</strong>{" "}
                      a <strong>technologie</strong>. Není to jen o kódu – je to o pochopení vašeho byznysu, vašich
                      zákazníků a vašich cílů.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Moje zkušenosti s řízením rozsáhlých IT projektů mě naučily, že úspěch není jen o technickém
                      řešení, ale o <strong>komunikaci</strong>, <strong>plánování</strong> a{" "}
                      <strong>měřitelných výsledcích</strong>.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Proto nabízím něco víc než jen programování – nabízím <strong>strategické partnerství</strong>,
                      kde společně vytvoříme web, který skutečně pomůže vašemu podnikání růst.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="py-20 bg-secondary">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
                <CardContent className="p-12 text-center space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                    Pojďme společně vytvořit něco skvělého
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Máte projekt, který potřebuje strategický přístup a moderní technologie? Rád si s vámi promluvím.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                      <Link href="/kontakt">
                        Nezávazná konzultace <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-2 bg-transparent">
                      <Link href="/portfolio">Zobrazit portfolio</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  )
}
