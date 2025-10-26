import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Code2, Rocket, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">webnamiru.site</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#sluzby" className="transition-colors hover:text-primary">
              Služby
            </Link>
            <Link href="#proces" className="transition-colors hover:text-primary">
              Proces
            </Link>
            <Link href="#portfolio" className="transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="#kontakt" className="transition-colors hover:text-primary">
              Kontakt
            </Link>
          </nav>
          <Button asChild>
            <Link href="#kontakt">Nezávazná poptávka</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                  <Rocket className="mr-2 h-4 w-4" />
                  Strategický přístup k webovému vývoji
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Weby, které <span className="text-primary">přinášejí výsledky</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Vytváříme webové stránky na míru, které nejen skvěle vypadají, ale především pomáhají vašemu podnikání
                růst. Od strategie přes design až po měřitelné výsledky.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#kontakt">
                    Začít projekt <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#sluzby">Zjistit více</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Spokojenost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Next.js</div>
                  <div className="text-sm text-muted-foreground">Moderní technologie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">ROI</div>
                  <div className="text-sm text-muted-foreground">Měřitelné výsledky</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl" />
              <Image
                src="/modern-web-development-workspace-with-laptop-showi.jpg"
                alt="Moderní webový vývoj"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Komplexní služby pro váš úspěch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Od strategického plánování až po technickou realizaci a následnou podporu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Strategické plánování",
                description:
                  "Definujeme cíle, analyzujeme konkurenci a vytváříme plán pro dosažení měřitelných výsledků.",
                features: ["Analýza cílového publika", "Konkurenční výzkum", "SMART cíle"],
              },
              {
                icon: Code2,
                title: "Vývoj na míru",
                description: "Vytváříme weby pomocí Next.js, Tailwind CSS a moderních technologií pro maximální výkon.",
                features: ["Next.js 16", "Responzivní design", "SEO optimalizace"],
              },
              {
                icon: Users,
                title: "UX/UI Design",
                description: "Navrhujeme intuitivní rozhraní zaměřená na uživatele a konverze.",
                features: ["Uživatelské persony", "Wireframing", "Prototypování"],
              },
              {
                icon: Rocket,
                title: "CMS integrace",
                description: "Propojení se Sanity.io pro snadnou správu obsahu bez technických znalostí.",
                features: ["Sanity Studio", "Flexibilní schémata", "Real-time preview"],
              },
              {
                icon: CheckCircle2,
                title: "E-commerce řešení",
                description: "Kompletní online obchody s platebními branami a správou produktů.",
                features: ["Stripe integrace", "Správa objednávek", "Analytika prodejů"],
              },
              {
                icon: Target,
                title: "Podpora & údržba",
                description: "Kontinuální péče o váš web, aktualizace a technická podpora.",
                features: ["Monitoring", "Aktualizace", "Technická podpora"],
              },
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Jak spolupráce probíhá</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transparentní proces od první konzultace po úspěšné spuštění
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Zjišťování potřeb",
                description:
                  "Hloubková analýza vašeho podnikání, cílů a cílového publika. Definujeme SMART cíle a metriky úspěchu.",
              },
              {
                step: "02",
                title: "Strategie & Design",
                description:
                  "Vytvoříme wireframy, uživatelské persony a vizuální design. Společně prioritizujeme funkce metodou MoSCoW.",
              },
              {
                step: "03",
                title: "Vývoj & Testování",
                description:
                  "Implementace pomocí Next.js a Sanity.io. Průběžné testování na všech zařízeních a prohlížečích.",
              },
              {
                step: "04",
                title: "Spuštění & Podpora",
                description:
                  "Nasazení na Vercel, propojení domény a školení. Následná podpora a optimalizace na základě dat.",
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="text-5xl font-bold text-primary/20">{phase.step}</div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
                {index < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Moderní technologie</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Používáme osvědčené nástroje pro maximální výkon a spolehlivost
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Next.js 16", desc: "React framework" },
              { name: "Sanity.io", desc: "Headless CMS" },
              { name: "Tailwind CSS", desc: "Utility-first CSS" },
              { name: "Vercel", desc: "Hosting & Deploy" },
              { name: "TypeScript", desc: "Type safety" },
              { name: "Prisma", desc: "Database ORM" },
              { name: "Stripe", desc: "Payments" },
              { name: "Resend", desc: "Email API" },
            ].map((tech, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0 space-y-2">
                  <div className="text-lg font-bold">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-20">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Připraveni začít váš projekt?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Domluvme si nezávaznou konzultaci a probereme, jak můžeme pomoci vašemu podnikání růst
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/kontakt">
                    Kontaktovat nás <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="mailto:info@webnamiru.site">info@webnamiru.site</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">webnamiru.site</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategický partner pro tvorbu webů s vysokou hodnotou
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Služby</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#sluzby" className="hover:text-primary transition-colors">
                    Tvorba webů
                  </Link>
                </li>
                <li>
                  <Link href="#sluzby" className="hover:text-primary transition-colors">
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="#sluzby" className="hover:text-primary transition-colors">
                    CMS integrace
                  </Link>
                </li>
                <li>
                  <Link href="#sluzby" className="hover:text-primary transition-colors">
                    Podpora
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Společnost</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/o-nas" className="hover:text-primary transition-colors">
                    O nás
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-primary transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@webnamiru.site</li>
                <li>IČO: 21609845</li>
                <li>Česká republika</li>
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
