# webnamiru.site

Profesionální web pro tvorbu webových stránek na míru s vysokou hodnotou.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ishchukventure-gmailcoms-projects/v0-webnamiru-site)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/4izUnEi1741)

## Technologický Stack

- **Frontend**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Komponenty**: shadcn/ui
- **Formuláře**: React Hook Form + Zod
- **Email**: Resend API
- **CMS**: Sanity.io (připraveno)
- **Hosting**: Vercel
- **Doména**: WEDOS

## Design Systém

Podle technické dokumentace:
- **Primární barva**: Dark Blue (#0D1B3E) - důvěra, stabilita
- **Akcentní barva**: Vibrant Blue (#3B82F6) - modernost, energie
- **Typografie**: Inter (sans-serif) pro čitelnost a profesionalitu
- **Layout**: Mobile-first, max-width 1280px (max-w-7xl)
- **Spacing**: Násobky 4px pro konzistenci

## Rychlý Start

### 1. Instalace závislostí

\`\`\`bash
npm install
\`\`\`

### 2. Nastavení environment variables

Vytvořte soubor `.env.local` v kořenovém adresáři:

\`\`\`env
# Resend API (povinné pro kontaktní formulář)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Sanity CMS (volitelné - pro dynamický obsah)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
\`\`\`

### 3. Spuštění vývojového serveru

\`\`\`bash
npm run dev
\`\`\`

Otevřete [http://localhost:3000](http://localhost:3000) v prohlížeči.

### 4. Build pro produkci

\`\`\`bash
npm run build
npm start
\`\`\`

## Struktura Projektu

\`\`\`
webnamiru-site-osvc/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint s Resend integrací
│   ├── kontakt/
│   │   └── page.tsx              # Kontaktní stránka
│   ├── sluzby/
│   │   └── page.tsx              # Přehled služeb
│   ├── layout.tsx                # Root layout s Inter fontem
│   ├── page.tsx                  # Hlavní stránka
│   └── globals.css               # Design systém (barvy, fonty)
├── components/
│   ├── ui/                       # shadcn/ui komponenty
│   └── contact-form.tsx          # Validovaný formulář
├── lib/
│   ├── utils.ts                  # Utility funkce
│   ├── sanity.client.ts          # Sanity klient
│   ├── sanity.queries.ts         # GROQ queries
│   └── sanity.types.ts           # TypeScript typy
├── hooks/
│   └── use-toast.ts              # Toast notifikace
└── SANITY_SETUP.md               # Návod na Sanity CMS
\`\`\`

## Funkce

### Implementováno
- ✅ Responzivní design (mobile-first)
- ✅ Design systém podle dokumentace
- ✅ Homepage s hero, službami, procesem
- ✅ Stránka služeb s detaily
- ✅ Kontaktní formulář s validací
- ✅ Email notifikace (Resend)
- ✅ Právní údaje v footeru (IČO: 21609845)
- ✅ SEO optimalizace
- ✅ Inter font pro profesionalitu

### Připraveno k implementaci
- 🔄 Sanity CMS integrace (schémata připravena)
- 🔄 Portfolio projektů (dynamický obsah)
- 🔄 Blog články
- 🔄 Detailní stránky služeb

## Deployment

Projekt je automaticky nasazený na Vercel:

**[https://vercel.com/ishchukventure-gmailcoms-projects/v0-webnamiru-site](https://vercel.com/ishchukventure-gmailcoms-projects/v0-webnamiru-site)**

### Environment Variables na Vercel

V nastavení projektu na Vercel přidejte:

1. **RESEND_API_KEY** (povinné)
   - Získejte na [resend.com](https://resend.com)
   - Ověřte doménu webnamiru.site
   - Změňte `from` adresu v `app/api/contact/route.ts`

2. **Sanity proměnné** (volitelné)
   - NEXT_PUBLIC_SANITY_PROJECT_ID
   - NEXT_PUBLIC_SANITY_DATASET
   - SANITY_API_TOKEN

### Propojení domény (WEDOS → Vercel)

1. V Vercel přidejte doménu `webnamiru.site`
2. Zkopírujte DNS záznamy z Vercel
3. V WEDOS administraci přidejte:
   - A záznam: `76.76.21.21`
   - CNAME záznam: `cname.vercel-dns.com`
4. Počkejte 24-48 hodin na propagaci DNS

## Sanity CMS Setup

Pro přidání dynamického obsahu (služby, portfolio, blog):

1. **Vytvořte Sanity projekt**:
   \`\`\`bash
   npm install -g @sanity/cli
   sanity init
   \`\`\`

2. **Použijte připravená schémata**:
   - Viz `SANITY_SETUP.md` pro kompletní návod
   - Schémata: `sluzba`, `projekt`, `clanek`

3. **Nasaďte Studio**:
   \`\`\`bash
   sanity deploy
   \`\`\`

4. **Přidejte environment variables** do Vercel


Podrobný návod najdete v souboru `SANITY_SETUP.md`.

## Strategický přístup

Web je postaven podle strategického rámce pro tvorbu webů s vysokou hodnotou:

- **Zjišťování potřeb**: Hloubková analýza klienta
- **SMART cíle**: Měřitelné výsledky
- **Uživatelské persony**: Design zaměřený na koncového uživatele
- **Konkurenční analýza**: Jedinečná hodnotová propozice
- **MoSCoW prioritizace**: Efektivní řízení rozsahu

## Právní údaje

- **Provozovatel**: Taras Ishchuk, OSVČ
- **IČO**: 21609845
- **Email**: ishchuktaras@gmail.com
- **Sídlo**: Česká republika

## Další Kroky

1. **Nastavte Resend** (priorita 1):
   - Zaregistrujte se na [resend.com](https://resend.com)
   - Ověřte doménu webnamiru.site
   - Získejte API klíč
   - Aktualizujte `from` adresu v API route

2. **Připojte Sanity CMS** (priorita 2):
   - Následujte `SANITY_SETUP.md`
   - Vytvořte obsah pro služby
   - Přidejte portfolio projekty
   - Spusťte blog

3. **Přidejte obsah** (priorita 3):
   - Reálné portfolio projekty
   - Profesionální fotografie
   - Blog články pro SEO
   - Př��padové studie

4. **Propojte doménu** (priorita 4):
   - Nastavte DNS v WEDOS
   - Ověřte SSL certifikát
   - Testujte email routing

## Podpora

Pro další vývoj pokračujte na:

**[https://v0.app/chat/projects/4izUnEi1741](https://v0.app/chat/projects/4izUnEi1741)**

## Licence

© 2025 Taras Ishchuk - webnamiru.site. Všechna práva vyhrazena.
