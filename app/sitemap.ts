import type { MetadataRoute } from "next"
import { getServices, getProjects, getArticles } from "@/lib/sanity.queries"
import { isSanityConfigured } from "@/lib/sanity.client"

const BASE_URL = "https://webnamiru.site"

type SanityDoc = {
  slug: { current: string }
  _updatedAt?: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Statické stránky s prioritami a frekvencemi změn
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sluzby`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/zahajeni-projektu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cenik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/o-mne`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]

  if (!isSanityConfigured()) {
    console.warn("[Sitemap] Sanity is not configured. Returning static URLs only.")
    return staticUrls
  }

  try {
    // Načtení dat ze Sanity paralelně
    const [sluzby, projekty, clanky] = await Promise.all([getServices(), getProjects(), getArticles()])

    // Generování URL pro služby
    const sluzbyUrls: MetadataRoute.Sitemap = sluzby.map((sluzba: SanityDoc) => ({
      url: `${BASE_URL}/sluzby/${sluzba.slug.current}`,
      lastModified: sluzba._updatedAt ? new Date(sluzba._updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

    // Generování URL pro portfolio projekty
    const projektyUrls: MetadataRoute.Sitemap = projekty.map((projekt: SanityDoc) => ({
      url: `${BASE_URL}/portfolio/${projekt.slug.current}`,
      lastModified: projekt._updatedAt ? new Date(projekt._updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

    // Generování URL pro blog články
    const clankyUrls: MetadataRoute.Sitemap = clanky.map((clanek: SanityDoc) => ({
      url: `${BASE_URL}/blog/${clanek.slug.current}`,
      lastModified: clanek._updatedAt ? new Date(clanek._updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))

    // Kombinace všech URL
    return [...staticUrls, ...sluzbyUrls, ...projektyUrls, ...clankyUrls]
  } catch (error) {
    console.error("[Sitemap] Error fetching Sanity data:", error)
    return staticUrls
  }
}
