import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckCircle, ArrowRight, Building2, Target } from 'lucide-react'

export function SolutionSection() {
  const results = [
    "Daily Performance Reports → von 90 Minuten auf 5 Minuten",
    "Inventory Forecasting → keine Out-of-Stocks mehr seit 6 Monaten", 
    "Customer Segmentierung → automatisch, in Echtzeit"
  ]

  const benefits = [
    "15+ Stunden pro Woche zurückgewonnen",
    "Kleines Team schafft Output für Data Analyst",
    "Entscheidungen basieren auf Daten, nicht Vermutungen"
  ]

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Die Lösung
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Ich kenne diese Probleme – weil ich sie selbst hatte
            </h2>
          </div>

          {/* Personal introduction */}
          <div className="mb-16">
            <Card className="border-l-4 border-l-blue-500 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/images/alex-prennsberger.png" alt="Alex Prennsberger" />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Alex Prennsberger
                      </h3>
                      <p className="text-gray-600">
                        7-stelliger E-Commerce Founder & AI-Automation Experte
                      </p>
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 italic border-l-4 border-l-blue-200 pl-6">
                      &ldquo;Vor 2 Jahren stand ich genau da, wo du jetzt stehst: 7-stelliger Umsatz, aber gefühlt null Zeit. Mein Team wuchs, meine Marge schrumpfte. Ich wusste, dass es effizienter gehen muss – aber nicht wie.&rdquo;
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transformation story */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              So haben wir es bei wunderklein.com gelöst
            </h3>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-lg text-gray-700 mb-6">
                    Bei <strong>wunderklein.com</strong> (1,8 Mio. € Jahresumsatz) haben wir angefangen, unsere größten Zeitfresser mit AI zu automatisieren:
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-1">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Das Ergebnis?</h4>
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Aha moment */}
          <div className="mb-16">
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="text-center">
                  <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Der &ldquo;Aha&rdquo;-Moment
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Du brauchst keine Entwickler, keine Millionen-Budgets – nur jemanden, der weiß, wie&apos;s geht.</strong>
                  </p>
                  <p className="text-gray-600">
                    Das Beste? Du brauchst kein Tech-Team und keine 6-stelligen Investitionen. Die Tools existieren bereits – sie müssen nur richtig kombiniert und auf dein Business angepasst werden. Genau das machen wir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Peer-to-peer approach */}
          <div className="text-center">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Was bei uns funktioniert, kann auch bei dir funktionieren
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Ich habe gemerkt: Fast jede 7-stellige D2C-Brand kämpft mit den gleichen Problemen. Deshalb habe ich angefangen, anderen Foundern zu zeigen, wie sie die gleichen AI-Systeme in ihrem Business nutzen können – maßgeschneidert, ohne Bullshit, von jemandem, der selbst im operativen Alltag steckt.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Jetzt Gespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
