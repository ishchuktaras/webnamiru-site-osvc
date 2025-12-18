// app/blog/[slug]/page.tsx

import { getArticleBySlug, getArticles } from "@/lib/sanity.queries"
import { notFound } from "next/navigation"
import { calculateReadingTime, extractTextFromPortableText } from "@/lib/utils/reading-time"
import ArticlePageClient from "./article-page-client"

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

  const plainText = extractTextFromPortableText(article.body)
  const readingMinutes = calculateReadingTime(plainText)

  return <ArticlePageClient article={article} readingMinutes={readingMinutes} />
}
