// app/(web)/layout.tsx
import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes"
import Script from "next/script"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { CookieConsent } from "@/components/CookieConsent" 
import { generateLocalBusinessSchema } from "@/lib/seo/structured-data"
import { Inter, Geist_Mono, Source_Serif_4 } from "next/font/google"
import { WhatsAppButton } from "@/components/WhatsAppButton"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webnamiru.site"),
  title: {
    default: "webnamiru.site | Tvorba webů na míru Jihlava a Vysočina",
    template: "%s | webnamiru.site",
  },
  description: "Strategický partner pro tvorbu profesionálních webových stránek v Jihlavě a na Vysočině. Next.js, Sanity.io, měřitelné výsledky.",
  keywords: ["tvorba webů Jihlava", "webdesign Vysočina", "Next.js", "Sanity.io", "PCI MPoC"],
  authors: [{ name: "Taras Ishchuk", url: "https://webnamiru.site/o-mne" }],
  creator: "Taras Ishchuk, OSVČ",
  publisher: "webnamiru.site",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/icon.svg", 
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.webnamiru.site",
    title: "Tvorba webů na míru Jihlava a Vysočina | webnamiru.site",
    description: "Strategický partner pro tvorbu profesionálních webových stránek v Jihlavě a na Vysočině.",
    siteName: "webnamiru.site",
    images: [{ url: "https://www.webnamiru.site/opengraph-image.png", width: 1200, height: 630, alt: "webnamiru.site" }],
  },
  robots: { index: true, follow: true },
}

export default function WebLayout({ children }: { children: React.ReactNode }) {
  const localBusinessData = generateLocalBusinessSchema({
    name: "webnamiru.site - Taras Ishchuk, OSVČ",
    description: "Tvorba webových stránek, aplikací a fintech systémů na míru v Next.js.",
    email: "ishchuktaras@gmail.com",
    telephone: "+420777596216",
    url: "https://www.webnamiru.site",
    address: {
      streetAddress: "Rantířovská 123/36",
      addressLocality: "Jihlava",
      postalCode: "586 01",
      addressRegion: "Kraj Vysočina",
      addressCountry: "CZ",
    },
    founder: {
      name: "Taras Ishchuk",
      url: "https://webnamiru.site/o-mne",
    },
  })

  return (
    <div className={`${inter.variable} ${geistMono.variable} ${sourceSerif.variable} font-sans antialiased min-h-screen flex flex-col`}>
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
      </head>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Toaster />
        <Analytics />
      </ThemeProvider>
    </div>
  )
}