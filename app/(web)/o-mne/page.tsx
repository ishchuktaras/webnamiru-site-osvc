// app/(web)/o-mne/page.tsx

import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, TrendingUp, Award, Languages, ArrowRight, Code2, Layers, Sparkles } from "lucide-react"
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
                  <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
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
        <section className="py-20 bg-secondary/50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection direction="up">
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Proč je moje nabídka unikátní?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nejsem jen kodér. Propojuji strategické byznys myšlení s nejnovějšími technologiemi, abych dodal řešení, které má reálný přínos.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-[#3B82F6]/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-xl font-semibold">Byznys a ROI na prvním místě</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Díky ekonomickému vzdělání a zkušenostem z projektového řízení nenavrhuji jen hezké stránky. Tvořím nástroje optimalizované pro konverze a návratnost investice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#3B82F6]/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                    <Layers className="h-6 w-6 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-xl font-semibold">Moderní Tech Stack bez šablon</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nepoužívám pomalé krabicové systémy. Weby stavím na míru (mobile-first) pomocí frameworku Next.js, což zaručuje extrémní rychlost, bezpečnost a skvělé SEO.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#3B82F6]/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-xl font-semibold">AI Integrace & Automatizace</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aktivně využívám umělou inteligenci a propojuji weby s externími API. To mi umožňuje dodávat pokročilé funkce a zefektivňovat pracovní procesy.
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
                    <div className="h-10 w-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-[#3B82F6]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Vzdělání</h2>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-[#3B82F6]">
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

                    <Card className="border-l-4 border-l-[#3B82F6]">
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

                    <Card className="border-l-4 border-l-[#3B82F6]">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">Web Design & Web Programming</h3>
                            <p className="text-muted-foreground">IT Step Academy Praha</p>
                          </div>
                          <span className="text-sm text-muted-foreground">2021-2022</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Moderní webové technologie • UX/UI Design • Programování
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-[#3B82F6]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Klíčové zkušenosti</h2>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-[#0D1B3E]">
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
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                            Ekonomická analýza
                          </span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">Státní správa</span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">Data & Reporting</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-[#0D1B3E]">
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
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                            Projektové řízení
                          </span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                            Automatizace prodeje
                          </span>
                          <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">SoftServe</span>
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
          <section className="py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                {/* Technical Skills - Takes 2/3 width */}
                <div className="space-y-6 md:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-[#3B82F6]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Tech Stack & Dovednosti</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Next.js (App Router)",
                      "React 19",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                      "PostgreSQL & Prisma",
                      "Sanity.io (Headless CMS)",
                      "AI Integrace (Gemini, Groq)",
                      "Framer Motion",
                      "Vercel & Git",
                      "Linux (Fedora) & Docker",
                      "UI/UX (Krita, Inkscape)"
                    ].map((skill) => (
                      <div key={skill} className="px-4 py-2 bg-background rounded-full border shadow-sm text-sm font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages - Takes 1/3 width, Compact design */}
                <div className="space-y-6 md:col-span-1">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                      <Languages className="h-5 w-5 text-[#3B82F6]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">Jazyky</h2>
                  </div>
                  <Card className="bg-background">
                    <CardContent className="p-0 divide-y">
                      <div className="p-4 flex items-center justify-between">
                        <span className="font-medium">Čeština</span>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">B2</Badge>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="font-medium">Angličtina</span>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">B1</Badge>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="font-medium">Ruština</span>
                        <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-50">C2 (Rodilý)</Badge>
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <span className="font-medium">Ukrajinština</span>
                        <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-50">C2 (Rodilý)</Badge>
                      </div>
                    </CardContent>
                  </Card>
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
                <Card className="border-2 border-[#3B82F6]/20">
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
          <section className="py-20 bg-secondary/50">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
              <Card className="border-2 border-[#3B82F6]/20 bg-gradient-to-br from-[#3B82F6]/5 to-[#0D1B3E]/5">
                <CardContent className="p-12 text-center space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                    Pojďme společně vytvořit něco skvělého
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Máte projekt, který potřebuje strategický přístup a moderní technologie? Rád si s vámi promluvím.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" asChild className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
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