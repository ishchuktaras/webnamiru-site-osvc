// components/sections/HeroBento.tsx

import Link from "next/link";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Rocket, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function HeroBento() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            Tvorba webů Jihlava & Vysočina
          </div>

          {/* H1 Hlavní nadpis */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
            Tvořím weby, které <span className="text-blue-600">vydělávají</span>.
          </h1>

          {/* Podnadpis */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Specializuji se na moderní řešení postavená na <strong>Next.js</strong>. 
            Rychlost, bezpečnost a design na míru vašemu podnikání – žádné pomalé šablony, ale strategický nástroj pro váš růst.
          </p>

          {/* Tlačítka */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Nezávazná konzultace
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border-2 border-gray-100 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all"
            >
              Moje práce
            </Link>
          </div>
        </div>

        {/* Bento Grid Ukázka */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
            {/* Karta 1: Rychlost */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Extrémní rychlost</h3>
                <p className="text-gray-600 text-sm">Google miluje rychlé weby. Vaši zákazníci také. Optimalizace pro Core Web Vitals je samozřejmostí.</p>
            </div>

            {/* Karta 2: Responsivita */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <MonitorSmartphone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Responsivní</h3>
                <p className="text-gray-600 text-sm">Váš web bude vypadat skvěle na mobilu, tabletu i velkém monitoru. Žádné kompromisy.</p>
            </div>

             {/* Karta 3: Bezpečnost */}
             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bezpečnost a HTTPS</h3>
                <p className="text-gray-600 text-sm">Statické generování a moderní architektura Next.js znamená maximální odolnost proti útokům.</p>
            </div>
        </div>

      </div>
    </section>
  );
}