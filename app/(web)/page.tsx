import HeroBento from '@/components/sections/HeroBento';
import ProcessSteps from '@/components/sections/ProcessSteps';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Palette, Target, Server, Lightbulb, Camera, Database, Globe, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getServices, getProjects } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";

// Mapa ikon (stejná jako v sekci Služby, pro konzistenci)
const iconMap: Record<string, any> = {
  "vyvoj-softwaru-a-webu": Code2,
  "design-a-grafika": Palette,
  "marketing-a-seo": Target,
  "hosting-a-sprava": Server,
  "konzultace-it": Lightbulb,
  "fotograficke-sluzby": Camera,
  "integrace-cms-systemu": Database,
  "e-commerce-reseni": Globe,
};

export const revalidate = 60; // Přegenerovat každou minutu

export default async function HomePage() {
  // Paralelní načtení dat ze Sanity
  const [services, projects] = await Promise.all([
    getServices().catch(() => []),
    getProjects().catch(() => [])
  ]);

  // Vybereme jen první 3 služby pro náhled na úvodní straně
  const featuredServices = services.slice(0, 3);
  // Vybereme jen první 3 projekty
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      
      {/* 1. HERO SEKCE (Tvoje existující komponenta) */}
      <HeroBento />

      {/* 2. VYBRANÉ SLUŽBY (Dynamicky ze Sanity) */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
               <Sparkles className="mr-2 h-4 w-4" /> Co pro vás mohu udělat
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
              Komplexní služby pod jednou střechou
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Neztrácejte čas hledáním grafiků a programátorů zvlášť. Postarám se o celý proces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.length > 0 ? (
              featuredServices.map((service: any) => {
                const IconComponent = iconMap[service.slug?.current] || Code2;
                return (
                  <Card key={service._id} className="border hover:border-primary/50 transition-all hover:shadow-lg flex flex-col h-full bg-card">
                    <CardHeader>
                      <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                        {service.shortDescription}
                      </p>
                      <div className="mt-auto">
                        <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80 group" asChild>
                          <Link href={`/sluzby/${service.slug?.current}`}>
                            Více informací <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              // Fallback, pokud v Sanity nic není
              <div className="col-span-3 text-center py-8 text-muted-foreground">
                Zatím nejsou vloženy žádné služby.
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/sluzby">Zobrazit všechny služby</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. UKÁZKA PORTFOLIA (Dynamicky ze Sanity) */}
      {featuredProjects.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Vybrané realizace
                </h2>
                <p className="text-lg text-muted-foreground">
                  Projekty, které přinášejí výsledky mým klientům.
                </p>
              </div>
              <Button asChild>
                <Link href="/portfolio">Všechny projekty <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project: any) => (
                <Link key={project._id} href={`/portfolio/${project.slug.current}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-video border bg-muted mb-4">
                    {project.coverImage ? (
                      <Image
                        src={urlFor(project.coverImage).width(600).height(400).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <Camera className="h-10 w-10 opacity-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-white font-medium flex items-center gap-2">
                          Detail projektu <ArrowRight className="h-4 w-4" />
                       </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.clientName}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCES SPOLUPRÁCE (Tvoje existující komponenta) */}
      <ProcessSteps />

      {/* 5. KONTAKTNÍ SEKCE - Cíl scrollování */}
      <section id="kontakt" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Dekorativní pozadí */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            Máte projekt? Pojďme ho probrat.
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Napište mi stručně, co potřebujete. Ozvu se vám do 24 hodin a domluvíme si nezávaznou konzultaci (online nebo v Jihlavě).
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Button 
               size="lg" 
               className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
               asChild
             >
               <a href="mailto:info@webnamiru.site">
                 Napsat na info@webnamiru.site
               </a>
             </Button>
             
             <Button 
               variant="outline" 
               size="lg"
               className="bg-transparent border-primary-foreground/20 text-white hover:bg-white/10 hover:text-white font-medium text-lg px-8 py-6 h-auto"
               asChild
             >
               <a href="tel:+420777596216">
                 Zavolat: +420 777 596 216
               </a>
             </Button>
          </div>
          
          <p className="mt-12 text-sm text-primary-foreground/50">
            Těším se na spolupráci. — Taras Ishchuk
          </p>

        </div>
      </section>
    </main>
  );
}