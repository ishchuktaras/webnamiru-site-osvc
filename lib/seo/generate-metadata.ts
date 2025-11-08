import type { Metadata } from "next"

interface GenerateMetadataProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string[]
  type?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage = "/og-image-home.jpg",
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | webnamiru.site`
  const canonicalUrl = canonical ? `https://webnamiru.site${canonical}` : undefined

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "tvorba webů", "webdesign", "Jihlava", "Vysočina", "Next.js", "webové stránky"],
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "webnamiru.site",
      locale: "cs_CZ",
      ...(type === "article" && {
        publishedTime,
        modifiedTime,
        authors,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export function generateBlogMetadata({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  author = "Taras Ishchuk",
  tags = [],
  coverImage,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  author?: string
  tags?: string[]
  coverImage?: string
}) {
  return generatePageMetadata({
    title,
    description,
    canonical: `/blog/${slug}`,
    ogImage: coverImage || "/og-image-blog.jpg",
    keywords: [...tags, "blog", "webový vývoj", "tutoriál"],
    type: "article",
    publishedTime: publishedAt,
    modifiedTime: updatedAt || publishedAt,
    authors: [author],
  })
}
