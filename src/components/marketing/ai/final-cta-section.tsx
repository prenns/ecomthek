import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Clock, CheckCircle, Users, Zap } from 'lucide-react'

export function FinalCTASection() {
  const urgencyFactors = [
    {
      icon: Clock,
      title: "Begrenzte Kapazität",
      description: "Ich arbeite nur mit 10 D2C-Brands gleichzeitig für maximale Qualität"
    },
    {
      icon: Users,
      title: "Exklusiver Zugang", 
      description: "Du arbeitest direkt mit einem 7-stelligen Founder zusammen"
    },
    {
      icon: Zap,
      title: "Sofortiger Start",
      description: "Erste Automatisierungen bereits in 2 Wochen aktiv"
    }
  ]

  const guarantees = [
    "30-Tage Geld-zurück-Garantie",
    "Mindestens 10h Zeitersparnis pro Woche",
    "Persönlicher Support von Alex",
    "Keine Mindestlaufzeit"
  ]

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Main CTA Card */}
        <Card className="shadow-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8 sm:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Letzte Chance
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Bereit für die Transformation?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Lass uns dein Business mit AI-Automation auf das nächste Level bringen. 
                <strong> Jetzt oder nie.</strong>
              </p>
            </div>

            {/* Main CTA Button */}
            <div className="text-center mb-12">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Jetzt Gespräch buchen
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="mt-4 text-sm text-gray-600">
                ⏱️ Kostenloses 30-Minuten Gespräch • 🎯 Keine Verpflichtungen
              </p>
            </div>

            {/* Urgency factors */}
            <div className="grid gap-6 sm:grid-cols-3 mb-12">
              {urgencyFactors.map((factor, index) => {
                const Icon = factor.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {factor.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Unsere Garantien
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            <strong>Noch unsicher?</strong> Kein Problem. Das kostenlose Gespräch hilft dir, 
            die richtige Entscheidung zu treffen - ohne Risiko.
          </p>
        </div>
      </div>
    </section>
  )
}