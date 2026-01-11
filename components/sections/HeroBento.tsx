import Image from 'next/image';
import Link from 'next/link';

export default function HeroBento() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      
      {/* 1. Hlavní nadpis (Copywriting) */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D1B3E] tracking-tight mb-6">
          Tvořím weby, které <span className="text-[#3B82F6]">vydělávají</span>.
          <br className="hidden md:block" /> Jihlava a Vysočina.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Žádné šablony, žádné pomalé načítání. Moderní technologie Next.js, 
          které vám přivedou zákazníky. Osobní přístup přímo od vývojáře.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#kontakt" 
            className="bg-[#3B82F6] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Chci nezávaznou konzultaci
          </Link>
          <Link 
            href="/portfolio" 
            className="bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Vidět portfolio
          </Link>
        </div>
      </div>

      {/* 2. Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Karta 1: Rychlost (Velká) */}
        <div className="md:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-center hover:border-blue-200 transition-colors group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
               {/* Icon: Lightning */}
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0D1B3E]">Google PageSpeed 100/100</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Vaši zákazníci nebudou čekat. Váš web bude bleskurychlý díky statickému generování.
            <span className="block mt-2 text-sm text-gray-400 group-hover:text-blue-600 transition-colors">Testováno na reálných zařízeních →</span>
          </p>
        </div>

        {/* Karta 2: Foto (Čtverec - Důvěra) */}
        <div className="relative bg-[#3B82F6] rounded-3xl overflow-hidden min-h-[250px]">
          {/* Zde by měl být Image komponent s vaší fotkou */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 to-transparent z-10" />
          {/* Placeholder pro fotku, nahraďte src reálnou cestou */}
          <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">FOTO</div>
          
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <p className="font-bold text-xl">Taras Ishchuk</p>
            <p className="text-sm opacity-90">Váš vývojář & partner</p>
          </div>
        </div>

        {/* Karta 3: Tech Stack (Čtverec - Autorita) */}
        <div className="bg-[#0D1B3E] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-xl font-bold mb-2">Next.js + Sanity</h3>
            <p className="text-gray-400 text-sm">Stack, který používá Netflix i Uber.</p>
          </div>
          <div className="z-10 mt-4">
             <div className="text-3xl font-bold text-[#3B82F6]">2025</div>
             <div className="text-sm text-gray-400">Standard kvality</div>
          </div>
          {/* Dekorativní kruhy */}
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-2xl" />
        </div>

        {/* Karta 4: Lokalita (Velká) */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#0D1B3E] mb-2">Jihlava & Vysočina</h3>
            <p className="text-gray-600 mb-4">
              Nejsem anonymní agentura z Prahy. Jsem místní. 
              Můžeme se potkat osobně, probrat váš byznys u kávy a najít řešení na míru.
            </p>
            <Link href="#kontakt" className="text-[#3B82F6] font-semibold hover:underline">Domluvit schůzku v Jihlavě →</Link>
          </div>
          {/* Zde může být ikonická grafika mapy nebo špendlíku */}
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-4xl">
            📍
          </div>
        </div>

      </div>
    </section>
  );
}