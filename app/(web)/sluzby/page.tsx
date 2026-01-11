import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Code2, Rocket, Target, Users, Zap, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import { getServices } from "@/lib/sanity.queries"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.client"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Služby - Komplexní tvorba webů od strategie po realizaci",
  description:
    "Strategické plánování, vývoj na míru s Next.js, UX/UI design, CMS integrace, e-commerce řešení a podpora. Transparentní proces, férové ceny, měřitelné výsledky.",
  keywords: [
    "webové služby",
    "vývoj webu",
    "UX/UI design",
    "e-commerce",
    "CMS integrace",
    "Sanity.io",
    "Next.js vývoj",
    "webová podpora",
  ],
  openGraph: {
    title: "Služby | webnamiru.site - Od strategie po realizaci",
    description: "Kompletní služby pro tvorbu webů na míru - strategické plánování, design, vývoj, podpora.",
    url: "https://webnamiru.site/sluzby",
    type: "website",
    images: [
      {
        url: "/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Webové služby - strategické plánování, design, vývoj",
      },
    ],
  },
  alternates: {
    canonical: "https://webnamiru.site/sluzby",
  },
}

export const revalidate = 60 // Revalidate every minute

export default async function ServicesPage() {
  const sanityServices = await getServices()

  const fallbackServices = [
    {
      slug: { current: "strategicke-planovani-webu" },
      icon: Target,
      title: "Strategické plánování",
      shortDescription: "Definujeme cíle, analyzujeme konkurenci a vytváříme plán pro dosažení měřitelných výsledků.",
      features: [
        "Analýza cílového publika a vytvoření uživatelských person",
        "Konkurenční výzkum a identifikace USP",
        "Stanovení SMART cílů a KPI metrik",
        "Obsahová strategie a informační architektura",
      ],
      benefits:
        "Získáte jasný strategický plán, který zajistí, že váš web bude nástrojem pro dosažení obchodních cílů, ne jen digitální vizitkou.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    },
    {
      slug: { current: "vyvoj-webu-na-miru" },
      icon: Code2,
      title: "Vývoj na míru",
      shortDescription: "Vytváříme weby pomocí Next.js, Tailwind CSS a moderních technologií pro maximální výkon.",
      features: [
        "Next.js 16 s App Router pro maximální výkon",
        "Responzivní design pro všechna zařízení",
        "SEO optimalizace a Core Web Vitals",
        "Progresivní webové aplikace (PWA)",
      ],
      benefits:
        "Váš web bude bleskurychlý, bezpečný a postavený na nejmodernějších technologiích, které zajistí dlouhodobou udržitelnost.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&q=80",
    },
    {
      slug: { current: "ux-ui-design" },
      icon: Users,
      title: "UX/UI Design",
      shortDescription: "Navrhujeme intuitivní rozhraní zaměřená na uživatele a konverze.",
      features: [
        "Uživatelský výzkum a tvorba person",
        "Wireframing a prototypování",
        "Vizuální design a design systémy",
        "A/B testování a optimalizace konverzí",
      ],
      benefits:
        "Design, který nejen skvěle vypadá, ale především vede uživatele k požadované akci a maximalizuje konverze.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
    },
    {
      slug: { current: "cms-integrace" },
      icon: Rocket,
      title: "CMS integrace",
      shortDescription: "Propojení se Sanity.io pro snadnou správu obsahu bez technických znalostí.",
      features: [
        "Sanity Studio - moderní headless CMS",
        "Flexibilní obsahová schémata na míru",
        "Real-time preview změn",
        "Školení týmu pro správu obsahu",
      ],
      benefits: "Budete moci snadno aktualizovat obsah webu bez programátora, ušetříte čas a náklady na údržbu.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    },
    {
      slug: { current: "e-commerce" },
      icon: Zap,
      title: "E-commerce řešení",
      shortDescription: "Kompletní online obchody s platebními branami a správou produktů.",
      features: [
        "Stripe integrace pro platby",
        "Správa produktů a inventáře",
        "Košík a checkout proces",
        "Analytika prodejů a reporty",
      ],
      benefits:
        "Profesionální e-shop, který zvýší vaše online prodeje a poskytne zákazníkům bezproblémový nákupní zážitek.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
    },
    {
      slug: { current: "podpora-udrzba" },
      icon: Shield,
      title: "Podpora & údržba",
      shortDescription: "Kontinuální péče o váš web, aktualizace a technická podpora.",
      features: [
        "24/7 monitoring dostupnosti",
        "Pravidelné bezpečnostní aktualizace",
        "Technická podpora a konzultace",
        "Měsíční reporty výkonnosti",
      ],
      benefits:
        "Váš web bude vždy aktuální, bezpečný a výkonný. Můžete se soustředit na své podnikání, o technologii se postaráme my.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
    },
  ]

  const services =
    sanityServices.length > 0
      ? sanityServices.map((service: any) => ({
          slug: service.slug.current,
          title: service.title,
          shortDesc: service.shortDescription,
          mainImage: service.mainImage,
          priceFrom: service.priceFrom,
          icon: Target,
          features: [],
          benefits: "",
        }))
      : fallbackServices.map((s) => ({
          slug: s.slug.current,
          title: s.title,
          shortDesc: s.shortDescription,
          mainImage: null,
          priceFrom: null,
          icon: s.icon,
          features: s.features,
          benefits: s.benefits,
          image: s.image,
        }))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AnimatedSection direction="up">
        <section className="py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Komplexní služby pro váš úspěch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
                Služby šité na míru vašemu podnikání
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
                Od strategického plánování přes technickou realizaci až po dlouhodobou podporu. Poskytuju komplexní
                služby, které zajistí úspěch vašeho webového projektu.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => {
              const IconComponent = service.icon || Target
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-accent transition-all duration-200 shadow-sm hover:shadow-md flex flex-col overflow-hidden group"
                >
                  {(service.mainImage || service.image) && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={
                          service.mainImage
                            ? urlFor(service.mainImage).width(800).height(600).url()
                            : service.image || "/placeholder.svg?height=600&width=800"
                        }
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                    {service.priceFrom && (
                      <div className="text-sm text-muted-foreground mt-2">
                        <span className="font-semibold text-accent text-lg">
                          od {service.priceFrom.toLocaleString("cs-CZ")} Kč
                        </span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.shortDesc}</p>

                    {service.features && service.features.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Co zahrnuje:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.benefits && (
                      <div className="pt-4 border-t">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong className="text-foreground">Přínos:</strong> {service.benefits}
                        </p>
                      </div>
                    )}

                    <Button
                      asChild
                      variant="outline"
                      className="mt-auto border-2 border-accent text-accent hover:bg-accent/5 bg-transparent"
                    >
                      <Link href={`/sluzby/${service.slug}`}>
                        Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Overview */}
      <AnimatedSection direction="right">
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Jak spolupráce probíhá</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Transparentní proces od první konzultace po úspěšné spuštění
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Zjišťování potřeb",
                  description: "Hloubková analýza vašeho podnikání, cílů a cílového publika.",
                },
                {
                  step: "02",
                  title: "Strategie & Design",
                  description: "Vytvoříme wireframy, uživatelské persony a vizuální design.",
                },
                {
                  step: "03",
                  title: "Vývoj & Testování",
                  description: "Implementace pomocí Next.js a Sanity.io s průběžným testováním.",
                },
                {
                  step: "04",
                  title: "Spuštění & Podpora",
                  description: "Nasazení na Vercel a následná podpora a optimalizace.",
                },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="space-y-4">
                    <div className="text-5xl font-bold text-accent/20">{phase.step}</div>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{phase.description}</p>
                  </div>
                  {index < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection direction="up">
        <section className="py-20 bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-balance">Připraveni začít váš projekt?</h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Domluvme si nezávaznou konzultaci a probereme, jak můžeme pomoci vašemu podnikání růst
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                    <Link href="/kontakt">
                      Kontaktovat nás <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
                  >
                    <Link href="mailto:info@webnamiru.site">info@webnamiru.site</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
