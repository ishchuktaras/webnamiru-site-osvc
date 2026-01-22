import imageUrlBuilder from "@sanity/image-url"
// OPRAVA: Importujeme přímo z hlavního balíčku
import type { SanityImageSource } from "@sanity/image-url" 
import { client } from "./sanity.client"

// Inicializace image URL builderu
const builder = imageUrlBuilder(client)

/**
 * Generuje optimalizovanou URL pro Sanity obrázek
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Generuje optimalizovanou URL pro blog cover image
 */
export function getBlogCoverImageUrl(source: SanityImageSource, width = 1200, height = 630): string {
  if (!source) return ""
  return urlFor(source).width(width).height(height).fit("crop").auto("format").quality(85).url()
}

/**
 * Získá Base64 LQIP (Low Quality Image Placeholder) pro efekt rozmazání
 * POZOR: Vyžaduje, aby GROQ query obsahovalo: asset->{metadata{lqip}}
 */
export function getBlurDataUrl(image: any): string | undefined {
  return image?.asset?.metadata?.lqip
}

/**
 * Získá metadata obrázku (alt text, caption, atribuce)
 */
export function getImageMetadata(image: any) {
  return {
    alt: image?.alt || image?.asset?.altText || "Blog article image",
    caption: image?.caption || null,
    // Unsplash metadata (pokud je obrázek z Unsplash a používáš plugin)
    credit: image?.asset?.creditLine || image?.credit || null,
    source: image?.asset?.source || null,
  }
}

export const urlForImage = urlFor