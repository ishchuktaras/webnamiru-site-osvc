import Image from "next/image"
import { getBlogCoverImageUrl, getBlurDataUrl, getImageMetadata } from "@/lib/sanity-image"

interface BlogImageProps {
  image: any
  alt?: string
  priority?: boolean
  className?: string
  width?: number
  height?: number
}

export function BlogImage({
  image,
  alt,
  priority = false,
  className = "",
  width = 1200,
  height = 630,
}: BlogImageProps) {
  if (!image) {
    return null
  }

  const imageUrl = getBlogCoverImageUrl(image, width, height)
  const blurDataUrl = getBlurDataUrl(image)
  const metadata = getImageMetadata(image)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={alt || metadata.alt}
        width={width}
        height={height}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
      />

      {/* Unsplash credit (pokud je obrázek z Unsplash) */}
      {metadata.credit && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Photo by {metadata.credit}
        </div>
      )}

      {/* Caption (pokud existuje) */}
      {metadata.caption && <p className="text-sm text-muted-foreground mt-2 italic">{metadata.caption}</p>}
    </div>
  )
}
