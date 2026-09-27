// app/(web)/portfolio/page.tsx
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar, CheckCircle2, Loader2 } from "lucide-react"
import Link from "next/link"
import { getProjects } from "@/lib/sanity.queries"
import { urlFor, getBlurDataUrl } from "@/lib/sanity-image" 
import Image from "next/image"

export const metadata: Metadata = {
  title: "Portfolio | webnamiru.site - Realizované projekty",
  description: "Ukázky realizovaných webových projektů a prací ve vývoji.",
}

export const revalidate = 60

export default async function PortfolioPage() {
  const projects = await getProjects().catch(() => [])

  // FILTROVÁNÍ PROJEKTŮ
  const completedKeywords = ["ART DUM", "YURIJ", "IZOLACE"]

  const completedProjects = projects.filter((project: any) => 
    project.title && completedKeywords.some(keyword => project.title.toUpperCase().includes(keyword))
  )

  const inProgressProjects = projects.filter((project: any) => 
    !project.title || !completedKeywords.some(keyword => project.title.toUpperCase().includes(keyword))
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30 border-b">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight text-[#0D1B3E] dark:text-white">
              Portfolio projektů
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              Podívejte se na mé realizované projekty i na to, co právě připravuji.
              Každý web tvořím s důrazem na potřeby klienta a moderní technologie.
            </p>
          </div>
        </div>
      </section>

      {/* SEKCE 1: DOKONČENÉ PROJEKTY */}
      {completedProjects.length > 0 && (
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-8 border-b pb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <h2 className="text-3xl font-bold text-[#0D1B3E] dark:text-white">V provozu (Dokončené)</h2>
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
              <h2 className="text-3xl font-bold text-[#0D1B3E] dark:text-white">Aktuálně vyvíjím</h2>
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
          <Card className="border-0 bg-gradient-to-br from-[#0D1B3E] to-[#1a2b5e] shadow-2xl rounded-3xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance">Chcete podobný projekt?</h2>
              <p className="text-base lg:text-lg text-blue-100 max-w-2xl mx-auto text-pretty leading-relaxed">
                Domluvme si nezávaznou konzultaci a probereme vaše představy.
              </p>
              <Button size="lg" asChild className="bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">
                <Link href="/kontakt">Kontaktovat mě</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project, status }: { project: any; status: "completed" | "in-progress" }) {
  const isCompleted = status === "completed"
  const blurDataUrl = getBlurDataUrl(project.coverImage)

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border ${isCompleted ? 'border-green-500/20' : 'border-amber-500/20'}`}>
      {/* Upravený obal obrázku: bg-slate-50 a border-b */}
      <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-900 overflow-hidden group border-b border-slate-100 dark:border-slate-800">
        {project.coverImage ? (
          <Image
            // Odstraněn ořez .width(600).height(400) ze Sanity
            src={urlFor(project.coverImage).url() || "/placeholder.svg"}
            alt={project.title}
            fill
            placeholder={blurDataUrl ? "blur" : "empty"}
            blurDataURL={blurDataUrl}
            // Použito object-contain a jemný padding (p-2)
            className={`object-contain p-2 transition-transform duration-700 group-hover:scale-105 ${!isCompleted ? 'opacity-90 grayscale-[0.3]' : ''}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <p className="text-muted-foreground text-sm font-medium">Obrázek v přípravě</p>
          </div>
        )}
        
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
          <h3 className="text-2xl font-bold text-[#0D1B3E] dark:text-white">{project.title}</h3>
          <p className="text-sm text-[#3B82F6] font-medium uppercase tracking-wider">{project.clientName}</p>
        </div>
        
        <div className="flex items-center text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg w-fit border border-slate-100 dark:border-slate-800">
          <Calendar className="h-4 w-4 mr-2 text-[#3B82F6]" />
          {project.publishedAt ? new Date(project.publishedAt).toLocaleDateString("cs-CZ", {
            year: "numeric",
            month: "long",
          }) : "Datum neuvedeno"}
        </div>

        <div className="flex gap-3 pt-4 mt-auto border-t border-slate-100 dark:border-slate-800">
          <Button asChild variant={isCompleted ? "default" : "secondary"} className={`flex-1 ${isCompleted ? 'bg-[#0D1B3E] hover:bg-[#1a2b5e] text-white' : ''}`}>
            <Link href={`/portfolio/${project.slug?.current}`}>
              {isCompleted ? "Detail projektu" : "Více info"}
            </Link>
          </Button>

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