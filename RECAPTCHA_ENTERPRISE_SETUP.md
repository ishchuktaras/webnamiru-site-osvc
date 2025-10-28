# reCAPTCHA Enterprise - Kompletní návod na nastavení

## Nový Site Key
Váš nový reCAPTCHA Enterprise klíč: `6LdHi_orAAAAAPv4LMI5SSEiKUZJFnAW7TvQK-oM`

## Krok 1: Aktualizovat Environment Variables ve Vercel

1. Jděte na: https://vercel.com/dashboard
2. Otevřete projekt **webnamiru-site**
3. **Settings** → **Environment Variables**
4. **Aktualizujte nebo přidejte:**

\`\`\`
NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6LdHi_orAAAAAPv4LMI5SSEiKUZJFnAW7TvQK-oM
RECAPTCHA_SECRET_KEY = [Váš Secret Key z Google Cloud Console]
\`\`\`

5. Zaškrtněte všechny prostředí: **Production**, **Preview**, **Development**
6. Klikněte **Save**

## Krok 2: Získat Secret Key

1. Jděte na: https://console.cloud.google.com/security/recaptcha
2. Klikněte na klíč **"webnamiru"** nebo váš nový Enterprise klíč
3. Zkopírujte **Secret Key** (zobrazí se pouze jednou při vytvoření)
4. Pokud jste ho ztratili, musíte vytvořit nový klíč

## Krok 3: Nastavit Google Cloud Project (pro Enterprise API)

reCAPTCHA Enterprise vyžaduje Google Cloud Project ID a API Key:

1. Jděte na: https://console.cloud.google.com/
2. Vyberte nebo vytvořte projekt
3. Zapněte **reCAPTCHA Enterprise API**:
   - Jděte na **APIs & Services** → **Library**
   - Hledejte "reCAPTCHA Enterprise API"
   - Klikněte **Enable**
4. Vytvořte API Key:
   - Jděte na **APIs & Services** → **Credentials**
   - Klikněte **Create Credentials** → **API Key**
   - Zkopírujte API Key
5. Najděte Project ID:
   - Jděte na **Dashboard**
   - Project ID je vidět nahoře (např. "webnamiru-123456")

## Krok 4: Přidat další Environment Variables

Ve Vercel přidejte:

\`\`\`
GOOGLE_CLOUD_PROJECT_ID = [Váš Project ID]
GOOGLE_CLOUD_API_KEY = [Váš API Key]
\`\`\`

## Krok 5: Redeploy

1. Jděte na **Deployments** ve Vercel
2. Najděte poslední deployment
3. Klikněte na tři tečky (⋯) → **Redeploy**

## Krok 6: Testování

1. Otevřete: https://webnamiru.site/kontakt
2. Otevřete Developer Tools (F12) → Console
3. Vyplňte a odešlete formulář
4. Zkontrolujte console logy:
   - `[v0] reCAPTCHA check: {hasSiteKey: true, hasGrecaptcha: true}`
   - `[v0] Executing reCAPTCHA Enterprise...`
   - `[v0] reCAPTCHA Enterprise token obtained successfully`
   - `[v0] reCAPTCHA verification successful, score: 0.9`

## Krok 7: Zkontrolovat v Google Cloud Console

1. Jděte na: https://console.cloud.google.com/security/recaptcha
2. Klikněte na váš klíč
3. Po 5-10 minutách by se měla objevit data v grafu "Scores"
4. Status "Incomplete" by měl zmizet

## Poznámky

- reCAPTCHA Enterprise badge se zobrazí v pravém dolním rohu webu
- Token je platný 2 minuty
- Score 0.0 = bot, 1.0 = člověk
- Doporučený threshold: 0.5

## Troubleshooting

**Problém:** "Invalid site key"
- Zkontrolujte, že domény jsou přidané v Google Cloud Console
- Zkontrolujte, že používáte správný Site Key

**Problém:** "API Key not valid"
- Zkontrolujte, že reCAPTCHA Enterprise API je zapnutá
- Zkontrolujte, že API Key je správný

**Problém:** Badge se nezobrazuje
- Zkontrolujte Console - hledejte chyby
- Zkontrolujte Network tab - měl by být request na `recaptcha/enterprise.js`
