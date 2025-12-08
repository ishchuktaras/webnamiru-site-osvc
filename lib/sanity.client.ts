import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
export const apiVersion = "2024-01-01"

// 1. Vytvoření klienta
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Pro produkci true, pokud chcete cachování
})

// 2. Helper pro kontrolu konfigurace (Nutné pro Sitemap)
export const isSanityConfigured = () => !!projectId

// 3. Helper pro generování URL obrázků (Nutné pro Portfolio a Blog)
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// 4. Helper pro bezpečné načítání dat s cachováním (Nutné pro Recenze)
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
      revalidate: 60, // Data se obnoví každých 60 sekund
      tags,
    },
  })
}