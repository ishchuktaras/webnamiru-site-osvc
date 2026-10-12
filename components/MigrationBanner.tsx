import { ArrowRight } from "lucide-react";

export function MigrationBanner() {
  return (
    <div className="bg-[#3B82F6] text-white px-4 py-3 text-center text-sm sm:text-base font-medium flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
      <span>
        Web na míru se mění na <strong className="font-bold">IT Studio</strong>. 
        Nový brand a špičkový tech stack pro ještě výkonnější weby.
      </span>
      <a 
        href="https://it-studio.cz" 
        className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors whitespace-nowrap shrink-0"
      >
        Přejít na nový web <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}