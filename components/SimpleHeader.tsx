import Link from "next/link"
import { Code2 } from "lucide-react"

export function SimpleHeader() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">webnamiru.site</span>
        </Link>
      </div>
    </header>
  )
}
