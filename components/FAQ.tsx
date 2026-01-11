// components/FAQ.tsx

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  _id: string
  question: string
  answer: string
  category?: string
}

interface FAQProps {
  faqs: FAQItem[]
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section id="faq" className="py-20">
      {/* </CHANGE> */}
      <div className="container max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Často kladené otázky</h2>
          <p className="text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
            Odpovědi na nejčastější dotazy ohledně našich služeb a spolupráce
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={faq._id}
              className="border-2 hover:border-accent/50 transition-colors cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    {openIndex === index && (
                      <p className="text-muted-foreground leading-relaxed mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQ
