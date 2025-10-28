import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Právní informace | webnamiru.site",
  description:
    "Identifikační a právní údaje poskytovatele služeb webnamiru.site",
};

export default function LegalInfoPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Právní informace</h1>
            <p className="text-lg text-muted-foreground">
              Identifikační a právní údaje poskytovatele služeb
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Identifikace podnikatele</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-sm text-muted-foreground mb-1">
                    Jméno a příjmení
                  </div>
                  <div>Taras Ishchuk</div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-muted-foreground mb-1">
                    IČO
                  </div>
                  <div>23874694</div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-muted-foreground mb-1">
                    Sídlo
                  </div>
                  <div>Rantířovská 123/36, 586 01 Jihlava - Horní Kosov</div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-muted-foreground mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:info@webnamiru.site"
                    className="text-primary hover:underline"
                  >
                    info@webnamiru.site
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-sm text-muted-foreground mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:+420777596216"
                    className="text-primary hover:underline"
                  >
                    +420 777 596 216
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="font-semibold text-sm text-muted-foreground mb-2">
                  Údaj o zápisu v živnostenském rejstříku
                </div>
                <p className="text-sm leading-relaxed">
                  Fyzická osoba samostatně výdělečně činná (OSVČ) zapsaná v
                  Živnostenském rejstříku.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Předmět podnikání:
                </p>
                <ul className="text-sm list-disc list-inside space-y-1 mt-1 text-muted-foreground">
                  <li>Poradenství v oblasti informačních technologií</li>
                  <li>Programování</li>
                  <li>Činnosti související s webovými portály</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Marketingové označení</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed">
                Název "webnamiru.site" je marketingové označení používané pro
                prezentaci služeb tvorby webových stránek na míru. Poskytovatel
                služeb je fyzická osoba Taras Ishchuk, IČO: 23874694.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Veškeré služby jsou poskytovány v souladu s platnou legislativou
                České republiky.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Další právní dokumenty</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/obchodni-podminky"
                    className="text-primary hover:underline"
                  >
                    Obchodní podmínky
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ochrana-osobnich-udaju"
                    className="text-primary hover:underline"
                  >
                    Ochrana osobních údajů (GDPR)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-primary hover:underline"
                  >
                    Zásady používání cookies
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
