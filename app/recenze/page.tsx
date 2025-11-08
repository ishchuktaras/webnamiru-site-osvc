import type { Metadata } from "next"
import { Star, Award, ThumbsUp, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SeznamReviewsWidget } from "@/components/widgets/SeznamReviewsWidget"
import { FirmyCzBadge } from "@/components/widgets/FirmyCzBadge"
import { FirmyCzRateUsWidget } from "@/components/widgets/FirmyCzRateUsWidget"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"

export const metadata: Metadata = {
  title: "Recenze a hodnocení | webnamiru.site",
  description:
    "Přečtěte si ověřené recenze od spokojených klientů. Hodnocení a reference webových projektů z Jihlavy a Vysočiny. Důvěra potvrzená na Firmy.cz a Seznam.cz.",
  openGraph: {
    title: "Recenze a hodnocení | webnamiru.site",
    description: "Ověřené recenze od spokojených klientů. Transparentní hodnocení webových projektů.",
  },
}

export default function RecenzePage() {
  const stats = [
    { icon: Star, value: "5.0", label: "Průměrné hodnocení", color: "text-yellow-500" },
    { icon: Award, value: "100%", label: "Spokojených klientů", color: "text-green-500" },
    { icon: ThumbsUp, value: "12+", label: "Realizovaných projektů", color: "text-blue-500" },
    { icon: TrendingUp, value: "5+", label: "Let zkušeností", color: "text-purple-500" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-4">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">Co říkají moji klienti</h1>
            <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Transparentní hodnocení od skutečných klientů. Jsem hrdý na důvěru, kterou nám dávají firmy a podnikatelé.
            </p>
          </AnimatedSection>

          {/* Stats Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <StaggerItem key={index}>
                  <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center space-y-2">
                      <IconComponent className={`h-8 w-8 mx-auto ${stat.color}`} />
                      <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Firmy.cz Verification Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ověřeno na Firmy.cz</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Jsme oficiálně ověřeni na portálu Firmy.cz. Naše hodnocení a recenze jsou transparentní a důvěryhodné.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-8">
              <FirmyCzBadge size="lg" variant="light" showRating={true} />
              <div className="max-w-xs">
                <FirmyCzRateUsWidget variant="light" />
              </div>
            </div>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-semibold">Ohodnoťte naši spolupráci</h3>
                <p className="text-muted-foreground">
                  Spolupracovali jste s námi? Budeme rádi za vaši upřímnou zpětnou vazbu, která pomůže dalším klientům s
                  rozhodnutím.
                </p>
                <Button asChild variant="outline" className="border-2 bg-transparent">
                  <a
                    href="https://www.firmy.cz/detail/13911712-taras-ishchuk-jihlava.html#pridat-hodnoceni"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Přidat hodnocení
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Seznam.cz Reviews Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Recenze na Seznam.cz</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Přečtěte si, co o nás píší naši klienti na největším českém portálu Seznam.cz.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SeznamReviewsWidget maxReviews={10} showTitle={false} />
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Proč nám klienti důvěřují</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                title: "Transparentnost",
                description: "Jasná komunikace, férové ceny a žádná skrytá poplatky. Co slíbíme, to dodáme.",
                icon: "🤝",
              },
              {
                title: "Kvalita na prvním místě",
                description: "Používáme moderní technologie a best practices pro maximální výkon a spolehlivost.",
                icon: "⚡",
              },
              {
                title: "Dlouhodobá podpora",
                description: "Nezmizíme po spuštění webu. Poskytujeme průběžnou podporu a pomoc s rozvojem.",
                icon: "🛡️",
              },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:border-accent/50 transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-5xl">{item.icon}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection delay={0.2}>
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 shadow-lg">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-balance">Staňte se dalším spokojeným klientem</h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Připojte se k firmám, které nám důvěřují. Začneme nezávaznou konzultací a společně vytvoříme web,
                  který splní vaše očekávání.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                    <Link href="/kontakt">Nezávazná poptávka</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 bg-transparent">
                    <Link href="/portfolio">Zobrazit portfolio</Link>
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
