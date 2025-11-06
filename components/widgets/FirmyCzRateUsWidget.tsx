"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FirmyCzRateUsWidgetProps {
  variant?: "light" | "dark"
  className?: string
}

export function FirmyCzRateUsWidget({ variant = "dark", className = "" }: FirmyCzRateUsWidgetProps) {
  const imageUrl =
    variant === "dark"
      ? "https://www.firmy.cz/img/widgets/firmy-ohodnotte-nas-tmave.svg"
      : "https://www.firmy.cz/img/widgets/firmy-ohodnotte-nas-svetle.svg"

  return (
    <Card className={`border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 ${className}`}>
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span>Líbí se vám moje práce?</span>
        </div>
        <a
          href="https://www.firmy.cz/detail/13911712-taras-ishchuk-jihlava.html#pridat-hodnoceni"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
        >
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Ohodnoťte Taras Ishchuk na Firmy.cz"
            width={249}
            height={60}
            className="mx-auto"
            loading="lazy"
          />
        </a>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Vaše hodnocení mi pomůže zlepšovat služby a získat důvěru dalších klientů
        </p>
      </CardContent>
    </Card>
  )
}
