# Nasazení na Vercel

## 1. Nastavení Environment Variables

Po pushnutí kódu na GitHub a propojení s Vercel musíte nastavit environment variables:

### Povinné proměnné:

1. **RESEND_API_KEY** (pro kontaktní formulář)
   - Získejte na: https://resend.com/api-keys
   - Hodnota: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Volitelné proměnné (pro Sanity CMS):

2. **NEXT_PUBLIC_SANITY_PROJECT_ID**
   - Najděte v `webnamiru-cms/sanity.config.ts`
   - Nebo na: https://www.sanity.io/manage
   - Hodnota: např. `abc123xyz`

3. **NEXT_PUBLIC_SANITY_DATASET**
   - Hodnota: `production`

4. **SANITY_API_TOKEN**
   - Vytvořte na: https://www.sanity.io/manage → API → Tokens
   - Práva: "Viewer" (pro čtení dat)
   - Hodnota: `skxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## 2. Jak nastavit proměnné na Vercelu

1. Jděte na: https://vercel.com/dashboard
2. Vyberte projekt `webnamiru-site-osvc`
3. Klikněte na **Settings** → **Environment Variables**
4. Přidejte každou proměnnou:
   - **Key**: název proměnné (např. `RESEND_API_KEY`)
   - **Value**: hodnota proměnné
   - **Environments**: zaškrtněte všechny (Production, Preview, Development)
5. Klikněte **Save**

## 3. Redeploy

Po nastavení proměnných:
1. Jděte na **Deployments**
2. Klikněte na **...** u posledního deploye
3. Vyberte **Redeploy**

Build by měl proběhnout úspěšně!

## 4. Poznámky

- Bez Sanity proměnných bude web fungovat, ale stránky `/blog`, `/portfolio` a dynamické služby nebudou načítat data ze Sanity CMS
- Kontaktní formulář vyžaduje `RESEND_API_KEY` pro odesílání emailů
- Po nastavení Sanity proměnných nezapomeňte vytvořit obsah v Sanity Studio (http://localhost:3333)
</parameter>
