// components/Footer.tsx

import Link from "next/link"
import { Logo } from "@/components/Logo"
import { FirmyCzBadge } from "@/components/widgets/FirmyCzBadge"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-secondary">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Trust */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Webové řešení na míru pro vaše podnikání - Taras Ishchuk, OSVČ
            </p>
            <div className="pt-2">
              {/* Ponecháno pouze ověření (badge), widget s výzvou k recenzi byl odstraněn */}
              <FirmyCzBadge size="sm" variant="light" />
            </div>
          </div>

          {/* Main Services */}
          <div>
            <h4 className="font-semibold mb-4">Služby</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/sluzby" className="hover:text-accent transition-colors">
                  Všechny služby
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="hover:text-accent transition-colors">
                  Ceník
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/recenze" className="hover:text-accent transition-colors">
                  Recenze
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Process */}
          <div>
            <h4 className="font-semibold mb-4">Jak pracuji</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/o-mne" className="hover:text-accent transition-colors">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/zahajeni-projektu" className="hover:text-accent transition-colors">
                  Zahájení projektu
                </Link>
              </li>
              <li>
                <Link href="/jak-pracuji" className="hover:text-accent transition-colors">
                  Jak pracuji
                </Link>
              </li>
              <li>
                <Link href="/pro-klienty" className="hover:text-accent transition-colors">
                  Pro klienty
                </Link>
              </li>
              <li>
                <Link href="/nda" className="hover:text-accent transition-colors">
                  NDA
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>
                <a href="mailto:info@webnamiru.site" className="hover:text-accent transition-colors">
                  info@webnamiru.site
                </a>
              </li>
              <li>
                <a href="tel:+420777596216" className="hover:text-accent transition-colors">
                  +420 777 596 216
                </a>
              </li>
              <li>IČO: 23874694</li>
              <li>Taras Ishchuk, OSVČ</li>
              <li>Rantířovská 123/36</li>
              <li>586 01 Jihlava - Horní Kosov</li>
            </ul>
            <h4 className="font-semibold mb-4 text-xs">Právní informace</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/pravni-informace" className="hover:text-accent transition-colors">
                  Právní informace
                </Link>
              </li>
              <li>
                <Link href="/obchodni-podminky" className="hover:text-accent transition-colors">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link href="/ochrana-osobnich-udaju" className="hover:text-accent transition-colors">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-accent transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} webnamiru.site - Taras Ishchuk, OSVČ. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer