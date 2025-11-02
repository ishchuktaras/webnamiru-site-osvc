import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { client } from "./sanity.client"

// Inicializace image URL builderu
const builder = imageUrlBuilder(client)

/**
 * Generuje optimalizovanou URL pro Sanity obrázek
 * @param source - Sanity image object
 * @returns Image URL builder
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Generuje optimalizovanou URL pro blog cover image
 * @param source - Sanity image object
 * @param width - Šířka obrázku (default: 1200)
 * @param height - Výška obrázku (default: 630)
 * @returns Optimalizovaná URL
 */
export function getBlogCoverImageUrl(source: SanityImageSource, width = 1200, height = 630): string {
  return urlFor(source).width(width).height(height).fit("crop").auto("format").quality(85).url()
}

/**
 * Generuje optimalizovanou URL pro blog thumbnail
 * @param source - Sanity image object
 * @param width - Šířka obrázku (default: 600)
 * @param height - Výška obrázku (default: 400)
 * @returns Optimalizovaná URL
 */
export function getBlogThumbnailUrl(source: SanityImageSource, width = 600, height = 400): string {
  return urlFor(source).width(width).height(height).fit("crop").auto("format").quality(80).url()
}

/**
 * Generuje blur placeholder pro lazy loading
 * @param source - Sanity image object
 * @returns Blur placeholder URL
 */
export function getBlurDataUrl(source: SanityImageSource): string {
  return urlFor(source).width(20).height(20).blur(10).quality(50).url()
}

/**
 * Získá metadata obrázku (alt text, caption, atribuce)
 * @param image - Sanity image object s metadata
 * @returns Metadata object
 */
export function getImageMetadata(image: any) {
  return {
    alt: image?.alt || "Blog article image",
    caption: image?.caption || null,
    // Unsplash metadata (pokud je obrázek z Unsplash)
    credit: image?.asset?.creditLine || null,
    source: image?.asset?.source || null,
  }
}

/**
 * Alias pro urlFor - pro kompatibilitu s různými částmi aplikace
 * @param source - Sanity image object
 * @returns Image URL builder
 */
export const urlForImage = urlFor
