import HeroBento from '@/components/sections/HeroBento';
import ProcessSteps from '@/components/sections/ProcessSteps';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Palette, Target, Server, Lightbulb, Camera, Database, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getServices, getProjects } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";

// Mapa ikon pro služby
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

export const revalidate = 60;

export default async function HomePage() {
  const [services, projects] = await Promise.all([
    getServices().catch(() => []),
    getProjects().catch(() => [])
  ]);

  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* 1. HERO SEKCE */}
      <HeroBento />

      {/* 2. DYNAMICKÉ SLUŽBY ZE SANITY */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
               <Sparkles className="mr-2 h-4 w-4" /> Co pro vás mohu udělat
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              Komplexní služby pod jednou střechou
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Neztrácejte čas hledáním grafiků a programátorů zvlášť. Postarám se o celý proces od návrhu po spuštění.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.length > 0 ? (
              featuredServices.map((service: any) => {
                const IconComponent = iconMap[service.slug?.current] || Code2;
                return (
                  <Card key={service._id} className="border hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full bg-card group">
                    <CardHeader>
                      <div className="h-14 w-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-auto">
                        <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80 font-medium group/btn" asChild>
                          <Link href={`/sluzby/${service.slug?.current}`}>
                            Více informací <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <div className="col-span-3 text-center py-12 text-muted-foreground">
                <p>Načítám aktuální nabídku služeb...</p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              <Link href="/sluzby">Prohlédnout všechny služby</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. VYBRANÉ REALIZACE */}
      {featuredProjects.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4 max-w-2xl">
                 <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Vybrané realizace
                </h2>
                <p className="text-lg text-muted-foreground">
                  Projekty, které mým klientům vydělávají peníze a šetří čas.
                </p>
              </div>
              <Button asChild>
                <Link href="/portfolio">Všechny projekty <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project: any) => (
                <Link key={project._id} href={`/portfolio/${project.slug.current}`} className="group block h-full">
                  {/* ZDE BYLA OPRAVA: aspect-16/10 místo aspect-[16/10] */}
                  <div className="relative overflow-hidden rounded-2xl aspect-16/10 border bg-muted mb-5 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    {project.coverImage ? (
                      <Image
                        src={urlFor(project.coverImage).width(800).height(500).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground bg-muted/50">
                        <Camera className="h-12 w-12 opacity-20" />
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                       <span className="text-white font-bold text-lg flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full bg-white/10">
                          Detail projektu <ArrowRight className="h-5 w-5" />
                       </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{project.clientName}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCES SPOLUPRÁCE */}
      <ProcessSteps />

      {/* 5. KONTAKTNÍ SEKCE */}
      <section id="kontakt" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-white">
            Máte projekt? Pojďme ho probrat.
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Napište mi stručně, co potřebujete. Ozvu se vám do 24 hodin a domluvíme si nezávaznou konzultaci (online nebo v Jihlavě).
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
             <Button 
               size="lg" 
               className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-7 h-auto shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all rounded-xl"
               asChild
             >
               <a href="mailto:info@webnamiru.site">
                 Napsat na info@webnamiru.site
               </a>
             </Button>
             
             <Button 
               variant="outline" 
               size="lg"
               className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-lg px-8 py-7 h-auto rounded-xl backdrop-blur-sm"
               asChild
             >
               <a href="tel:+420777596216">
                 Zavolat: +420 777 596 216
               </a>
             </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-sm text-primary-foreground/60 flex flex-col md:flex-row gap-4 justify-center items-center">
            <p>Těším se na spolupráci.</p>
            <span className="hidden md:block">•</span>
            <p>Taras Ishchuk, OSVČ</p>
          </div>

        </div>
      </section>
    </main>
  );
}