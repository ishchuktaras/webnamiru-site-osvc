import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { headers } from 'next/headers'

// Vytvoření klienta s právem zápisu
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN, 
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, rating, text, honeypot } = body

    // 1. Ochrana proti spamu (Honeypot)
    if (honeypot && honeypot.length > 0) {
      // Tváříme se, že OK, ale nic neukládáme
      return NextResponse.json({ message: 'Recenze přijata' }, { status: 200 })
    }

    // 2. Validace
    if (!name || !rating || !text) {
      return NextResponse.json({ message: 'Chybí povinná pole (jméno, text, hodnocení)' }, { status: 400 })
    }

    // 3. Uložení do Sanity
   await writeClient.create({
      _type: 'review',
      name: name.slice(0, 100),          
      company: company?.slice(0, 100),   
      rating: Number(rating),           
      text: text,                        
      isApproved: false,              
      _createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ message: 'Recenze odeslána ke schválení' }, { status: 200 })

  } catch (error: any) {
    console.error('Chyba API:', error)
    return NextResponse.json({ message: 'Chyba serveru', detail: error.message }, { status: 500 })
  }
}