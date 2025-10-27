import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServiceBySlug, getServices } from "@/lib/sanity.queries";
import { ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service: any) => ({
    slug: service.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Služba nenalezena | webnamiru.site",
    };
  }

  return {
    title: service.seoTitle || `${service.title} | webnamiru.site`,
    description: service.seoDescription || service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">webnamiru.site</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/#sluzby"
              className="transition-colors hover:text-accent"
            >
              Služby
            </Link>
            <Link
              href="/#proces"
              className="transition-colors hover:text-accent"
            >
              Proces
            </Link>
            <Link
              href="/#portfolio"
              className="transition-colors hover:text-accent"
            >
              Portfolio
            </Link>
            <Link
              href="/kontakt"
              className="transition-colors hover:text-accent"
            >
              Kontakt
            </Link>
          </nav>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
        </div>
      </header>

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
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {service.content && (
              <Card>
                <CardContent className="p-8 prose prose-lg max-w-none">
                  <div className="space-y-6">
                    {service.content.map((block: any, index: number) => {
                      if (block._type === "block") {
                        return (
                          <p
                            key={index}
                            className="leading-relaxed text-muted-foreground"
                          >
                            {block.children
                              ?.map((child: any) => child.text)
                              .join("")}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="border-2 border-accent/20 bg-linear-to-br from-accent/5 to-primary/5">
              <CardContent className="p-8 text-center space-y-4">
                <h2 className="text-2xl font-bold">
                  Máte zájem o tuto službu?
                </h2>
                <p className="text-muted-foreground">
                  Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                >
                  <Link href="/kontakt">Kontaktovat nás</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
