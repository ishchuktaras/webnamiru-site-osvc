# Návod na testování reCAPTCHA v3

## 1. Ověření nastavení Environment Variables ve Vercel

### Krok 1: Přihlaste se do Vercel
1. Jděte na https://vercel.com/dashboard
2. Otevřete projekt **webnamiru-site**

### Krok 2: Zkontrolujte Environment Variables
1. Klikněte na **Settings** → **Environment Variables**
2. Ověřte, že máte nastavené:
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = `6LcKWPorAAAAAB4emmQQJvfuag9BrMwJRdQrPp`
   - `RECAPTCHA_SECRET_KEY` = (váš secret key z Google Cloud Console)

### Krok 3: Pokud chybí, přidejte je
1. Klikněte **Add New**
2. Zadejte název: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
3. Zadejte hodnotu: `6LcKWPorAAAAAB4emmQQJvfuag9BrMwJRdQrPp`
4. Vyberte všechna prostředí: Production, Preview, Development
5. Klikněte **Save**
6. Opakujte pro `RECAPTCHA_SECRET_KEY`

### Krok 4: Redeploy projektu
Po přidání environment variables musíte projekt znovu nasadit:
1. Jděte na **Deployments**
2. Klikněte na tři tečky u posledního deploymentu
3. Klikněte **Redeploy**
4. Počkejte, až se deployment dokončí (1-2 minuty)

---

## 2. Testování reCAPTCHA na webu

### Krok 1: Otevřete kontaktní formulář
1. Jděte na https://webnamiru.site/kontakt
2. Otevřete Developer Tools (F12 nebo Cmd+Option+I na Mac)
3. Přejděte na záložku **Console**

### Krok 2: Zkontrolujte načtení reCAPTCHA scriptu
V Console by měly být vidět:
\`\`\`
[v0] reCAPTCHA token obtained successfully
\`\`\`

Nebo v záložce **Network**:
- Hledejte request na `https://www.google.com/recaptcha/api.js`
- Měl by mít status **200 OK**

### Krok 3: Vyplňte a odešlete formulář
1. Vyplňte všechna povinná pole:
   - Jméno a příjmení
   - Email
   - Zpráva (min. 10 znaků)
2. Klikněte **Odeslat poptávku**

### Krok 4: Zkontrolujte Console logy
V Console by měly být vidět:
\`\`\`
[v0] reCAPTCHA token obtained successfully
[v0] Contact form submission: { name: "...", email: "...", ... }
\`\`\`

Pokud vidíte chybu:
\`\`\`
[v0] reCAPTCHA error: ...
\`\`\`
Znamená to, že reCAPTCHA není správně nakonfigurované.

---

## 3. Ověření v Google Cloud Console

### Krok 1: Otevřete reCAPTCHA dashboard
1. Jděte na https://console.cloud.google.com/security/recaptcha
2. Vyberte projekt **webnamiru**
3. Klikněte na klíč **webnamiru**

### Krok 2: Zkontrolujte metriky
Po odeslání formuláře (počkejte 5-10 minut):
1. V záložce **Overview** by měl být graf **Scores** s daty
2. V sekci **Insights** by měly být vidět statistiky
3. Status by měl změnit z **Incomplete** na **Active**

### Krok 3: Zkontrolujte Logs
1. Přejděte na záložku **Logs**
2. Měly by být vidět requesty z vašeho webu
3. Každý request by měl mít:
   - **Action**: `contact_form`
   - **Score**: 0.0 - 1.0 (čím vyšší, tím lepší)
   - **Hostname**: `webnamiru.site`

---

## 4. Časté problémy a řešení

### Problém: "Property 'grecaptcha' does not exist"
**Řešení**: reCAPTCHA script se nenačetl. Zkontrolujte:
- Environment variable `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` je nastavená
- Projekt byl redeploynutý po přidání env variables
- V Network tabu je request na `recaptcha/api.js`

### Problém: "reCAPTCHA verification failed"
**Řešení**: Backend nemůže ověřit token. Zkontrolujte:
- Environment variable `RECAPTCHA_SECRET_KEY` je nastavená
- Secret key je správný (zkopírovaný z Google Cloud Console)
- Token není expirovaný (platnost 2 minuty)

### Problém: Status stále "Incomplete"
**Řešení**: Google ještě neobdržel žádné requesty. Zkontrolujte:
- Formulář byl skutečně odeslán (zkontrolujte Console logy)
- Počkejte 5-10 minut na aktualizaci metrik
- Zkuste odeslat formulář znovu

### Problém: Score je příliš nízký (< 0.5)
**Řešení**: reCAPTCHA považuje request za podezřelý:
- Zkuste z jiného prohlížeče nebo zařízení
- Zkuste bez VPN nebo proxy
- Zkuste po přihlášení do Google účtu

---

## 5. Produkční checklist

Před spuštěním do produkce zkontrolujte:

- [ ] Environment variables jsou nastavené ve Vercel (Production)
- [ ] reCAPTCHA klíč má správnou doménu (`webnamiru.site`)
- [ ] Formulář úspěšně odesílá tokeny
- [ ] Backend správně ověřuje tokeny
- [ ] Google Cloud Console ukazuje data v metrikách
- [ ] Status je "Active" (ne "Incomplete")
- [ ] Cookie Policy obsahuje informace o reCAPTCHA
- [ ] Uživatelé jsou informováni o použití reCAPTCHA

---

## 6. Monitoring a údržba

### Pravidelně kontrolujte:
1. **Metriky v Google Cloud Console**:
   - Počet requestů
   - Průměrné score
   - Podezřelé aktivity

2. **Logy ve Vercel**:
   - Chyby při ověřování reCAPTCHA
   - Zamítnuté requesty

3. **Uživatelské zpětné vazby**:
   - Stížnosti na nefunkční formulář
   - Problémy s odesíláním

### Doporučené akce:
- Nastavte alerting v Google Cloud Console pro podezřelé aktivity
- Pravidelně kontrolujte score threshold (aktuálně 0.5)
- Aktualizujte reCAPTCHA klíče každých 6-12 měsíců

---

## Kontakt pro podporu

Pokud máte problémy s reCAPTCHA:
1. Zkontrolujte tento návod
2. Zkontrolujte Console logy v prohlížeči
3. Zkontrolujte Vercel deployment logy
4. Kontaktujte podporu Google Cloud: https://cloud.google.com/support
