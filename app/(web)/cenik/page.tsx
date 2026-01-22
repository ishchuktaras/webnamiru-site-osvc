import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Info, Sparkles, Zap, Code2, Palette, Shield, LifeBuoy, Globe, ShoppingCart, LayoutDashboard, ShoppingBag, Layers, Plug, Figma, Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceník webových služeb 2026 | Investice, která se vrátí",
  description: "Transparentní ceník tvorby webů na míru. Balíčky od 19 900 Kč. Moderní technologie Next.js, SEO optimalizace a dlouhodobá podpora pro rok 2026.",
}

export const revalidate = 0

const pricingPackages = [
  {
    name: "WEB START",
    description: "Profesionální vizitka pro živnostníky a start-upy",
    price: "19 900 Kč",
    icon: LayoutDashboard,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Moderní One-page web nebo Landing page",
      "Responzivní design (Mobile-first)",
      "Základní SEO nastavení",
      "Kontaktní formulář",
      "Rychlost načítání < 1s (Next.js)",
      "HTTPS zabezpečení",
      "Technická podpora na 1 měsíc zdarma",
    ],
    cta: "Chci Web Start",
    popular: false,
  },
  {
    name: "BUSINESS PRO",
    description: "Komplexní web pro firmy, které chtějí růst",
    price: "45 000 Kč",
    icon: Globe,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Více stránkový web (5-10 podstránek)",
      "Vlastní CMS administrace (Sanity.io)",
      "Pokročilé SEO a strukturovaná data",
      "Blog / Aktuality",
      "Interaktivní prvky a animace",
      "Napojení na analytiku (GA4)",
      "Školení obsluhy administrace",
      "Technická podpora na 3 měsíce zdarma",
    ],
    cta: "Chci Business web",
    popular: true,
  },
  {
    name: "E-COMMERCE",
    description: "E-shop na míru nebo B2B portál",
    price: "75 000 Kč",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Kompletní e-shop řešení",
      "Filtrace produktů a vyhledávání",
      "Platební brána",
      "Automatizace objednávek",
      "Zákaznická zóna",
      "Pokročilá bezpečnost a GDPR",
      "Napojení na externí systémy (API)",
      "Prioritní podpora 6 měsíců",
    ],
    cta: "Konzultovat E-shop",
    popular: false,
  },
]

const supportPackages = [
  {
    name: "Správa Basic",
    price: "1 500 Kč/měsíc",
    description: "Hosting a zabezpečení",
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Hosting na výkonném serveru", "SSL certifikát", "Pravidelné aktualizace", "Zálohování 1x týdně"],
  },
  {
    name: "Správa Standard",
    price: "2 900 Kč/měsíc",
    description: "Včetně drobných úprav",
    icon: LifeBuoy,
    gradient: "from-purple-500 to-pink-500",
    features: ["Vše z balíčku Basic", "1 hodina práce vývojáře / měsíc", "Aktualizace obsahu", "Monitoring 24/7"],
  },
  {
    name: "Správa Business",
    price: "5 900 Kč/měsíc",
    description: "Partner pro váš růst",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
    features: ["Vše z balíčku Standard", "3 hodiny práce vývojáře / měsíc", "SEO reporting", "VIP podpora"],
  },
]

export default function CenikPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <Badge variant="outline" className="mb-4"><Sparkles className="mr-1 h-3 w-3" />Investice do vašeho podnikání</Badge>
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Weby, které vydělávají</h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">Neplatíte za kód, ale za řešení. Transparentní ceny a dlouhodobé partnerství.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild><Link href="/kontakt">Chci nezávaznou nabídku <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>

      <section className="bg-muted/30 py-16 border-y">
        <div className="container mx-auto px-4 grid max-w-6xl gap-8 md:grid-cols-3">
          {pricingPackages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <Card key={pkg.name} className={`relative hover:shadow-2xl transition-all ${pkg.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}>
                <CardHeader>
                   <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${pkg.gradient} text-white`}><Icon className="h-6 w-6" /></div>
                   {pkg.popular && <Badge className="mb-2 w-fit animate-pulse">Nejoblíbenější</Badge>}
                   <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                   <CardDescription>{pkg.description}</CardDescription>
                   <div className="mt-4"><span className="text-3xl font-bold">{pkg.price}</span></div>
                </CardHeader>
                <CardContent><ul className="space-y-3">{pkg.features.map(f => <li key={f} className="flex gap-2"><Check className="h-5 w-5 text-primary"/> <span className="text-sm">{f}</span></li>)}</ul></CardContent>
                <CardFooter><Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild><Link href="/kontakt">{pkg.cta}</Link></Button></CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Správa a rozvoj</h2>
            <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-3">
                {supportPackages.map((pkg) => {
                    const Icon = pkg.icon
                    return (
                        <Card key={pkg.name} className="hover:shadow-xl transition-all">
                            <CardHeader>
                                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${pkg.gradient} text-white`}><Icon className="h-6 w-6" /></div>
                                <CardTitle>{pkg.name}</CardTitle>
                                <div className="mt-4"><span className="text-2xl font-bold">{pkg.price}</span></div>
                            </CardHeader>
                            <CardContent><ul className="space-y-2">{pkg.features.map(f => <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary"/><span className="text-sm">{f}</span></li>)}</ul></CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
      </section>
    </main>
  )
}