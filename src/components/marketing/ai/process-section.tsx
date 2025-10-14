import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  MessageCircle, 
  Cog, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Users,
  Target
} from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Kostenloses Strategiegespräch",
      description: "Wir analysieren deine aktuellen Prozesse und identifizieren die größten Automatisierungspotentiale in deinem Business.",
      icon: MessageCircle,
      duration: "30 Min",
      details: [
        "Business-Analyse & Pain Points",
        "Automatisierungspotentiale identifizieren", 
        "ROI-Prognose für dein Business",
        "Maßgeschneiderte Strategie entwickeln"
      ]
    },
    {
      number: "02", 
      title: "System-Integration & Setup",
      description: "Wir integrieren die AI-Systeme in deine bestehende Infrastruktur und richten alles maßgeschneidert für dein Business ein.",
      icon: Cog,
      duration: "1-2 Wochen",
      details: [
        "API-Integration in Shopify, Meta, Google Ads",
        "AI-Modelle auf deine Daten trainieren",
        "Dashboard & Reporting einrichten",
        "Team-Schulung & Onboarding"
      ]
    },
    {
      number: "03",
      title: "Launch & Optimierung", 
      description: "Die Systeme gehen live und wir optimieren kontinuierlich basierend auf deinen Ergebnissen und Feedback.",
      icon: Zap,
      duration: "Laufend",
      details: [
        "Systeme aktivieren & überwachen",
        "Performance-Tracking & Analytics",
        "Kontinuierliche Optimierung",
        "Support & Wartung"
      ]
    }
  ]

  const guarantees = [
    {
      icon: CheckCircle,
      title: "30-Tage Geld-zurück-Garantie",
      description: "Wenn du nicht zufrieden bist, bekommst du dein Geld zurück. Punkt."
    },
    {
      icon: Users,
      title: "Persönlicher Support",
      description: "Du arbeitest direkt mit mir zusammen - nicht mit einem anonymen Support-Team."
    },
    {
      icon: Target,
      title: "Ergebnisgarantie",
      description: "Wir garantieren dir mindestens 10 Stunden Zeitersparnis pro Woche oder du zahlst nichts."
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Der Ablauf
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            So funktioniert&apos;s
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Von der ersten Analyse bis zur vollständigen Automatisierung in 3 einfachen Schritten
          </p>
        </div>

        {/* Process steps */}
        <div className="mb-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="relative shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <Badge variant="secondary" className="mb-4">
                      <Calendar className="mr-2 h-4 w-4" />
                      {step.duration}
                    </Badge>

                    {/* Title and description */}
                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mb-6 text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Timeline connector */}
        <div className="mb-16 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="h-1 w-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Unsere Garantien
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon
              return (
                <Card key={index} className="text-center shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h4 className="mb-2 font-semibold text-gray-900">
                      {guarantee.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bereit für den ersten Schritt?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Buche jetzt dein kostenloses Strategiegespräch und lass uns dein Automatisierungspotential analysieren.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Kostenloses Strategiegespräch buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}