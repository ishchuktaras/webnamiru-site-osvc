# Unsplash Integrace pro Blog

Tento návod popisuje, jak integrovat Unsplash do Sanity Studio pro výběr kvalitních obrázků do blog článků.

## 1. Instalace Unsplash pluginu v Sanity Studio

### Krok 1: Instalace balíčku

V adresáři `webnamiru-cms` spusťte:

\`\`\`bash
cd ~/Dokumenty/webnamiru-site/webnamiru-cms
npm install sanity-plugin-asset-source-unsplash
\`\`\`

### Krok 2: Přidání pluginu do Sanity konfigurace

Otevřete soubor `sanity.config.ts` (nebo `sanity.config.js`) a přidejte plugin:

\`\`\`typescript
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'webnamiru-cms',
  projectId: 'g8e5a2q4',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
    unsplashImageAsset() // <-- Přidejte tento řádek
  ],
  
  schema: {
    types: schemaTypes,
  },
})
\`\`\`

### Krok 3: Restart Sanity Studio

\`\`\`bash
# Zastavte běžící dev server (Ctrl+C)
# Spusťte znovu
sanity dev
\`\`\`

## 2. Použití Unsplash v Sanity Studio

Po instalaci pluginu:

1. Otevřete Sanity Studio (http://localhost:3333)
2. Vytvořte nebo upravte blog článek
3. Klikněte na pole pro obrázek (mainImage nebo coverImage)
4. Uvidíte novou možnost **"Unsplash"** vedle "Upload"
5. Vyhledejte obrázek podle klíčových slov (např. "web development", "technology", "coding")
6. Vyberte obrázek - automaticky se stáhne do Sanity a uloží metadata

## 3. Aktualizace Sanity schématu pro blog články

Ujistěte se, že vaše schéma pro blog článek obsahuje pole pro obrázek:

\`\`\`typescript
// schemas/blogPost.ts nebo schemas/clanek.ts
export default {
  name: 'blogPost',
  title: 'Blog Článek',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název článku',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true, // Umožňuje crop a focus point
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Popis obrázku pro SEO a přístupnost',
          validation: Rule => Rule.required()
        },
        {
          name: 'caption',
          title: 'Popisek',
          type: 'string',
          description: 'Volitelný popisek pod obrázkem'
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Úryvek',
      type: 'text',
      rows: 4,
      description: 'Krátký popis článku (150-200 znaků)',
      validation: Rule => Rule.max(200)
    },
    {
      name: 'publishedAt',
      title: 'Datum publikace',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Obsah článku',
      type: 'blockContent'
    },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Webový vývoj', value: 'web-development' },
          { title: 'SEO', value: 'seo' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Design', value: 'design' },
          { title: 'Technologie', value: 'technology' }
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tagy',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt'
    }
  }
}
\`\`\`

## 4. Doporučené Unsplash vyhledávací dotazy pro blog

Pro různé typy článků použijte tyto klíčová slova:

- **Webový vývoj**: "web development", "coding", "programming", "developer workspace"
- **SEO**: "search", "analytics", "data visualization", "growth"
- **E-commerce**: "online shopping", "ecommerce", "retail", "shopping cart"
- **Design**: "ui design", "ux design", "creative workspace", "design tools"
- **Technologie**: "technology", "innovation", "digital", "modern tech"
- **Business**: "business meeting", "strategy", "teamwork", "office"

## 5. Best Practices

### Výběr obrázků
- Vybírejte obrázky s vysokým rozlišením (min. 1920x1080px)
- Preferujte horizontální formát (16:9 nebo 3:2)
- Vyhněte se příliš rušivým obrázkům
- Ujistěte se, že obrázek souvisí s obsahem článku

### Alt text
- Vždy vyplňte alt text pro SEO a přístupnost
- Popište, co je na obrázku (např. "Vývojář píšící kód na notebooku")
- Zahrňte relevantní klíčová slova, ale přirozeně

### Licence a atribuce
- Unsplash obrázky jsou zdarma pro komerční i nekomerční použití
- Není nutná atribuce, ale je doporučená
- Plugin automaticky ukládá metadata o autorovi

## 6. Troubleshooting

### Plugin se nezobrazuje
- Zkontrolujte, že jste správně přidali plugin do `sanity.config.ts`
- Restartujte Sanity dev server
- Zkontrolujte konzoli pro chybové hlášky

### Obrázky se nenačítají
- Zkontrolujte internetové připojení
- Unsplash API může mít rate limit (50 požadavků/hodinu pro free tier)
- Zkuste použít jiné klíčové slovo

### Obrázky jsou příliš velké
- Sanity automaticky optimalizuje obrázky
- Na frontendu použijte Sanity Image URL builder pro správnou velikost

## 7. Alternativa: Manuální Unsplash integrace

Pokud nechcete používat plugin, můžete:

1. Stáhnout obrázky z [unsplash.com](https://unsplash.com)
2. Nahrát je manuálně do Sanity přes "Upload" tlačítko
3. Nezapomeňte přidat atribuci autora v popisku

## Další kroky

Po nastavení Unsplash integrace:

1. Přidejte kvalitní obrázky ke všem existujícím článkům
2. Vytvořte nové články s atraktivními obrázky
3. Testujte, jak obrázky vypadají na frontendu
4. Optimalizujte loading performance (lazy loading, blur placeholder)
