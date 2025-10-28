"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Menu, Moon, Sun } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/sluzby", label: "Služby" },
    { href: "/cenik", label: "Ceník" },
    { href: "/o-mne", label: "O mně" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/#faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">webnamiru.site</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Přepnout téma</span>
            </Button>
          )}

          {/* Desktop CTA */}
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Otevřít menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm font-medium">Tmavý režim</span>
                  {mounted && (
                    <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                  )}
                </div>
                <Button asChild className="mt-4 bg-accent hover:bg-accent/90">
                  <Link href="/kontakt">Nezávazná poptávka</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
