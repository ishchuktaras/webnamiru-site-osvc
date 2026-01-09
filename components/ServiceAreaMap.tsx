// components/ServiceAreaMap.tsx

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Globe, CheckCircle2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const serviceAreas = [
    { name: "Kraj Vysočina", highlight: true },
    { name: "Jihomoravský kraj" },
    { name: "Pardubický kraj" },
    { name: "Olomoucký kraj" },
    { name: "Moravskoslezský kraj" },
    { name: "Zlínský kraj" },
  ]

  const features = [
    "Osobní konzultace v Jihlavě",
    "Online spolupráce po celé ČR",
    "Mezinárodní projekty",
    "Flexibilní komunikace",
  ]

  return (
    <section className="py-20 bg-secondary" ref={mapRef}>
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Mapa působnosti</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Sídlíme v Jihlavě, ale naše služby poskytujeme po celé České republice i mezinárodně
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Container */}
          <Card
            className={`overflow-hidden border-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CardContent className="p-0">
              <div className="relative w-full h-[500px] bg-linear-to-br from-accent/5 to-primary/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81730.89999999999!2d15.5592!3d49.3961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d1b6b6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sJihlava!5e0!3m2!1scs!2scz!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa působnosti - Jihlava"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Hlavní sídlo</h3>
                      <p className="text-sm text-muted-foreground">Rantířovská 123/36</p>
                      <p className="text-sm text-muted-foreground">586 01 Jihlava - Horní Kosov</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Areas Info */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Oblasti působnosti</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                        area.highlight ? "bg-accent/10 border-2 border-accent/20" : "bg-secondary border border-border"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 ${area.highlight ? "text-accent" : "text-muted-foreground"}`}
                      />
                      <span className={`text-sm font-medium ${area.highlight ? "text-accent" : ""}`}>{area.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-linear-to-br from-accent/5 to-primary/5">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Jak spolupracujeme</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100 + 400}ms` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
          </div>
        </div>

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "webnamiru.site - Taras Ishchuk",
              image: "https://www.webnamiru.site/og-image.jpg",
              "@id": "https://www.webnamiru.site",
              url: "https://www.webnamiru.site",
              telephone: "+420 777 596 216", 
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rantířovská 123/36",
                addressLocality: "Jihlava",
                addressRegion: "Kraj Vysočina",
                postalCode: "586 01",
                addressCountry: "CZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.3961,
                longitude: 15.5592,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "17:00",
              },
              sameAs: ["https://www.webnamiru.site"], // Zde by měly být i odkazy na soc. sítě (LinkedIn, FB)
              areaServed: [
                {
                  "@type": "State",
                  name: "Kraj Vysočina",
                },
                {
                  "@type": "Country",
                  name: "Česká republika",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  )
}
