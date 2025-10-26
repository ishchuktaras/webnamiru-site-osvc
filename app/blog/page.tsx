import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getArticles } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import Image from "next/image"

export const metadata = {
  title: "Blog | webnamiru.site",
  description: "Články o webovém vývoji, SEO optimalizaci, e-commerce a moderních technologiích.",
}

export const revalidate = 3600

export default async function BlogPage() {
  const articles = await getArticles()

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
            <Link href="/sluzby" className="transition-colors hover:text-accent">
              Služby
            </Link>
            <Link href="/portfolio" className="transition-colors hover:text-accent">
              Portfolio
            </Link>
            <Link href="/blog" className="transition-colors hover:text-accent text-accent">
              Blog
            </Link>
            <Link href="/kontakt" className="transition-colors hover:text-accent">
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
              Blog o webovém vývoji
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              Praktické tipy, návody a trendy z oblasti webového vývoje, SEO optimalizace a e-commerce pro české
              podnikatele.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Zatím nejsou k dispozici žádné články.</p>
              <p className="text-sm text-muted-foreground mt-2">Přidejte články v Sanity Studio.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <Card key={article._id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  {article.mainImage && (
                    <div className="relative h-48 w-full bg-muted">
                      <Image
                        src={urlFor(article.mainImage).width(600).height(400).url() || "/placeholder.svg"}
                        alt={article.mainImage.alt || article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(article.publishedAt).toLocaleDateString("cs-CZ", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="text-2xl font-semibold line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground line-clamp-3 flex-1">{article.summary}</p>
                    <Button asChild variant="outline" className="mt-auto bg-transparent">
                      <Link href={`/blog/${article.slug.current}`}>
                        Číst článek <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} webnamiru.site - Taras Ishchuk, OSVČ. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
