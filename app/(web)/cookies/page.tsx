import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Zásady používání cookies | webnamiru.site",
  description: "Informace o používání cookies na webových stránkách webnamiru.site",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 py-20 mx-auto md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 dark:text-white">
              Zásady používání cookies
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Informace o souborech cookies používaných na našich webových stránkách.
            </p>
          </div>

          <Card className="border-slate-200 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Tento dokument vysvětluje, jaké soubory cookies a podobné technologie používáme na webových stránkách <strong>webnamiru.site</strong>. Správcem webu a vašich osobních údajů je <strong>Taras Ishchuk</strong>, IČO: 23874694, se sídlem Rantířovská 123/36, 586 01 Jihlava.
                </p>

                <h2>1. Co jsou cookies?</h2>
                <p>
                  Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení (počítač, tablet, smartphone) při návštěvě webových stránek. Umožňují webu zapamatovat si vaše akce a preference (jako je přihlášení, jazyk, velikost písma a další nastavení) po určitou dobu, takže je nemusíte zadávat znovu při každé návštěvě nebo při procházení mezi jednotlivými stránkami.
                </p>

                <h2>2. Jak používáme cookies?</h2>
                <p>Na našich webových stránkách používáme následující typy cookies:</p>

                <h3>A. Nezbytné cookies (Technické)</h3>
                <p>Tyto cookies jsou nezbytné pro správné fungování webových stránek a nelze je v našich systémech vypnout. Bez nich by web nefungoval správně.</p>
                <ul>
                  <li><strong>cookie-consent</strong>: Ukládá vaše preference ohledně přijetí/odmítnutí cookies (platnost: 1 rok).</li>
                  <li><strong>theme</strong>: Ukládá vaši preferenci světlého nebo tmavého režimu webu (platnost: 1 rok).</li>
                </ul>

                <h3>B. Analytické cookies (Pouze s vaším souhlasem)</h3>
                <p>Tyto cookies nám pomáhají pochopit, jak návštěvníci používají náš web, abychom mohli zlepšovat jeho funkčnost a obsah. Spouští se pouze v případě, že nám k tomu dáte na cookies liště souhlas.</p>
                <ul>
                  <li><strong>_ga</strong> (Google Analytics): Rozlišuje uživatele pro statistické účely (platnost: 2 roky).</li>
                  <li><strong>_gid</strong> (Google Analytics): Rozlišuje uživatele pro statistické účely (platnost: 24 hodin).</li>
                  <li><strong>_gat</strong> (Google Analytics): Omezuje rychlost požadavků (platnost: 1 minuta).</li>
                  <li><strong>Vercel Analytics</strong>: Anonymizované měření návštěvnosti a výkonu webu.</li>
                </ul>
                <p>
                  <em>Poznámka: Google Analytics používáme s nastavením anonymizace IP adres pro maximální ochranu vašeho soukromí.</em>
                </p>

                <h3>C. Marketingové cookies (Pouze s vaším souhlasem)</h3>
                <p>Používají se pro sledování návštěvníků napříč webovými stránkami za účelem zobrazení relevantních reklam.</p>
                <ul>
                  <li><em>Aktuálně nepoužíváme žádné marketingové cookies třetích stran.</em></li>
                </ul>

                <h2>3. Cookies třetích stran</h2>
                <p>Některé cookies mohou být nastaveny třetími stranami, jejichž služby využíváme pro provoz webu:</p>
                <ul>
                  <li><strong>Vercel:</strong> Poskytovatel hostingu a analytických služeb.</li>
                  <li><strong>Sanity.io:</strong> Systém pro správu obsahu (CMS).</li>
                </ul>

                <h2>4. Google reCAPTCHA</h2>
                <p>
                  Pro ochranu našeho kontaktního formuláře před spamem a roboty používáme technologii <strong>Google reCAPTCHA v3</strong>. Tato služba sbírá hardwarové a softwarové informace (např. data o zařízení a aplikaci) a odesílá je společnosti Google za účelem analýzy rizik. Používání reCAPTCHA podléhá <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Zásadám ochrany osobních údajů Google</a> a <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Podmínkám používání služeb Google</a>.
                </p>

                <h2>5. Jak spravovat a smazat cookies?</h2>
                <p>Máte plnou kontrolu nad tím, jaké cookies (kromě těch nezbytných) nám povolíte zpracovávat.</p>
                
                <p><strong>Změna souhlasu na webu:</strong><br />
                Své preference můžete kdykoliv změnit nebo svůj souhlas odvolat kliknutím na odkaz „Nastavení cookies“ (nebo ikonku štítu), který najdete v patičce našeho webu.</p>
                
                <p><strong>Nastavení prohlížeče:</strong><br />
                Většina webových prohlížečů umožňuje správu cookies přímo ve svém nastavení. Můžete je plně zablokovat nebo smazat. Mějte však na paměti, že pokud zablokujete i nezbytné cookies, náš web nemusí fungovat správně. Návody pro nejběžnější prohlížeče:</p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/cs/kb/vymazani-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                  <li><a href="https://support.microsoft.com/cs-cz/microsoft-edge/odstran%C4%9Bn%C3%AD-soubor%C5%AF-cookie-v-aplikaci-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>
                
                <h2>6. Kontakt</h2>
                <p>
                  Máte-li jakékoli dotazy ohledně našeho používání cookies, kontaktujte nás prosím na e-mailu: <a href="mailto:info@webnamiru.site">info@webnamiru.site</a>.
                </p>

                <hr />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Poslední aktualizace: 9. března 2026. Další informace naleznete v <Link href="/ochrana-osobnich-udaju">Zásadách ochrany osobních údajů</Link>.
                </p>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}