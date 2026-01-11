import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes"
import Script from "next/script"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { CookieConsent } from "@/components/CookieConsent" 
import { generateLocalBusinessSchema } from "@/lib/seo/structured-data"
import { Inter, Geist_Mono, Source_Serif_4 } from "next/font/google"

// Initialize fonts
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
  metadataBase: new URL("https://webnamiru.site"),
  title: {
    default: "webnamiru.site | Tvorba webů na míru Jihlava a Vysočina",
    template: "%s | webnamiru.site",
  },
  description:
    "Strategický partner pro tvorbu profesionálních webových stránek v Jihlavě a na Vysočině. Next.js, Sanity.io, měřitelné výsledky.",
  keywords: [
    "tvorba webů Jihlava",
    "webdesign Vysočina",
    "Next.js",
    "Sanity.io",
  ],
  authors: [{ name: "Taras Ishchuk", url: "https://webnamiru.site/o-mne" }],
  creator: "Taras Ishchuk, OSVČ",
  publisher: "webnamiru.site",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessData = generateLocalBusinessSchema({
    name: "webnamiru.site - Taras Ishchuk, OSVČ",
    description: "Tvorba webových stránek a e-shopů na míru.",
    email: "info@webnamiru.site",
    address: {
      streetAddress: "Rantířovská 123/36",
      addressLocality: "Jihlava - Horní Kosov",
      postalCode: "586 01",
      addressRegion: "Vysočina",
      addressCountry: "CZ",
    },
    founder: {
      name: "Taras Ishchuk",
      url: "https://webnamiru.site/o-mne",
    },
  })

  return (
   
    <html lang="cs" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
        
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} ${sourceSerif.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}