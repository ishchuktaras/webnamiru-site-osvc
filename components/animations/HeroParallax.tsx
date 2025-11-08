"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from "lucide-react"

export const HeroParallax = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 0]), springConfig)

  return (
    <div
      ref={ref}
      className="h-[200vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-linear-to-b from-background via-background/95 to-background"
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-0" />

      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-0"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translateX={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translateX={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 w-full left-0 top-0 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 md:space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          <span className="inline-flex items-center rounded-full border-2 border-accent/30 bg-accent/20 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-accent backdrop-blur-md shadow-lg">
            <Rocket className="mr-1.5 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Strategický přístup k webovému vývoji</span>
            <span className="sm:hidden">Strategický přístup</span>
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-balance leading-tight [text-shadow:_0_2px_10px_rgb(0_0_0_/_20%)]">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block text-foreground"
          >
            Weby, které
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block text-accent [text-shadow:_0_2px_15px_rgb(var(--accent)_/_30%)]"
          >
            přinášejí výsledky
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-block rounded-xl md:rounded-2xl bg-background/60 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 border border-border/50 shadow-xl"
        >
          <p className="text-sm md:text-base lg:text-xl text-foreground max-w-2xl text-pretty leading-relaxed font-medium">
            Vytvářím webové stránky na míru, které nejen skvěle vypadají, ale především pomáhají vašemu podnikání růst.
            <span className="hidden md:inline"> Od strategie přes design až po měřitelné výsledky.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 shadow-2xl hover:shadow-accent/50 group transition-all duration-300 h-11 md:h-12"
          >
            <Link href="/kontakt" className="text-sm md:text-base">
              Začít projekt
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-primary text-primary hover:bg-primary/10 bg-background/80 backdrop-blur-md shadow-xl h-11 md:h-12"
          >
            <Link href="#sluzby" className="text-sm md:text-base">
              Zjistit více
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translateX,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translateX: any
}) => {
  return (
    <motion.div
      style={{
        x: translateX,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl border-2 border-border"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-bold transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  )
}

const firstRow = [
  {
    title: "E-commerce řešení",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Webové aplikace",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Firemní prezentace",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop&q=80",
  },
]

const secondRow = [
  {
    title: "Landing Pages",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Portfolio weby",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Blog platformy",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=600&fit=crop&q=80",
  },
]
