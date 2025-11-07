import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Code2, Rocket, Target, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { FAQ } from "@/components/FAQ"
import { getFAQs } from "@/lib/sanity.queries"
import { ServiceAreaMap } from "@/components/ServiceAreaMap"
import { SeznamReviewsWidget } from "@/components/widgets/SeznamReviewsWidget"
import { HeroParallax } from "@/components/animations/HeroParallax"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"
import { FloatingElement } from "@/components/animations/FloatingElements"

export default async function Home() {
  const faqs = await getFAQs()

  return (
    <div className="flex flex-col min-h-screen">
      <HeroParallax />

      {/* Services Section */}
      <section id="sluzby" className="py-20 bg-secondary relative overflow-hidden">
        <FloatingElement className="absolute top-10 right-10 text-accent/10" delay={0}>
          <Code2 className="h-32 w-32" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-20 left-10 text-accent/10" delay={1}>
          <Rocket className="h-24 w-24" />
        </FloatingElement>

        <div className="container max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Komplexní služby pro váš úspěch</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Od strategického plánování až po technickou realizaci a následnou podporu
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
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
                icon: Zap,
                title: "E-commerce řešení",
                description: "Kompletní online obchody s platebními branami a správou produktů.",
                features: ["Stripe integrace", "Správa objednávek", "Analytika prodejů"],
              },
              {
                icon: Shield,
                title: "Podpora & údržba",
                description: "Kontinuální péče o váš web, aktualizace a technická podpora.",
                features: ["Monitoring", "Aktualizace", "Technická podpora"],
              },
            ].map((service, index) => (
              <StaggerItem key={index}>
                <Card className="border-2 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-[1.02] h-full magnetic-hover">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:glow-accent transition-all">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
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
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12" delay={0.6}>
            <Button size="lg" asChild variant="outline" className="border-2 bg-transparent hover:glow-accent">
              <Link href="/sluzby">
                Zobrazit všechny služby <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Jak spolupráce probíhá</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Transparentní proces od první konzultace po úspěšné spuštění
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
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
              <StaggerItem key={index} className="relative">
                <div className="space-y-4">
                  <div className="text-5xl font-bold text-accent/20 gradient-text">{phase.step}</div>
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{phase.description}</p>
                </div>
                {index < 3 && <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border shimmer" />}
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12" delay={0.8}>
            <Button size="lg" asChild variant="outline" className="border-2 bg-transparent">
              <Link href="/zahajeni-projektu">
                Detailní proces projektu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Moderní technologie</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Používáme osvědčené nástroje pro maximální výkon a spolehlivost
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
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
              <StaggerItem key={index}>
                <Card className="text-center p-6 hover:border-accent transition-all duration-300 hover:scale-105 magnetic-hover">
                  <CardContent className="p-0 space-y-2">
                    <div className="text-lg font-semibold text-primary">{tech.name}</div>
                    <div className="text-sm text-muted-foreground">{tech.desc}</div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Area Map Section */}
      <AnimatedSection>
        <ServiceAreaMap />
      </AnimatedSection>

      {/* Seznam Reviews Widget Section */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Co říkají naši klienti</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Přečtěte si ověřené recenze od spokojených zákazníků
            </p>
          </AnimatedSection>
          <AnimatedSection className="max-w-4xl mx-auto" delay={0.3}>
            <SeznamReviewsWidget maxReviews={5} showTitle={false} />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <AnimatedSection>
          <FAQ faqs={faqs} />
        </AnimatedSection>
      )}

      {/* CTA Section */}
      <section id="kontakt" className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection delay={0.2}>
            <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-balance">Připraveni začít váš projekt?</h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Domluvme si nezávaznou konzultaci a probereme, jak můžeme pomoci vašemu podnikání růst
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md hover:glow-accent">
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
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
