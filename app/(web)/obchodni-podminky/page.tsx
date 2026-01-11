import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Obchodní podmínky | webnamiru.site",
  description: "Všeobecné obchodní podmínky pro služby webnamiru.site",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Obchodní podmínky
            </h1>
            <p className="text-muted-foreground">Platné od 1. 1. 2025</p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-6 prose prose-sm max-w-none">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  1. Úvodní ustanovení
                </h2>
                <p className="leading-relaxed">
                  Tyto všeobecné obchodní podmínky (dále jen "VOP") upravují
                  vztahy mezi poskytovatelem služeb Taras Ishchuk, IČO: 23874694
                  (dále jen "poskytovatel") a zákazníkem při poskytování služeb
                  v oblasti tvorby webových stránek, webového vývoje a
                  souvisejících IT služeb.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  2. Identifikace poskytovatele
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Jméno a příjmení: Taras Ishchuk</li>
                  <li>IČO: 23874694</li>
                  <li>
                    Sídlo: Rantířovská 123/36, 586 01 Jihlava - Horní Kosov
                  </li>
                  <li>Email: info@webnamiru.site</li>
                  <li>Telefon: +420 777 596 216</li>
                  <li>Fyzická osoba zapsaná v Živnostenském rejstříku</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  3. Předmět služeb
                </h2>
                <p className="leading-relaxed mb-3">
                  Poskytovatel nabízí následující služby:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Strategické plánování webových projektů</li>
                  <li>Vývoj webových stránek na míru</li>
                  <li>UX/UI design</li>
                  <li>Integrace CMS systémů (Sanity.io)</li>
                  <li>E-commerce řešení</li>
                  <li>Technická podpora a údržba</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  4. Uzavření smlouvy
                </h2>
                <p className="leading-relaxed">
                  Smlouva je uzavřena na základě písemné objednávky zákazníka a
                  jejího písemného potvrzení poskytovatelem. Konkrétní podmínky,
                  rozsah služeb, cena a termíny jsou specifikovány v
                  individuální smlouvě nebo objednávce.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Cena a platební podmínky
                </h2>
                <p className="leading-relaxed">
                  Cena služeb je stanovena individuálně na základě rozsahu a
                  složitosti projektu. Platební podmínky jsou specifikovány v
                  konkrétní smlouvě nebo na faktuře. Standardně je vyžadována
                  záloha 50% před zahájením prací a doplatek po dokončení
                  projektu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  6. Práva a povinnosti stran
                </h2>
                <p className="leading-relaxed mb-3">
                  Poskytovatel se zavazuje:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Poskytovat služby odborně a v dohodnuté kvalitě</li>
                  <li>Dodržovat dohodnuté termíny</li>
                  <li>Chránit důvěrné informace zákazníka</li>
                </ul>
                <p className="leading-relaxed mb-3">Zákazník se zavazuje:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Poskytnout potřebné podklady a informace</li>
                  <li>Hradit cenu služeb v dohodnutých termínech</li>
                  <li>Spolupracovat při realizaci projektu</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  7. Odstoupení od smlouvy
                </h2>
                <p className="leading-relaxed">
                  Zákazník má právo odstoupit od smlouvy uzavřené na dálku do 14
                  dnů od jejího uzavření bez udání důvodu, pokud již nebylo
                  započato s plněním na základě výslovné žádosti spotřebitele. V
                  případě, že bylo na žádost spotřebitele započato s plněním
                  před uplynutím lhůty pro odstoupení, právo na odstoupení
                  zaniká.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Reklamace</h2>
                <p className="leading-relaxed">
                  Zákazník má právo reklamovat vady poskytnutých služeb.
                  Reklamace musí být uplatněna písemně na email
                  info@webnamiru.site s popisem vady. Poskytovatel se zavazuje
                  vyřídit reklamaci do 30 dnů od jejího doručení.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  9. Ochrana osobních údajů
                </h2>
                <p className="leading-relaxed">
                  Poskytovatel zpracovává osobní údaje v souladu s Nařízením
                  (EU) 2016/679 (GDPR). Podrobné informace o zpracování osobních
                  údajů jsou uvedeny v dokumentu{" "}
                  <Link
                    href="/ochrana-osobnich-udaju"
                    className="text-primary hover:underline"
                  >
                    Ochrana osobních údajů
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  10. Závěrečná ustanovení
                </h2>
                <p className="leading-relaxed">
                  Tyto VOP jsou platné a účinné od 1. 1. 2025. Poskytovatel si
                  vyhrazuje právo tyto VOP změnit. Aktuální znění VOP je vždy
                  dostupné na webových stránkách webnamiru.site. Vztahy
                  neupravené těmito VOP se řídí občanským zákoníkem a dalšími
                  souvisejícími právními předpisy České republiky.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
