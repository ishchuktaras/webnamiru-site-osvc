import { ArrowRight } from "lucide-react";

export function MigrationBanner() {
  return (
    <div className="relative z-[100] w-full bg-[#3B82F6] text-white px-4 py-2.5 text-center text-xs sm:text-sm font-medium flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 shadow-sm">
      <span className="leading-snug">
        Web na míru se mění na <strong className="font-bold">IT Studio</strong> a stěhujeme se na novou doménu <strong className="font-bold underline">it-studio.cz</strong>. 
        Nový brand a špičkový tech stack pro ještě výkonnější weby.
      </span>
      <a 
        href="https://it-studio.cz" 
        className="inline-flex items-center justify-center gap-1.5 bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap shrink-0"
      >
        Přejít na it-studio.cz <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}