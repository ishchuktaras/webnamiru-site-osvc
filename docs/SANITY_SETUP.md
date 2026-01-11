# Sanity CMS Setup Guide

Tento dokument popisuje, jak propojit frontend (webnamiru-site-osvc) s Sanity CMS (webnamiru-cms).

## Architektura

Projekt je rozdělen do dvou samostatných repozitářů:

1. **webnamiru-cms** - Sanity Studio (administrace)
2. **webnamiru-site-osvc** - Next.js frontend (veřejný web)

## 1. Nastavení Environment Variables

V projektu `webnamiru-site-osvc` vytvořte `.env.local`:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
\`\`\`

### Získání hodnot:

1. **Project ID**: Najdete v `webnamiru-cms/sanity.config.ts` nebo na sanity.io dashboard
2. **Dataset**: Výchozí je `production`
3. **API Token**: 
   - Přejděte na https://sanity.io/manage
   - Vyberte váš projekt
   - API → Tokens → Add API token
   - Nastavte práva na "Read" (nebo "Editor" pokud potřebujete zapisovat z frontendu)

## 2. Struktura Frontend Projektu

Frontend obsahuje pouze Sanity klienta pro načítání dat:

\`\`\`
webnamiru-site-osvc/
├── lib/
│   ├── sanity.client.ts    # Sanity klient a image builder
│   ├── sanity.queries.ts   # GROQ dotazy
│   └── sanity.types.ts     # TypeScript typy
\`\`\`

## 3. Použití v Next.js stránkách

### Načítání služeb

\`\`\`typescript
import { getServices } from '@/lib/sanity.queries'

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div>
      {services.map(service => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <p>{service.shortDescription}</p>
        </div>
      ))}
    </div>
  )
}

// ISR - revalidace každých 60 sekund
export const revalidate = 60
\`\`\`

### Načítání portfolia

\`\`\`typescript
import { getProjects } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'

export default async function PortfolioPage() {
  const projects = await getProjects()
  
  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          <img 
            src={urlFor(project.coverImage).width(800).url() || "/placeholder.svg"} 
            alt={project.coverImage.alt}
          />
          <h2>{project.title}</h2>
          <p>{project.clientName}</p>
        </div>
      ))}
    </div>
  )
}
\`\`\`

### Načítání blogu

\`\`\`typescript
import { getArticles } from '@/lib/sanity.queries'

export default async function BlogPage() {
  const articles = await getArticles()
  
  return (
    <div>
      {articles.map(article => (
        <article key={article._id}>
          <h2>{article.title}</h2>
          <time>{new Date(article.publishedAt).toLocaleDateString('cs-CZ')}</time>
          <p>{article.summary}</p>
        </article>
      ))}
    </div>
  )
}
\`\`\`

## 4. Správa obsahu v Sanity Studio

### Přístup k administraci

Po nasazení `webnamiru-cms` pomocí `sanity deploy`:
- URL: `https://vase-domena.sanity.studio`
- Nebo lokálně: `cd webnamiru-cms && npm run dev` (http://localhost:3333)

### První kroky

1. Přihlaste se pomocí GitHub účtu
2. Vytvořte obsah:
   - **Služby**: Přidejte 3-5 hlavních služeb
   - **Portfolio**: Přidejte 2-3 ukázkové projekty
   - **Blog**: Napište první článek

## 5. Nasazení

### Frontend (webnamiru-site-osvc) na Vercel

1. Pushněte kód na GitHub
2. V Vercel projektu přidejte environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
3. Vercel automaticky nasadí aplikaci

### Sanity Studio (webnamiru-cms)

\`\`\`bash
cd webnamiru-cms
sanity deploy
\`\`\`

Administrace bude dostupná na `https://vase-domena.sanity.studio`

## 6. Propojení domény WEDOS s Vercel

1. V Vercel přidejte doménu `webnamiru.site`
2. Vercel zobrazí DNS záznamy
3. V WEDOS administraci přidejte tyto záznamy:
   - A záznam: `@` → IP adresa z Vercel
   - CNAME záznam: `www` → cname.vercel-dns.com

## 7. Tipy pro optimalizaci

### ISR (Incremental Static Regeneration)

\`\`\`typescript
// Revalidace každých 60 sekund
export const revalidate = 60

// Nebo použijte on-demand revalidation
import { revalidatePath } from 'next/cache'
\`\`\`

### Image Optimization

\`\`\`typescript
import { urlFor } from '@/lib/sanity.client'

// Optimalizované obrázky
const imageUrl = urlFor(image)
  .width(800)
  .height(600)
  .quality(80)
  .format('webp')
  .url()
\`\`\`

### Caching

\`\`\`typescript
// Cache na 1 hodinu
export const revalidate = 3600

// Nebo dynamické načítání
export const dynamic = 'force-dynamic'
\`\`\`

## 8. Další kroky

1. ✅ Nastavte environment variables
2. ✅ Nasaďte Sanity Studio
3. ✅ Přidejte první obsah
4. ⬜ Vytvořte dynamické stránky pro jednotlivé služby
5. ⬜ Vytvořte stránky pro portfolio projekty
6. ⬜ Vytvořte blog s detaily článků
7. ⬜ Implementujte vyhledávání
8. ⬜ Přidejte RSS feed

## Podpora

Pro více informací:
- Sanity dokumentace: https://www.sanity.io/docs
- Next.js dokumentace: https://nextjs.org/docs
- Vercel dokumentace: https://vercel.com/docs
