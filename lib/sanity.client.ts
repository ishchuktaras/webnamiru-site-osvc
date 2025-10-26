import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

if (!projectId) {
  console.warn("[Sanity] NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Sanity features will be disabled.")
}

export const client = createClient({
  projectId: projectId || "g8e5a2q4",
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

export const isSanityConfigured = () => !!projectId

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
