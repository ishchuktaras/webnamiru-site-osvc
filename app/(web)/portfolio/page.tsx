import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar, CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"
import { getProjects } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Portfolio | Webnamiru.site - Realizované projekty",
  description: "Ukázky našich realizovaných webových projektů a prací ve vývoji.",
}

export const revalidate = 60

export default async function PortfolioPage() {
  // Načtení dat ze Sanity (ošetřeno proti pádu)
  const projects = await getProjects().catch(() => [])

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
      <section className="py-20 bg-muted/30 border-b">
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

      {/* SEKCE 1: DOKONČENÉ PROJEKTY (V PROVOZU) */}
      {completedProjects.length > 0 && (
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h2 className="text-3xl font-bold">V provozu (Dokončené)</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project: any) => (
                <ProjectCard key={project._id} project={project} status="completed" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEKCE 2: AKTUÁLNĚ VYVÍJÍM */}
      {inProgressProjects.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-8 border-b pb-4 border-primary/20">
              <Loader2 className="h-6 w-6 text-amber-500 animate-spin" />
              <h2 className="text-3xl font-bold">Aktuálně vyvíjím</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inProgressProjects.map((project: any) => (
                <ProjectCard key={project._id} project={project} status="in-progress" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <Card className="border-2 border-primary/20 bg-primary/5 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">Chcete podobný projekt?</h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Domluvme si nezávaznou konzultaci a probereme vaše představy.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-md">
                <Link href="/kontakt">Kontaktovat mě</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Komponenta pro kartu projektu
function ProjectCard({ project, status }: { project: any; status: "completed" | "in-progress" }) {
  const isCompleted = status === "completed"

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border ${isCompleted ? 'border-green-500/20' : 'border-amber-500/20'}`}>
      <div className="relative h-64 w-full bg-muted overflow-hidden group">
        {project.coverImage ? (
          <Image
            src={urlFor(project.coverImage).width(600).height(400).url() || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${!isCompleted ? 'opacity-90 grayscale-[0.3]' : ''}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <p className="text-muted-foreground text-sm font-medium">Obrázek v přípravě</p>
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md uppercase tracking-wide ${
            isCompleted 
              ? "bg-green-500 text-white" 
              : "bg-amber-500 text-white"
          }`}>
            {isCompleted ? "Hotovo" : "Ve vývoji"}
          </span>
        </div>
      </div>

      <CardContent className="p-6 space-y-4 flex flex-col flex-grow">
        <div className="space-y-2 flex-grow">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{project.clientName}</p>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground bg-muted/50 p-2 rounded-lg w-fit">
          <Calendar className="h-4 w-4 mr-2 opacity-70" />
          {project.publishedAt ? new Date(project.publishedAt).toLocaleDateString("cs-CZ", {
            year: "numeric",
            month: "long",
          }) : "Datum neuvedeno"}
        </div>

        <div className="flex gap-3 pt-4 mt-auto border-t">
          {/* Tlačítko detailu */}
          <Button asChild variant={isCompleted ? "default" : "secondary"} className="flex-1">
            <Link href={`/portfolio/${project.slug?.current}`}>
              {isCompleted ? "Detail projektu" : "Více info"}
            </Link>
          </Button>

          {/* Odkaz na živý web */}
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