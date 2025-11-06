import Link from "next/link"
import { Code2 } from "lucide-react"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-1.5 sm:gap-2 group min-h-[44px] ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20 rounded-lg blur-sm group-hover:blur-md transition-all" />
        <div className="relative bg-linear-to-br from-accent to-primary p-1.5 sm:p-2 rounded-lg transition-transform group-hover:scale-110">
          <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={2.5} />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-bold text-base sm:text-lg tracking-tight">webnamiru</span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">.site</span>
        </div>
      )}
    </Link>
  )
}
