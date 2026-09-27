// app/(web)/portfolio/[slug]/page.tsx

import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getProjectBySlug, getProjects } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const projects = await getProjects().catch(() => [])
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const project = await getProjectBySlug(params.slug)
  if (!project) return { title: "Projekt nenalezen" }

  return {
    title: `${project.title} | Portfolio | webnamiru.site`,
    description: `Ukázka projektu ${project.title} pro klienta ${project.clientName}`,
  }
}

export const revalidate = 60

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Back Button - Opravený horní padding (pt-28) pro fixní hlavičku */}
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 pt-28 pb-4">
        <Button 
          variant="ghost" 
          asChild 
          className="text-muted-foreground hover:text-[#0D1B3E] hover:bg-slate-100 dark:hover:bg-slate-800 -ml-4 transition-colors"
        >
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na portfolio
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <section className="py-12 bg-muted/20 border-y">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-tight text-[#0D1B3E] dark:text-white">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground justify-center md:justify-start">
              <div className="flex items-center px-3 py-1 bg-white dark:bg-slate-800 border rounded-full text-sm shadow-sm">
                <Calendar className="h-4 w-4 mr-2 text-[#3B82F6]" />
                {project.publishedAt ? new Date(project.publishedAt).toLocaleDateString("cs-CZ", {
                  year: "numeric",
                  month: "long",
                }) : "Neuvedeno"}
              </div>
              <div className="px-3 py-1 bg-white dark:bg-slate-800 border rounded-full text-sm font-medium shadow-sm">
                Klient: <span className="text-foreground">{project.clientName}</span>
              </div>
            </div>
            {project.url && (
              <Button asChild variant="default" size="lg" className="mt-6 bg-[#0D1B3E] hover:bg-[#1a2b5e] text-white">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Navštívit web <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="py-12">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <div className="relative h-[300px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <Image
                src={urlFor(project.coverImage).width(1200).height(800).url() || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Project Description */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
            {project.description ? (
                <PortableText value={project.description} />
            ) : (
                <p className="text-muted-foreground italic">Popis projektu se připravuje...</p>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0D1B3E] dark:text-white">Galerie projektu</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery
                .filter((image: any) => image?.asset)
                .map((image: any, index: number) => (
                  <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                    <Image
                      src={urlFor(image).width(800).height(600).url() || "/placeholder.svg"}
                      alt={`${project.title} - obrázek ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}