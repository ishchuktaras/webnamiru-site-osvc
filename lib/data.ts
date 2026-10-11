// lib/data.ts

export const services = [
  {
    id: "vyvoj-webu-na-miru",
    title: "Vývoj webu na míru",
    shortDescription: "Moderní webové aplikace s extrémní rychlostí a nekompromisní bezpečností.",
    priceFrom: 19900,
    features: [
      "Bleskurychlý výkon (Core Web Vitals)",
      "Mobile-first responzivita",
      "Bezpečnost a moderní architektura (Next.js)",
      "Škálovatelnost pro růst podnikání"
    ],
    icon: "Code2"
  },
  {
    id: "ux-ui-strategie",
    title: "UX/UI Strategie & Design",
    shortDescription: "Návrh intuitivních rozhraní kombinujících estetiku s psychologií uživatele.",
    priceFrom: 12000,
    features: [
      "Analýza cílové skupiny a konkurence",
      "Wireframing a prototypování",
      "Vizuální identita a design systém",
      "Optimalizace konverzní trasy (CRO)"
    ],
    icon: "Target"
  },
  {
    id: "sprava-a-rozvoj",
    title: "Správa a rozvoj webu",
    shortDescription: "Kontinuální technická podpora, bezpečnostní aktualizace a obsahový rozvoj.",
    priceFrom: 1500,
    features: [
      "Pravidelné bezpečnostní aktualizace",
      "Automatické zálohování a monitoring",
      "Obsahové úpravy na míru",
      "SEO reporting a analytika"
    ],
    icon: "Shield"
  }
];

export const portfolio = [
  {
    id: "yurij-stav-group",
    title: "Yurij Stav Group",
    client: "Yurij Stav Group s.r.o.",
    date: "2026-09",
    status: "completed",
    coverImage: "/portfolio/yurij-stav.jpg", // Obrázky nyní uložíš přímo do složky public/portfolio/
    url: "https://www.yurijstavgroup.cz/",
    description: "Kompletní návrh a vývoj firemní prezentace pro stavební společnost. Důraz na tmavý, prémiový design a vysokou rychlost načítání pro maximalizaci poptávek."
  },
  {
    id: "izolace-rs",
    title: "Izolace RS",
    client: "IZOLACE RS",
    date: "2026-10",
    status: "completed",
    coverImage: "/portfolio/izolace-rs.jpg",
    url: "https://www.izolacers.cz/",
    description: "Moderní one-page web pro specialisty na foukanou izolaci. Součástí projektu bylo i nastavení konverzního měření a správa reklamních kampaní."
  }
];