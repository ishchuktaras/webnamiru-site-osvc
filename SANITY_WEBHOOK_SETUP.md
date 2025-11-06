# Nastavení Sanity Webhooků pro Automatickou Revalidaci

Tento návod vám ukáže, jak nastavit Sanity webhooky pro automatickou aktualizaci webu při změnách v CMS.

## 1. Přidání REVALIDATE_SECRET do Vercel

1. Přejděte na [Vercel Dashboard](https://vercel.com/dashboard)
2. Vyberte projekt `webnamiru-site`
3. Přejděte na **Settings** → **Environment Variables**
4. Přidejte novou proměnnou:
   - **Key:** `REVALIDATE_SECRET`
   - **Value:** Vygenerujte silný náhodný string (např. pomocí `openssl rand -base64 32`)
   - **Environment:** Production, Preview, Development
5. Klikněte na **Save**

## 2. Nastavení Webhooku v Sanity

1. Přejděte na [Sanity Dashboard](https://www.sanity.io/manage)
2. Vyberte váš projekt `webnamiru-cms`
3. Přejděte na **API** → **Webhooks**
4. Klikněte na **Create webhook**
5. Vyplňte formulář:
   - **Name:** `Vercel Revalidation`
   - **URL:** `https://webnamiru.site/api/revalidate?secret=VÁŠ_REVALIDATE_SECRET`
     - Nahraďte `VÁŠ_REVALIDATE_SECRET` hodnotou z Vercel
   - **Dataset:** `production`
   - **Trigger on:** Zaškrtněte:
     - ✅ Create
     - ✅ Update
     - ✅ Delete
   - **Filter:** (volitelné, pro specifické typy dokumentů)
     \`\`\`groq
     _type in ["clanek", "projekt", "sluzba"]
     \`\`\`
   - **Projection:** (volitelné, pro posílání pouze potřebných dat)
     \`\`\`groq
     {
       "type": _type,
       "slug": slug.current
     }
     \`\`\`
   - **HTTP method:** `POST`
   - **API version:** `v2021-06-07`
   - **Include drafts:** ❌ Ne (pouze publikované dokumenty)

6. Klikněte na **Save**

## 3. Testování Webhooku

### Manuální test přes Sanity:
1. V Sanity Dashboard → Webhooks
2. Najděte váš webhook
3. Klikněte na **Test**
4. Zkontrolujte response (mělo by být `{"revalidated": true, ...}`)

### Test změnou obsahu:
1. Otevřete Sanity Studio
2. Upravte nějaký článek, projekt nebo službu
3. Klikněte na **Publish**
4. Počkejte 5-10 sekund
5. Obnovte stránku na webu - změny by měly být viditelné

### Manuální revalidace (pro testování):
\`\`\`bash
# Revalidace konkrétní stránky
curl "https://webnamiru.site/api/revalidate?secret=VÁŠ_SECRET&path=/blog"

# Revalidace konkrétního článku
curl -X POST "https://webnamiru.site/api/revalidate?secret=VÁŠ_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "clanek", "slug": "10-seo-chyb"}'

# Revalidace portfolio projektu
curl -X POST "https://webnamiru.site/api/revalidate?secret=VÁŠ_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "projekt", "slug": "projekt-slug"}'

# Revalidace služby
curl -X POST "https://webnamiru.site/api/revalidate?secret=VÁŠ_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"type": "sluzba", "slug": "sluzba-slug"}'
\`\`\`

## 4. Monitoring Webhooků

1. V Sanity Dashboard → Webhooks
2. Klikněte na váš webhook
3. Přejděte na **Deliveries**
4. Zde uvidíte historii všech webhook volání a jejich statusy

## 5. Troubleshooting

### Webhook vrací 401 Unauthorized:
- Zkontrolujte, že `REVALIDATE_SECRET` v URL odpovídá hodnotě v Vercel
- Ujistěte se, že secret je správně URL-encoded

### Změny se stále nezobrazují:
- Zkontrolujte Vercel logs: `vercel logs`
- Zkontrolujte Sanity webhook deliveries
- Vymažte browser cache (Ctrl+Shift+R)
- Počkejte 60 sekund (ISR fallback revalidace)

### Webhook se nespouští:
- Zkontrolujte, že webhook je aktivní (zelená tečka)
- Zkontrolujte filter - možná blokuje vaše dokumenty
- Zkontrolujte, že publikujete (ne jen ukládáte draft)

## 6. Alternativní Řešení (bez webhooků)

Pokud nechcete používat webhooky, můžete:

1. **Snížit ISR revalidaci** (už nastaveno na 60 sekund):
   - Změny se projeví do 1 minuty automaticky
   - Nevýhoda: Více requestů na Sanity API

2. **Manuální revalidace** po každé změně:
   - Otevřete: `https://webnamiru.site/api/revalidate?secret=VÁŠ_SECRET&path=/blog`
   - Nevýhoda: Musíte to dělat ručně

## 7. Doporučení

- ✅ Používejte webhooky pro produkci (okamžitá aktualizace)
- ✅ Nastavte ISR revalidaci na 60-300 sekund jako fallback
- ✅ Monitorujte webhook deliveries pravidelně
- ✅ Používejte silný REVALIDATE_SECRET (min. 32 znaků)

## 8. Podporované Typy Obsahu

API endpoint `/api/revalidate` podporuje následující typy:

- **clanek** - Blogové články (`/blog` a `/blog/[slug]`)
- **projekt** - Portfolio projekty (`/portfolio` a `/portfolio/[slug]`)
- **sluzba** - Služby (`/sluzby` a `/sluzby/[slug]`)

Při publikaci jakéhokoliv z těchto typů v Sanity se automaticky revaliduje příslušná stránka na webu.
