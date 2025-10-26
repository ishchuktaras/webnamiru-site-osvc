import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Geist, Geist_Mono, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "webnamiru.site | Tvorba webů na míru s vysokou hodnotou",
  description:
    "Strategický partner pro tvorbu profesionálních webových stránek. Next.js, Sanity.io, měřitelné výsledky. Pomáháme českým firmám růst online.",
  keywords: ["tvorba webů", "web na míru", "Next.js", "Sanity.io", "webový vývoj", "e-commerce", "CMS"],
  authors: [{ name: "Taras Ishchuk" }],
  openGraph: {
    title: "webnamiru.site | Tvorba webů na míru",
    description: "Strategický partner pro tvorbu profesionálních webových stránek s měřitelnými výsledky",
    type: "website",
    locale: "cs_CZ",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
