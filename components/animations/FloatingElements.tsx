"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FloatingElement({ children, className = "", delay = 0, duration = 3 }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RotatingElement({ children, className = "", duration = 20 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PulsingElement({ children, className = "", duration = 2 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
