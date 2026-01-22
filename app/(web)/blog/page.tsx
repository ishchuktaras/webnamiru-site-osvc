// app/(web)/blog/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { getArticles } from "@/lib/sanity.queries"
import { BlogImage } from "@/components/blog/BlogImage"
import { calculateReadingTime, formatReadingTime, extractTextFromPortableText } from "@/lib/utils/reading-time"

export const metadata = {
  title: "Blog | webnamiru.site",
  description: "Články o webovém vývoji, SEO optimalizaci, e-commerce a moderních technologiích.",
}

export const revalidate = 60

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-linear-to-b from-background to-secondary/20">
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
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Zatím nejsou k dispozici žádné články.</p>
              <p className="text-sm text-muted-foreground mt-2">Přidejte články v Sanity Studio.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => {
                const plainText = extractTextFromPortableText(article.body)
                const readingMinutes = calculateReadingTime(plainText)

                return (
                  <Card
                    key={article._id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
                  >
                    {article.mainImage && (
                      <BlogImage
                        image={article.mainImage}
                        alt={article.title}
                        width={800}
                        height={450}
                        className="h-48"
                      />
                    )}
                    <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {new Date(article.publishedAt).toLocaleDateString("cs-CZ", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1.5" />
                          {formatReadingTime(readingMinutes)}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3 flex-1">{article.summary}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        <Link href={`/blog/${article.slug.current}`}>
                          Číst článek <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
