# SEO Implementační Průvodce pro webnamiru.site

Tento dokument popisuje implementované SEO optimalizace a další doporučené kroky.

## ✅ Implementováno

### 1. Technické SEO

#### Dynamická Sitemap (`app/sitemap.ts`)
- ✅ Automaticky generovaná XML sitemap
- ✅ Prioritizace stránek (homepage = 1.0, služby = 0.9, atd.)
- ✅ Frekvence změn (changeFrequency)
- ✅ Připraveno pro dynamické URL ze Sanity
- 📍 URL: `https://webnamiru.site/sitemap.xml`

#### Robots.txt (`app/robots.ts`)
- ✅ Povolení indexace pro všechny roboty
- ✅ Zakázání indexace `/api/`, `/admin/`, `/_next/`
- ✅ Odkaz na sitemap
- 📍 URL: `https://webnamiru.site/robots.txt`

#### Strukturovaná Data (Schema.org JSON-LD)
- ✅ **LocalBusiness** schema v `app/layout.tsx`
  - Název firmy, adresa, kontakty
  - Otevírací hodiny
  - Geografické souřadnice (Jihlava)
  - Oblast působnosti (Jihlava, Vysočina, ČR)
- ✅ Utility funkce v `lib/seo/structured-data.ts`:
  - `generateServiceSchema()` - Pro stránky služeb
  - `generateArticleSchema()` - Pro blog články
  - `generateFAQSchema()` - Pro FAQ sekce
  - `generateBreadcrumbSchema()` - Pro breadcrumb navigaci

### 2. On-Page SEO

#### Metadata Optimalizace
- ✅ Lokální SEO klíčová slova v title a description
  - "Tvorba webů na míru Jihlava a Vysočina"
  - "Webdesign Vysočina", "IT konzultace Jihlava"
- ✅ Open Graph tagy pro sociální sítě
- ✅ Twitter Card metadata
- ✅ Canonical URL
- ✅ Robots meta tagy

## 📋 Doporučené Další Kroky

### 1. Integrace se Sanity CMS

#### Dynamická Sitemap
Aktualizujte `app/sitemap.ts` pro načítání dat ze Sanity:

\`\`\`typescript
// Příklad integrace
import { client } from '@/lib/sanity.client'

const sluzby = await client.fetch(`
  *[_type == "sluzba"] {
    "slug": slug.current,
    _updatedAt
  }
`)

const sluzbyUrls = sluzby.map((sluzba) => ({
  url: `${BASE_URL}/sluzby/${sluzba.slug}`,
  lastModified: sluzba._updatedAt,
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}))
\`\`\`

#### Service Schema pro Stránky Služeb
V `app/sluzby/[slug]/page.tsx` přidejte:

\`\`\`tsx
import Script from 'next/script'
import { generateServiceSchema } from '@/lib/seo/structured-data'

export default async function ServicePage({ params }) {
  const sluzba = await fetchSluzba(params.slug)
  
  const serviceSchema = generateServiceSchema({
    serviceType: sluzba.title,
    name: sluzba.title,
    description: sluzba.shortDescription,
    url: `https://webnamiru.site/sluzby/${sluzba.slug}`,
    provider: {
      name: 'webnamiru.site - Taras Ishchuk, OSVČ',
      addressLocality: 'Jihlava',
      addressRegion: 'Vysočina',
      addressCountry: 'CZ',
    },
  })

  return (
    <>
      <Script
        id={`schema-service-${sluzba.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {/* Obsah stránky */}
    </>
  )
}
\`\`\`

#### FAQ Schema
Přidejte FAQ pole do Sanity schématu služeb a zobrazte s FAQ schema:

\`\`\`tsx
import { generateFAQSchema } from '@/lib/seo/structured-data'

const faqSchema = generateFAQSchema({
  questions: sluzba.faq.map(item => ({
    question: item.question,
    answer: item.answer,
  })),
})
\`\`\`

### 2. Lokální SEO

#### Google Moje Firma (PRIORITA!)
1. ✅ Založte profil na: https://business.google.com
2. ✅ Vyplňte všechny údaje:
   - Název: "webnamiru.site - Taras Ishchuk, OSVČ"
   - Adresa: Rantířovská 123/36, Jihlava
   - Telefon: [DOPLŇTE]
   - Web: https://webnamiru.site
   - Kategorie: "Webový vývojář", "IT konzultant"
3. ✅ Nahrajte fotky (profilová, ukázky práce)
4. ✅ Požádejte klienty o hodnocení

#### Lokální Katalogy
Zaregistrujte se v:
- ✅ Firmy.cz (Seznam.cz)
- ✅ Google Moje Firma
- ✅ Yelp.cz
- ✅ Regionální katalogy Vysočiny

### 3. Interní Prolinkování

#### Strategie
- **Blog → Služby**: Každý článek odkazuje na 1-2 relevantní služby
- **Služby → Portfolio**: Ukázky projektů pro každou službu
- **Portfolio → Služby**: Zmínka použitých služeb v projektech

#### Implementace
\`\`\`tsx
// Příklad v blogovém článku
<Link href="/sluzby/tvorba-webu">
  tvorba webu na míru
</Link>
\`\`\`

### 4. Monitoring a Měření

#### Google Search Console
1. ✅ Přidejte web: https://search.google.com/search-console
2. ✅ Ověřte vlastnictví (DNS nebo HTML tag)
3. ✅ Odešlete sitemap: `https://webnamiru.site/sitemap.xml`
4. ✅ Sledujte:
   - Indexované stránky
   - Klíčová slova
   - Chyby crawlování

#### Google Analytics 4
- ✅ Již implementováno v projektu
- ✅ Sledujte konverze z kontaktního formuláře

## 🎯 Cílová Klíčová Slova

### Primární (Lokální)
- Tvorba webů Jihlava
- Webdesign Vysočina
- Tvorba e-shopu Jihlava
- SEO optimalizace Vysočina
- IT konzultace Jihlava

### Sekundární
- Web na míru Next.js
- Sanity CMS vývojář
- Moderní webové stránky
- Responzivní webdesign

### Long-tail
- "Jak vytvořit profesionální web pro firmu"
- "Nejlepší CMS pro malé firmy"
- "Kolik stojí tvorba webu na míru"

## 📊 Očekávané Výsledky

### Krátkodobé (1-3 měsíce)
- ✅ Indexace všech stránek v Google
- ✅ Zobrazení v Google Moje Firma
- ✅ Rich snippets (FAQ, LocalBusiness)

### Střednědobé (3-6 měsíců)
- 📈 Top 10 pro lokální klíčová slova
- 📈 Zvýšení organického trafficu o 50%
- 📈 5+ hodnocení na Google

### Dlouhodobé (6-12 měsíců)
- 🎯 Top 3 pro "tvorba webů Jihlava"
- 🎯 Top 5 pro "webdesign Vysočina"
- 🎯 Organický traffic jako hlavní zdroj návštěv

## 🔧 Technické Poznámky

### Testování
\`\`\`bash
# Ověření sitemap
curl https://webnamiru.site/sitemap.xml

# Ověření robots.txt
curl https://webnamiru.site/robots.txt

# Testování strukturovaných dat
# https://search.google.com/test/rich-results
\`\`\`

### Validace
- ✅ Schema.org validator: https://validator.schema.org
- ✅ Google Rich Results Test: https://search.google.com/test/rich-results
- ✅ PageSpeed Insights: https://pagespeed.web.dev

## 📚 Další Zdroje

- [Next.js SEO dokumentace](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org dokumentace](https://schema.org)
- [Lokální SEO průvodce](https://moz.com/learn/seo/local)
