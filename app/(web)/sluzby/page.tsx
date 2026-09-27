import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Code2, Target, Shield, Sparkles, LayoutTemplate } from "lucide-react"
import Link from "next/link"
import { getServices } from "@/lib/sanity.queries"
import Image from "next/image"
import { urlFor } from "@/lib/sanity.client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Služby | webnamiru.site",
  description: "Vývoj rychlých webových aplikací v Next.js, strategické plánování a integrace AI.",
}

export const revalidate = 60

// Mapa ikon bez CMS
const iconMap: Record<string, any> = {
  "vyvoj-webu-na-miru": Code2,
  "ai-integrace": Sparkles,
  "ux-ui-strategie": Target,
  "sprava-a-rozvoj": Shield,
  // Zpětná kompatibilita pro stávající slugy
  "podpora-a-udrzba": Shield,
  "ux-ui-design": LayoutTemplate,
  "strategicke-planovani-webu": Target,
}

export default async function ServicesPage() {
  const allServices = await getServices().catch(() => [])
  
  // Bezpečnostní filtr: Skryjeme E-commerce a CMS integrace
  const services = allServices.filter(
    (service: any) => {
      const slug = service.slug?.current || service.slug;
      return !["e-commerce-reseni", "integrace-cms-systemu", "headless-cms-sanity"].includes(slug);
    }
  )

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-4 py-1.5 text-sm font-medium text-[#3B82F6]">
                <Sparkles className="mr-2 h-4 w-4" />
                Moderní webové technologie
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
              {services.length > 0 ? "Aktuální nabídka služeb" : "Digitální služby na míru"}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              Žádné pomalé šablony. Tvořím rychlá, bezpečná a škálovatelná řešení v Next.js, která se zaměřují na reálnou návratnost investice (ROI).
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          
          {services.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Zatím nejsou vloženy žádné služby.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any) => {
              
              const currentSlug = service.slug?.current || service.slug
              const IconComponent = iconMap[currentSlug] || Target
              
              const imageUrl = service.mainImage 
                ? urlFor(service.mainImage).width(800).height(600).url()
                : "/placeholder.svg"

              return (
                <Card
                  key={service._id}
                  className="border hover:border-[#3B82F6]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col overflow-hidden group h-full"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-[#0D1B3E]">
                    <Image
                      src={imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
                    <div className="absolute bottom-4 left-4 p-2 bg-background/90 backdrop-blur-sm rounded-lg shadow-sm border">
                         <IconComponent className="h-6 w-6 text-[#3B82F6]" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    {service.priceFrom && (
                      <div className="text-sm font-medium text-[#3B82F6] mt-2">
                        od {Number(service.priceFrom).toLocaleString("cs-CZ")} Kč
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.shortDescription}
                    </p>

                    {service.features && service.features.length > 0 && (
                      <div className="space-y-3">
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature: any, i: number) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-[#3B82F6] shrink-0 mt-0.5" />
                              <span className="font-medium">{typeof feature === 'string' ? feature : feature.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-auto pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button asChild className="w-full" variant="outline">
                            <Link href={`/sluzby/${currentSlug}`}>
                                Více informací
                            </Link>
                        </Button>
                        <Button asChild className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white">
                            <Link href="/kontakt">
                                Poptat <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}