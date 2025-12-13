// app/portfolio/page.tsx

import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar, CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getProjects } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import Image from "next/image"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer } from "@/components/animations/StaggerContainer"

export const metadata: Metadata = {
  title: "Portfolio | webnamiru.site",
  description: "Ukázky našich realizovaných webových projektů a prací ve vývoji.",
}

export const revalidate = 60

export default async function PortfolioPage() {
  const projects = await getProjects()

  // 1. FILTROVÁNÍ PROJEKTŮ
  // "ART DUM" (case insensitive) půjde do hotových, zbytek do rozpracovaných
  const completedProjects = projects.filter((project: any) => 
    project.title && project.title.toUpperCase().includes("ART DUM")
  )

  const inProgressProjects = projects.filter((project: any) => 
    !project.title || !project.title.toUpperCase().includes("ART DUM")
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AnimatedSection direction="up">
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
                Portfolio projektů
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
                Podívejte se na mé realizované projekty i na to, co právě připravuji.
                Každý web tvořím s důrazem na potřeby klienta a moderní technologie.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SEKCE 1: DOKONČENÉ PROJEKTY (V PROVOZU) */}
      {completedProjects.length > 0 && (
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection className="flex items-center gap-3 mb-8 border-b pb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h2 className="text-3xl font-bold">V provozu (Dokončené)</h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project: any) => (
                <ProjectCard key={project._id} project={project} status="completed" />
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* SEKCE 2: AKTUÁLNĚ VYVÍJÍM */}
      {inProgressProjects.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection className="flex items-center gap-3 mb-8 border-b pb-4 border-accent/20">
              <Loader2 className="h-6 w-6 text-amber-500 animate-spin-slow" /> {/* animate-spin-slow vyžaduje custom tailwind config, jinak použijte animate-spin */}
              <h2 className="text-3xl font-bold">Aktuálně vyvíjím</h2>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inProgressProjects.map((project: any) => (
                <ProjectCard key={project._id} project={project} status="in-progress" />
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-balance">Chcete podobný projekt?</h2>
                <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Domluvme si nezávaznou konzultaci a probereme vaše představy.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-md">
                  <Link href="/kontakt">Kontaktovat mě</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

// Komponenta pro kartu projektu (aby byl kód čistší)
function ProjectCard({ project, status }: { project: any; status: "completed" | "in-progress" }) {
  const isCompleted = status === "completed"

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg flex flex-col h-full ${isCompleted ? 'border-green-500/20' : 'border-amber-500/20'}`}>
      <div className="relative h-64 w-full bg-muted overflow-hidden group">
        {project.coverImage?.asset ? (
          <Image
            src={urlFor(project.coverImage).width(600).height(400).url() || "/placeholder.svg"}
            alt={project.coverImage.alt || project.title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${!isCompleted ? 'opacity-90 grayscale-[0.3]' : ''}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground text-sm">Obrázek v přípravě</p>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm backdrop-blur-md ${
            isCompleted 
              ? "bg-green-500/90 text-white" 
              : "bg-amber-500/90 text-black"
          }`}>
            {isCompleted ? "Hotovo" : "Ve vývoji"}
          </span>
        </div>
      </div>

      <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
        <div className="space-y-2 flex-grow">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.clientName}</p>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {project.publishedAt ? new Date(project.publishedAt).toLocaleDateString("cs-CZ", {
            year: "numeric",
            month: "long",
          }) : "Datum neuvedeno"}
        </div>

        <div className="flex gap-2 pt-4 mt-auto">
          {/* Tlačítko detailu - pro rozpracované může být disabled, pokud není co ukázat */}
          <Button asChild variant={isCompleted ? "default" : "secondary"} className="flex-1">
            <Link href={`/portfolio/${project.slug.current}`}>
              {isCompleted ? "Detail projektu" : "Více info"}
            </Link>
          </Button>

          {/* Odkaz na živý web - jen pokud existuje a je hotovo */}
          {project.url && (
            <Button asChild variant="outline" size="icon" title="Přejít na web">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}