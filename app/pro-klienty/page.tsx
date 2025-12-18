// app/pro-klienty/page.tsx

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
  Lightbulb
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"

export const metadata: Metadata = {
  title: "Pro klienty | Transparentnost a ochrana | webnamiru.site",
  description:
    "Kompletní informace o našich procesech, podmínkách a ochranných mechanismech pro klienty i dodavatele. Transparentní spolupráce založená na důvěře.",
}

export const revalidate = 60

const protectionPoints = [
  {
    icon: FileCheck,
    title: "Jasná dokumentace",
    description: "Každý projekt začíná detailní smlouvou o dílo s přesnými akceptačními kritérii a rozpočtem.",
    color: "text-blue-500",
  },
  {
    icon: Scale,
    title: "Právní ochrana",
    description: "Smlouvy vytvořené podle českého práva s jasným vymezením autorských práv.",
    color: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Garance kvality",
    description: "Testování a code review zajišťují, že projekt splňuje všechny dohodnuté parametry.",
    color: "text-green-500",
  },
  {
    icon: Clock,
    title: "Řízení změn",
    description: "Transparentní proces pro všechny změny. Žádné skryté poplatky.",
    color: "text-orange-500",
  },
]

export default function ProKlientyPage() {
  return (
    <main className="min-h-screen">
      <AnimatedSection direction="up">
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <Badge variant="outline" className="mb-4">
            <Shield className="mr-2 h-3 w-3" />
            Transparentnost a důvěra
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance uppercase tracking-tighter">Pro klienty</h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            Spolupráce postavená na jasných pravidlech. Žádné skryté náklady, plné vlastnictví kódu a profesionální přístup.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md text-white">
              <Link href="/kontakt">Zahájit projekt</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>

      {/* ... (sekce Protection Points atd. zůstávají stejné) ... */}

      {/* Documents Section - OPRAVENÉ BARVY KARET */}
      <AnimatedSection direction="up">
        <section id="dokumenty" className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-balance uppercase tracking-tighter">Šablony dokumentů</h2>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 text-left">
              {/* Smlouva */}
              <Card className="border-2 border-border hover:border-accent transition-colors bg-transparent shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    <FileText className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl tracking-tight">Smlouva o dílo</CardTitle>
                  <CardDescription>Vzorová smlouva s akceptačními kritérii</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white" asChild>
                    <a href="/api/download-document?doc=smlouva" download>Stáhnout vzor</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Plánování nákladů - OPRAVENÉ POZADÍ (transparent) */}
              <Card className="border-2 border-border hover:border-accent transition-colors bg-transparent shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl tracking-tight">Plánování nákladů</CardTitle>
                  <CardDescription>Otevřít nástroj pro výpočet reálných nákladů (TCO)</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white" asChild>
                    <Link href="/zahajeni-projektu#tco-kalkulacka">Otevřít TCO kalkulačku</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* NDA */}
              <Card className="border-2 border-border hover:border-accent transition-colors bg-transparent shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    <Lock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl tracking-tight">Ochrana nápadu (NDA)</CardTitle>
                  <CardDescription>Dohoda o mlčenlivosti pro ochranu know-how</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white" asChild>
                    <Link href="/nda">Více o NDA</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Technické partnerství */}
              <Card className="border-2 border-border hover:border-accent transition-colors bg-transparent shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl tracking-tight">Technické partnerství</CardTitle>
                  <CardDescription>Moje expertíza a strategické poradenství</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white" asChild>
                    <Link href="/zahajeni-projektu#tco-kalkulacka">Více informací</Link>
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
              <h2 className="text-3xl lg:text-5xl font-bold">Máte dotazy?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md text-white">
                  <Link href="/kontakt">Kontaktovat</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-primary text-primary font-bold hover:bg-primary/5">
                  <Link href="/zahajeni-projektu">Jak projekty fungují</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}