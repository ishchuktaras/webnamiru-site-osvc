# Sanity CMS Schémata pro webnamiru-cms

Tyto soubory zkopírujte do vašeho `webnamiru-cms` projektu.

## Instalace

V adresáři `webnamiru-cms` spusťte:

\`\`\`bash
npm install sanity @sanity/vision
\`\`\`

## Struktura souborů

\`\`\`
webnamiru-cms/
├── schemaTypes/
│   ├── index.ts
│   ├── sluzba.ts
│   ├── projekt.ts
│   └── clanek.ts
└── sanity.config.ts
\`\`\`

## Soubory ke zkopírování

### schemaTypes/sluzba.ts

\`\`\`typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sluzba',
  title: 'Služba',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název služby',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL adresa',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Krátký popis',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Podrobný popis',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Funkce služby',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Cena od (Kč)',
      type: 'number',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titulek',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Popisek',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
\`\`\`

### schemaTypes/projekt.ts

\`\`\`typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projekt',
  title: 'Portfolio Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL adresa',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Jméno klienta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Náhledový obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie obrázků',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternativní text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Popis projektu',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Použité technologie',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'url',
      title: 'URL webu klienta',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum realizace',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Zvýrazněný projekt',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, client } = selection
      return {
        ...selection,
        subtitle: client && `Klient: ${client}`,
      }
    },
  },
})
\`\`\`

### schemaTypes/clanek.ts

\`\`\`typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clanek',
  title: 'Blog Článek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název článku',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL adresa',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum publikace',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text',
        },
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Krátký souhrn',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Obsah článku',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'code',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Kategorie',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Webový vývoj', value: 'webovy-vyvoj' },
          { title: 'Design', value: 'design' },
          { title: 'SEO', value: 'seo' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Technologie', value: 'technologie' },
        ],
      },
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titulek',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Popisek',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { title, publishedAt } = selection
      return {
        ...selection,
        subtitle: publishedAt && new Date(publishedAt).toLocaleDateString('cs-CZ'),
      }
    },
  },
})
\`\`\`

### schemaTypes/index.ts

\`\`\`typescript
import sluzba from './sluzba'
import projekt from './projekt'
import clanek from './clanek'

export const schemaTypes = [sluzba, projekt, clanek]
\`\`\`

### sanity.config.ts (aktualizujte váš existující)

\`\`\`typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'webnamiru-cms',

  projectId: 'váš-project-id', // Nahraďte svým project ID
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
\`\`\`

## Nasazení Sanity Studia

Po zkopírování souborů spusťte:

\`\`\`bash
cd webnamiru-cms
sanity deploy
\`\`\`

Vaše administrace bude dostupná na `https://vase-domena.sanity.studio`

## Propojení s Frontend

Ve vašem `webnamiru-site-osvc` projektu jsou už připravené soubory:
- `lib/sanity.client.ts` - Sanity klient
- `lib/sanity.queries.ts` - GROQ dotazy
- `lib/sanity.types.ts` - TypeScript typy

Stačí nastavit environment variables v `.env.local`:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=váš-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=váš-api-token
