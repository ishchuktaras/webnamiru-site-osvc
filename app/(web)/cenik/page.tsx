import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Lightbulb, Target, Handshake } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ceník a spolupráce | webnamiru.site",
  description: "Cenu webu tvořím vždy na míru podle vašich požadavků, cílů a rozsahu projektu. Napište mi pro nezávaznou kalkulaci.",
}

export const revalidate = 0

export default function CenikPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-24 text-center max-w-4xl">
        <Badge variant="outline" className="mb-6">
          <Sparkles className="mr-2 h-3 w-3 text-[#3B82F6]" />
          Férové a transparentní nacenění
        </Badge>
        
        <h1 className="mb-6 text-4xl font-bold md:text-6xl text-[#0D1B3E] dark:text-white">
          Individuální nacenění projektů
        </h1>
        
        <p className="mb-12 text-lg text-muted-foreground md:text-xl leading-relaxed">
          Každé podnikání je unikátní a vyžaduje specifický přístup. Proto nepoužívám pevné tabulkové balíčky. 
          Cenu a rozsah spolupráce si vždy domluvíme individuálně na základě vaší konkrétní poptávky, byznys cílů a reálných potřeb.
        </p>

        {/* Proces spolupráce místo pevných cen */}
        <div className="grid sm:grid-cols-3 gap-8 text-left my-16 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#3B82F6] dark:bg-[#0D1B3E] dark:text-blue-400">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-[#0D1B3E] dark:text-white">1. Úvodní konzultace</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Probereme vaši vizi, cílovou skupinu a co má web firmě přinést. Zjistíme, jaké řešení pro vás dává největší smysl.
            </p>
          </div>
          
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#3B82F6] dark:bg-[#0D1B3E] dark:text-blue-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-[#0D1B3E] dark:text-white">2. Návrh a rozpočet</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Na základě zadání připravím přesnou specifikaci projektu a transparentní cenovou nabídku bez skrytých poplatků.
            </p>
          </div>
          
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#3B82F6] dark:bg-[#0D1B3E] dark:text-blue-400">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-[#0D1B3E] dark:text-white">3. Realizace</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Po schválení rozpočtu se pustíme do práce. I po spuštění webu vám budu k dispozici pro další rozvoj a technickou správu.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button 
            size="lg" 
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 h-12 rounded-xl text-base shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5" 
            asChild
          >
            <Link href="/kontakt">
              Získat cenovou nabídku <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}