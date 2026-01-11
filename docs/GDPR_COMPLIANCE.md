# GDPR Compliance Guide pro webnamiru.site

## Přehled

Tento dokument popisuje implementaci GDPR (General Data Protection Regulation) compliance na webnamiru.site.

## Implementované funkce

### 1. Cookie Consent Banner

**Komponenta:** `components/CookieConsent.tsx`

**Funkce:**
- Zobrazení cookie banneru při první návštěvě
- Možnost přijmout/odmítnout všechny cookies
- Detailní nastavení cookies po kategoriích
- Uložení preferencí do localStorage

**Kategorie cookies:**
1. **Nezbytné** - Vždy aktivní, nelze vypnout
   - Session cookies
   - Bezpečnostní cookies
   
2. **Analytické** - Volitelné
   - Google Analytics (pokud implementováno)
   - Vercel Analytics
   
3. **Marketingové** - Volitelné
   - Reklamní cookies
   - Tracking cookies

### 2. Právní stránky

**Vytvořené stránky:**
- `/ochrana-osobnich-udaju` - Privacy Policy
- `/obchodni-podminky` - Terms of Service
- `/cookies` - Cookie Policy
- `/pravni-informace` - Legal Information

### 3. Kontaktní formulář

**Soubor:** `app/api/contact/route.tsx`

**GDPR compliance:**
- Explicitní souhlas s zpracováním osobních údajů
- Jasné uvedení účelu zpracování
- Možnost odvolání souhlasu
- Bezpečné zpracování dat

### 4. reCAPTCHA

**Implementace:**
- reCAPTCHA v3 pro kontaktní formulář
- Informace o zpracování dat Google v Privacy Policy
- Odkaz na Google Privacy Policy

## Právní požadavky

### Co musí web obsahovat (GDPR):

1. **Informační povinnost (Čl. 13 GDPR):**
   - ✅ Identifikace správce (Taras Ishchuk, OSVČ)
   - ✅ Kontaktní údaje (info@webnamiru.site, +420 777 596 216)
   - ✅ Účel zpracování osobních údajů
   - ✅ Právní základ zpracování
   - ✅ Doba uložení dat
   - ✅ Práva subjektu údajů

2. **Souhlas (Čl. 7 GDPR):**
   - ✅ Dobrovolný souhlas
   - ✅ Konkrétní a informovaný
   - ✅ Možnost odvolání
   - ✅ Opt-in (ne opt-out)

3. **Práva subjektu údajů:**
   - ✅ Právo na přístup k údajům
   - ✅ Právo na opravu
   - ✅ Právo na výmaz ("právo být zapomenut")
   - ✅ Právo na přenositelnost
   - ✅ Právo vznést námitku

### Cookies a ePrivacy Directive:

1. **Před použitím cookies:**
   - ✅ Informace o používání cookies
   - ✅ Účel jednotlivých cookies
   - ✅ Získání souhlasu (opt-in)

2. **Výjimky (nezbytné cookies):**
   - ✅ Session cookies
   - ✅ Bezpečnostní cookies
   - ✅ Cookies pro funkčnost webu

## Technická implementace

### Cookie Consent Flow:

\`\`\`typescript
1. Uživatel navštíví web
2. Po 1 sekundě se zobrazí cookie banner
3. Uživatel má 3 možnosti:
   a) Přijmout vše → všechny cookies povoleny
   b) Odmítnout vše → pouze nezbytné cookies
   c) Nastavení → výběr kategorií
4. Preference uloženy do localStorage
5. Banner se již nezobrazuje
\`\`\`

### Ukládání preferencí:

\`\`\`typescript
interface CookiePreferences {
  necessary: boolean  // vždy true
  analytics: boolean  // volitelné
  marketing: boolean  // volitelné
}

localStorage.setItem('cookie-consent', JSON.stringify(preferences))
\`\`\`

### Integrace s analytics:

\`\`\`typescript
// V CookieConsent.tsx
if (preferences.analytics) {
  // Povolit Google Analytics
  window.gtag('consent', 'update', {
    'analytics_storage': 'granted'
  })
}
\`\`\`

## Doporučení pro další kroky

### 1. Google Analytics (pokud chcete implementovat):

\`\`\`typescript
// app/layout.tsx
{preferences.analytics && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}
    </Script>
  </>
)}
\`\`\`

### 2. reCAPTCHA v3:

\`\`\`typescript
// Přidat do kontaktního formuláře
<Script
  src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
  strategy="afterInteractive"
/>
\`\`\`

### 3. Cookie Policy aktualizace:

Aktualizujte `/app/cookies/page.tsx` s konkrétními cookies, které používáte:

\`\`\`markdown
## Používané cookies

### Nezbytné cookies
- `cookie-consent` - Ukládá vaše preference cookies (1 rok)

### Analytické cookies (pokud povoleno)
- `_ga` - Google Analytics (2 roky)
- `_gid` - Google Analytics (24 hodin)

### Marketingové cookies (pokud povoleno)
- Aktuálně nepoužíváme
\`\`\`

## Kontrolní seznam GDPR compliance

- ✅ Cookie consent banner implementován
- ✅ Možnost výběru kategorií cookies
- ✅ Privacy Policy stránka
- ✅ Cookie Policy stránka
- ✅ Terms of Service stránka
- ✅ Kontaktní informace správce
- ✅ Práva subjektu údajů popsána
- ✅ Možnost odvolání souhlasu
- ⚠️ Google Analytics - implementovat s consent mode
- ⚠️ reCAPTCHA - přidat informace do Privacy Policy
- ⚠️ Newsletter - pokud budete implementovat, přidat double opt-in

## Kontakt pro GDPR dotazy

**Správce osobních údajů:**
Taras Ishchuk, OSVČ  
IČO: 23874694  
Email: info@webnamiru.site  
Telefon: +420 777 596 216  
Adresa: Rantířovská 123/36, 586 01 Jihlava - Horní Kosov

## Užitečné odkazy

- [GDPR oficiální text (EU)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [Úřad pro ochranu osobních údajů (ČR)](https://www.uoou.cz/)
- [Google GDPR Resource Center](https://privacy.google.com/businesses/compliance/)
- [Cookie Consent Best Practices](https://gdpr.eu/cookies/)
