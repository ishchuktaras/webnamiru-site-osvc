import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Ochrana osobních údajů | webnamiru.site",
  description: "Informace o zpracování osobních údajů v souladu s GDPR",
}

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold">Ochrana osobních údajů</h1>
            <p className="text-muted-foreground">Informace o zpracování osobních údajů v souladu s GDPR</p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6 prose prose-sm max-w-none">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Správce osobních údajů</h2>
                <p className="leading-relaxed mb-3">Správcem vašich osobních údajů je:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Jméno a příjmení: Taras Ishchuk</li>
                  <li>IČO: 23874694</li>
                  <li>Sídlo: Rantířovská 123/36, 586 01 Jihlava - Horní Kosov</li>
                  <li>Email: info@webnamiru.site</li>
                  <li>Telefon: +420 777 596 216</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Jaké osobní údaje zpracováváme</h2>
                <p className="leading-relaxed mb-3">Zpracováváme následující kategorie osobních údajů:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Identifikační údaje (jméno, příjmení)</li>
                  <li>Kontaktní údaje (email, telefon)</li>
                  <li>Údaje o firmě (název firmy, IČO)</li>
                  <li>Údaje o projektu (popis požadavků, rozpočet)</li>
                  <li>Technické údaje (IP adresa, cookies)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Účel a právní základ zpracování</h2>
                <p className="leading-relaxed mb-3">Vaše osobní údaje zpracováváme za následujícími účely:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Plnění smlouvy:</strong> Pro poskytování objednaných služeb (čl. 6 odst. 1 písm. b) GDPR)
                  </li>
                  <li>
                    <strong>Oprávněný zájem:</strong> Pro komunikaci, marketing a zlepšování služeb (čl. 6 odst. 1 písm.
                    f) GDPR)
                  </li>
                  <li>
                    <strong>Souhlas:</strong> Pro zasílání newsletteru a marketingových sdělení (čl. 6 odst. 1 písm. a)
                    GDPR)
                  </li>
                  <li>
                    <strong>Právní povinnost:</strong> Pro účetní a daňové účely (čl. 6 odst. 1 písm. c) GDPR)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Doba zpracování</h2>
                <p className="leading-relaxed">
                  Osobní údaje zpracováváme po dobu nezbytnou k naplnění účelu zpracování:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>
                    Údaje pro plnění smlouvy: po dobu trvání smluvního vztahu a následně po dobu stanovenou právními
                    předpisy (typicky 10 let pro účetní doklady)
                  </li>
                  <li>Údaje pro marketing: do odvolání souhlasu nebo vznešení námitky</li>
                  <li>Technické údaje (cookies): dle nastavení prohlížeče, maximálně 2 roky</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Příjemci osobních údajů</h2>
                <p className="leading-relaxed mb-3">
                  Vaše osobní údaje můžeme předávat následujícím kategoriím příjemců:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Poskytovatelé hostingových služeb (Vercel)</li>
                  <li>Poskytovatelé emailových služeb (Resend)</li>
                  <li>Poskytovatelé analytických nástrojů (Vercel Analytics)</li>
                  <li>Účetní a daňoví poradci</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Vaše práva</h2>
                <p className="leading-relaxed mb-3">
                  V souvislosti se zpracováním osobních údajů máte následující práva:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Právo na přístup:</strong> Máte právo získat informace o zpracování vašich osobních údajů
                  </li>
                  <li>
                    <strong>Právo na opravu:</strong> Máte právo na opravu nepřesných osobních údajů
                  </li>
                  <li>
                    <strong>Právo na výmaz:</strong> Máte právo požadovat výmaz osobních údajů
                  </li>
                  <li>
                    <strong>Právo na omezení zpracování:</strong> Máte právo požadovat omezení zpracování
                  </li>
                  <li>
                    <strong>Právo na přenositelnost:</strong> Máte právo získat osobní údaje v strukturovaném formátu
                  </li>
                  <li>
                    <strong>Právo vznést námitku:</strong> Máte právo vznést námitku proti zpracování
                  </li>
                  <li>
                    <strong>Právo odvolat souhlas:</strong> Pokud je zpracování založeno na souhlasu, máte právo jej
                    kdykoli odvolat
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Pro uplatnění svých práv nás kontaktujte na emailu info@webnamiru.site. Máte také právo podat stížnost
                  u Úřadu pro ochranu osobních údajů (www.uoou.cz).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Zabezpečení osobních údajů</h2>
                <p className="leading-relaxed">
                  Přijali jsme vhodná technická a organizační opatření k zabezpečení osobních údajů proti neoprávněnému
                  přístupu, ztrátě, zničení nebo pozměnění. Používáme šifrované připojení (HTTPS), bezpečné hostingové
                  služby a pravidelně aktualizujeme bezpečnostní opatření.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
                <p className="leading-relaxed">
                  Naše webové stránky používají cookies pro zajištění funkčnosti a analýzu návštěvnosti. Podrobné
                  informace o používání cookies najdete v dokumentu{" "}
                  <Link href="/cookies" className="text-primary hover:underline">
                    Zásady používání cookies
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Změny těchto zásad</h2>
                <p className="leading-relaxed">
                  Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. Aktuální verze je vždy dostupná na
                  této stránce. Doporučujeme ji pravidelně kontrolovat.
                </p>
                <p className="leading-relaxed mt-3 text-muted-foreground">Poslední aktualizace: 1. 1. 2025</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
