# Návod na nastavení emailů (Resend)

## Proč email nepřišel?

Pokud API vrátilo `success: true`, ale email nepřišel, problém je s **Resend API**.

## Krok 1: Zkontrolovat Resend API klíč ve Vercel

1. Jděte na https://vercel.com/dashboard
2. Otevřete projekt **webnamiru-site**
3. **Settings** → **Environment Variables**
4. Zkontrolujte, že existuje: `RESEND_API_KEY`

**Pokud chybí:**
1. Jděte na https://resend.com/api-keys
2. Vytvořte nový API klíč (nebo zkopírujte existující)
3. Přidejte ho do Vercel:
   - Name: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx` (váš API klíč)
   - Environment: Production, Preview, Development
4. Klikněte **Save**
5. **Redeploy** projekt

## Krok 2: Ověřit email adresu v Resend

Resend **free plán** vyžaduje ověření odesílací adresy:

1. Jděte na https://resend.com/domains
2. Přidejte doménu `webnamiru.site`:
   - Klikněte **Add Domain**
   - Zadejte `webnamiru.site`
   - Klikněte **Add**
3. Resend vám ukáže DNS záznamy, které musíte přidat do WEDOS:
   - **SPF záznam** (TXT)
   - **DKIM záznam** (TXT)
   - **DMARC záznam** (TXT)
4. Přidejte tyto záznamy do WEDOS DNS:
   - Přihlaste se do WEDOS
   - Jděte na **Správa DNS** pro doménu `webnamiru.site`
   - Přidejte všechny TXT záznamy z Resend
5. Počkejte 10-30 minut na propagaci DNS
6. V Resend klikněte **Verify Domain**

## Krok 3: Změnit odesílací adresu v kódu

Po ověření domény změňte v `app/api/contact/route.tsx`:

\`\`\`typescript
// PŘED (používá Resend testovací adresu):
from: "webnamiru.site <onboarding@resend.dev>",

// PO (používá vaši ověřenou doménu):
from: "webnamiru.site <noreply@webnamiru.site>",
\`\`\`

## Krok 4: Testování

1. Odešlete formulář na webu
2. Otevřete Developer Tools → Console
3. Hledejte logy:
   \`\`\`
   [v0] Environment check: {hasResendKey: true, resendKeyPrefix: "re_xxxx"}
   [v0] Sending email via Resend...
   [v0] Resend API response: {...}
   [v0] Email sent successfully, ID: xxxxx
   \`\`\`

**Pokud vidíte chybu:**
- `RESEND_API_KEY is not configured` → Přidejte API klíč do Vercel
- `Domain not verified` → Ověřte doménu v Resend (Krok 2)
- `Invalid API key` → Zkontrolujte, že API klíč je správný

## Alternativa: Použít Gmail SMTP

Pokud nechcete nastavovat Resend, můžete použít Gmail:

1. Vytvořte "App Password" v Google účtu
2. Nainstalujte `nodemailer`:
   \`\`\`bash
   npm install nodemailer
   \`\`\`
3. Změňte `app/api/contact/route.tsx` na použití nodemailer místo Resend

## Kontrola spamu

Pokud email přišel, ale je ve spamu:
1. Zkontrolujte spam složku v `info@webnamiru.site`
2. Označte email jako "Not spam"
3. Přidejte `noreply@webnamiru.site` do kontaktů
