import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { headers } from 'next/headers'

// Konfigurace Sanity klienta
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

// Jednoduchá in-memory mapa pro Rate Limiting (pro malé projekty stačí)
const rateLimitMap = new Map();

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, rating, text, honeypot } = body // Přidali jsme 'honeypot'

    // --- 1. OCHRANA: Honeypot (Past na roboty) ---
    // Pokud je vyplněné skryté pole 'honeypot' (např. 'website'), je to bot.
    if (honeypot && honeypot.length > 0) {
      console.log('Spam detekován (honeypot):', name)
      // Vrátíme úspěch, aby bot nevěděl, že byl odhalen
      return NextResponse.json({ message: 'Recenze přijata' }, { status: 200 })
    }

    // --- 2. OCHRANA: Rate Limiting (Omezení IP) ---
    const ip = (await headers()).get('x-forwarded-for') || 'unknown'
    const limit = 3 // Max 3 recenze...
    const windowMs = 60 * 60 * 1000 // ...za 1 hodinu

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, { count: 0, lastReset: Date.now() });
    }

    const ipData = rateLimitMap.get(ip);
    
    // Resetování okna po uplynutí času
    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    if (ipData.count >= limit) {
      return NextResponse.json(
        { message: 'Příliš mnoho požadavků. Zkuste to později.' },
        { status: 429 }
      )
    }

    ipData.count++;

    // --- 3. OCHRANA: Validace dat ---
    if (!name || !rating || !text) {
      return NextResponse.json({ message: 'Chybí povinné údaje' }, { status: 400 })
    }

    // Ochrana proti dlouhému textu (max 2000 znaků)
    if (text.length > 2000) {
      return NextResponse.json({ message: 'Text recenze je příliš dlouhý (max 2000 znaků)' }, { status: 400 })
    }

    // Uložení do Sanity
    await writeClient.create({
      _type: 'review',
      name: name.slice(0, 100), // Oříznutí jména
      company: company?.slice(0, 100),
      rating: Number(rating),
      text: text, // Validováno výše
      isApproved: false,
      date: new Date().toISOString(),
    })

    return NextResponse.json({ message: 'Recenze odeslána ke schválení' }, { status: 200 })

  } catch (error) {
    console.error('Chyba při ukládání recenze:', error)
    return NextResponse.json({ message: 'Chyba serveru' }, { status: 500 })
  }
}