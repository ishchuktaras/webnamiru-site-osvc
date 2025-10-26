import { Button } from "@/components/ui/button"
import { Code2, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getArticleBySlug, getArticles } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article: any) => ({
    slug: article.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return {}

  return {
    title: `${article.title} | Blog | webnamiru.site`,
    description: article.summary,
  }
}

export const revalidate = 3600

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">webnamiru.site</span>
          </Link>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
        </div>
      </header>

      {/* Back Button */}
      <div className="container max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <Button asChild variant="ghost">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(article.publishedAt).toLocaleDateString("cs-CZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{article.summary}</p>
          </div>

          {/* Main Image */}
          {article.mainImage && (
            <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden mb-12">
              <Image
                src={urlFor(article.mainImage).width(1200).height(800).url() || "/placeholder.svg"}
                alt={article.mainImage.alt || article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={article.body} />
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t py-12 bg-secondary mt-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} webnamiru.site - Taras Ishchuk, OSVČ. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
