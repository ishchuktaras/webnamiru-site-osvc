import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes"
import Script from "next/script"
import "./globals.css"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { CookieConsent } from "@/components/CookieConsent"
import { generateLocalBusinessSchema } from "@/lib/seo/structured-data"

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
  title: "webnamiru.site | Tvorba webů na míru Jihlava a Vysočina",
  description:
    "Strategický partner pro tvorbu profesionálních webových stránek v Jihlavě a na Vysočině. Next.js, Sanity.io, měřitelné výsledky. Pomáhame českým firmám růst online.",
  keywords: [
    "tvorba webů Jihlava",
    "webdesign Vysočina",
    "tvorba e-shopu Jihlava",
    "SEO optimalizace Vysočina",
    "web na míru",
    "Next.js",
    "Sanity.io",
    "webový vývoj",
    "IT konzultace Jihlava",
  ],
  authors: [{ name: "Taras Ishchuk" }],
  openGraph: {
    title: "webnamiru.site | Tvorba webů na míru Jihlava a Vysočina",
    description: "Strategický partner pro tvorbu profesionálních webových stránek s měřitelnými výsledky",
    type: "website",
    locale: "cs_CZ",
    url: "https://webnamiru.site",
    siteName: "webnamiru.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "webnamiru.site | Tvorba webů na míru Jihlava a Vysočina",
    description: "Strategický partner pro tvorbu profesionálních webových stránek s měřitelnými výsledky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://webnamiru.site",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessData = generateLocalBusinessSchema({
    name: "webnamiru.site - Taras Ishchuk, OSVČ",
    description:
      "Tvorba webových stránek a e-shopů na míru. Moderní řešení na platformě Next.js a Sanity.io pro firmy a živnostníky z Vysočiny i celé ČR.",
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
    <html lang="cs" suppressHydrationWarning>
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />

        <Script id="google-analytics-check" strategy="afterInteractive">
          {`
            (function() {
              const consent = localStorage.getItem('cookie-consent');
              if (consent) {
                const preferences = JSON.parse(consent);
                if (preferences.analytics && '${process.env.NEXT_PUBLIC_GA_ID || ""}') {
                  const script = document.createElement('script');
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || ""}';
                  script.async = true;
                  document.head.appendChild(script);
                  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || ""}', {
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                }
              }
            })();
          `}
        </Script>

        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}
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
