import Image from "next/image"
import { urlForImage } from "@/lib/sanity-image"
import type { PortableTextComponents } from "@portabletext/react"

export const portableTextComponents: PortableTextComponents = {
  block: {
    // Headings
    h1: ({ children }) => (
      <h1
        className="text-4xl font-extrabold tracking-tight mt-12 mb-6 text-balance scroll-mt-20"
        id={String(children).toLowerCase().replace(/\s+/g, "-")}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="text-3xl font-bold tracking-tight mt-10 mb-5 text-balance scroll-mt-20"
        id={String(children).toLowerCase().replace(/\s+/g, "-")}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-2xl font-bold tracking-tight mt-8 mb-4 text-balance scroll-mt-20"
        id={String(children).toLowerCase().replace(/\s+/g, "-")}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-xl font-semibold mt-6 mb-3 scroll-mt-20"
        id={String(children).toLowerCase().replace(/\s+/g, "-")}
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => <h5 className="text-lg font-semibold mt-5 mb-2 scroll-mt-20">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-semibold mt-4 mb-2 scroll-mt-20">{children}</h6>,
    // Paragraphs
    normal: ({ children }) => <p className="text-lg leading-relaxed mb-6 text-pretty">{children}</p>,
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 italic text-lg bg-muted/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },

  list: {
    // Bullet lists
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-3 text-lg marker:text-primary">{children}</ul>
    ),
    // Numbered lists
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-3 text-lg marker:text-primary marker:font-semibold">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed pl-2">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed pl-2">{children}</li>,
  },

  marks: {
    // Bold text
    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
    // Italic text
    em: ({ children }) => <em className="italic">{children}</em>,
    // Underline
    underline: ({ children }) => <span className="underline decoration-2 underline-offset-2">{children}</span>,
    // Strike-through
    "strike-through": ({ children }) => <s className="line-through opacity-70">{children}</s>,
    // Links
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      const target = !value.href.startsWith("/") ? "_blank" : undefined

      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-primary font-medium underline decoration-2 underline-offset-4 hover:decoration-primary/50 transition-colors"
        >
          {children}
        </a>
      )
    },
    // Code inline
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono border border-border">{children}</code>
    ),
  },

  types: {
    // Images in content
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }

      return (
        <figure className="my-10 -mx-4 sm:mx-0">
          <Image
            src={urlForImage(value).width(1200).url() || "/placeholder.svg"}
            alt={value.alt || "Obrázek článku"}
            width={1200}
            height={675}
            className="rounded-lg shadow-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-3 italic px-4">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    // Code blocks
    codeBlock: ({ value }) => {
      return (
        <div className="my-8 -mx-4 sm:mx-0">
          <pre className="bg-muted p-6 rounded-lg overflow-x-auto border border-border">
            <code className="text-sm font-mono block">{value.code}</code>
          </pre>
          {value.filename && <p className="text-xs text-muted-foreground mt-2 font-mono px-2">{value.filename}</p>}
        </div>
      )
    },

    // Callout/alert boxes
    callout: ({ value }) => {
      const styles = {
        info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
        warning: "bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800",
        error: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
        success: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800",
      }

      return (
        <div className={`my-6 p-6 rounded-lg border-l-4 ${styles[value.type as keyof typeof styles] || styles.info}`}>
          {value.title && <p className="font-bold mb-2">{value.title}</p>}
          <p className="text-base leading-relaxed">{value.text}</p>
        </div>
      )
    },
  },
}
