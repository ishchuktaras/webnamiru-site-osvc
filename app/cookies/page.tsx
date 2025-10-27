import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Zásady používání cookies | webnamiru.site",
  description: "Informace o používání cookies na webových stránkách webnamiru.site",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            webnamiru.site
          </Link>
        </div>
      </header>

      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Zásady používání cookies</h1>
            <p className="text-muted-foreground">Informace o cookies používaných na našich webových stránkách</p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6 prose prose-sm max-w-none">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Co jsou cookies</h2>
                <p className="leading-relaxed">
                  Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení (počítač, tablet, smartphone)
                  při návštěvě webových stránek. Cookies umožňují webovým stránkám zapamatovat si vaše akce a preference
                  (jako je přihlášení, jazyk, velikost písma a další nastavení) po určitou dobu, takže je nemusíte
                  zadávat znovu při každé návštěvě stránek nebo při procházení z jedné stránky na druhou.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Jak používáme cookies</h2>
                <p className="leading-relaxed mb-3">Na našich webových stránkách používáme následující typy cookies:</p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Nezbytné cookies</h3>
                <p className="leading-relaxed">
                  Tyto cookies jsou nezbytné pro správné fungování webových stránek. Bez těchto cookies by webové
                  stránky nemohly správně fungovat. Zahrnují například cookies pro udržení relace, zabezpečení a
                  základní funkčnost.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Analytické cookies</h3>
                <p className="leading-relaxed">
                  Používáme Vercel Analytics pro sledování návštěvnosti a chování uživatelů na našich stránkách. Tyto
                  cookies nám pomáhají pochopit, jak návštěvníci používají naše stránky, které stránky jsou
                  nejoblíbenější a jak se návštěvníci pohybují po webu. Všechny informace, které tyto cookies
                  shromažďují, jsou anonymní.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Jaké cookies používáme</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left">Název</th>
                        <th className="border border-border p-3 text-left">Účel</th>
                        <th className="border border-border p-3 text-left">Doba platnosti</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3">Vercel Analytics</td>
                        <td className="border border-border p-3">Anonymní sledování návštěvnosti</td>
                        <td className="border border-border p-3">Relace</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3">Funkční cookies</td>
                        <td className="border border-border p-3">Zapamatování preferencí</td>
                        <td className="border border-border p-3">1 rok</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Jak spravovat cookies</h2>
                <p className="leading-relaxed mb-3">
                  Většina webových prohlížečů automaticky přijímá cookies, ale můžete změnit nastavení svého prohlížeče
                  tak, aby cookies odmítal. Mějte však na paměti, že pokud cookies zakážete, některé funkce našich
                  webových stránek nemusí fungovat správně.
                </p>
                <p className="leading-relaxed mb-3">Návody pro správu cookies v jednotlivých prohlížečích:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Safari
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.microsoft.com/cs-cz/microsoft-edge/odstranění-souborů-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Změny těchto zásad</h2>
                <p className="leading-relaxed">
                  Tyto zásady používání cookies můžeme čas od času aktualizovat. Aktuální verze je vždy dostupná na této
                  stránce. Doporučujeme ji pravidelně kontrolovat.
                </p>
                <p className="leading-relaxed mt-3 text-muted-foreground">Poslední aktualizace: 1. 1. 2025</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Kontakt</h2>
                <p className="leading-relaxed">
                  Pokud máte jakékoli dotazy ohledně používání cookies na našich webových stránkách, kontaktujte nás na
                  emailu{" "}
                  <a href="mailto:info@webnamiru.site" className="text-primary hover:underline">
                    info@webnamiru.site
                  </a>
                  .
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
