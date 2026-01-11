import type { Metadata } from "next"
import { Star, Award, ThumbsUp, TrendingUp, Quote, User, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animations/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"
import { ReviewForm } from "@/components/ReviewForm"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"

export const metadata: Metadata = {
  title: "Recenze a hodnocení | webnamiru.site",
  description: "Přečtěte si ověřené recenze od spokojených klientů.",
}

export const revalidate = 60

export default async function RecenzePage() {
  // 1. Stažení recenzí ze Sanity
  const reviews = await client.fetch(
    groq`*[_type == "review" && isApproved == true] | order(_createdAt desc) {
      _id,
      name,
      company,
      text,
      rating,
      "date": _createdAt
    }`
  ) || []

  // 2. VÝPOČET STATISTIK 
  const reviewCount = reviews.length
  
  // Průměrné hodnocení
  const totalStars = reviews.reduce((acc: number, review: any) => acc + (review.rating || 0), 0)
  const averageRating = reviewCount > 0 
    ? (totalStars / reviewCount).toFixed(1) 
    : "5.0" 

  // Data pro statistické karty
  const stats = [
    { 
      icon: Star, 
      value: averageRating, 
      label: "Průměrné hodnocení", 
      color: "text-yellow-500" 
    },
    { 
      icon: Award, 
      value: reviewCount > 0 ? "100%" : "-", 
      label: "Spokojených klientů", 
      color: "text-green-500" 
    },
    { 
      icon: ThumbsUp, 
      value: reviewCount.toString(), 
      label: "Počet hodnocení", 
      color: "text-blue-500" 
    },
    { 
      icon: TrendingUp, 
      value: "5+", 
      label: "Let zkušeností", 
      color: "text-purple-500" 
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-4">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">Co říkají moji klienti</h1>
            <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Skutečné hodnocení spolupráce. Žádné externí widgety, ale přímá zpětná vazba.
            </p>
          </AnimatedSection>

          {/* Stats Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={0.1}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <StaggerItem key={index}>
                  <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center space-y-2">
                      <IconComponent className={`h-8 w-8 mx-auto ${stat.color}`} />
                      <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-secondary/30" id="napsat-recenzi">
        <div className="container max-w-4xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Máte se mnou zkušenost?</h2>
            <p className="text-muted-foreground">Budu rád, když napíšete pár slov o naší spolupráci.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ReviewForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews List Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Všechny recenze</h2>
          </AnimatedSection>

          {reviews.length > 0 ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {reviews.map((review: any) => (
                <StaggerItem key={review._id}>
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-accent/10">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <User className="h-5 w-5" />
                          </div>
                          <div>
                            <CardTitle className="text-base font-semibold">{review.name}</CardTitle>
                            {review.company && (
                              <p className="text-sm text-muted-foreground">{review.company}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < (review.rating || 5) ? "fill-yellow-400 text-yellow-400" : "text-gray-200 dark:text-gray-700"}`} 
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <div className="relative mt-2">
                        <Quote className="absolute -top-1 -left-1 h-4 w-4 text-accent/20 rotate-180" />
                        <p className="text-muted-foreground text-sm leading-relaxed pl-4">
                          {review.text}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t flex justify-end">
                        <span className="text-xs text-muted-foreground">
                          {new Date(review.date).toLocaleDateString('cs-CZ')}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <AnimatedSection>
              <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed rounded-lg border-muted">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Zatím žádné recenze</h3>
                <p className="text-muted-foreground max-w-md">
                  Zatím nejsou publikované recenze. Buďte první!
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  )
}