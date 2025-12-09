"use client"

import { useState, useMemo } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Loader2, Mail, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function TCOCalculator() {
  const [years, setYears] = useState([3])
  const [cheapInitial, setCheapInitial] = useState([15000]) 
  const [cheapMonthly, setCheapMonthly] = useState([2000])  
  
  const [proInitial, setProInitial] = useState([45000])     
  const [proMonthly, setProMonthly] = useState([500])       

  const [email, setEmail] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const data = useMemo(() => {
    const chartData = []
    for (let i = 0; i <= years[0]; i++) {
      chartData.push({
        year: `Rok ${i}`,
        LevneReseni: cheapInitial[0] + (cheapMonthly[0] * 12 * i),
        ProfesionalniReseni: proInitial[0] + (proMonthly[0] * 12 * i),
      })
    }
    return chartData
  }, [years, cheapInitial, cheapMonthly, proInitial, proMonthly])

  const totalCheap = data[data.length - 1].LevneReseni
  const totalPro = data[data.length - 1].ProfesionalniReseni
  const savings = totalCheap - totalPro

  const handleSendReport = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const response = await fetch("/api/tco-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          years: years[0],
          savings,
          totalCheap,
          totalPro,
          config: { cheapInitial, cheapMonthly, proInitial, proMonthly }
        }),
      })

      if (!response.ok) throw new Error("Chyba odeslání")

      toast({
        title: "Kalkulace odeslána!",
        description: "Podrobný report najdete ve svém e-mailu.",
        className: "bg-green-600 text-white border-none",
      })
      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Chyba",
        description: "Nepodařilo se odeslat report.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(value)

  return (
    <Card className="w-full border-2 border-primary/10 shadow-xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TrendingUp className="text-primary h-6 w-6" />
          Kalkulačka TCO (Total Cost of Ownership)
        </CardTitle>
        <CardDescription>
          Porovnejte, kdy se vám vrátí investice do kvalitního webu oproti levné šabloně.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Levné řešení */}
          <div className="space-y-4 p-4 bg-red-50/50 dark:bg-red-950/10 rounded-lg border border-red-100 dark:border-red-900/20">
            <h3 className="font-semibold text-red-700 dark:text-red-400">🔴 Běžné šablonové řešení</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label>Pořizovací cena</Label>
                <span className="font-mono">{formatCurrency(cheapInitial[0])}</span>
              </div>
              <Slider value={cheapInitial} onValueChange={setCheapInitial} max={100000} step={1000} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm items-center">
                <Label>Měsíční náklady (údržba, pluginy)</Label>
                <span className="font-mono">{formatCurrency(cheapMonthly[0])}</span>
              </div>
              <Slider value={cheapMonthly} onValueChange={setCheapMonthly} max={5000} step={100} />
            </div>
          </div>

          {/* Profi řešení */}
          <div className="space-y-4 p-4 bg-green-50/50 dark:bg-green-950/10 rounded-lg border border-green-100 dark:border-green-900/20">
            <h3 className="font-semibold text-green-700 dark:text-green-400">🟢 Profesionální řešení na míru</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <Label>Pořizovací cena</Label>
                <span className="font-mono">{formatCurrency(proInitial[0])}</span>
              </div>
              <Slider value={proInitial} onValueChange={setProInitial} max={150000} step={1000} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm items-center">
                <Label>Měsíční náklady (provoz)</Label>
                <span className="font-mono">{formatCurrency(proMonthly[0])}</span>
              </div>
              <Slider value={proMonthly} onValueChange={setProMonthly} max={2000} step={100} />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex justify-between">
            <Label className="text-lg">Časový horizont: <span className="text-primary font-bold">{years[0]} let</span></Label>
          </div>
          <Slider value={years} onValueChange={setYears} min={1} max={5} step={1} />
        </div>

        <div className="h-[300px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} />
              <Legend />
              <Line type="monotone" dataKey="LevneReseni" name="Šablonové řešení" stroke="#ef4444" strokeWidth={3} />
              <Line type="monotone" dataKey="ProfesionalniReseni" name="Řešení na míru" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 p-6 bg-accent/10 rounded-xl text-center">
          {savings > 0 ? (
            <div>
              <p className="text-lg text-muted-foreground mb-1">Po {years[0]} letech s řešením na míru ušetříte:</p>
              <p className="text-4xl font-bold text-green-600 dark:text-green-400">{formatCurrency(savings)}</p>
            </div>
          ) : (
            <div>
              <p className="text-lg text-muted-foreground mb-1">Vyšší kvalita si žádá delší návratnost.</p>
              <p className="text-2xl font-bold text-primary">Kvalita se vyplatí v konverzích.</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-center pb-8">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2">
              <Mail className="h-5 w-5" />
              Zaslat kalkulaci na e-mail
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Zaslat výsledek TCO analýzy</DialogTitle>
              <DialogDescription>
                Zadejte svůj e-mail a pošlu vám přehledné PDF s porovnáním nákladů.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSendReport} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Váš e-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="jan@firma.cz" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSending}>
                {isSending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Odeslat report"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}