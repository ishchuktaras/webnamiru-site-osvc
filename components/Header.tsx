import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">webnamiru.site</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/sluzby" className="transition-colors hover:text-accent">
            Služby
          </Link>
          <Link href="/o-mne" className="transition-colors hover:text-accent">
            O mně
          </Link>
          <Link href="/portfolio" className="transition-colors hover:text-accent">
            Portfolio
          </Link>
          <Link href="/blog" className="transition-colors hover:text-accent">
            Blog
          </Link>
          <Link href="/kontakt" className="transition-colors hover:text-accent">
            Kontakt
          </Link>
        </nav>
        <Button asChild className="bg-accent hover:bg-accent/90">
          <Link href="/kontakt">Nezávazná poptávka</Link>
        </Button>
      </div>
    </header>
  )
}
export default Header
