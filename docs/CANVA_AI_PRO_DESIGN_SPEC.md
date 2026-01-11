# Canva AI PRO - Technická specifikace designu pro webnamiru.site

## Obsah
1. [Brand Identity](#brand-identity)
2. [Logo Design](#logo-design)
3. [Favicon Sada](#favicon-sada)
4. [OG Image](#og-image)
5. [Implementace](#implementace)

---

## Brand Identity

### Základní informace
- **Název:** webnamiru.site
- **Tagline:** "Weby, které přinášejí výsledky"
- **Obor:** Tvorba webových stránek a e-shopů na míru
- **Cílová skupina:** Firmy a živnostníci z Vysočiny a celé ČR
- **Hodnoty:** Profesionalita, inovace, měřitelné výsledky, transparentnost

### Barevná paleta
\`\`\`css
/* Primární barvy */
--primary: #2563eb (modrá - důvěra, profesionalita)
--accent: #0ea5e9 (světle modrá - inovace, technologie)

/* Sekundární barvy */
--foreground: #0a0a0a (téměř černá - text)
--background: #ffffff (bílá - čistota)
--muted: #f1f5f9 (světle šedá - pozadí sekcí)

/* Akcentní barvy */
--success: #10b981 (zelená - úspěch)
--warning: #f59e0b (oranžová - upozornění)
\`\`\`

### Typografie
- **Primární font:** Inter (sans-serif) - pro nadpisy a běžný text
- **Monospace font:** Geist Mono - pro kód a technické prvky
- **Serif font:** Source Serif 4 - pro elegantní akcentované texty

---

## Logo Design

### Koncept
Logo kombinuje technologický symbol **Code2** (HTML tag `</>`) s moderním gradientem představujícím inovaci a profesionalitu v digitálním světě.

### Canva AI PRO Prompt pro Logo

\`\`\`
Vytvořit profesionální logo pro webovou agenturu "webnamiru.site"

STYL:
- Moderní, minimalistický design
- Tech-focused, ale přístupný
- Čistý a škálovatelný

HLAVNÍ ELEMENT:
- Symbol HTML/kódování: závorky "</>" stylizované jako moderní ikona
- Geometrické tvary s mírně zaoblenými rohy
- Gradientní výplň od #2563eb (modrá) do #0ea5e9 (světle modrá)
- Jemný glow efekt okolo symbolu pro technologický vzhled

TEXT:
- Název: "webnamiru" (tučné písmo, Inter nebo podobné sans-serif)
- Doplněk: ".site" (tenčí písmo, menší velikost, šedá barva #64748b)
- Text umístěný vpravo od symbolu
- Horizontální layout pro desktopové použití

BAREVNÁ PALETA:
- Primární: #2563eb (modrá)
- Accent: #0ea5e9 (světle modrá)
- Text: #0a0a0a (černá)
- Text sekundární: #64748b (šedá)

KOMPOZICE:
- Poměr stran: 4:1 (široké logo pro header)
- Padding okolo prvků: 20px
- Symbol v bílém čtverci s gradientním pozadím
- Jemný stín pod symbolem pro hloubku

POUŽITÍ:
- Website header/navigace
- Vizitky, fakturace
- Social media profily
- Email podpisy

FORMÁT:
- Transparentní pozadí (PNG)
- Vysoké rozlišení: minimálně 2000px šířka
- Vektorový charakter (ostré hrany)
\`\`\`

### Logo varianty k vytvoření

#### 1. **Hlavní horizontální logo** (logo-horizontal.png)
- **Rozměry:** 2000 x 500 px (poměr 4:1)
- **Použití:** Header, footer, dokumenty
- **Formát:** PNG s transparentním pozadím

#### 2. **Logo ikona** (logo-icon.png)
- **Rozměry:** 1000 x 1000 px (čtverec)
- **Použití:** Favicony, app ikony, social media avatary
- **Obsah:** Pouze symbol "</>" s gradientem, bez textu
- **Formát:** PNG s transparentním pozadím

#### 3. **Logo světlá verze** (logo-light.png)
- **Rozměry:** 2000 x 500 px
- **Použití:** Tmavá pozadí, fotografie
- **Barevnost:** Bílý text a symbol s modrým glow efektem
- **Formát:** PNG s transparentním pozadím

#### 4. **Logo mono** (logo-mono.png)
- **Rozměry:** 2000 x 500 px
- **Použití:** Tisk, fax, černobílé dokumenty
- **Barevnost:** Pouze černá #0a0a0a
- **Formát:** PNG s transparentním pozadím

### Technické požadavky pro všechny loga:
- DPI: 300 (pro tisk), 72 (pro web)
- Barevný prostor: RGB (web), CMYK (tisk)
- Formát: PNG (primární), SVG (sekundární)
- Pozadí: Transparentní
- Zachování ostrosti: Antialiasing zapnutý

---

## Favicon Sada

### Přehled souborů

Vytvořte následující favicon soubory z **logo ikony** (čtverec 1000x1000px):

#### 1. **favicon.ico** (multi-resolution)
\`\`\`
Rozměry: 16x16, 32x32, 48x48 px v jednom souboru
Formát: ICO
Použití: Starší browsery, IE kompatibilita
Obsah: Zjednodušená ikona "</>" s modrým gradientem
\`\`\`

#### 2. **icon.svg** (moderní browsery)
\`\`\`
Rozměry: Vektorový (škálovatelný)
Formát: SVG
Použití: Moderní browsery (Chrome, Firefox, Safari)
Obsah: Čistý vektorový symbol "</>" s gradientem
Výhoda: Perfektní ostrost na všech velikostech
\`\`\`

#### 3. **apple-touch-icon.png**
\`\`\`
Rozměry: 180 x 180 px
Formát: PNG
Použití: iOS Safari bookmark, home screen
Obsah: Logo ikona s lehkým paddingem (20px)
Pozadí: Bílé nebo gradient
\`\`\`

#### 4. **icon-192.png**
\`\`\`
Rozměry: 192 x 192 px
Formát: PNG
Použití: Android Chrome app icon
Obsah: Logo ikona s paddingem
Pozadí: Transparentní nebo bílé
\`\`\`

#### 5. **icon-512.png**
\`\`\`
Rozměry: 512 x 512 px
Formát: PNG
Použití: Android Chrome high-res, PWA splash screen
Obsah: Logo ikona s paddingem
Pozadí: Transparentní nebo bílé
\`\`\`

### Canva AI PRO Prompt pro Favicon

\`\`\`
Vytvořit čtvercovou ikonu pro favicon webové agentury

ROZMĚR:
- 1000 x 1000 px (čtverec)
- Exportovat pak v různých velikostech

DESIGN:
- Symbol HTML/kódování: "</>" jako centrální prvek
- Geometrické, jednoduché tvary
- Gradientní výplň od #2563eb do #0ea5e9
- Jemný glow efekt pro technologický vzhled
- 10% padding okolo symbolu (100px z každé strany)

POZADÍ:
- Verze 1: Transparentní pozadí (pro web)
- Verze 2: Bílé pozadí s jemným stínem (pro iOS)
- Verze 3: Gradientní pozadí od #2563eb do #0ea5e9 (pro Android)

STYL:
- Minimalistický
- Výrazný i na malých rozměrech (16x16px)
- Jednoznačně rozpoznatelný
- Profesionální

EXPORT:
- PNG formát
- Transparentní pozadí (primární)
- Vysoké rozlišení: 1000x1000px
- Poté zmenšit na: 512px, 192px, 180px, 48px, 32px, 16px
\`\`\`

---

## OG Image

### Účel
Open Graph image se zobrazuje při sdílení odkazu na sociálních sítích (Facebook, LinkedIn, Twitter/X) a v preview odkazu.

### Specifikace

#### Hlavní OG Image (og-image.png)
\`\`\`
Rozměry: 1200 x 630 px (poměr 1.91:1)
Formát: PNG nebo JPG
Velikost souboru: Max 1 MB
DPI: 72 (web standard)
Použití: Facebook, LinkedIn, Twitter Card
\`\`\`

### Canva AI PRO Prompt pro OG Image

\`\`\`
Vytvořit moderní Open Graph preview image pro webovou agenturu

ROZMĚR:
- 1200 x 630 px (přesně)
- Bezpečná zóna: 1200 x 600 px (horní a dolní 15px může být ořezáno)

LAYOUT:
Levá strana (60%):
- Logo "webnamiru.site" v levém horním rohu
- Velký nadpis: "Weby, které přinášejí výsledky"
  - Font: Inter Bold, velikost ~80px
  - Barva: #0a0a0a (černá)
- Podnadpis: "Tvorba webů na míru | Next.js • Sanity.io"
  - Font: Inter Medium, velikost ~40px
  - Barva: #64748b (šedá)
- Dole: "Jihlava • Vysočina • Celá ČR"
  - Font: Inter Regular, velikost ~32px
  - Barva: #64748b

Pravá strana (40%):
- Moderní 3D ilustrace workspace:
  - MacBook s kódem na obrazovce
  - Plovoucí UI elementy (okna, ikony)
  - Gradientní prvky v barvách #2563eb a #0ea5e9
  - Jemné stíny a glow efekty

POZADÍ:
- Bílá základna (#ffffff)
- Jemný gradient mřížky (grid pattern) v #f1f5f9
- Pravá strana s gradientem od světle modré k bílé
- Subtilní ozdobné prvky (tečky, čáry) v brand barvách

STYL:
- Moderní, profesionální
- Tech-focused ale přístupný
- Vizuálně atraktivní pro social media
- Čitelný i v malém náhledu

BARVY:
- Primary: #2563eb (modrá)
- Accent: #0ea5e9 (světle modrá)
- Text: #0a0a0a (černá)
- Text secondary: #64748b (šedá)
- Background: #ffffff (bílá)

EXPORT:
- PNG formát (lepší kvalita)
- Přesně 1200 x 630 px
- Optimalizovaný do 1 MB
\`\`\`

### OG Image varianty

#### 1. **og-image-homepage.png**
- Pro homepage webnamiru.site
- Obecné téma: "Weby, které přinášejí výsledky"

#### 2. **og-image-services.png**
- Pro stránku služeb
- Téma: "Komplexní řešení pro váš web"
- Zobrazit ikony služeb (Next.js, Sanity, SEO, E-commerce)

#### 3. **og-image-portfolio.png**
- Pro stránku portfolio
- Téma: "Realizované projekty"
- Ukázky webů jako mockupy

#### 4. **og-image-blog.png**
- Výchozí image pro blog články
- Téma: "Blog & Novinky"
- Minimalistický design s důrazem na text

---

## Implementace

### Krok 1: Vytvoření v Canva AI PRO

1. **Přihlášení do Canva PRO**
   - Otevřete canva.com
   - Přihlaste se do PRO účtu

2. **Vytvoření hlavního loga**
   \`\`\`
   - Klikněte na "Vytvořit design"
   - Zvolte "Vlastní rozměry"
   - Zadejte: 2000 x 500 px
   - Použijte Canva AI (Text na obrázek) nebo Magic Design
   - Vložte prompt z sekce "Logo Design"
   - Vytvořte 3-5 variant a vyberte nejlepší
   \`\`\`

3. **Vytvoření ikony pro favicon**
   \`\`\`
   - Nový design: 1000 x 1000 px
   - Použijte stejný prompt jako pro logo, ale bez textu
   - Pouze symbol "</>" s gradientem
   - Vytvořte 3 verze: transparentní, bílé pozadí, gradientní pozadí
   \`\`\`

4. **Vytvoření OG Image**
   \`\`\`
   - Nový design: 1200 x 630 px
   - Použijte OG Image prompt
   - Kombinujte text, logo a ilustrace
   - Vytvořte 4 varianty podle výše uvedených témat
   \`\`\`

### Krok 2: Export z Canvy

#### Export loga:
\`\`\`
1. Hlavní logo:
   - Formát: PNG
   - Transparentní pozadí: ANO
   - Kvalita: Nejlepší
   - Název souboru: logo-horizontal.png

2. Logo ikona:
   - Formát: PNG
   - Transparentní pozadí: ANO
   - Název: logo-icon.png
   
3. Vytvořit dodatečně:
   - logo-light.png (světlá verze)
   - logo-mono.png (černobílá)
\`\`\`

#### Export faviconu:
\`\`\`
1. Z logo-icon.png vytvořit:
   - icon-512.png (512x512)
   - icon-192.png (192x192)
   - apple-touch-icon.png (180x180)
   
2. Pro favicon.ico použít online nástroj:
   - Otevřít favicon.io nebo realfavicongenerator.net
   - Nahrát logo-icon.png
   - Vygenerovat multi-resolution .ico soubor
   
3. Pro icon.svg:
   - Export jako SVG z Canvy (pokud dostupné)
   - Nebo konverze PNG → SVG přes vectorizer.io
\`\`\`

#### Export OG Images:
\`\`\`
- Formát: PNG
- Rozměry: 1200 x 630 px (zkontrolovat!)
- Kvalita: Vysoká (ale pod 1 MB)
- Názvy:
  - og-image.png (hlavní)
  - og-image-homepage.png
  - og-image-services.png
  - og-image-portfolio.png
  - og-image-blog.png
\`\`\`

### Krok 3: Optimalizace souborů

#### Komprese obrázků:
\`\`\`bash
# Online nástroje:
- TinyPNG.com (PNG komprese)
- Squoosh.app (univerzální komprese)
- ImageOptim (Mac app)

# Cílové velikosti:
- Logo PNG: pod 50 KB
- Favicon PNG: pod 10 KB každý
- OG Images: pod 500 KB (ideálně 200-300 KB)
\`\`\`

### Krok 4: Umístění souborů

#### Struktura adresářů:
\`\`\`
webnamiru-site-osvc/
├── public/
│   ├── logo/
│   │   ├── logo-horizontal.png       (hlavní logo)
│   │   ├── logo-icon.png             (ikona čtverec)
│   │   ├── logo-light.png            (světlá verze)
│   │   └── logo-mono.png             (černobílá)
│   │
│   ├── favicon.ico                   (multi-res 16,32,48)
│   ├── icon.svg                      (vektorový favicon)
│   ├── apple-touch-icon.png          (180x180)
│   ├── icon-192.png                  (192x192)
│   ├── icon-512.png                  (512x512)
│   │
│   └── og/
│       ├── og-image.png              (hlavní 1200x630)
│       ├── og-image-homepage.png
│       ├── og-image-services.png
│       ├── og-image-portfolio.png
│       └── og-image-blog.png
\`\`\`

### Krok 5: Aktualizace kódu

#### 1. Aktualizace Layout metadata (app/layout.tsx):
\`\`\`typescript
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    images: [
      {
        url: '/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'webnamiru.site - Tvorba webů na míru',
      },
    ],
  },
}
\`\`\`

#### 2. Aktualizace Logo komponenty (components/Logo.tsx):
\`\`\`typescript
import Image from 'next/image'

export function Logo({ variant = 'default' }) {
  const logoSrc = variant === 'light' 
    ? '/logo/logo-light.png' 
    : '/logo/logo-horizontal.png'
    
  return (
    <Image 
      src={logoSrc || "/placeholder.svg"}
      alt="webnamiru.site logo"
      width={200}
      height={50}
      priority
    />
  )
}
\`\`\`

#### 3. Aktualizace Web Manifest (public/site.webmanifest):
\`\`\`json
{
  "name": "webnamiru.site",
  "short_name": "webnamiru",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#2563eb",
  "background_color": "#ffffff",
  "display": "standalone"
}
\`\`\`

### Krok 6: Testování

#### Checklist testování:
\`\`\`
□ Logo se zobrazuje správně v header na všech stránkách
□ Favicon se zobrazuje v záložce browseru
□ Apple touch icon funguje při přidání na iOS home screen
□ OG image se zobrazuje při sdílení na Facebooku
□ OG image se zobrazuje při sdílení na LinkedIn
□ Twitter Card správně zobrazuje preview
□ Logo je responzivní na mobilních zařízeních
□ Všechny obrázky jsou optimalizované (rychlé načítání)
□ SVG favicon funguje v Chrome/Firefox/Safari
\`\`\`

#### Nástroje pro testování:
\`\`\`
- Facebook Sharing Debugger: 
  https://developers.facebook.com/tools/debug/

- LinkedIn Post Inspector:
  https://www.linkedin.com/post-inspector/

- Twitter Card Validator:
  https://cards-dev.twitter.com/validator

- Google Rich Results Test:
  https://search.google.com/test/rich-results
\`\`\`

---

## Dodatečné tipy pro Canva AI PRO

### Využití AI funkcí:

1. **Magic Design**
   - Rychlé vytvoření variant
   - Použití pro první návrhy

2. **Text na obrázek**
   - Přesný popis = lepší výsledky
   - Iterujte s různými prompty

3. **Brand Kit**
   - Uložte barvy webnamiru.site
   - Uložte fonty Inter, Geist Mono
   - Rychlé aplikování brand barev

4. **Magic Eraser**
   - Odstranění nežádoucích elementů
   - Čištění pozadí

5. **Background Remover**
   - Automatické odstranění pozadí
   - Pro vytvoření PNG s transparencí

### Best Practices:

- Vytvořte vždy 3-5 variant každého designu
- Testujte logo v malých rozměrech (16x16px)
- Používejte vektorové elementy kde je to možné
- Exportujte v maximální kvalitě, poté optimalizujte
- Ukládejte zdrojové soubory v Canva pro budoucí úpravy

---

## Kontakt a podpora

Pokud máte otázky k implementaci:
- Email: info@webnamiru.site
- Web: https://webnamiru.site

**Vytvořeno pro:** webnamiru.site - Taras Ishchuk, OSVČ  
**Verze dokumentu:** 1.0  
**Datum vytvoření:** {{ current_date }}  
**Licence:** Interní použití

---

## Přílohy

### A. Barevná paleta (Hex kódy)
\`\`\`
Primary Blue:     #2563eb
Accent Blue:      #0ea5e9
Foreground Black: #0a0a0a
Muted Gray:       #64748b
Light Gray:       #f1f5f9
White:            #ffffff
Success Green:    #10b981
Warning Orange:   #f59e0b
\`\`\`

### B. Typografická škála
\`\`\`
H1: 64px / 4rem (Inter Bold)
H2: 48px / 3rem (Inter Bold)
H3: 36px / 2.25rem (Inter SemiBold)
H4: 24px / 1.5rem (Inter SemiBold)
Body: 16px / 1rem (Inter Regular)
Small: 14px / 0.875rem (Inter Regular)
\`\`\`

### C. Quick Reference - Rozměry
\`\`\`
Logo horizontal:      2000 x 500 px
Logo icon:           1000 x 1000 px
Favicon ICO:         16, 32, 48 px
Icon SVG:            Scalable vector
Apple touch:         180 x 180 px
Android icons:       192, 512 px
OG Image:            1200 x 630 px
