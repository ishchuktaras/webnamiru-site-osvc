// app/sitemap.ts
import type { MetadataRoute } from "next"
import { getProjects } from "@/lib/sanity.queries"

const BASE_URL = "https://webnamiru.site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Základní statické stránky - ty budou fungovat vždy
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  try {
    // 2. Pokusíme se načíst projekty
    // Používáme jen getProjects, protože víme, že to funguje
    const projects = await getProjects()

    const projectUrls = projects.map((project: any) => ({
      url: `${BASE_URL}/portfolio/${project.slug.current}`,
      lastModified: project._updatedAt ? new Date(project._updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [...routes, ...projectUrls]

  } catch (error) {
    // 3. ZÁCHRANA: Pokud Sanity selže, vrátíme alespoň statické stránky
    // Díky tomu Google Search Console přestane hlásit chybu
    console.error("Sitemap generation error:", error)
    return routes
  }
}