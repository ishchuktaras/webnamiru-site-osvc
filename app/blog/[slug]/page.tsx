import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug)
  if (!article) return {}

  return {
    title: `${article.title} | Blog | webnamiru.site`,
    description: article.summary,
  }
}

export const revalidate = 60

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
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
                src={
                  urlFor(article.mainImage).width(1200).height(800).url() || "/placeholder.svg" || "/placeholder.svg"
                }
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
    </div>
  )
}
