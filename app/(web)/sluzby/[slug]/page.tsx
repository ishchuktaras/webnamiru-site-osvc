// app/(web)/sluzby/[slug]/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getServiceBySlug, getServices } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export const revalidate = 60 // Revalidate every minute

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service: any) => ({
    slug: service.slug.current,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Služba nenalezena | webnamiru.site",
    }
  }

  return {
    title: service.seoTitle || `${service.title} | webnamiru.site`,
    description: service.seoDescription || service.shortDescription,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30 dark:bg-background">
      {/* Back Button - Opravený horní padding (pt-28) pro fixní hlavičku */}
      <div className="container max-w-4xl mx-auto px-4 lg:px-8 pt-28 pb-4">
        <Button 
          variant="ghost" 
          asChild 
          className="gap-2 text-muted-foreground hover:text-[#0D1B3E] hover:bg-slate-100 dark:hover:bg-slate-800 -ml-4 transition-colors"
        >
          <Link href="/sluzby">
            <ArrowLeft className="h-4 w-4" />
            Zpět na služby
          </Link>
        </Button>
      </div>

      {/* Service Detail */}
      <section className="pb-20">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            
            {/* Header sekce */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D1B3E] dark:text-white text-balance">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                {service.shortDescription}
              </p>
              {service.priceFrom && (
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-xl">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Cena od</span>
                  <span className="text-2xl font-bold text-[#3B82F6]">{service.priceFrom.toLocaleString("cs-CZ")} Kč</span>
                </div>
              )}
            </div>

            {/* Hlavní obrázek */}
            {service.mainImage && (
              <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                <Image
                  src={
                    urlFor(service.mainImage).width(1200).height(600).url() || "/placeholder.svg"
                  }
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            )}

            {/* Textový obsah */}
            {service.content && (
              <Card className="border-none shadow-md overflow-hidden rounded-2xl">
                <CardContent className="p-6 md:p-10 prose prose-lg md:prose-xl max-w-none dark:prose-invert">
                  <div className="space-y-6 text-slate-700 dark:text-slate-300">
                    {service.content.map((block: any, index: number) => {
                      if (block._type === "block") {
                        return (
                          <p key={index} className="leading-relaxed">
                            {block.children?.map((child: any) => child.text).join("")}
                          </p>
                        )
                      }
                      return null
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Funkce / Co služba zahrnuje */}
            {service.features && service.features.length > 0 && (
              <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
                <CardContent className="p-6 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0D1B3E] dark:text-white">Co služba zahrnuje</h2>
                  <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {service.features.map((feature: any, index: number) => (
                      <li key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                        <CheckCircle2 className="h-6 w-6 text-[#3B82F6] shrink-0" />
                        <span className="leading-relaxed font-medium text-slate-700 dark:text-slate-300">
                          {feature.title || feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* CTA sekce */}
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D1B3E] to-[#1a2b5e] text-white mt-12">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Máte zájem o tuto službu?</h2>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  Kontaktujte mě pro nezávaznou konzultaci. Probereme vaše požadavky a navrhnu řešení přesně pro váš projekt.
                </p>
                <div className="pt-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
                  >
                    <Link href="/kontakt">
                      Nezávazná konzultace <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}