export default function ProcessSteps() {
  const steps = [
    {
      id: '01',
      title: 'Konzultace & Zadání',
      description: 'Pochopím váš byznys. Vyplníme dotazník, stanovíme cíle a rozpočet. Žádné technické složitosti pro vás.',
    },
    {
      id: '02',
      title: 'Vývoj & Design',
      description: 'Stavím na Next.js. Vy vidíte průběžné výsledky na testovací adrese. Ladíme texty a grafiku.',
    },
    {
      id: '03',
      title: 'Spuštění & Růst',
      description: 'Web nasadíme, napojíme analytiku a Google Moje Firma. Předám vám přístup do administrace Sanity.',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0D1B3E]">Jak probíhá spolupráce?</h2>
          <p className="mt-4 text-gray-600">Jednoduše. Transparentně. Bez stresu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow bg-gray-50">
              <div className="text-5xl font-extrabold text-[#E5E7EB] absolute top-4 right-4 select-none">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-[#0D1B3E] mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}