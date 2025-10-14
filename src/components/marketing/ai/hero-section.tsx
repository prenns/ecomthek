import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles, TrendingUp, Clock, BarChart3 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
              Für performance-orientierte D2C-Brands
            </Badge>
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Wachse profitabel – während{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              KI deine operative Arbeit übernimmt
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-12 text-xl leading-8 text-gray-600 sm:text-2xl">
            KI Systeme automatisieren dein Reporting, Inventory und Customer Service – 
            damit du wieder Zeit für Wachstum hast
          </p>

          {/* CTA Button */}
          <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700"
            >
              Jetzt Gespräch buchen
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Wachstum ohne Headcount
              </h3>
              <p className="text-gray-600">
                Skaliere auf die nächste Stufe, ohne dein Team zu verdoppeln.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                80% weniger operative Arbeit
              </h3>
              <p className="text-gray-600">
                Deine wichtigsten Prozesse laufen automatisch. Du gewinnst 15–20h pro Woche zurück.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Entscheidungen auf Datenbasis
              </h3>
              <p className="text-gray-600">
                Die richtigen Daten zur richtigen Zeit, täglich – in 5 Minuten statt 5 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}