import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 sm:h-10", // Footer size
    md: "h-10 sm:h-12", // Header size
    lg: "h-12 sm:h-14", // Hero/special sections
  }

  const iconSizeClasses = {
    sm: "h-8 w-8 sm:h-10 sm:w-10",
    md: "h-10 w-10 sm:h-12 sm:w-12",
    lg: "h-12 w-12 sm:h-14 sm:w-14",
  }

  const widthMap = {
    sm: { text: 200, icon: 40 },
    md: { text: 280, icon: 58 },
    lg: { text: 500, icon: 62 },
  }

  const heightMap = {
    sm: { text: 50, icon: 40 },
    md: { text: 60, icon: 48 },
    lg: { text: 70, icon: 56 },
  }

  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      {showText ? (
        <Image
          src="/logo.png"
          alt="webnamiru.site logo"
          width={widthMap[size].text}
          height={heightMap[size].text}
          className={`${sizeClasses[size]} w-auto transition-transform group-hover:scale-105`}
          priority
        />
      ) : (
        <Image
          src="/icon.svg"
          alt="webnamiru.site icon"
          width={widthMap[size].icon}
          height={heightMap[size].icon}
          className={`${iconSizeClasses[size]} transition-transform group-hover:scale-110`}
          priority
        />
      )}
    </Link>
  )
}
