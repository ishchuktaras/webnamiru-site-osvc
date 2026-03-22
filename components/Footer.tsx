
// components/Footer.tsx
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { 
  Facebook, Linkedin, Instagram, ArrowRight, Code2, 
  Palette, Target, Server, Lightbulb, Camera, Database, Globe, Sparkles 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B3E] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 1. Značka & Mise */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              webnamiru.site
            </h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Strategický partner pro tvorbu profesionálních webů na Vysočině.
              Pomáhám živnostníkům a firmám růst pomocí moderních technologií.
            </p>
          </div>

          {/* 2. Rychlé odkazy */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sluzby" className="hover:text-[#3B82F6]">Služby</Link></li>
              <li><Link href="/cenik" className="hover:text-white">Ceník</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#3B82F6]">Portfolio</Link></li>
              <li><Link href="/o-mne" className="hover:text-white">O mně</Link></li>
              <li><Link href="/faq" className="hover:text-[#3B82F6]">Časté dotazy</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
            </ul>
          </div>

          {/* 3. Kontakt & Právní info + SOCIÁLNÍ SÍTĚ */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@webnamiru.site" className="hover:text-[#3B82F6]">info@webnamiru.site</a>
              </li>
              <li>
                <a href="tel:+420777596216" className="hover:text-[#3B82F6]">+420 777 596 216</a>
              </li>
              <li className="pt-4 text-xs text-gray-500">
                Taras Ishchuk, OSVČ<br />
                IČO: 23874694<br />
                Sídlo: Rantířovská 123/36, Jihlava
              </li>
            </ul>

            {/* ---> PŘIDÁNO: Ikony sociálních sítí <--- */}
            <h4 className="text-white font-semibold mb-4 mt-8">Sledujte mě</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61585706732149" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ishchuktaras" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/webnamiru.site" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#3B82F6] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Spodní lišta */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Taras Ishchuk. Všechna práva vyhrazena.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/ochrana-osobnich-udaju" className="hover:text-white">GDPR</Link>
            <Link href="/obchodni-podminky" className="hover:text-white">Obchodní podmínky</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}