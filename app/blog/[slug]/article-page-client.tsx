"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { formatReadingTime } from "@/lib/utils/reading-time"
import { BlogImage } from "@/components/blog/BlogImage"

interface ArticlePageClientProps {
  article: any
  readingMinutes: number
}

export default function ArticlePageClient({ article, readingMinutes }: ArticlePageClientProps) {
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

            <div className="flex items-center gap-6 text-muted-foreground flex-wrap">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {new Date(article.publishedAt).toLocaleDateString("cs-CZ", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {formatReadingTime(readingMinutes)} čtení
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">{article.summary}</p>

            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.summary,
                      url: window.location.href,
                    })
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert("Odkaz zkopírován do schránky!")
                  }
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Sdílet článek
              </Button>
            </div>
          </div>

          {/* Main Image */}
          {article.mainImage && (
            <BlogImage
              image={article.mainImage}
              alt={article.title}
              priority
              width={1200}
              height={630}
              className="h-96 md:h-[500px] rounded-lg shadow-xl mb-12"
            />
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md">
            <PortableText value={article.body} />
          </div>

          <div className="mt-16 pt-8 border-t">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zpět na všechny články
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}
