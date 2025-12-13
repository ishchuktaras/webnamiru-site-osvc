// app/sitemap.ts

import type { MetadataRoute } from "next"
import { getServices, getProjects, getArticles } from "@/lib/sanity.queries"
import { isSanityConfigured } from "@/lib/sanity.client"

const BASE_URL = "https://webnamiru.site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Definice statických stránek (hlavní struktura webu)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sluzby`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
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
    {
      url: `${BASE_URL}/o-mne`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/zahajeni-projektu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  // Pokud není Sanity nastaveno, vrátíme jen statické stránky
  if (!isSanityConfigured()) {
    return staticRoutes
  }

  try {
    // 2. Paralelní načtení dat ze Sanity (Projects, Services, Articles)
    const [services, projects, articles] = await Promise.all([
      getServices(),
      getProjects(),
      getArticles()
    ])

    // 3. Mapování Služeb (Services)
    const servicesUrls: MetadataRoute.Sitemap = services.map((service: any) => ({
      url: `${BASE_URL}/sluzby/${service.slug.current}`,
      lastModified: service._updatedAt ? new Date(service._updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

    // 4. Mapování Projektů (Portfolio)
    const projectsUrls: MetadataRoute.Sitemap = projects.map((project: any) => ({
      url: `${BASE_URL}/portfolio/${project.slug.current}`,
      lastModified: project._updatedAt 
        ? new Date(project._updatedAt) 
        : (project.publishedAt ? new Date(project.publishedAt) : new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

    // 5. Mapování Článků (Blog)
    const articlesUrls: MetadataRoute.Sitemap = articles.map((article: any) => ({
      url: `${BASE_URL}/blog/${article.slug.current}`,
      lastModified: article._updatedAt 
        ? new Date(article._updatedAt) 
        : (article.publishedAt ? new Date(article.publishedAt) : new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))

    // 6. Spojení všeho dohromady
    return [...staticRoutes, ...servicesUrls, ...projectsUrls, ...articlesUrls]

  } catch (error) {
    console.error("[Sitemap] Error fetching Sanity data:", error)
    // V případě chyby vrátíme alespoň statické stránky, aby web nespadl
    return staticRoutes
  }
}