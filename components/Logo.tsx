"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "lg" }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sizeClasses = {
    sm: "h-8 sm:h-10",
    md: "h-12 sm:h-16",
    lg: "h-16 sm:h-20",
  }

  const iconSizeClasses = {
    sm: "h-8 w-8 sm:h-10 sm:w-10",
    md: "h-12 w-12 sm:h-16 sm:w-16",
    lg: "h-16 w-16 sm:h-20 sm:w-20",
  }

  const widthMap = {
    sm: { text: 200, icon: 40 },
    md: { text: 280, icon: 64 },
    lg: { text: 280, icon: 64 },
  }

  const heightMap = {
    sm: { text: 50, icon: 40 },
    md: { text: 80, icon: 64 },
    lg: { text: 80, icon: 64 },
  }

  const logoSrc = !mounted || resolvedTheme !== "dark" ? "/logo-light.svg" : "/logo-dark.svg"
  const iconSrc = !mounted || resolvedTheme !== "dark" ? "/icon-light.svg" : "/icon-dark.svg"

  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      {showText ? (
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt="webnamiru.site"
          width={widthMap[size].text}
          height={heightMap[size].text}
          className={`${sizeClasses[size]} w-auto transition-transform group-hover:scale-105`}
          priority
        />
      ) : (
        <Image
          src={iconSrc || "/placeholder.svg"}
          alt="webnamiru.site"
          width={widthMap[size].icon}
          height={heightMap[size].icon}
          className={`${iconSizeClasses[size]} transition-transform group-hover:scale-110`}
          priority
        />
      )}
    </Link>
  )
}
