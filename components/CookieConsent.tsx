"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    setShowBanner(false)
    setShowSettings(false)

    if (prefs.analytics) {
      // Enable analytics (e.g., Google Analytics)
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        })
      }
      console.log("[v0] Analytics cookies enabled")
    } else {
      // Disable analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        })
      }
    }

    if (prefs.marketing) {
      // Enable marketing cookies
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
        })
      }
      console.log("[v0] Marketing cookies enabled")
    } else {
      // Disable marketing cookies
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "denied",
        })
      }
    }
  }

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true })
  }

  const rejectAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false })
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom">
        <Card className="max-w-4xl mx-auto p-6 shadow-lg border-2">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Používáme cookies pro lepší zážitek</h3>
              <p className="text-sm text-muted-foreground">
                Tento web používá cookies pro zajištění základní funkčnosti a pro analýzu návštěvnosti. Vaše soukromí je
                pro nás důležité. Můžete si vybrat, které cookies chcete povolit.{" "}
                <Link href="/cookies" className="underline hover:text-accent">
                  Více informací
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button variant="outline" onClick={() => setShowSettings(true)} className="w-full sm:w-auto">
                <Settings className="h-4 w-4 mr-2" />
                Nastavení
              </Button>
              <Button variant="outline" onClick={rejectAll} className="w-full sm:w-auto bg-transparent">
                Odmítnout vše
              </Button>
              <Button onClick={acceptAll} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                Přijmout vše
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Nastavení cookies</DialogTitle>
            <DialogDescription>
              Vyberte, které typy cookies chcete povolit. Nezbytné cookies jsou vždy aktivní.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between space-x-4">
              <div className="flex-1">
                <Label htmlFor="necessary" className="text-base font-semibold">
                  Nezbytné cookies
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Tyto cookies jsou nezbytné pro správné fungování webu. Nelze je vypnout.
                </p>
              </div>
              <Switch id="necessary" checked={true} disabled className="mt-1" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between space-x-4">
              <div className="flex-1">
                <Label htmlFor="analytics" className="text-base font-semibold">
                  Analytické cookies
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Pomáhají nám pochopit, jak návštěvníci používají web. Všechna data jsou anonymizována.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between space-x-4">
              <div className="flex-1">
                <Label htmlFor="marketing" className="text-base font-semibold">
                  Marketingové cookies
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Používají se pro zobrazení relevantních reklam a měření efektivity kampaní.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setPreferences({ necessary: true, analytics: false, marketing: false })
                savePreferences({ necessary: true, analytics: false, marketing: false })
              }}
              className="w-full sm:w-auto"
            >
              Odmítnout vše
            </Button>
            <Button
              onClick={() => savePreferences(preferences)}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90"
            >
              Uložit nastavení
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
