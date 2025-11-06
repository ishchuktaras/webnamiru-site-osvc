"use client"

import { useEffect } from "react"
import { Shield } from "lucide-react"

interface FirmyCzBadgeProps {
  companyId?: string
  variant?: "light" | "dark"
  showRating?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function FirmyCzBadge({
  companyId = "your-company-id", // Replace with actual company ID
  variant = "light",
  showRating = true,
  size = "md",
  className = "",
}: FirmyCzBadgeProps) {
  useEffect(() => {
    // Lazy load the Firmy.cz badge script
    const script = document.createElement("script")
    script.src = "https://widget.firmy.cz/badge.js"
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

  const sizeClasses = {
    sm: "h-12",
    md: "h-16",
    lg: "h-20",
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        data-widget="firmy-badge"
        data-company-id={companyId}
        data-variant={variant}
        data-show-rating={showRating}
        className={`${sizeClasses[size]} flex items-center`}
      >
        {/* Fallback content while widget loads */}
        <div className="flex items-center gap-2 px-3 py-2 bg-accent/10 rounded-lg border border-accent/20">
          <Shield className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">Ověřeno na Firmy.cz</span>
        </div>
      </div>
    </div>
  )
}
