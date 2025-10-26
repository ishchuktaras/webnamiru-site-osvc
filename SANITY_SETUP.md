# Sanity CMS Setup Guide

Tento dokument popisuje, jak nastavit Sanity.io CMS pro webnamiru.site.

## 1. Vytvoření Sanity projektu

### Instalace Sanity CLI

\`\`\`bash
npm install -g @sanity/cli
\`\`\`

### Inicializace nového projektu

\`\`\`bash
# V samostatném adresáři (doporučeno: webnamiru-cms)
sanity init
\`\`\`

Při inicializaci:
- Vyberte "Create new project"
- Pojmenujte projekt: "webnamiru-cms"
- Použijte dataset: "production"
- Vyberte template: "Clean project with no predefined schemas"

## 2. Definice schémat

Vytvořte následující soubory ve složce `schemas/`:

### schemas/sluzba.ts

\`\`\`typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sluzba',
  title: 'Služba',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název služby',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Krátký popis',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text'
        }
      ]
    }),
    defineField({
      name: 'content',
      title: 'Obsah služby',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titulek',
      type: 'string'
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Popis',
      type: 'text',
      rows: 2
    })
  ]
})
\`\`\`

### schemas/projekt.ts

\`\`\`typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projekt',
  title: 'Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název projektu',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'clientName',
      title: 'Jméno klienta',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'coverImage',
      title: 'Náhledový obrázek',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text'
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie obrázků',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativní text'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'description',
      title: 'Popis projektu',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'url',
      title: 'URL webu klienta',
      type: 'url'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum realizace',
      type: 'datetime',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'coverImage'
    },
    prepare(selection) {
      const { title, client } = selection
      return {
        ...selection,
        subtitle: client
      }
    }
  }
})
\`\`\`

### schemas/clanek.ts

\`\`\`typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'clanek',
  title: 'Článek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název článku',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum publikace',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text'
        }
      ]
    }),
    defineField({
      name: 'summary',
      title: 'Souhrn',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300)
    }),
    defineField({
      name: 'body',
      title: 'Obsah článku',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
})
\`\`\`

### schemas/index.ts

\`\`\`typescript
import sluzba from './sluzba'
import projekt from './projekt'
import clanek from './clanek'

export const schemaTypes = [sluzba, projekt, clanek]
\`\`\`

## 3. Environment Variables

Přidejte do `.env.local` v Next.js projektu:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
\`\`\`

## 4. Nasazení Sanity Studio

\`\`\`bash
# V adresáři webnamiru-cms
sanity deploy
\`\`\`

Studio bude dostupné na: `https://your-project.sanity.studio`

## 5. Použití v Next.js

Sanity klient a queries jsou již připraveny v:
- `lib/sanity.client.ts` - Konfigurace klienta
- `lib/sanity.queries.ts` - GROQ queries
- `lib/sanity.types.ts` - TypeScript typy

### Příklad použití:

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
\`\`\`

## 6. ISR (Incremental Static Regeneration)

Pro automatickou aktualizaci obsahu použijte ISR v Next.js:

\`\`\`typescript
export const revalidate = 60 // Revalidate každých 60 sekund
\`\`\`

## Další kroky

1. Vytvořte Sanity projekt pomocí `sanity init`
2. Zkopírujte schémata do složky `schemas/`
3. Spusťte `sanity deploy`
4. Přidejte environment variables do Vercel
5. Začněte přidávat obsah v Sanity Studio
\`\`\`

```json file="" isHidden
