import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { getProjects } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Portfolio | webnamiru.site",
  description:
    "Ukázky našich realizovaných webových projektů pro české firmy a podnikatele.",
};

export const revalidate = 3600; // Revalidate every hour

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">webnamiru.site</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/sluzby"
              className="transition-colors hover:text-accent"
            >
              Služby
            </Link>
            <Link
              href="/portfolio"
              className="transition-colors hover:text-accent text-accent"
            >
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors hover:text-accent">
              Blog
            </Link>
            <Link
              href="/kontakt"
              className="transition-colors hover:text-accent"
            >
              Kontakt
            </Link>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
              Naše realizované projekty
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              Podívejte se na weby, které jsme vytvořili pro české firmy a
              podnikatele. Každý projekt je jedinečný a šitý na míru potřebám
              klienta.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                Zatím nejsou k dispozici žádné projekty.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Přidejte projekty v Sanity Studio.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: any) => (
                <Card
                  key={project._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {project.coverImage && (
                    <div className="relative h-64 w-full bg-muted">
                      <Image
                        src={
                          urlFor(project.coverImage)
                            .width(600)
                            .height(400)
                            .url() || "/placeholder.svg"
                        }
                        alt={project.coverImage.alt || project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.clientName}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(project.publishedAt).toLocaleDateString(
                        "cs-CZ",
                        {
                          year: "numeric",
                          month: "long",
                        }
                      )}
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 bg-transparent"
                      >
                        <Link href={`/portfolio/${project.slug.current}`}>
                          Detail projektu
                        </Link>
                      </Button>
                      {project.url && (
                        <Button asChild variant="ghost" size="icon">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5 shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance">
                Chcete podobný projekt?
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Domluvme si nezávaznou konzultaci a probereme váš projekt
              </p>
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 shadow-md"
              >
                <Link href="/kontakt">Kontaktovat nás</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
