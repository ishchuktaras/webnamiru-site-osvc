import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

// Vytvoříme klienta s právy pro zápis
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN, // TENTO TOKEN MUSÍ BÝT V .ENV.LOCAL
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, rating, text } = body

    // Základní validace
    if (!name || !rating || !text) {
      return NextResponse.json({ message: 'Chybí povinné údaje' }, { status: 400 })
    }

    // Vytvoření dokumentu v Sanity
    await writeClient.create({
      _type: 'review',
      name,
      company,
      rating: Number(rating),
      text,
      isApproved: false, // Defaultně neschváleno
      date: new Date().toISOString(),
    })

    return NextResponse.json({ message: 'Recenze úspěšně odeslána ke schválení' }, { status: 200 })
  } catch (error) {
    console.error('Chyba při ukládání recenze:', error)
    return NextResponse.json({ message: 'Chyba serveru' }, { status: 500 })
  }
}