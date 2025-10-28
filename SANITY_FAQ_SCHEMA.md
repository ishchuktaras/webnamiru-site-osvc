# FAQ Schéma pro Sanity CMS

Tento dokument popisuje, jak přidat FAQ (Často kladené otázky) schéma do vašeho Sanity CMS projektu.

## Schéma pro FAQ

Vytvořte nový soubor `schemas/faq.ts` ve vašem Sanity projektu:

\`\`\`typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ (Často kladené otázky)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Otázka',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: 'answer',
      title: 'Odpověď',
      type: 'text',
      validation: (Rule) => Rule.required().min(20).max(1000),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Obecné', value: 'general' },
          { title: 'Služby', value: 'services' },
          { title: 'Ceny', value: 'pricing' },
          { title: 'Technologie', value: 'technology' },
          { title: 'Spolupráce', value: 'collaboration' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
})
\`\`\`

## Přidání schématu do konfigurace

V souboru `sanity.config.ts` (nebo `schemas/index.ts`), přidejte FAQ schéma:

\`\`\`typescript
import faq from './schemas/faq'

export default defineConfig({
  // ... existing config
  schema: {
    types: [
      // ... existing schemas
      faq,
    ],
  },
})
\`\`\`

## Ukázkové FAQ otázky

Po nasazení schématu přidejte tyto ukázkové otázky v Sanity Studio:

### Obecné

**Otázka:** Jak dlouho trvá vytvoření webu?
**Odpověď:** Doba realizace závisí na rozsahu projektu. Jednoduchý prezentační web obvykle trvá 2-4 týdny, komplexnější e-commerce řešení 6-12 týdnů. Vždy vám poskytneme realistický časový odhad po úvodní konzultaci.
**Kategorie:** general
**Pořadí:** 1

**Otázka:** Potřebuji mít připravený obsah před začátkem projektu?
**Odpověď:** Ne, není to nutné. Můžeme začít s wireframy a strukturou, zatímco připravujete obsah. Také vám můžeme pomoci s tvorbou obsahu nebo použít dočasný placeholder text.
**Kategorie:** general
**Pořadí:** 2

### Služby

**Otázka:** Poskytujete i grafický design loga a brandingu?
**Odpověď:** Ano, nabízíme kompletní služby UX/UI designu včetně tvorby loga, barevné palety a brand identity. Můžeme vytvořit konzistentní vizuální styl pro váš web i další marketingové materiály.
**Kategorie:** services
**Pořadí:** 3

**Otázka:** Mohu si web spravovat sám po dokončení?
**Odpověď:** Ano! Všechny naše weby jsou propojené se Sanity CMS, které je velmi intuitivní. Poskytneme vám školení a dokumentaci, takže budete moci snadno upravovat texty, přidávat obrázky a spravovat obsah bez programátorských znalostí.
**Kategorie:** services
**Pořadí:** 4

### Ceny

**Otázka:** Kolik stojí vytvoření webu?
**Odpověď:** Ceny se pohybují od 2 500 Kč za měsíční podporu až po 40 000 Kč+ za komplexní e-commerce řešení. Každý projekt je unikátní, proto vám po úvodní konzultaci připravíme cenovou nabídku na míru vašim potřebám a rozpočtu.
**Kategorie:** pricing
**Pořadí:** 5

**Otázka:** Jsou v ceně zahrnuty i fotografie a texty?
**Odpověď:** Základní cena zahrnuje implementaci vašeho obsahu. Pokud potřebujete pomoc s copywritingem nebo profesionální fotografie, můžeme vám doporučit spolupracující specialisty nebo tyto služby zajistit za příplatek.
**Kategorie:** pricing
**Pořadí:** 6

### Technologie

**Otázka:** Proč používáte Next.js místo WordPressu?
**Odpověď:** Next.js nabízí výrazně lepší výkon, bezpečnost a moderní vývojářské možnosti. Weby jsou rychlejší, lépe optimalizované pro SEO a poskytují lepší uživatelský zážitek. Sanity CMS je přitom stejně jednoduché na používání jako WordPress.
**Kategorie:** technology
**Pořadí:** 7

**Otázka:** Bude můj web responzivní (fungovat na mobilech)?
**Odpověď:** Ano, všechny naše weby jsou plně responzivní a optimalizované pro všechna zařízení - od mobilních telefonů přes tablety až po velké monitory. Testujeme na všech běžných zařízeních a prohlížečích.
**Kategorie:** technology
**Pořadí:** 8

### Spolupráce

**Otázka:** Jak probíhá komunikace během projektu?
**Odpověď:** Komunikujeme primárně přes email a pravidelné online schůzky (Google Meet, Zoom). Budete mít přístup k projektu v reálném čase a můžete sledovat průběh vývoje. Odpovídáme obvykle do 24 hodin.
**Kategorie:** collaboration
**Pořadí:** 9

**Otázka:** Co když budu potřebovat změny po spuštění webu?
**Odpověď:** Nabízíme měsíční balíčky podpory a údržby od 2 500 Kč, které zahrnují drobné úpravy, aktualizace a technickou podporu. Pro větší změny připravíme samostatnou cenovou nabídku.
**Kategorie:** collaboration
**Pořadí:** 10

## Nasazení

1. Vytvořte soubor `schemas/faq.ts` s výše uvedeným kódem
2. Přidejte schéma do konfigurace Sanity
3. Spusťte `sanity deploy` pro nasazení změn
4. V Sanity Studio přidejte FAQ otázky
5. Web automaticky načte FAQ data a zobrazí je na hlavní stránce

## Poznámky

- FAQ se zobrazí pouze pokud existují data v Sanity
- Otázky jsou seřazené podle pole "order"
- Můžete přidat vlastní kategorie podle potřeby
- FAQ komponenta je interaktivní - otázky se rozbalují po kliknutí
