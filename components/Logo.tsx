import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group min-h-12 ${className}`}>
      {showText ? (
        <Image
          src="/logo.svg"
          alt="webnamiru.site logo"
          width={160}
          height={40}
          className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105"
          priority
        />
      ) : (
        <Image
          src="/icon.svg"
          alt="webnamiru.site icon"
          width={40}
          height={40}
          className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:scale-110"
          priority
        />
      )}
    </Link>
  )
}
