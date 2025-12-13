// app/sitemap.ts

import type { MetadataRoute } from "next"
import { getServices, getProjects, getArticles } from "@/lib/sanity.queries"
import { isSanityConfigured } from "@/lib/sanity.client"

const BASE_URL = "https://webnamiru.site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Statické stránky (hlavní struktura webu)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/sluzby`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/o-mne`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/zahajeni-projektu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // Ceník a jiné statické stránky
  ]

  if (!isSanityConfigured()) {
    console.warn("[Sitemap] Sanity is not configured. Returning static URLs only.")
    return staticRoutes
  }

  try {
    // 2. Paralelní načtení dynamických dat ze Sanity (včetně SLUŽEB)
    const [services, projects, articles] = await Promise.all([
      getServices(),
      getProjects(),
      getArticles()
    ])

    // 3. Generování URL pro SLUŽBY
    const servicesUrls: MetadataRoute.Sitemap = services.map((service: any) => ({
      url: `${BASE_URL}/sluzby/${service.slug.current}`,
      lastModified: service._updatedAt ? new Date(service._updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

    // 4. Generování URL pro Projekty
    const projectsUrls: MetadataRoute.Sitemap = projects.map((project: any) => ({
      url: `${BASE_URL}/portfolio/${project.slug.current}`,
      lastModified: project._updatedAt 
        ? new Date(project._updatedAt) 
        : (project.publishedAt ? new Date(project.publishedAt) : new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

    // 5. Generování URL pro Články
    const articlesUrls: MetadataRoute.Sitemap = articles.map((article: any) => ({
      url: `${BASE_URL}/blog/${article.slug.current}`,
      lastModified: article._updatedAt 
        ? new Date(article._updatedAt) 
        : (article.publishedAt ? new Date(article.publishedAt) : new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))

    // 6. Spojení všech URL
    return [...staticRoutes, ...servicesUrls, ...projectsUrls, ...articlesUrls]

  } catch (error) {
    console.error("[Sitemap] Error fetching Sanity data:", error)
    return staticRoutes
  }
}