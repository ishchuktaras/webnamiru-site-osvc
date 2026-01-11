import HeroBento from '@/components/sections/HeroBento';
import ProcessSteps from '@/components/sections/ProcessSteps';
// import ServicesPreview from '@/components/sections/ServicesPreview'; // Odkomentujte, až budete mít tuto komponentu

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Sekce s Bento Gridem */}
      <HeroBento />

      {/* 2. Proces spolupráce */}
      <ProcessSteps />

      {/* 3. KONTAKTNÍ SEKCE - Cíl scrollování */}
      <section id="kontakt" className="py-24 bg-[#0D1B3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Máte projekt? Pojďme ho probrat.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Napište mi stručně, co potřebujete. Ozvu se vám do 24 hodin a domluvíme si nezávaznou konzultaci (online nebo v Jihlavě).
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <a 
               href="mailto:info@webnamiru.site" 
               className="bg-[#3B82F6] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/20"
             >
               Napsat na info@webnamiru.site
             </a>
             
             <a 
               href="tel:+420777596216"
               className="text-gray-300 hover:text-white font-medium transition-colors"
             >
               Zavolat: +420 777 596 216
             </a>
          </div>

        </div>
      </section>
    </main>
  );
}