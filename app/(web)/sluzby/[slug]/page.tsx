// app/(web)/sluzby/[slug]/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getServiceBySlug, getServices } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.client"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
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
    <div className="flex flex-col min-h-screen">
      {/* Back Button */}
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <Button variant="ghost" asChild className="gap-2">
          <Link href="/sluzby">
            <ArrowLeft className="h-4 w-4" />
            Zpět na služby
          </Link>
        </Button>
      </div>

      {/* Service Detail */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.shortDescription}</p>
              {service.priceFrom && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">Cena od</span>
                  <span className="text-2xl font-bold text-accent">{service.priceFrom.toLocaleString("cs-CZ")} Kč</span>
                </div>
              )}
            </div>

            {service.mainImage && (
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={
                    urlFor(service.mainImage).width(1200).height(600).url() || "/placeholder.svg" || "/placeholder.svg"
                  }
                  alt={service.title}
                  fill
                  className="object-contain bg-muted"
                  priority
                />
              </div>
            )}

            {service.content && (
              <Card>
                <CardContent className="p-8 prose prose-lg max-w-none">
                  <div className="space-y-6">
                    {service.content.map((block: any, index: number) => {
                      if (block._type === "block") {
                        return (
                          <p key={index} className="leading-relaxed text-muted-foreground">
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

            {service.features && service.features.length > 0 && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Co služba zahrnuje</h2>
                  <ul className="space-y-3">
                    {service.features.map((feature: any, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature.title || feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8 text-center space-y-4">
                <h2 className="text-2xl font-bold">Máte zájem o tuto službu?</h2>
                <p className="text-muted-foreground">Kontaktujte mě pro nezávaznou konzultaci a cenovou nabídku</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/kontakt">Kontaktovat mě</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
