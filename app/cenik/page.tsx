import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Info } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceník webových služeb | Transparentní ceny | webnamiru.site",
  description:
    "Přehledný ceník všech našich služeb - od tvorby webů přes design až po podporu. Transparentní ceny, žádné skryté poplatky. Konzultace zdarma.",
};

// Revalidate every 60 seconds
export const revalidate = 60;

const pricingPackages = [
  {
    name: "Základní web",
    description: "Ideální pro začínající podnikatele a malé firmy",
    price: "od 15 000 Kč",
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
];

const detailedServices = [
  {
    category: "Vývoj a kódování",
    services: [
      {
        name: "Landing page (1 stránka)",
        price: "15 000 - 25 000 Kč",
        unit: "projekt",
      },
      {
        name: "Prezentační web (5-10 stránek)",
        price: "30 000 - 60 000 Kč",
        unit: "projekt",
      },
      {
        name: "E-shop (základní)",
        price: "50 000 - 80 000 Kč",
        unit: "projekt",
      },
      {
        name: "E-shop (pokročilý)",
        price: "80 000 - 150 000 Kč",
        unit: "projekt",
      },
      {
        name: "Webová aplikace",
        price: "100 000 - 300 000 Kč",
        unit: "projekt",
      },
      {
        name: "Integrace API a služeb třetích stran",
        price: "5 000 - 20 000 Kč",
        unit: "integrace",
      },
    ],
  },
  {
    category: "UX/UI Design",
    services: [
      {
        name: "Wireframy a struktura webu",
        price: "5 000 - 15 000 Kč",
        unit: "projekt",
      },
      {
        name: "UI design (kompletní web)",
        price: "15 000 - 40 000 Kč",
        unit: "projekt",
      },
      {
        name: "Design systém a komponenty",
        price: "10 000 - 25 000 Kč",
        unit: "projekt",
      },
      {
        name: "Redesign existujícího webu",
        price: "20 000 - 50 000 Kč",
        unit: "projekt",
      },
      {
        name: "UX audit a doporučení",
        price: "8 000 - 15 000 Kč",
        unit: "audit",
      },
    ],
  },
  {
    category: "Brand Identity",
    services: [
      {
        name: "Logo design (3 koncepty)",
        price: "8 000 - 15 000 Kč",
        unit: "projekt",
      },
      {
        name: "Kompletní brand identity",
        price: "20 000 - 50 000 Kč",
        unit: "projekt",
      },
      {
        name: "Barevná paleta a typografie",
        price: "5 000 - 10 000 Kč",
        unit: "projekt",
      },
      {
        name: "Brand guidelines (manuál)",
        price: "10 000 - 20 000 Kč",
        unit: "dokument",
      },
      {
        name: "Vizitky a firemní materiály",
        price: "3 000 - 8 000 Kč",
        unit: "sada",
      },
    ],
  },
  {
    category: "Obsah a copywriting",
    services: [
      {
        name: "Copywriting (1 stránka)",
        price: "1 500 - 3 000 Kč",
        unit: "stránka",
      },
      {
        name: "SEO texty (1 článek)",
        price: "2 000 - 4 000 Kč",
        unit: "článek",
      },
      {
        name: "Kompletní obsah webu (5-10 stránek)",
        price: "15 000 - 30 000 Kč",
        unit: "projekt",
      },
      {
        name: "Produktové popisy (e-shop)",
        price: "200 - 500 Kč",
        unit: "produkt",
      },
      {
        name: "Blog články (měsíčně)",
        price: "5 000 - 15 000 Kč",
        unit: "měsíc",
      },
    ],
  },
  {
    category: "Grafika a fotografie",
    services: [
      {
        name: "Grafické prvky a ilustrace",
        price: "2 000 - 8 000 Kč",
        unit: "sada",
      },
      {
        name: "Ikony a piktogramy (sada 10 ks)",
        price: "3 000 - 6 000 Kč",
        unit: "sada",
      },
      {
        name: "Profesionální fotografie",
        price: "2 000 - 4 000 Kč",
        unit: "hodina",
      },
      {
        name: "Úprava a retuš fotografií",
        price: "300 - 800 Kč",
        unit: "fotografie",
      },
      {
        name: "Produktová fotografie (e-shop)",
        price: "200 - 500 Kč",
        unit: "produkt",
      },
    ],
  },
  {
    category: "Školení a dokumentace",
    services: [
      {
        name: "Školení správy webu",
        price: "1 500 - 2 500 Kč",
        unit: "hodina",
      },
      {
        name: "Uživatelská dokumentace",
        price: "5 000 - 15 000 Kč",
        unit: "dokument",
      },
      { name: "Video tutoriály", price: "2 000 - 4 000 Kč", unit: "video" },
      {
        name: "Technická dokumentace",
        price: "8 000 - 20 000 Kč",
        unit: "projekt",
      },
    ],
  },
];

const supportPackages = [
  {
    name: "Basic",
    price: "2 500 Kč/měsíc",
    description: "Základní technická údržba",
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
];

const pricingFAQ = [
  {
    question: "Jak se tvoří finální cena projektu?",
    answer:
      "Finální cena závisí na rozsahu projektu, složitosti designu, počtu funkcí a integracích. Po úvodní konzultaci vám připravíme detailní cenovou nabídku šitou na míru vašim potřebám.",
  },
  {
    question: "Jsou ceny včetně DPH?",
    answer:
      "Jako OSVČ nejsem plátce DPH, takže všechny uvedené ceny jsou konečné bez DPH.",
  },
  {
    question: "Jaké jsou platební podmínky?",
    answer:
      "Standardně pracujeme se zálohou 50% před zahájením prací a doplatkem 50% po dokončení a předání projektu. U větších projektů je možné dohodnout splátkový kalendář.",
  },
  {
    question: "Nabízíte slevy?",
    answer:
      "Ano, nabízíme slevy pro dlouhodobou spolupráci, neziskové organizace a při objednání více služeb najednou. Kontaktujte nás pro individuální nabídku.",
  },
  {
    question: "Co je zahrnuto v ceně?",
    answer:
      "V ceně je zahrnuta konzultace, návrh řešení, design, vývoj, testování, nasazení a základní školení. Hosting, doména a případné licence třetích stran se účtují zvlášť.",
  },
  {
    question: "Jak dlouho trvá realizace projektu?",
    answer:
      "Landing page: 1-2 týdny, Firemní web: 3-6 týdnů, E-shop: 6-12 týdnů. Přesný termín závisí na rozsahu projektu a rychlosti poskytování podkladů.",
  },
];

export default function CenikPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              Transparentní ceník
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Přehledné ceny bez skrytých poplatků
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Věříme v transparentnost a férový přístup. Všechny ceny jsou
              orientační a finální nabídku připravíme na míru vašim potřebám.
              Úvodní konzultace je vždy zdarma.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/kontakt">
                  Nezávazná konzultace
                  <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Cenové balíčky
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Vyberte si balíček, který nejlépe odpovídá vašim potřebám. Každý
                balíček lze přizpůsobit.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {pricingPackages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={pkg.popular ? "border-primary shadow-lg" : ""}
                >
                  <CardHeader>
                    {pkg.popular && (
                      <Badge className="mb-2 w-fit">Nejoblíbenější</Badge>
                    )}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/kontakt">{pkg.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section id="detailni-cenik" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Detailní ceník služeb
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Kompletní přehled všech služeb a jejich orientačních cen.
                Finální cenu vždy připravíme na míru vašemu projektu.
              </p>
            </div>

            <div className="mx-auto max-w-5xl space-y-8">
              {detailedServices.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service) => (
                        <div
                          key={service.name}
                          className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex-1">
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-muted-foreground">
                              za {service.unit}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{service.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950">
              <div className="flex gap-3">
                <Info className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
                    Důležité informace o cenách
                  </h3>
                  <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                    <li>
                      • Všechny ceny jsou orientační a slouží jako vodítko
                    </li>
                    <li>
                      • Finální cena závisí na konkrétních požadavcích projektu
                    </li>
                    <li>
                      • Hosting, doména a licence třetích stran se účtují zvlášť
                    </li>
                    <li>
                      • Nabízíme možnost splátkového kalendáře u větších
                      projektů
                    </li>
                    <li>
                      • Úvodní konzultace a cenová nabídka jsou vždy zdarma
                    </li>
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Balíčky podpory a údržby
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Kontinuální péče o váš web zajistí jeho bezpečnost, aktuálnost a
                optimální výkon.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {supportPackages.map((pkg) => (
                <Card key={pkg.name}>
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-2xl font-bold">{pkg.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      asChild
                    >
                      <Link href="/kontakt">Vybrat balíček</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Časté otázky o cenách
              </h2>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {pricingFAQ.map((faq) => (
                <Card key={faq.question}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Připraveni začít váš projekt?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Domluvme si nezávaznou konzultaci a probereme vaše požadavky.
                Připravíme vám cenovou nabídku přesně na míru vašim potřebám.
              </p>
              <Button size="lg" asChild>
                <Link href="/kontakt">
                  Nezávazná konzultace zdarma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
