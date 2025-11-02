# Návod: Jak přidat články do Sanity Studio

## Krok 1: Otevřete Sanity Studio

1. V terminálu přejděte do složky `webnamiru-cms`:
\`\`\`bash
cd ~/Dokumenty/webnamiru-site/webnamiru-cms
\`\`\`

2. Spusťte Sanity Studio:
\`\`\`bash
sanity dev
\`\`\`

3. Otevřete prohlížeč na `http://localhost:3333`

## Krok 2: Přidejte nový článek

1. V levém menu klikněte na **"Blog Článek"**
2. Klikněte na tlačítko **"+"** (Create new)
3. Vyplňte pole:

### Základní informace:

**Title (Název článku):**
- E-commerce trendy 2025: Co musíte vědět pro úspěch vašeho online obchodu
- Jak vybrat správnou technologii pro váš web v roce 2025
- 10 SEO chyb, které vás stojí zákazníky (a jak je opravit)

**Slug:**
- e-commerce-trendy-2025
- jak-vybrat-spravnou-technologii
- 10-seo-chyb

**Published At (Datum publikace):**
- Vyberte aktuální datum

**Main Image (Hlavní obrázek):**
- Nahrajte obrázek nebo použijte Unsplash integraci
- Doporučené rozměry: 1200x630px

**Summary (Souhrn):**
- Krátký popisek článku (2-3 věty)
- Zobrazuje se v přehledu článků

### Body (Obsah článku):

1. Zkopírujte obsah z Markdown souborů výše
2. V Sanity Studio použijte **Portable Text editor**:
   - **Nadpisy:** Označte text a vyberte H2, H3, H4
   - **Tučný text:** Ctrl+B (Cmd+B na Mac)
   - **Kurzíva:** Ctrl+I (Cmd+I na Mac)
   - **Seznamy:** Klikněte na ikonu seznamu
   - **Odkazy:** Označte text, klikněte na ikonu odkazu

### Struktura článku v Portable Text:

\`\`\`
# H2 Nadpis (hlavní sekce)
Odstavec textu...

## H3 Podnadpis
Další text...

### Výhody:
- Bod 1
- Bod 2
- Bod 3

**Tučný text** pro důležité informace.
\`\`\`

### SEO metadata:

**SEO Title:**
- Stejný jako Title, ale optimalizovaný pro vyhledávače
- Max 60 znaků

**SEO Description:**
- Popisek pro Google (zobrazuje se ve výsledcích vyhledávání)
- Max 160 znaků
- Obsahuje klíčová slova

**Keywords (Klíčová slova):**
- Přidejte relevantní klíčová slova
- Oddělte čárkami

## Krok 3: Publikujte článek

1. Klikněte na **"Publish"** v pravém horním rohu
2. Článek je nyní živý na webu!

## Krok 4: Ověřte na webu

1. Otevřete `https://www.webnamiru.site/blog`
2. Zkontrolujte, že se článek zobrazuje
3. Klikněte na článek a zkontrolujte formátování

## Tipy pro psaní článků:

### ✅ Dobré praktiky:

- **Krátké odstavce** - Max 3-4 věty
- **Podnadpisy** - Každých 200-300 slov
- **Seznamy** - Snadněji se čtou než dlouhé odstavce
- **Tučný text** - Zvýrazněte klíčové informace
- **Obrázky** - Přidejte obrázek každých 300-500 slov
- **CTA (Call-to-Action)** - Na konci článku vyzývejte k akci

### ❌ Vyhněte se:

- Dlouhé odstavce (více než 5 vět)
- Složité věty
- Příliš technický jazyk
- Chybějící nadpisy
- Chybějící obrázky

## Časté problémy a řešení:

### Problém: Článek se nezobrazuje na webu

**Řešení:**
1. Zkontrolujte, že je článek publikovaný (ne draft)
2. Zkontrolujte, že má vyplněný slug
3. Počkejte 1-2 minuty (ISR revalidace)
4. Vymažte cache prohlížeče (Ctrl+Shift+R)

### Problém: Obrázky se nenačítají

**Řešení:**
1. Zkontrolujte, že je obrázek nahrán v Sanity
2. Zkontrolujte, že má obrázek alt text
3. Použijte menší obrázky (max 2MB)

### Problém: Špatné formátování

**Řešení:**
1. Zkontrolujte, že používáte správné nadpisy (H2, H3)
2. Zkontrolujte, že seznamy jsou správně formátované
3. Nepoužívejte HTML tagy (Portable Text je nepoužije)

## Potřebujete pomoc?

Pokud máte problémy s přidáváním článků, kontaktujte mě a společně to vyřešíme!
