"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, Clock, Share2, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { formatReadingTime } from "@/lib/utils/reading-time"
import { BlogImage } from "@/components/blog/BlogImage"
import { portableTextComponents } from "@/components/blog/PortableTextComponents"
import { motion, useScroll, useSpring } from "framer-motion" // Přidáno pro Progress Bar

interface ArticlePageClientProps {
  article: any
  readingMinutes: number
}

export default function ArticlePageClient({ article, readingMinutes }: ArticlePageClientProps) {
  // Progress bar logika
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm" className="hover:bg-transparent -ml-2">
            <Link href="/blog" className="flex items-center gap-2 group">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Zpět na blog</span>
            </Link>
          </Button>
          
          <div className="flex items-center gap-2">
             <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  // Zde můžete použít váš toast hook ze složky hooks/use-toast.ts
                }}
              >
                <Share2 className="h-4 w-4" />
              </Button>
          </div>
        </div>
      </nav>

      <article className="pb-24">
        {/* Header Section */}
        <header className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/20 border-b">
          <div className="container max-w-3xl mx-auto px-4 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(article.publishedAt).toLocaleDateString("cs-CZ", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {formatReadingTime(readingMinutes)}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-balance leading-[1.1] mb-8">
              {article.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
              {article.summary}
            </p>
          </div>
        </header>

        {/* Featured Image - Wide but not full */}
        <div className="container max-w-5xl mx-auto px-4 -mt-10 mb-16">
          {article.mainImage && (
            <BlogImage
              image={article.mainImage}
              alt={article.title}
              priority
              width={1200}
              height={675}
              className="aspect-video object-cover rounded-2xl shadow-2xl border-4 border-background"
            />
          )}
        </div>

        {/* Content Section - Narrow for readability */}
        <div className="container max-w-3xl mx-auto px-4 lg:px-8">
          <div className="prose prose-slate prose-lg dark:prose-invert 
            max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:leading-relaxed prose-p:text-slate-800 dark:prose-p:text-slate-200
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-lg
            prose-blockquote:border-l-primary prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-900/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
          >
            <PortableText value={article.body} components={portableTextComponents} />
          </div>

          {/* Footer of the article */}
          <footer className="mt-20 pt-10 border-t">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  TI
                </div>
                <div>
                  <p className="font-semibold">Taras Ishchuk</p>
                  <p className="text-sm text-muted-foreground">Full-stack Vývojář & Autor</p>
                </div>
              </div>
              
              <Button asChild variant="outline">
                <Link href="/blog">Zobrazit další články</Link>
              </Button>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}