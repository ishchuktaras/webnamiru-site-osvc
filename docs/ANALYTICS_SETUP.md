# Nastavení Google Analytics a reCAPTCHA

## Google Analytics

### 1. Vytvoření Google Analytics účtu

1. Jděte na https://analytics.google.com/
2. Vytvořte nový účet a property
3. Zkopírujte **Measurement ID** (formát: G-XXXXXXXXXX)

### 2. Přidání do Vercel

1. Jděte na https://vercel.com/dashboard
2. Otevřete projekt **webnamiru-site**
3. **Settings** → **Environment Variables**
4. Přidejte novou proměnnou:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Váš Measurement ID (např. `G-XXXXXXXXXX`)
   - **Environment**: Production, Preview, Development

### 3. Jak to funguje

- Google Analytics se načte **pouze pokud uživatel souhlasí** s analytickými cookies
- IP adresy jsou automaticky anonymizovány pro ochranu soukromí
- Data se ukládají na servery Google po dobu až 2 let

---

## Google reCAPTCHA v3

### 1. Vytvoření reCAPTCHA klíčů

1. Jděte na https://www.google.com/recaptcha/admin
2. Klikněte na **+** pro vytvoření nového webu
3. Vyplňte:
   - **Label**: webnamiru.site
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: `webnamiru.site`, `localhost`
4. Zkopírujte **Site Key** a **Secret Key**

### 2. Přidání do Vercel

1. Jděte na https://vercel.com/dashboard
2. Otevřete projekt **webnamiru-site**
3. **Settings** → **Environment Variables**
4. Přidejte dvě nové proměnné:
   
   **Site Key (veřejný):**
   - **Name**: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - **Value**: Váš Site Key
   - **Environment**: Production, Preview, Development
   
   **Secret Key (soukromý):**
   - **Name**: `RECAPTCHA_SECRET_KEY`
   - **Value**: Váš Secret Key
   - **Environment**: Production, Preview, Development

### 3. Jak to funguje

- reCAPTCHA v3 běží na pozadí bez interakce uživatele
- Hodnotí každý požadavek skóre od 0.0 (bot) do 1.0 (člověk)
- Požadavky se skóre < 0.5 jsou odmítnuty
- Chrání kontaktní formulář před spamem

---

## Testování

### Google Analytics
1. Otevřete web v prohlížeči
2. Přijměte analytické cookies v cookie banneru
3. Jděte na Google Analytics → **Reports** → **Realtime**
4. Měli byste vidět svou návštěvu v reálném čase

### reCAPTCHA
1. Otevřete kontaktní formulář
2. Vyplňte a odešlete
3. V konzoli prohlížeče (F12) byste neměli vidět žádné chyby
4. Formulář by měl být úspěšně odeslán

---

## GDPR Compliance

Obě služby jsou implementovány v souladu s GDPR:

- **Google Analytics**: Načítá se pouze se souhlasem uživatele
- **reCAPTCHA**: Informace v Cookie Policy a Privacy Policy
- **Anonymizace**: IP adresy jsou anonymizovány
- **Transparentnost**: Uživatelé jsou informováni o sběru dat

---

## Časté problémy

### Google Analytics se nenačítá
- Zkontrolujte, že jste přijali analytické cookies
- Zkontrolujte environment variable `NEXT_PUBLIC_GA_ID`
- Zkontrolujte konzoli prohlížeče (F12) pro chyby

### reCAPTCHA nefunguje
- Zkontrolujte environment variables (Site Key a Secret Key)
- Zkontrolujte, že je doména přidána v reCAPTCHA admin
- Zkontrolujte konzoli prohlížeče (F12) pro chyby

---

## Kontakt

Pokud máte problémy s nastavením, kontaktujte:
- Email: info@webnamiru.site
- Telefon: +420 777 596 216
