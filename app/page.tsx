import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Rocket,
  Target,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export default function HomePage() {
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
            <Link
              href="/sluzby"
              className="transition-colors hover:text-accent"
            >
              Služby
            </Link>
            <Link
              href="/portfolio"
              className="transition-colors hover:text-accent"
            >
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors hover:text-accent">
              Blog
            </Link>
            <Link
              href="/kontakt"
              className="transition-colors hover:text-accent"
            >
              Kontakt
            </Link>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  <Rocket className="mr-2 h-4 w-4" />
                  Strategický přístup k webovému vývoji
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
                Weby, které{" "}
                <span className="text-accent">přinášejí výsledky</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
                Vytváříme webové stránky na míru, které nejen skvěle vypadají,
                ale především pomáhají vašemu podnikání růst. Od strategie přes
                design až po měřitelné výsledky.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 shadow-md"
                >
                  <Link href="/kontakt">
                    Začít projekt <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Link href="#sluzby">Zjistit více</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">Next.js</div>
                  <div className="text-sm text-muted-foreground">
                    Moderní technologie
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">ROI</div>
                  <div className="text-sm text-muted-foreground">
                    Měřitelné výsledky
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-primary/10 rounded-3xl" />
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
      <section id="sluzby" className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Komplexní služby pro váš úspěch
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Od strategického plánování až po technickou realizaci a následnou
              podporu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Strategické plánování",
                description:
                  "Definujeme cíle, analyzujeme konkurenci a vytváříme plán pro dosažení měřitelných výsledků.",
                features: [
                  "Analýza cílového publika",
                  "Konkurenční výzkum",
                  "SMART cíle",
                ],
              },
              {
                icon: Code2,
                title: "Vývoj na míru",
                description:
                  "Vytváříme weby pomocí Next.js, Tailwind CSS a moderních technologií pro maximální výkon.",
                features: [
                  "Next.js 16",
                  "Responzivní design",
                  "SEO optimalizace",
                ],
              },
              {
                icon: Users,
                title: "UX/UI Design",
                description:
                  "Navrhujeme intuitivní rozhraní zaměřená na uživatele a konverze.",
                features: [
                  "Uživatelské persony",
                  "Wireframing",
                  "Prototypování",
                ],
              },
              {
                icon: Rocket,
                title: "CMS integrace",
                description:
                  "Propojení se Sanity.io pro snadnou správu obsahu bez technických znalostí.",
                features: [
                  "Sanity Studio",
                  "Flexibilní schémata",
                  "Real-time preview",
                ],
              },
              {
                icon: Zap,
                title: "E-commerce řešení",
                description:
                  "Kompletní online obchody s platebními branami a správou produktů.",
                features: [
                  "Stripe integrace",
                  "Správa objednávek",
                  "Analytika prodejů",
                ],
              },
              {
                icon: Shield,
                title: "Podpora & údržba",
                description:
                  "Kontinuální péče o váš web, aktualizace a technická podpora.",
                features: ["Monitoring", "Aktualizace", "Technická podpora"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-colors duration-200 shadow-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 bg-transparent"
            >
              <Link href="/sluzby">
                Zobrazit všechny služby <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Jak spolupráce probíhá
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
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
                  <div className="text-5xl font-bold text-accent/20">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {phase.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              Moderní technologie
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
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
              <Card
                key={index}
                className="text-center p-6 hover:border-accent transition-colors duration-200"
              >
                <CardContent className="p-0 space-y-2">
                  <div className="text-lg font-semibold text-primary">
                    {tech.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tech.desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">
                Připraveni začít váš projekt?
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Domluvme si nezávaznou konzultaci a probereme, jak můžeme pomoci
                vašemu podnikání růst
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-accent hover:bg-accent/90 shadow-md"
                >
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
                  <Link href="mailto:info@webnamiru.site">
                    info@webnamiru.site
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
