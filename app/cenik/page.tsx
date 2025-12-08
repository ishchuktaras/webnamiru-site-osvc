import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowRight,
  Info,
  Sparkles,
  Zap,
  Code2,
  Palette,
  Brush,
  FileText,
  Camera,
  BookOpen,
  LayoutDashboard,
  ShoppingCart,
  Globe,
  Plug,
  Figma,
  Layers,
  PenTool,
  Search,
  Megaphone,
  ShoppingBag,
  PenLine,
  ImageIcon,
  Video,
  GraduationCap,
  LifeBuoy,
  Shield,
  Headphones,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceník webových služeb | Transparentní ceny bez skrytých poplatků",
  description:
    "Přehledný ceník tvorby webů, UX/UI designu, e-shopů a podpory. Od 15 000 Kč. Transparentní ceny, možnost splátek, úvodní konzultace zdarma. Podívejte se na kompletní ceník.",
  keywords: [
    "ceník tvorby webů",
    "cena webu",
    "cena e-shopu",
    "webdesign cena",
    "web na míru cena",
    "ceník webových služeb Jihlava",
    "cenová nabídka web",
  ],
  openGraph: {
    title: "Ceník | webnamiru.site - Férové ceny bez skrytých poplatků",
    description:
      "Kompletní ceník webových služeb. Balíčky od 15 000 Kč, detailní rozpis služeb, podpora od 2 500 Kč/měsíc.",
    url: "https://webnamiru.site/cenik",
    type: "website",
    images: [
      {
        url: "/og-image-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "Ceník webových služeb - transparentní ceny",
      },
    ],
  },
  alternates: {
    canonical: "https://webnamiru.site/cenik",
  },
}

// Revalidate every 60 seconds
export const revalidate = 60

const pricingPackages = [
  {
    name: "Základní web",
    description: "Ideální pro začínající podnikatele a malé firmy",
    price: "od 15 000 Kč",
    icon: LayoutDashboard,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Landing page nebo prezentační web (1-3 stránky)",
      "Responzivní design pro mobily a tablety",
      "Základní SEO optimalizace",
      "Kontaktní formulář",
      "Integrace Google Analytics",
      "1 měsíc technické podpory zdarma",
      "Školení pro správu obsahu (1 hodina)",
    ],
    cta: "Nezávazná poptávka",
    popular: false,
  },
  {
    name: "Firemní web",
    description: "Pro etablované firmy s komplexními požadavky",
    price: "od 35 000 Kč",
    icon: Globe,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Firemní web (5-10 stránek)",
      "Profesionální UI/UX design",
      "Pokročilé SEO optimalizace",
      "Blog nebo aktuality",
      "Integrace s CMS (Sanity)",
      "Kontaktní formuláře a mapy",
      "3 měsíce technické podpory zdarma",
      "Školení pro správu obsahu (2 hodiny)",
      "Základní copywriting (až 5 stránek)",
    ],
    cta: "Nezávazná poptávka",
    popular: true,
  },
  {
    name: "E-commerce řešení",
    description: "Kompletní e-shop pro online prodej",
    price: "od 50 000 Kč",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Plně funkční e-shop",
      "Produktový katalog s filtrováním",
      "Nákupní košík a checkout proces",
      "Integrace platebních bran",
      "Správa objednávek a zákazníků",
      "Pokročilé SEO a marketing nástroje",
      "6 měsíců technické podpory zdarma",
      "Kompletní školení (4 hodiny)",
      "Profesionální copywriting",
    ],
    cta: "Nezávazná poptávka",
    popular: false,
  },
]

const detailedServices = [
  {
    category: "Vývoj a kódování",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Landing page (1 stránka)",
        price: "15 000 - 25 000 Kč",
        unit: "projekt",
        icon: LayoutDashboard,
      },
      {
        name: "Prezentační web (5-10 stránek)",
        price: "30 000 - 60 000 Kč",
        unit: "projekt",
        icon: Globe,
      },
      {
        name: "E-shop (základní)",
        price: "50 000 - 80 000 Kč",
        unit: "projekt",
        icon: ShoppingBag,
      },
      {
        name: "E-shop (pokročilý)",
        price: "80 000 - 150 000 Kč",
        unit: "projekt",
        icon: ShoppingCart,
      },
      {
        name: "Webová aplikace",
        price: "100 000 - 300 000 Kč",
        unit: "projekt",
        icon: Layers,
      },
      {
        name: "Integrace API a služeb třetích stran",
        price: "5 000 - 20 000 Kč",
        unit: "integrace",
        icon: Plug,
      },
    ],
  },
  {
    category: "UX/UI Design",
    icon: Palette,
    gradient: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Wireframy a struktura webu",
        price: "5 000 - 15 000 Kč",
        unit: "projekt",
        icon: Figma,
      },
      {
        name: "UI design (kompletní web)",
        price: "15 000 - 40 000 Kč",
        unit: "projekt",
        icon: Palette,
      },
      {
        name: "Design systém a komponenty",
        price: "10 000 - 25 000 Kč",
        unit: "projekt",
        icon: Layers,
      },
      {
        name: "Redesign existujícího webu",
        price: "20 000 - 50 000 Kč",
        unit: "projekt",
        icon: PenTool,
      },
      {
        name: "UX audit a doporučení",
        price: "8 000 - 15 000 Kč",
        unit: "audit",
        icon: Search,
      },
    ],
  },
  {
    category: "Brand Identity",
    icon: Brush,
    gradient: "from-pink-500 to-rose-500",
    services: [
      {
        name: "Logo design (3 koncepty)",
        price: "8 000 - 15 000 Kč",
        unit: "projekt",
        icon: Sparkles,
      },
      {
        name: "Kompletní brand identity",
        price: "20 000 - 50 000 Kč",
        unit: "projekt",
        icon: Brush,
      },
      {
        name: "Barevná paleta a typografie",
        price: "5 000 - 10 000 Kč",
        unit: "projekt",
        icon: Palette,
      },
      {
        name: "Brand guidelines (manuál)",
        price: "10 000 - 20 000 Kč",
        unit: "dokument",
        icon: BookOpen,
      },
      {
        name: "Vizitky a firemní materiály",
        price: "3 000 - 8 000 Kč",
        unit: "sada",
        icon: FileText,
      },
    ],
  },
  {
    category: "Obsah a copywriting",
    icon: FileText,
    gradient: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Copywriting (1 stránka)",
        price: "1 500 - 3 000 Kč",
        unit: "stránka",
        icon: PenLine,
      },
      {
        name: "SEO texty (1 článek)",
        price: "2 000 - 4 000 Kč",
        unit: "článek",
        icon: Search,
      },
      {
        name: "Kompletní obsah webu (5-10 stránek)",
        price: "15 000 - 30 000 Kč",
        unit: "projekt",
        icon: FileText,
      },
      {
        name: "Produktové popisy (e-shop)",
        price: "200 - 500 Kč",
        unit: "produkt",
        icon: ShoppingBag,
      },
      {
        name: "Blog články (měsíčně)",
        price: "5 000 - 15 000 Kč",
        unit: "měsíc",
        icon: Megaphone,
      },
    ],
  },
  {
    category: "Grafika a fotografie",
    icon: Camera,
    gradient: "from-orange-500 to-amber-500",
    services: [
      {
        name: "Grafické prvky a ilustrace",
        price: "2 000 - 8 000 Kč",
        unit: "sada",
        icon: ImageIcon,
      },
      {
        name: "Ikony a piktogramy (sada 10 ks)",
        price: "3 000 - 6 000 Kč",
        unit: "sada",
        icon: Sparkles,
      },
      {
        name: "Profesionální fotografie",
        price: "2 000 - 4 000 Kč",
        unit: "hodina",
        icon: Camera,
      },
      {
        name: "Úprava a retuš fotografií",
        price: "300 - 800 Kč",
        unit: "fotografie",
        icon: PenTool,
      },
      {
        name: "Produktová fotografie (e-shop)",
        price: "200 - 500 Kč",
        unit: "produkt",
        icon: ShoppingBag,
      },
    ],
  },
  {
    category: "Školení a dokumentace",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-purple-500",
    services: [
      {
        name: "Školení správy webu",
        price: "1 500 - 2 500 Kč",
        unit: "hodina",
        icon: GraduationCap,
      },
      {
        name: "Uživatelská dokumentace",
        price: "5 000 - 15 000 Kč",
        unit: "dokument",
        icon: BookOpen,
      },
      {
        name: "Video tutoriály",
        price: "2 000 - 4 000 Kč",
        unit: "video",
        icon: Video,
      },
      {
        name: "Technická dokumentace",
        price: "8 000 - 20 000 Kč",
        unit: "projekt",
        icon: FileText,
      },
    ],
  },
]

const supportPackages = [
  {
    name: "Basic",
    price: "2 500 Kč/měsíc",
    description: "Základní technická údržba",
    icon: LifeBuoy,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Technická údržba a aktualizace",
      "Zálohy webu (týdenní)",
      "Monitoring dostupnosti",
      "E-mailová podpora (48h)",
      "2 hodiny změn měsíčně",
    ],
  },
  {
    name: "Standard",
    price: "5 000 Kč/měsíc",
    description: "Komplexní péče o váš web",
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Vše z balíčku Basic",
      "Obsahová podpora (aktualizace textů)",
      "Zálohy webu (denní)",
      "Prioritní e-mailová podpora (24h)",
      "Telefonická podpora",
      "5 hodin změn měsíčně",
      "Měsíční reporty návštěvnosti",
    ],
  },
  {
    name: "Premium",
    price: "10 000 Kč/měsíc",
    description: "VIP péče s maximální dostupností",
    icon: Headphones,
    gradient: "from-orange-500 to-red-500",
    features: [
      "Vše z balíčku Standard",
      "Okamžitá podpora (4h)",
      "Proaktivní monitoring a optimalizace",
      "SEO optimalizace a reporting",
      "10 hodin změn měsíčně",
      "Konzultace a strategické plánování",
      "Prioritní řešení problémů",
    ],
  },
]

const faqItems = [
  {
    question: "Jsou uvedené ceny konečné?",
    answer:
      "Ceny uvedené v ceníku jsou orientační (označené jako 'od'). Finální cena závisí na konkrétním rozsahu funkcí, počtu podstránek a složitosti designu. Přesnou nezávaznou kalkulaci vám připravíme zdarma po úvodní konzultaci.",
  },
  {
    question: "Musím platit nějaké měsíční poplatky?",
    answer:
      "Za samotný vývoj webu neplatíte žádné povinné měsíční poplatky nám. Budete platit pouze třetím stranám za doménu a hosting (pokud není zdarma). Nabízíme však volitelné balíčky správy a údržby pro váš klid, viz ceník výše.",
  },
  {
    question: "Jak probíhá platba za web?",
    answer:
      "Standardně pracujeme s rozdělením platby: 50 % záloha před zahájením prací a 50 % doplatek po dokončení, otestování a předání webu. U větších projektů lze domluvit individuální splátkový kalendář.",
  },
  {
    question: "Jak dlouho trvá vytvoření webu?",
    answer:
      "Jednoduchý prezentační web nebo landing page stihneme obvykle do 1-2 týdnů. Rozsáhlejší firemní weby trvají 3-6 týdnů a e-shopy 4-8 týdnů, vždy v závislosti na rychlosti dodání podkladů a zpětné vazby.",
  },
  {
    question: "Co když budu chtít web v budoucnu rozšířit?",
    answer:
      "Všechny naše weby stavíme na moderních technologiích (Next.js), které jsou snadno škálovatelné. Web lze kdykoliv rozšířit o nové stránky, funkce nebo třeba e-shop bez nutnosti stavět ho celý znovu.",
  },
]

export default function CenikPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <Sparkles className="mr-1 h-3 w-3" />
              Transparentní ceník
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              Přehledné ceny bez skrytých poplatků
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
              Věříme v transparentnost a férový přístup. Všechny ceny jsou orientační a finální nabídku připravíme na
              míru vašim potřebám. Úvodní konzultace je vždy zdarma.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <Button size="lg" asChild className="group">
                <Link href="/kontakt">
                  Nezávazná konzultace
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#detailni-cenik">Detailní ceník</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Cenové balíčky</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Vyberte si balíček, který nejlépe odpovídá vašim potřebám. Každý balíček lze přizpůsobit.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {pricingPackages.map((pkg, index) => {
                const Icon = pkg.icon
                return (
                  <Card
                    key={pkg.name}
                    className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                      pkg.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""
                    } animate-in fade-in slide-in-from-bottom-4`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`absolute inset-0 opacity-0 bg-gradient-to-br ${pkg.gradient} transition-opacity duration-300 group-hover:opacity-5`}
                    />

                    <CardHeader className="relative">
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${pkg.gradient} text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      {pkg.popular && (
                        <Badge className="mb-2 w-fit animate-pulse">
                          <Zap className="mr-1 h-3 w-3" />
                          Nejoblíbenější
                        </Badge>
                      )}
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="mt-4">
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                          {pkg.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <ul className="space-y-3">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="relative">
                      <Button
                        className={`w-full group/btn ${pkg.popular ? "" : "bg-transparent"}`}
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link href="/kontakt">
                          {pkg.cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section id="detailni-cenik" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Detailní ceník služeb</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Kompletní přehled všech služeb a jejich orientačních cen. Finální cenu vždy připravíme na míru vašemu
                projektu.
              </p>
            </div>

            <div className="mx-auto max-w-5xl space-y-8">
              {detailedServices.map((category, categoryIndex) => {
                const CategoryIcon = category.icon
                return (
                  <Card
                    key={category.category}
                    className="group overflow-hidden transition-all duration-300 hover:shadow-xl animate-in fade-in slide-in-from-left-4"
                    style={{ animationDelay: `${categoryIndex * 100}ms` }}
                  >
                    <CardHeader className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-5 transition-opacity group-hover:opacity-10`}
                      />

                      <div className="relative flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.gradient} text-white`}
                        >
                          <CategoryIcon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.services.map((service, serviceIndex) => {
                          const ServiceIcon = service.icon
                          return (
                            <div
                              key={service.name}
                              className="group/item flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 transition-all duration-200 hover:translate-x-2 hover:bg-muted/30 hover:px-4 hover:py-2 hover:rounded-lg"
                            >
                              <div className="flex flex-1 items-center gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                                  <ServiceIcon className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="font-medium">{service.name}</p>
                                  <p className="text-sm text-muted-foreground">za {service.unit}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                  {service.price}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex gap-3">
                <Info className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">Důležité informace o cenách</h3>
                  <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                    <li>• Všechny ceny jsou orientační a slouží jako vodítko</li>
                    <li>• Finální cena závisí na konkrétních požadavcích projektu</li>
                    <li>• Hosting, doména a licence třetích stran se účtují zvlášť</li>
                    <li>• Nabízíme možnost splátkového kalendáře u větších projektů</li>
                    <li>• Úvodní konzultace a cenová nabídka jsou vždy zdarma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Packages */}
        <section className="border-y bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Balíčky podpory a údržby</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Kontinuální péče o váš web zajistí jeho bezpečnost, aktuálnost a optimální výkon.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {supportPackages.map((pkg, index) => {
                const Icon = pkg.icon
                return (
                  <Card
                    key={pkg.name}
                    className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`absolute inset-0 opacity-0 bg-gradient-to-br ${pkg.gradient} transition-opacity duration-300 group-hover:opacity-5`}
                    />

                    <CardHeader className="relative">
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${pkg.gradient} text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <CardTitle>{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="mt-4">
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-2xl font-bold text-transparent">
                          {pkg.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <ul className="space-y-2">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="relative">
                      <Button className="w-full bg-transparent group/btn" variant="outline" asChild>
                        <Link href="/kontakt">
                          Vybrat balíček
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Časté otázky o cenách</h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {faqItems.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="group overflow-hidden transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-start gap-3">
                        <Info className="h-5 w-5 mt-1 shrink-0 text-primary" />
                        {item.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground pl-8">{item.answer}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Připraveni začít váš projekt?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Domluvme si nezávaznou konzultaci a probereme vaše požadavky. Připravíme vám cenovou nabídku přesně na
                míru vašim potřebám.
              </p>
              <Button size="lg" asChild className="group">
                <Link href="/kontakt">
                  Nezávazná konzultace zdarma
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}