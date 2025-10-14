import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, 
  Package, 
  MessageCircle, 
  Target, 
  TrendingUp, 
  Zap,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const mainFeatures = [
  {
    icon: BarChart3,
    title: "Intelligentes Reporting",
    description: "Automatisierte Daily Reports mit allen wichtigen KPIs - in 5 Minuten statt 5 Stunden.",
    benefits: [
      "Tägliche Performance-Übersicht",
      "Automatische Alerts bei Anomalien", 
      "Custom Dashboards für dein Team",
      "ROI-Tracking in Echtzeit"
    ],
    timeSaved: "15h/Woche",
    color: "border-blue-200 bg-blue-50"
  },
  {
    icon: Package,
    title: "Smart Inventory Management",
    description: "AI-gestützte Bestandsplanung verhindert Out-of-Stocks und optimiert deine Lagerkosten.",
    benefits: [
      "Predictive Inventory Forecasting",
      "Automatische Nachbestellungen",
      "Demand Planning basierend auf Trends",
      "Lageroptimierung & Kostenreduktion"
    ],
    timeSaved: "10h/Woche",
    color: "border-green-200 bg-green-50"
  },
  {
    icon: MessageCircle,
    title: "AI Customer Service",
    description: "24/7 automatischer Kundenservice, der 80% aller Anfragen perfekt beantwortet.",
    benefits: [
      "Intelligente Chatbot-Integration",
      "Automatische E-Mail-Antworten",
      "FAQ-Management & Learning",
      "Escalation zu menschlichen Agents"
    ],
    timeSaved: "20h/Woche",
    color: "border-purple-200 bg-purple-50"
  }
]

const additionalFeatures = [
  {
    icon: Target,
    title: "Kampagnen-Optimierung",
    description: "AI optimiert deine Meta & Google Ads automatisch für maximale Performance."
  },
  {
    icon: TrendingUp,
    title: "Customer Segmentation", 
    description: "Automatische Kundensegmentierung für personalisierte Marketing-Kampagnen."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Intelligente Task-Verteilung und Performance-Tracking für dein Team."
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "AI-Insights für Pricing-Strategien und Upselling-Opportunities."
  }
]

export function FeaturesSectionStudio() {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl mb-4">
            Was wir automatisieren
          </h2>
          <p className="text-muted-foreground text-xl">
            Von Reporting bis Customer Service - hier sind die Bereiche, in denen AI dein Business revolutioniert
          </p>
        </div>

        {/* Main features */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow ${feature.color}`}>
                <CardContent className="p-8">
                  {/* Icon and time saved */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Clock className="mr-1 h-3 w-3" />
                      {feature.timeSaved}
                    </Badge>
                  </div>

                  {/* Title and description */}
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Was du bekommst:</h4>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Weitere Automatisierungen
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                        <Icon className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                    <h4 className="mb-2 font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Total time saved */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <CardContent className="p-8 text-center">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Gesamtzeitersparnis: 45+ Stunden pro Woche
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Das entspricht einem ganzen Vollzeit-Mitarbeiter - nur ohne die Kosten!
              </p>
              <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">€50k+</div>
                  <div className="text-sm text-gray-600">Kostenersparnis pro Jahr</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3x</div>
                  <div className="text-sm text-gray-600">Schnellere Entscheidungen</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Genauigkeit der AI</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
            Jetzt Gespräch buchen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
