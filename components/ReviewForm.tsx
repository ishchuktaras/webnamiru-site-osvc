// components/ReviewForm.tsx

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Star, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ReviewForm() {
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { toast } = useToast()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      // Data z formuláře + stav ratingu
      const payload = { ...data, rating }
      
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      // Ošetření chybových stavů (včetně Rate Limitu 429)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Chyba odeslání')
      }

      toast({
        title: "Děkujeme za hodnocení!",
        description: "Vaše recenze byla odeslána a čeká na schválení.",
        className: "bg-green-600 text-white border-none",
      })
      
      // Vyčistíme formulář
      reset()
      setRating(5)
      
    } catch (error: any) {
      toast({
        title: "Chyba",
        description: error.message || "Nepodařilo se odeslat recenzi. Zkuste to prosím později.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-xl mx-auto border-2 border-accent/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Napsat recenzi</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* --- HONEYPOT POLE (SKRYTÉ) --- */}
          {/* Toto pole je skryté pomocí CSS (hidden), takže ho běžný uživatel nevidí. 
              Robot ho v kódu uvidí a pravděpodobně vyplní, čímž se prozradí. */}
          <div className="hidden">
            <label htmlFor="honeypot">Nevyplňujte toto pole, pokud jste člověk</label>
            <input
              type="text"
              id="honeypot"
              tabIndex={-1}
              autoComplete="off"
              {...register("honeypot")}
            />
          </div>

          {/* Hvězdičky */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <Label>Vaše hodnocení</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110 p-1"
                  aria-label={`Hodnotit ${star} hvězdičkami`}
                >
                  <Star 
                    className={`h-8 w-8 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"}`} 
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Jméno *</Label>
              <Input 
                id="name" 
                {...register("name", { required: true })} 
                placeholder="Jan Novák" 
              />
              {errors.name && <span className="text-red-500 text-xs">Jméno je povinné</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Firma / Web (volitelné)</Label>
              <Input 
                id="company" 
                {...register("company")} 
                placeholder="mojefirma.cz" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">Text recenze *</Label>
            <Textarea 
              id="text" 
              {...register("text", { required: true })} 
              placeholder="Jak se vám spolupracovalo?..." 
              rows={4}
            />
            {errors.text && <span className="text-red-500 text-xs">Text recenze je povinný</span>}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Odesílám...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Odeslat recenzi
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}