import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Obchodní podmínky | webnamiru.site",
  description: "Všeobecné obchodní podmínky pro služby webnamiru.site",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container px-4 py-20 mx-auto md:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-slate-900 dark:text-white">
              Obchodní podmínky
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Platné a účinné od 1. 1. 2025
            </p>
          </div>

          <Card className="border-slate-200 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                
                <h2>1. Úvodní ustanovení</h2>
                <p>
                  Tyto všeobecné obchodní podmínky (dále jen „VOP“) upravují vzájemná práva a povinnosti mezi poskytovatelem služeb (Taras Ishchuk) a zákazníkem, a to při poskytování služeb v oblasti tvorby webových stránek, webového vývoje a souvisejících IT služeb. VOP rozlišují, zda zákazník jedná v rámci své podnikatelské činnosti (B2B), nebo jako spotřebitel (B2C).
                </p>

                <h2>2. Identifikace poskytovatele</h2>
                <ul>
                  <li><strong>Jméno a příjmení:</strong> Taras Ishchuk</li>
                  <li><strong>IČO:</strong> 23874694</li>
                  <li><strong>Sídlo:</strong> Rantířovská 123/36, 586 01 Jihlava - Horní Kosov</li>
                  <li><strong>Email:</strong> <a href="mailto:info@webnamiru.site">info@webnamiru.site</a></li>
                  <li><strong>Telefon:</strong> +420 777 596 216</li>
                  <li><strong>Zápis v rejstříku:</strong> Fyzická osoba zapsaná v Živnostenském rejstříku vedeném Magistrátem města Jihlavy.</li>
                </ul>

                <h2>3. Předmět služeb</h2>
                <p>Poskytovatel nabízí následující služby:</p>
                <ul>
                  <li>Strategické plánování webových projektů</li>
                  <li>Vývoj webových stránek na míru</li>
                  <li>UX/UI design</li>
                  <li>Integrace CMS systémů (Sanity.io)</li>
                  <li>E-commerce řešení</li>
                  <li>Technická podpora a údržba</li>
                </ul>

                <h2>4. Uzavření smlouvy</h2>
                <p>
                  Smlouva je uzavřena na základě písemné objednávky zákazníka a jejího písemného potvrzení poskytovatelem. Konkrétní podmínky, rozsah služeb, cena a termíny jsou specifikovány v individuální smlouvě nebo schválené objednávce.
                </p>

                <h2>5. Cena a platební podmínky</h2>
                <p>
                  Cena služeb je stanovena individuálně na základě rozsahu a složitosti projektu. Platební podmínky jsou specifikovány v konkrétní smlouvě nebo na faktuře. Standardně je vyžadována záloha ve výši 50 % před zahájením prací a doplatek po dokončení a předání projektu.
                </p>

                <h2>6. Práva a povinnosti stran</h2>
                <p><strong>Poskytovatel se zavazuje:</strong></p>
                <ul>
                  <li>Poskytovat služby odborně a v dohodnuté kvalitě.</li>
                  <li>Dodržovat dohodnuté termíny.</li>
                  <li>Chránit důvěrné informace zákazníka.</li>
                </ul>
                <p><strong>Zákazník se zavazuje:</strong></p>
                <ul>
                  <li>Poskytnout včas všechny potřebné podklady a informace.</li>
                  <li>Hradit cenu služeb v dohodnutých termínech.</li>
                  <li>Spolupracovat při realizaci projektu.</li>
                </ul>

                <h2>7. Odstoupení od smlouvy</h2>
                <ul>
                  <li><strong>Zákazník – spotřebitel:</strong> Má právo odstoupit od smlouvy uzavřené na dálku do 14 dnů od jejího uzavření bez udání důvodu. V případě, že na výslovnou žádost spotřebitele bylo započato s plněním služeb před uplynutím lhůty pro odstoupení, právo na odstoupení od smlouvy zaniká.</li>
                  <li><strong>Zákazník – podnikatel:</strong> Právo na odstoupení od smlouvy bez udání důvodu do 14 dnů nemá. Odstoupení se řídí ujednáními v konkrétní smlouvě nebo příslušnými ustanoveními občanského zákoníku.</li>
                </ul>

                <h2>8. Reklamace</h2>
                <p>Zákazník má právo reklamovat vady poskytnutých služeb. Reklamace musí být uplatněna písemně na e-mail info@webnamiru.site s přesným popisem vady.</p>
                <ul>
                  <li><strong>Je-li zákazník spotřebitelem:</strong> Poskytovatel se zavazuje vyřídit reklamaci bez zbytečného odkladu, nejpozději však do 30 dnů od jejího doručení, pokud se se zákazníkem nedohodne na delší lhůtě.</li>
                  <li><strong>Je-li zákazník podnikatelem:</strong> Lhůta pro vyřízení reklamace závisí na vzájemné dohodě a složitosti vady; poskytovatel se zavazuje vady odstranit v přiměřené lhůtě.</li>
                </ul>

                <h2>9. Mimosoudní řešení sporů (pro spotřebitele)</h2>
                <p>
                  K mimosoudnímu řešení spotřebitelských sporů ze smlouvy o poskytování služeb je příslušná Česká obchodní inspekce (ČOI), se sídlem Štěpánská 567/15, 120 00 Praha 2, IČO: 000 20 869, internetová adresa: <a href="https://adr.coi.cz/cs" target="_blank" rel="noopener noreferrer">https://adr.coi.cz/cs</a>. Evropské spotřebitelské centrum Česká republika, se sídlem Štěpánská 567/15, 120 00 Praha 2, internetová adresa: <a href="http://www.evropskyspotrebitel.cz" target="_blank" rel="noopener noreferrer">http://www.evropskyspotrebitel.cz</a> je kontaktním místem podle Nařízení Evropského parlamentu a Rady (EU) č. 524/2013 o řešení spotřebitelských sporů on-line.
                </p>

                <h2>10. Ochrana osobních údajů</h2>
                <p>
                  Poskytovatel zpracovává osobní údaje v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR). Podrobné informace o zpracování osobních údajů a právech zákazníků jsou uvedeny v samostatném dokumentu Ochrana osobních údajů (Zásady zpracování osobních údajů), který je dostupný na webu poskytovatele.
                </p>

                <h2>11. Závěrečná ustanovení</h2>
                <p>
                  Tyto VOP jsou platné a účinné od 1. 1. 2025. Poskytovatel si vyhrazuje právo VOP v přiměřeném rozsahu změnit. Aktuální znění VOP je vždy dostupné na webových stránkách webnamiru.site. Právní vztahy neupravené těmito VOP se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanský zákoník.
                </p>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}