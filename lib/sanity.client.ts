import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Pro produkci můžete dát true, pokud chcete rychlejší čtení z edge
})

// --- PŘIDEJTE TUTO FUNKCI ---
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
      revalidate: 60, // Defaultní čas pro obnovu dat (60 sekund)
      tags,
    },
  })
}