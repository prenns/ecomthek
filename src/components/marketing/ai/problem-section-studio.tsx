import { Flame, Database, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const problems = [
  {
    icon: Flame,
    title: "Ich ertrinke in operativen Tasks – und komme nicht mehr zum Unternehmer-Sein",
    description: "Du verbringst Stunden damit, Reports zusammenzubauen, Kampagnen zu checken, Inventory zu überwachen. Am Ende des Tages bist du erschöpft – aber strategisch keinen Schritt weiter.",
    reason: "Jeder 7-stellige Gründer kennt das Gefühl, 'Opfer' der eigenen Brand zu sein.",
    emoji: "🔥",
    color: "border-red-200 bg-red-50"
  },
  {
    icon: Database,
    title: "Ich habe massig Daten – aber keine Ahnung, was ich damit anfangen soll",
    description: "Shopify, Google Ads, Meta, Klaviyo, Inventar – alles ist irgendwo. Aber wenn du eine Entscheidung treffen musst, sitzt du trotzdem 2 Stunden vor Excel.",
    reason: "Daten-Overload ist ein RIESIGES Problem bei D2C-Brands. Sie haben alles, nutzen aber nichts richtig.",
    emoji: "📊",
    color: "border-blue-200 bg-blue-50"
  },
  {
    icon: DollarSign,
    title: "Skalieren heißt immer: mehr Leute einstellen – und damit weniger Marge",
    description: "Jede neue Umsatzstufe bedeutet einen neuen Hire: Ops Manager, Data Analyst, Customer Service Lead. Dein Umsatz wächst, deine Marge schrumpft.",
    reason: "Headcount = größter Kostenfaktor. Das ist DER Skalierungs-Pain bei 7-stelligen Brands.",
    emoji: "💸",
    color: "border-yellow-200 bg-yellow-50"
  }
]

export function ProblemSectionStudio() {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 lg:mb-24">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Das Problem
          </Badge>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl mb-4">
            Du kennst diese Probleme, oder?
          </h2>
          <p className="text-muted-foreground text-xl">
            Als 7-stelliger D2C-Founder stehst du vor denselben Herausforderungen wie jeder andere in deiner Position.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} className={`border-l-4 border-l-red-500 shadow-lg ${problem.color}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon and emoji */}
                    <div className="flex flex-col items-center">
                      <div className="mb-2 text-3xl">{problem.emoji}</div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="mb-4 text-xl font-bold text-gray-900">
                        {problem.title}
                      </h3>
                      <p className="mb-4 text-gray-600 leading-relaxed">
                        {problem.description}
                      </p>
                      <div className="rounded-lg bg-white p-4 border-l-4 border-l-red-200 shadow-sm">
                        <p className="text-sm font-medium text-red-800">
                          <strong>Warum das funktioniert:</strong> {problem.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            <strong>Das Gute?</strong> Du bist nicht allein – und es gibt eine Lösung, die funktioniert.
          </p>
        </div>
      </div>
    </section>
  )
}
