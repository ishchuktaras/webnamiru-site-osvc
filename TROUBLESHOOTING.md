# Troubleshooting Guide - webnamiru.site

## Problém: Email nepřichází po odeslání formuláře

### Krok 1: Zkontrolujte Environment Variables ve Vercel

1. Jděte na https://vercel.com/dashboard
2. Otevřete projekt **webnamiru-site**
3. **Settings** → **Environment Variables**
4. Ověřte, že existuje:
   \`\`\`
   RESEND_API_KEY = re_xxxxxxxxxxxxx
   \`\`\`

### Krok 2: Zkontrolujte Resend Dashboard

1. Jděte na https://resend.com/emails
2. Zkontrolujte, jestli se email pokusil odeslat
3. Pokud je status "Failed", klikněte na něj a zjistěte důvod

### Krok 3: Zkontrolujte Console v Developer Tools

1. Otevřete web: https://webnamiru.site/kontakt
2. Stiskněte `F12` (Developer Tools)
3. Jděte na záložku **Console**
4. Vyplňte a odešlete formulář
5. Hledejte logy začínající `[v0]`:
   \`\`\`
   [v0] Environment check: {hasResendKey: true, hasRecaptchaSecret: true}
   [v0] Received form data: ...
   [v0] Sending email via Resend...
   [v0] Email sent successfully: ...
   \`\`\`

### Krok 4: Zkontrolujte Network Tab

1. V Developer Tools jděte na záložku **Network**
2. Odešlete formulář
3. Najděte request na `/api/contact`
4. Klikněte na něj a zkontrolujte:
   - **Status**: Měl by být `200 OK`
   - **Response**: Měla by být `{"success": true, "message": "..."}`
   - Pokud je chyba, zkontrolujte **Response** tab pro detaily

---

## Problém: reCAPTCHA nefunguje (status "Incomplete")

### Krok 1: Zkontrolujte Environment Variables

1. Ve Vercel → **Settings** → **Environment Variables**
2. Ověřte, že existují:
   \`\`\`
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY = 6LcKWPorAAAAAB4emmQQJvfuag9BrMwJRdQrPp
   RECAPTCHA_SECRET_KEY = 6LcKWPorAAAAAxxxxxxxxxxxxxxxxxxxxx
   \`\`\`

### Krok 2: Zkontrolujte, že se script načítá

1. Otevřete web: https://webnamiru.site
2. Stiskněte `F12` → **Console**
3. Hledejte logy:
   \`\`\`
   [v0] reCAPTCHA Site Key: 6LcKWPorAAAAAB4emmQQJvfuag9BrMwJRdQrPp
   [v0] reCAPTCHA script loaded successfully
   [v0] grecaptcha is available
   \`\`\`

4. Napište do Console:
   \`\`\`javascript
   typeof grecaptcha
   \`\`\`
   Mělo by vrátit: `"object"` (ne `"undefined"`)

### Krok 3: Zkontrolujte Network Tab

1. V Developer Tools → **Network** tab
2. Obnovte stránku (`F5`)
3. Hledejte request na:
   - `recaptcha/api.js?render=6LcKWPorAAAAAB4emmQQJvfuag9BrMwJRdQrPp`
4. Pokud request **není**, environment variable není nastavená

### Krok 4: Zkontrolujte reCAPTCHA badge

1. Na webu by měl být vidět malý badge v pravém dolním rohu:
   \`\`\`
   [reCAPTCHA logo] protected by reCAPTCHA
   \`\`\`
2. Pokud badge **není vidět**, script se nenačetl

### Krok 5: Otestujte odeslání formuláře

1. Jděte na https://webnamiru.site/kontakt
2. Otevřete Console (`F12`)
3. Vyplňte a odešlete formulář
4. Hledejte logy:
   \`\`\`
   [v0] reCAPTCHA check: {hasSiteKey: true, hasGrecaptcha: true}
   [v0] Executing reCAPTCHA...
   [v0] reCAPTCHA token obtained successfully
   [v0] Verifying reCAPTCHA token...
   [v0] reCAPTCHA verification successful, score: 0.9
   \`\`\`

### Krok 6: Zkontrolujte Google Cloud Console

1. Po odeslání formuláře počkejte **5-10 minut**
2. Jděte na https://console.cloud.google.com/security/recaptcha
3. Otevřete klíč "webnamiru"
4. Graf "Scores" by měl zobrazit data
5. Status "Incomplete" by měl zmizet

---

## Časté chyby a řešení

### Chyba: "RESEND_API_KEY is not defined"
**Řešení:** Přidejte `RESEND_API_KEY` do Vercel Environment Variables a redeployujte.

### Chyba: "grecaptcha is not defined"
**Řešení:** Přidejte `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` do Vercel Environment Variables a redeployujte.

### Chyba: "reCAPTCHA verification failed"
**Řešení:** Zkontrolujte, že `RECAPTCHA_SECRET_KEY` ve Vercel odpovídá Secret Key v Google Cloud Console.

### Chyba: "Email failed to send"
**Řešení:** 
1. Zkontrolujte Resend Dashboard pro detaily chyby
2. Ověřte, že email adresa `info@webnamiru.site` je ověřená v Resend
3. Zkontrolujte, že `RESEND_API_KEY` je platný

---

## Kontakt na podporu

Pokud problém přetrvává, kontaktujte:
- Vercel Support: https://vercel.com/help
- Resend Support: https://resend.com/support
- Google reCAPTCHA Support: https://support.google.com/recaptcha
