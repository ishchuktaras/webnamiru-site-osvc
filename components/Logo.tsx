import Link from "next/link"
import { Code2 } from "lucide-react"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20 rounded-lg blur-sm group-hover:blur-md transition-all" />
        <div className="relative bg-linear-to-br from-accent to-primary p-2 rounded-lg transition-transform group-hover:scale-110">
          <Code2 className="h-5 w-5 text-white" strokeWidth={2.5} />
        </div>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-bold text-lg tracking-tight">webnamiru</span>
          <span className="text-xs text-muted-foreground">.site</span>
        </div>
      )}
    </Link>
  )
}
