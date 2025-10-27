import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Code2, Rocket, Target, Users, Zap, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import { getServices } from "@/lib/sanity.queries"

export const metadata = {
  title: "Služby | webnamiru.site",
  description: "Komplexní služby pro tvorbu webů na míru - od strategického plánování přes vývoj až po podporu.",
}

export const revalidate = 3600 // Revalidate every hour

export default async function ServicesPage() {
  const sanityServices = await getServices()

  // Fallback services if Sanity is not configured
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
    },
  ]

  const services =
    sanityServices.length > 0
      ? sanityServices.map((service: any) => ({
          slug: service.slug.current,
          title: service.title,
          shortDesc: service.shortDescription,
          icon: Target, // Default icon, can be customized based on service type
          features: [], // Will be loaded from Sanity content
          benefits: "",
        }))
      : fallbackServices.map((s) => ({
          slug: s.slug.current,
          title: s.title,
          shortDesc: s.shortDescription,
          icon: s.icon,
          features: s.features,
          benefits: s.benefits,
        }))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">webnamiru.site</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/#sluzby" className="transition-colors hover:text-accent">
              Služby
            </Link>
            <Link href="/#proces" className="transition-colors hover:text-accent">
              Proces
            </Link>
            <Link href="/#portfolio" className="transition-colors hover:text-accent">
              Portfolio
            </Link>
            <Link href="/kontakt" className="transition-colors hover:text-accent">
              Kontakt
            </Link>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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
              Od strategického plánování přes technickou realizaci až po dlouhodobou podporu. Poskytujeme komplexní
              služby, které zajistí úspěch vašeho webového projektu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => {
              const IconComponent = service.icon || Target
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-accent transition-all duration-200 shadow-sm hover:shadow-md flex flex-col"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
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
          </div>
        </div>
      </section>

      {/* Process Overview */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="border-t py-12 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-accent" />
                <span className="font-bold text-lg">webnamiru.site</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategický partner pro tvorbu webů s vysokou hodnotou
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Služby</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {services.slice(0, 4).map((service: any) => (
                  <li key={service.slug}>
                    <Link href={`/sluzby/${service.slug}`} className="hover:text-accent transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Společnost</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#proces" className="hover:text-accent transition-colors">
                    Proces
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="hover:text-accent transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-accent transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:info@webnamiru.site" className="hover:text-accent transition-colors">
                    info@webnamiru.site
                  </a>
                </li>
                <li>
                  <a href="tel:+420777596216" className="hover:text-accent transition-colors">
                    +420 777 596 216
                  </a>
                </li>
                <li>IČO: 23874694</li>
                <li>Taras Ishchuk</li>
                <li>Rantířovská 123/36</li>
                <li>586 01 Jihlava - Horní Kosov</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} webnamiru.site - Taras Ishchuk, OSVČ. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
