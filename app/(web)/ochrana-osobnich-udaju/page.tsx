import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Ochrana osobních údajů | webnamiru.site",
  description: "Informace o zpracování osobních údajů v souladu s GDPR",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 py-20 mx-auto md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 dark:text-white">
              Ochrana osobních údajů
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Informace o zpracování osobních údajů v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR)
            </p>
          </div>

          <Card className="border-slate-200 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                
                <h2>1. Správce osobních údajů</h2>
                <p>Správcem vašich osobních údajů je:</p>
                <ul>
                  <li><strong>Jméno a příjmení:</strong> Taras Ishchuk</li>
                  <li><strong>IČO:</strong> 23874694</li>
                  <li><strong>Sídlo:</strong> Rantířovská 123/36, 586 01 Jihlava - Horní Kosov</li>
                  <li><strong>Email:</strong> <a href="mailto:info@webnamiru.site">info@webnamiru.site</a></li>
                  <li><strong>Telefon:</strong> +420 777 596 216</li>
                </ul>

                <h2>2. Jaké osobní údaje zpracováváme</h2>
                <p>V rámci naší činnosti a fungování webu zpracováváme následující kategorie osobních údajů:</p>
                <ul>
                  <li><strong>Identifikační údaje:</strong> jméno, příjmení</li>
                  <li><strong>Kontaktní údaje:</strong> e-mailová adresa, telefonní číslo</li>
                  <li><strong>Firemní údaje:</strong> název firmy, IČO, DIČ, sídlo</li>
                  <li><strong>Údaje o projektu a komunikaci:</strong> obsah zpráv z kontaktního formuláře, specifikace požadavků, rozpočet</li>
                  <li><strong>Technické údaje:</strong> IP adresa, soubory cookies (viz <Link href="/cookies">Zásady používání cookies</Link>)</li>
                </ul>

                <h2>3. Účel a právní základ zpracování</h2>
                <p>Vaše osobní údaje zpracováváme výhradně pro tyto účely a na těchto právních základech:</p>
                <ul>
                  <li><strong>Vyřízení poptávky a plnění smlouvy:</strong> Pokud nás kontaktujete přes formulář, údaje potřebujeme k tomu, abychom vám mohli odpovědět a případně s vámi uzavřít smlouvu a poskytnout vám IT služby. Právním základem je plnění smlouvy a provedení opatření přijatých před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR).</li>
                  <li><strong>Plnění právních povinností:</strong> Údaje z faktur a smluv musíme uchovávat pro účetní a daňové účely. Právním základem je splnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR).</li>
                  <li><strong>Oprávněný zájem:</strong> Vaše údaje můžeme využít pro ochranu našich právních nároků, zajištění bezpečnosti webu nebo pro přímý marketing (nabídka obdobných služeb stávajícím klientům). Právním základem je náš oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR).</li>
                  <li><strong>Souhlas:</strong> Pro ukládání analytických a marketingových cookies vyžadujeme váš výslovný souhlas přes cookies lištu (čl. 6 odst. 1 písm. a) GDPR).</li>
                </ul>

                <h2>4. Doba zpracování</h2>
                <p>Osobní údaje zpracováváme pouze po dobu nezbytnou k naplnění účelu:</p>
                <ul>
                  <li><strong>Komunikace a poptávky:</strong> Pokud nedojde k uzavření spolupráce, mažeme data z poptávkového formuláře nejpozději do 1 roku od poslední komunikace.</li>
                  <li><strong>Údaje pro plnění smlouvy:</strong> Po dobu trvání smluvního vztahu a následně po dobu stanovenou právními předpisy (typicky 10 let pro účetní doklady a faktury).</li>
                  <li><strong>Technické údaje (cookies):</strong> Dle nastavení vašeho prohlížeče a preferencí na našem webu, maximálně však po dobu 2 let.</li>
                </ul>

                <h2>5. Příjemci osobních údajů (Zpracovatelé)</h2>
                <p>Pro zajištění fungování webu a našich služeb můžeme vaše osobní údaje předávat prověřeným partnerům, kteří zajišťují technické zázemí (tzv. zpracovatelé):</p>
                <ul>
                  <li><strong>Vercel Inc.:</strong> Poskytovatel hostingových služeb a analytických nástrojů.</li>
                  <li><strong>Sanity.io:</strong> Poskytovatel cloudového systému pro správu obsahu webu (CMS).</li>
                  <li><strong>Resend:</strong> Poskytovatel transakčních e-mailových služeb (pro odesílání formulářů).</li>
                  <li><strong>WEDOS Internet, a.s.:</strong> Poskytovatel domény a hostingu pro naši e-mailovou schránku.</li>
                  <li><strong>Externí dodavatelé:</strong> Naši účetní či daňoví poradci za účelem plnění zákonných povinností.</li>
                </ul>

                <h2>6. Vaše práva</h2>
                <p>V souvislosti se zpracováním vašich osobních údajů máte široká práva:</p>
                <ul>
                  <li><strong>Právo na přístup:</strong> Máte právo vědět, jaké údaje o vás zpracováváme.</li>
                  <li><strong>Právo na opravu:</strong> Máte právo požádat o opravu nepřesných nebo neaktuálních údajů.</li>
                  <li><strong>Právo na výmaz („právo být zapomenut“):</strong> Pokud již údaje nepotřebujeme nebo odvoláte souhlas, na požádání je smažeme (pokud nám v tom nebrání zákon).</li>
                  <li><strong>Právo na omezení zpracování:</strong> Máte právo požadovat, abychom omezili rozsah zpracování.</li>
                  <li><strong>Právo na přenositelnost:</strong> Máte právo získat své údaje ve strukturovaném formátu.</li>
                  <li><strong>Právo vznést námitku:</strong> Proti zpracování na základě našeho oprávněného zájmu.</li>
                  <li><strong>Právo odvolat souhlas:</strong> Pokud zpracováváme údaje na základě vašeho souhlasu (např. cookies), můžete jej kdykoli odvolat.</li>
                </ul>
                <p>
                  Pro uplatnění svých práv nás kdykoli kontaktujte na e-mailu: <a href="mailto:info@webnamiru.site">info@webnamiru.site</a>. Pokud se domníváte, že s vašimi daty nenakládáme správně, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz).
                </p>

                <h2>7. Zabezpečení osobních údajů</h2>
                <p>
                  Přijali jsme vhodná technická a organizační opatření, abychom vaše data ochránili před neoprávněným přístupem, ztrátou nebo zničením. Veškerá komunikace s webem je šifrována (HTTPS), využíváme spolehlivé cloudové poskytovatele a přístupy do administrace jsou chráněny.
                </p>

                <h2>8. Změny těchto zásad</h2>
                <p>
                  Tyto zásady ochrany osobních údajů můžeme průběžně aktualizovat. Aktuální verze je vždy dostupná na této stránce.
                </p>

                <hr />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Poslední aktualizace: 9. března 2026
                </p>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}