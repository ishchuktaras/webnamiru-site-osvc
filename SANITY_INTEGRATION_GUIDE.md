# Sanity CMS Integrace - Kompletní návod

## Aktuální stav projektu

### ✅ Co je hotové

1. **Frontend projekt (webnamiru-site-osvc)**
   - Dynamické stránky pro služby, portfolio a blog
   - Sanity klient pro načítání dat
   - GROQ queries pro všechny typy obsahu
   - Responzivní design s Tailwind CSS
   - SEO optimalizace

2. **CMS projekt (webnamiru-cms)**
   - Sanity Studio běží na http://localhost:3333
   - Tři schémata: sluzba, projekt, clanek
   - Validace a SEO pole

### 🔧 Co je potřeba dokončit

## Krok 1: Nastavení Environment Variables

V projektu `webnamiru-site-osvc` vytvořte soubor `.env.local`:

\`\`\`bash
cd ~/Dokumenty/webnamiru-site/webnamiru-site-osvc
cp .env.example .env.local
\`\`\`

Vyplňte následující hodnoty:

\`\`\`env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=g8e5a2q4
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here

# Resend (už máte)
RESEND_API_KEY=your_existing_key
\`\`\`

### Získání Sanity API Token

1. Jděte na https://www.sanity.io/manage
2. Vyberte projekt "webnamiru-cms"
3. Klikněte na "API" v levém menu
4. Klikněte na "Tokens" → "Add API token"
5. Nastavte:
   - **Name**: "Frontend Production"
   - **Permissions**: "Viewer" (pouze čtení)
6. Zkopírujte token a vložte do `.env.local`

## Krok 2: Vytvoření obsahu v Sanity Studio

Sanity Studio běží na http://localhost:3333. Vytvořte obsah podle připraveného dokumentu `SANITY_SEED_DATA.md`:

### Služby (6 položek)

1. Otevřete http://localhost:3333
2. Klikněte na "Služba" v levém menu
3. Klikněte na "+" pro vytvoření nové služby
4. Vyplňte podle `SANITY_SEED_DATA.md`:
   - Tvorba webů na míru
   - E-commerce řešení
   - SEO optimalizace
   - Webový redesign
   - Technická podpora
   - Konzultace a strategie

### Portfolio projekty (3 položky)

1. Klikněte na "Portfolio Projekt"
2. Vytvořte 3 ukázkové projekty podle dokumentu
3. Přidejte obrázky (můžete použít placeholder obrázky)

### Blog články (3 položky)

1. Klikněte na "Blog Článek"
2. Vytvořte 3 SEO optimalizované články:
   - "Proč investovat do profesionálního webu v roce 2025"
   - "Next.js vs. WordPress: Která platforma je lepší pro váš web?"
   - "10 SEO tipů pro české e-shopy"

## Krok 3: Testování integrace

Po vytvoření obsahu a nastavení environment variables:

\`\`\`bash
cd ~/Dokumenty/webnamiru-site/webnamiru-site-osvc

# Restartujte vývojový server
npm run dev
\`\`\`

Otevřete v prohlížeči:

- http://localhost:3000/sluzby - Měli byste vidět 6 služeb ze Sanity
- http://localhost:3000/portfolio - Měli byste vidět 3 projekty
- http://localhost:3000/blog - Měli byste vidět 3 články

## Krok 4: Nasazení na Vercel

### Frontend (webnamiru-site-osvc)

1. Pushněte změny do Git:
\`\`\`bash
cd ~/Dokumentu/webnamiru-site/webnamiru-site-osvc
git add .
git commit -m "Add Sanity CMS integration with dynamic pages"
git push origin main
\`\`\`

2. V Vercel dashboardu:
   - Přidejte environment variables (stejné jako v `.env.local`)
   - Nasaďte projekt

### Sanity Studio (webnamiru-cms)

Máte dvě možnosti:

**Možnost A: Lokální Studio (doporučeno pro začátek)**
- Studio běží pouze lokálně na http://localhost:3333
- Spouštíte pomocí `npm run dev` v `webnamiru-cms`
- Jednoduché, ale musíte mít Studio spuštěné

**Možnost B: Nasazení na Vercel**
\`\`\`bash
cd ~/Dokumenty/webnamiru-site/webnamiru-cms

# Vytvořte vercel.json
cat > vercel.json << 'EOF'
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
EOF

# Pushněte do Git a nasaďte na Vercel
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
\`\`\`

## Krok 5: Propojení domény (WEDOS → Vercel)

V WEDOS administraci nastavte DNS záznamy:

\`\`\`
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
\`\`\`

V Vercel dashboardu přidejte doménu `webnamiru.site`.

## Troubleshooting

### Chyba: "Cannot read properties of undefined"

Zkontrolujte, že:
1. `.env.local` existuje a obsahuje správné hodnoty
2. Restartovali jste dev server po vytvoření `.env.local`
3. `NEXT_PUBLIC_SANITY_PROJECT_ID` je správné (g8e5a2q4)

### Prázdné stránky (žádný obsah)

1. Zkontrolujte, že jste vytvořili obsah v Sanity Studio
2. Zkontrolujte, že obsah je publikovaný (ne draft)
3. Otevřete konzoli prohlížeče a hledejte chyby

### Obrázky se nezobrazují

1. Zkontrolujte, že jste nahráli obrázky v Sanity Studio
2. Zkontrolujte, že `urlFor` funkce funguje správně
3. V Next.js config přidejte Sanity domény do `images.domains`

## Další kroky

1. **Přidejte více obsahu** - Vytvořte více služeb, projektů a článků
2. **Optimalizujte SEO** - Vyplňte všechna SEO pole v Sanity
3. **Přidejte analytiku** - Vercel Analytics je už připravená
4. **Nastavte monitoring** - Sledujte výkon a chyby
5. **Pravidelně aktualizujte** - Přidávejte nové blog články pro SEO

## Užitečné odkazy

- Sanity Studio: http://localhost:3333
- Sanity Manage: https://www.sanity.io/manage
- Frontend (local): http://localhost:3000
- Vercel Dashboard: https://vercel.com/dashboard
- WEDOS Admin: https://client.wedos.com

## Podpora

Pokud narazíte na problémy:
1. Zkontrolujte konzoli prohlížeče (F12)
2. Zkontrolujte terminal s dev serverem
3. Přečtěte si Sanity dokumentaci: https://www.sanity.io/docs
4. Přečtěte si Next.js dokumentaci: https://nextjs.org/docs
