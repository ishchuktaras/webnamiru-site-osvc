// app/portfolio/[slug]/page.tsx

import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getProjectBySlug, getProjects } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const projects = await getProjects()
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
  if (!project) return {}

  return {
    title: `${project.title} | Portfolio | webnamiru.site`,
    description: `Ukázka projektu ${project.title} pro ${project.clientName}`,
  }
}

export const revalidate = 60 // Revalidate every minute

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
      {/* Back Button */}
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <Button asChild variant="ghost">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na portfolio
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(project.publishedAt).toLocaleDateString("cs-CZ", {
                  year: "numeric",
                  month: "long",
                })}
              </div>
              <div>Klient: {project.clientName}</div>
            </div>
            {project.url && (
              <Button asChild variant="outline">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Navštívit web <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage?.asset && (
        <section className="py-8">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <div className="relative h-96 md:h-[600px] w-full rounded-lg overflow-hidden">
              <Image
                src={urlFor(project.coverImage).width(1200).height(800).url() || "/placeholder.svg"}
                alt={project.coverImage.alt || project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Project Description */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <PortableText value={project.description} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Galerie</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery
                .filter((image: any) => image?.asset)
                .map((image: any, index: number) => (
                  <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(image).width(800).height(600).url() || "/placeholder.svg"}
                      alt={image.alt || `${project.title} - obrázek ${index + 1}`}
                      fill
                      className="object-cover"
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
