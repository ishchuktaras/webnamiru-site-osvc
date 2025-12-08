import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = "2024-01-01"

// 1. Klient
export const client = createClient({
  projectId: projectId || "g8e5a2q4", // Fallback ID z vašeho kódu
  dataset,
  apiVersion,
  useCdn: false, // Pro revalidaci dat (ISR) je lepší false
  token: process.env.SANITY_API_TOKEN,
})

// 2. Helper pro kontrolu konfigurace (Potřebuje to sitemap.ts)
export const isSanityConfigured = () => !!projectId

// 3. Helper pro obrázky (Potřebuje to portfolio a blog)
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// 4. NOVÁ FUNKCE: Helper pro načítání dat (Potřebuje to stránka Recenze)
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 60, // Obnovení dat každých 60s
      tags,
    },
  })
}