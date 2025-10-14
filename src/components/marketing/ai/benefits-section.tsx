import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, ArrowRight, TrendingUp, Clock, BarChart3 } from 'lucide-react'

export function BenefitsSection() {
  const comparisons = [
    {
      title: "Reporting & Analytics",
      before: "15h/Woche für Reports",
      after: "5 Min/Tag automatisch",
      icon: Clock
    },
    {
      title: "Entscheidungsfindung", 
      before: "Bauchgefühl-Entscheidungen",
      after: "Datenbasiert in Echtzeit",
      icon: BarChart3
    },
    {
      title: "Team-Skalierung",
      before: "Team wächst mit Umsatz",
      after: "Team bleibt lean, Output steigt",
      icon: TrendingUp
    }
  ]

  const mainBenefits = [
    {
      title: "Wachstum ohne Headcount",
      description: "Skaliere auf die nächste Stufe, ohne dein Team zu verdoppeln. AI übernimmt die repetitiven Aufgaben, während dein Team sich auf strategische Ziele konzentriert.",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "80% weniger operative Arbeit", 
      description: "Deine wichtigsten Prozesse laufen automatisch. Du gewinnst 15–20h pro Woche zurück und kannst dich endlich wieder dem Unternehmer-Sein widmen.",
      icon: Clock,
      color: "blue"
    },
    {
      title: "Entscheidungen auf Datenbasis",
      description: "Die richtigen Daten zur richtigen Zeit, täglich – in 5 Minuten statt 5 Stunden. Keine Excel-Marathons mehr, nur noch datenbasierte Entscheidungen.",
      icon: BarChart3,
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600 border-green-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200", 
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Die Vorteile
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Vorher vs. Nachher
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sieh dir an, wie sich dein Arbeitsalltag mit AI-Automation verändert
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-xl">Der direkte Vergleich</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bereich</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">Vorher (ohne AI)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Nachher (mit AI)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisons.map((comparison, index) => {
                      const Icon = comparison.icon
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <Icon className="h-5 w-5 text-gray-500" />
                              <span className="font-medium text-gray-900">{comparison.title}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-700">{comparison.before}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-green-700 font-medium">{comparison.after}</span>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main benefits */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {mainBenefits.map((benefit, index) => {
            const Icon = benefit.icon
            const colorClasses = getColorClasses(benefit.color)
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full border-2 ${colorClasses}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bereit für die Transformation?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Lass uns besprechen, wie wir dein Business mit AI-Automation auf das nächste Level bringen können.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Jetzt Gespräch buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
