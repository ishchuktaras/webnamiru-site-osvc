"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, Menu, Moon, Sun, Sparkles } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/sluzby", label: "Služby", icon: "💼" },
    { href: "/zahajeni-projektu", label: "Zahájení projektu", icon: "🚀" },
    { href: "/cenik", label: "Ceník", icon: "💰" },
    { href: "/o-mne", label: "O mně", icon: "👨‍💻" },
    { href: "/portfolio", label: "Portfolio", icon: "🎨" },
    { href: "/blog", label: "Blog", icon: "📝" },
    { href: "/#faq", label: "FAQ", icon: "❓" },
    { href: "/kontakt", label: "Kontakt", icon: "📧" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Code2 className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <span className="font-bold text-xl">webnamiru.site</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all hover:text-accent hover:scale-105 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Switcher - Desktop */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden md:flex relative overflow-hidden group"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Přepnout téma</span>
            </Button>
          )}

          {/* Desktop CTA */}
          <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90 hover:scale-105 transition-transform">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6 transition-transform hover:scale-110" />
                <span className="sr-only">Otevřít menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0 flex flex-col">
              <SheetHeader className="px-6 py-4 border-b bg-gradient-to-r from-accent/10 to-primary/10">
                <SheetTitle className="text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "group relative flex items-center gap-3 px-4 py-3.5 rounded-lg",
                      "text-base font-medium transition-all duration-300",
                      "hover:bg-accent/10 hover:text-accent hover:translate-x-1",
                      "active:scale-95",
                      "animate-in slide-in-from-right fade-in",
                    )}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationDuration: "400ms",
                      animationFillMode: "backwards",
                    }}
                  >
                    <span className="text-2xl transition-transform group-hover:scale-125 group-hover:rotate-12">
                      {link.icon}
                    </span>
                    <span className="flex-1">{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t bg-muted/30 space-y-3">
                <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-background/50 border">
                  <span className="text-sm font-medium flex items-center gap-2">
                    {theme === "dark" ? "🌙" : "☀️"}
                    {theme === "dark" ? "Tmavý režim" : "Světlý režim"}
                  </span>
                  {mounted && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="h-9 w-9 relative overflow-hidden"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  )}
                </div>

                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 hover:scale-[1.02] transition-transform shadow-lg"
                  onClick={handleLinkClick}
                >
                  <Link href="/kontakt" className="flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Nezávazná poptávka
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
