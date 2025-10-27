import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Footer } from "@/components/Footer"

import { Inter, Geist_Mono, Source_Serif_4, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

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

export const metadata: Metadata = {
  title: "webnamiru.site | Tvorba webů na míru s vysokou hodnotou",
  description:
    "Strategický partner pro tvorbu profesionálních webových stránek. Next.js, Sanity.io, měřitelné výsledky. Pomáhame českým firmám růst online.",
  keywords: ["tvorba webů", "web na míru", "Next.js", "Sanity.io", "webový vývoj", "e-commerce", "CMS"],
  authors: [{ name: "Taras Ishchuk" }],
  openGraph: {
    title: "webnamiru.site | Tvorba webů na míru",
    description: "Strategický partner pro tvorbu profesionálních webových stránek s měřitelnými výsledky",
    type: "website",
    locale: "cs_CZ",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body
        className={`${inter.variable} ${geistMono.variable} ${sourceSerif.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
