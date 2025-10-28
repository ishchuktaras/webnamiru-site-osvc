import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/Header"

export const metadata = {
  title: "Kontakt | webnamiru.site",
  description: "Kontaktujte nás pro nezávaznou konzultaci ohledně vašeho webového projektu",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Pojďme si promluvit o vašem projektu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Vyplňte formulář níže a ozvu se vám do 24 hodin
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Poptávkový formulář</CardTitle>
                  <CardDescription>Čím více informací nám poskytnete, tím lépe vám budeme moci pomoci</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:info@webnamiru.site" className="text-sm text-muted-foreground hover:text-primary">
                        info@webnamiru.site
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <a href="tel:+420777596216" className="text-sm text-muted-foreground hover:text-primary">
                        +420 777 596 216
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Sídlo</div>
                      <div className="text-sm text-muted-foreground">Rantířovská 123/36</div>
                      <div className="text-sm text-muted-foreground">586 01 Jihlava - Horní Kosov</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 space-y-2">
                  <div className="font-semibold">Rychlá odpověď</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Odpovídám na všechny poptávky do 24 hodin. Pro urgentní záležitosti nás kontaktujte přímo emailem.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="font-semibold text-sm">Identifikační údaje</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>Taras Ishchuk</p>
                    <p>IČO: 23874694</p>
                    <p>Fyzická osoba zapsaná v Živnostenském rejstříku</p>
                    <p>Nejsem plátce DPH</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
