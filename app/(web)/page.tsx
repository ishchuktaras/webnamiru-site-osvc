// app/(web)/page.tsx

import ProcessSteps from '@/components/sections/ProcessSteps';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, Target, Shield, Camera, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactPage from './kontakt/page';

// 1. Lokální data místo Sanity
import { services, portfolio as projects } from "@/lib/data";

// Mapa ikon pro služby
const iconMap: Record<string, any> = {
  "vyvoj-webu-na-miru": Code2,
  "ux-ui-strategie": Target,
  "sprava-a-rozvoj": Shield,
};

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a1128] text-white selection:bg-[#3B82F6] selection:text-white">
      
      {/* 1. MODERNÍ DARK HERO SEKCE */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#3B82F6] opacity-20 blur-[100px]"></div>

        <div className="container relative z-10 px-4 mx-auto text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-sm font-medium text-blue-100 tracking-wide uppercase">Next.js Vývoj & UX/UI Strategie</span>
          </div>
          
          <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl text-balance">
            Nekóduji weby.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">
              Buduji nástroje pro růst.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-slate-400 leading-relaxed text-balance">
            Šablony vás brzdí. Vytvářím bleskurychlá, na míru navržená řešení s extrémním důrazem na konverze, bezpečnost a váš návrat investice.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#kontakt"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white transition-all bg-[#3B82F6] rounded-2xl hover:bg-blue-600 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:-translate-y-1"
            >
              Spustit projekt <ArrowRight className="inline-block w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white transition-all bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 backdrop-blur-md"
            >
              Prohlédnout realizace
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SLUŽBY - DARK MODE */}
      <section className="py-24 bg-[#0a1128] relative border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
              Komplexní služby pod jednou střechou
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Neztrácejte čas hledáním grafiků a programátorů zvlášť. Postarám se o celý proces od návrhu po spuštění.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service: any) => {
              const IconComponent = iconMap[service.id] || Code2;
              return (
                <Card key={service.id} className="border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] flex flex-col h-full bg-white/5 backdrop-blur-sm group">
                  <CardHeader>
                    <div className="h-14 w-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center text-[#3B82F6] mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="mt-auto">
                      <Button variant="ghost" className="p-0 hover:bg-transparent text-[#3B82F6] hover:text-blue-400 font-medium group/btn" asChild>
                        <Link href={`/sluzby/${service.id}`}>
                          Více informací <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white">
              <Link href="/sluzby">Prohlédnout všechny služby</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. VYBRANÉ REALIZACE - DARK MODE */}
      <section className="py-24 bg-[#050b1a]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Vybrané realizace
              </h2>
              <p className="text-lg text-slate-400">
                Projekty, které mým klientům vydělávají peníze a šetří čas.
              </p>
            </div>
            <Button asChild className="bg-white/10 hover:bg-white/20 text-white border-none">
              <Link href="/portfolio">Všechny projekty <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: any) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="group block h-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] border border-white/10 bg-slate-900 mb-5 shadow-sm transition-all duration-300 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] group-hover:-translate-y-1">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-600 bg-slate-900">
                      <Camera className="h-12 w-12 opacity-20" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-[#0D1B3E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-bold text-lg flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full bg-white/10">
                        Detail projektu <ArrowRight className="h-5 w-5" />
                      </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#3B82F6] transition-colors">{project.title}</h3>
                <p className="text-sm text-[#3B82F6] font-medium uppercase tracking-wider">{project.client}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCES SPOLUPRÁCE */}
      <div className="bg-[#0a1128] border-t border-white/5">
        <ProcessSteps />
      </div>

      {/* 5. KONTAKTNÍ SEKCE */}
      <section id="kontakt" className="py-24 bg-[#050b1a] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <ContactPage />
        </div>
      </section>
    </main>
  );
}