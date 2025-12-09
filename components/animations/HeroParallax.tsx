"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, MousePointerClick } from "lucide-react"

export const HeroParallax = () => {
  const ref = useRef(null)
  
  // Sledujeme scroll v rámci tohoto kontejneru
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Fyzika pro plynulý dojezd (smooth scroll efekt)
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Sloučíme všechny služby do jednoho pole
  const products = [...firstRow, ...secondRow]
  
  // Celkový počet "snímků" = Header + počet služeb
  const totalSlides = products.length + 1
  
  // Mapování scrollu (0-1) na horizontální posun (0 až -X vw)
  // Posouváme se doleva o šířku obrazovky * (počet slidů - 1)
  const x = useTransform(smoothProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`])

  return (
    // Kontejner je velmi vysoký (např. 500vh), aby scroll trval déle a byl plynulý
    <div ref={ref} className="relative h-[600vh]">
      
      {/* Sticky okno - to, co uživatel vidí */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        
        {/* Horizontální pás se všemi slidy */}
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          
          {/* --- SLIDE 1: HEADER (Úvod) --- */}
          <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative overflow-hidden">
            {/* Pozadí pro Header */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-accent/5 z-0" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
            
            <div className="relative z-10 w-full">
              <Header />
            </div>

            {/* Indikátor scrollu */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, y: [0, 10, 0] }} 
              transition={{ delay: 2, duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Prohlédnout služby</span>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
            </motion.div>
          </section>

          {/* --- SLIDE 2+: SLUŽBY --- */}
          {products.map((product, index) => (
            <section key={product.title} className="w-screen h-screen flex-shrink-0 relative group">
              <Link href={product.link} className="block h-full w-full relative cursor-none md:cursor-pointer">
                <Image
                  src={product.thumbnail || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority={index < 2} // Načíst první obrázky prioritně
                  sizes="100vw"
                />
                
                {/* Overlay pro čitelnost */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Obsah karty */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center z-20">
                  <div className="max-w-4xl space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: false }}
                    >
                      <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium mb-4">
                        Služba {index + 1}
                      </span>
                      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight text-balance drop-shadow-xl">
                        {product.title}
                      </h2>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-4"
                    >
                      <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
                        Klikněte pro detailní informace o této službě a ukázky realizací.
                      </p>
                      
                      <div className="flex items-center gap-2 text-white font-medium border-b border-white pb-1">
                        Zjistit více <ArrowRight className="h-4 w-4" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </section>
          ))}

        </motion.div>
      </div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          <span className="inline-flex items-center rounded-full border-2 border-accent/30 bg-background/50 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-accent shadow-lg">
            <Rocket className="mr-2 h-4 w-4" />
            Strategický webový vývoj
          </span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-balance leading-tight tracking-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block text-foreground"
          >
            Weby, které
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary"
          >
            přinášejí výsledky
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          Odhalte potenciál vašeho podnikání s webem na míru. 
          Posouvejte dolů a prohlédněte si, co pro vás mohu udělat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 shadow-xl h-12 px-8 text-lg"
          >
            <Link href="/kontakt">
              Začít projekt
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-12 px-8 text-lg border-2"
          >
            <Link href="#sluzby">
              Rychlý přehled
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

const firstRow = [
  {
    title: "E-commerce",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop&q=80",
  },
  {
    title: "Webové aplikace",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop&q=80",
  },
  {
    title: "Firemní weby",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&q=80",
  },
]

const secondRow = [
  {
    title: "Landing Pages",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&h=900&fit=crop&q=80",
  },
  {
    title: "Portfolia",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1600&h=900&fit=crop&q=80",
  },
  {
    title: "Blogy a magazíny",
    link: "/sluzby",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop&q=80",
  },
]