"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface SeznamReviewsWidgetProps {
  companyId?: string
  maxReviews?: number
  showTitle?: boolean
  className?: string
}

export function SeznamReviewsWidget({
  companyId = "your-company-id", // Replace with actual company ID
  maxReviews = 3,
  showTitle = true,
  className = "",
}: SeznamReviewsWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Lazy load the Seznam widget script
    const script = document.createElement("script")
    script.src = "https://widget.seznam.cz/reviews.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <Card className={`border-2 hover:border-accent/50 transition-colors ${className}`}>
      <CardContent className="p-6 space-y-4">
        {showTitle && (
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recenze zákazníků</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        )}

        {/* Seznam.cz Reviews Widget Container */}
        <div
          ref={widgetRef}
          data-widget="firmy-recenze"
          data-company-id={companyId}
          data-max-reviews={maxReviews}
          data-theme="light"
          className="min-h-[200px]"
        />

        <p className="text-xs text-muted-foreground text-center pt-2">Ověřené recenze ze Seznam.cz</p>
      </CardContent>
    </Card>
  )
}
