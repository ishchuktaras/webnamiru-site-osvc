import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Zásady používání cookies | webnamiru.site",
  description: "Informace o používání cookies na webových stránkách webnamiru.site",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Zásady používání cookies</h1>
            <p className="text-muted-foreground">Informace o cookies používaných na našich webových stránkách</p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6 prose prose-sm max-w-none">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Co jsou cookies?</h2>
                <p className="leading-relaxed">
                  Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení (počítač, tablet, smartphone)
                  při návštěvě webových stránek. Cookies umožňují webovým stránkám zapamatovat si vaše akce a preference
                  (jako je přihlášení, jazyk, velikost písma a další nastavení) po určitou dobu, takže je nemusíte
                  zadávat znovu při každé návštěvě stránek nebo při procházení z jedné stránky na druhou.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Jak používáme cookies?</h2>
                <p className="leading-relaxed mb-3">Na našich webových stránkách používáme následující typy cookies:</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">1. Nezbytné cookies</h3>
                    <p className="leading-relaxed">
                      Tyto cookies jsou nezbytné pro správné fungování webových stránek. Bez těchto cookies by některé
                      funkce webu nefungovaly správně.
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                      <li>
                        <strong>cookie-consent</strong> - Ukládá vaše preference ohledně cookies (platnost: 1 rok)
                      </li>
                      <li>
                        <strong>theme</strong> - Ukládá vaši preferenci světlého/tmavého režimu (platnost: 1 rok)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">2. Analytické cookies (pouze s vaším souhlasem)</h3>
                    <p className="leading-relaxed">
                      Tyto cookies nám pomáhají pochopit, jak návštěvníci používají naše webové stránky, abychom mohli
                      zlepšovat jejich funkčnost a obsah.
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                      <li>
                        <strong>_ga</strong> - Google Analytics - rozlišuje uživatele (platnost: 2 roky)
                      </li>
                      <li>
                        <strong>_gid</strong> - Google Analytics - rozlišuje uživatele (platnost: 24 hodin)
                      </li>
                      <li>
                        <strong>_gat</strong> - Google Analytics - omezuje rychlost požadavků (platnost: 1 minuta)
                      </li>
                      <li>
                        <strong>Vercel Analytics</strong> - Anonymizované měření návštěvnosti a výkonu webu
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Poznámka: Google Analytics používáme s anonymizací IP adres pro ochranu vašeho soukromí.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">3. Marketingové cookies (pouze s vaším souhlasem)</h3>
                    <p className="leading-relaxed">
                      Tyto cookies se používají pro zobrazení relevantních reklam a marketingových kampaní.
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                      <li>Aktuálně nepoužíváme marketingové cookies třetích stran</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies třetích stran</h2>
                <p className="leading-relaxed">
                  Některé cookies mohou být nastaveny třetími stranami, jejichž služby využíváme na našich webových
                  stránkách:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>
                    <strong>Vercel:</strong> Poskytovatel hostingu a analytických služeb
                  </li>
                  <li>
                    <strong>Sanity.io:</strong> Systém pro správu obsahu
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Jak spravovat cookies?</h2>
                <p className="leading-relaxed mb-3">
                  Většina webových prohlížečů automaticky přijímá cookies, ale můžete změnit nastavení svého prohlížeče
                  tak, aby cookies odmítal nebo vás upozornil, když je cookie odesílán. Mějte však na paměti, že pokud
                  cookies zakážete, některé funkce našich webových stránek nemusí fungovat správně.
                </p>
                <p className="leading-relaxed mb-3">Návody pro správu cookies v různých prohlížečích:</p>
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
                <h2 className="text-2xl font-semibold mb-4">Google reCAPTCHA</h2>
                <p className="leading-relaxed">
                  Pro ochranu našeho kontaktního formuláře před spamem používáme Google reCAPTCHA v3. reCAPTCHA sbírá
                  hardwarové a softwarové informace, jako je data o zařízení a aplikaci, a odesílá je společnosti Google
                  za účelem analýzy rizik.
                </p>
                <p className="leading-relaxed mt-3">
                  Používání reCAPTCHA podléhá{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Zásadám ochrany osobních údajů Google
                  </a>{" "}
                  a{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Podmínkám používání služeb Google
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Doba platnosti cookies</h2>
                <p className="leading-relaxed">Různé cookies mají různou dobu platnosti:</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>
                    <strong>Session cookies:</strong> Dočasné cookies, které se automaticky smažou po zavření prohlížeče
                  </li>
                  <li>
                    <strong>Persistent cookies:</strong> Zůstávají uloženy po určitou dobu nebo dokud je ručně
                    neodstraníte:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-muted-foreground">
                      <li>Preference cookies: 1 rok</li>
                      <li>Google Analytics: až 2 roky</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Změny těchto zásad</h2>
                <p className="leading-relaxed">
                  Tyto zásady používání cookies můžeme čas od času aktualizovat. Doporučujeme pravidelně kontrolovat
                  tuto stránku, abyste byli informováni o případných změnách.
                </p>
                <p className="leading-relaxed mt-3 text-muted-foreground">Poslední aktualizace: 28. 10. 2025</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
                <p className="leading-relaxed">
                  Pokud máte jakékoli dotazy ohledně našeho používání cookies, kontaktujte nás prosím na emailu{" "}
                  <a href="mailto:info@webnamiru.site" className="text-primary hover:underline">
                    info@webnamiru.site
                  </a>
                  .
                </p>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  Další informace o ochraně osobních údajů najdete v dokumentu{" "}
                  <Link href="/ochrana-osobnich-udaju" className="text-primary hover:underline">
                    Ochrana osobních údajů
                  </Link>
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
