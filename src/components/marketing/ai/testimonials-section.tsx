import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Müller",
      role: "Founder, FashionBrand",
      revenue: "8-stellig",
      content: "Alex hat unsere komplette Reporting-Pipeline automatisiert. Statt 20 Stunden pro Woche sitze ich jetzt 5 Minuten vor dem Dashboard und habe alle wichtigen KPIs. Game changer!",
      results: "20h → 5 Min pro Woche",
      avatar: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Schmidt", 
      role: "CEO, TechGear",
      revenue: "7-stellig",
      content: "Die AI-Systeme für Inventory Management haben uns vor 6 Monaten vor einem kompletten Out-of-Stock gerettet. Seitdem läuft alles automatisch. Unglaublich, wie viel Zeit das spart.",
      results: "0 Out-of-Stocks seit 6 Monaten",
      avatar: "/images/testimonial-2.jpg"
    },
    {
      name: "Lisa Chen",
      role: "Founder, BeautyBox",
      revenue: "7-stellig", 
      content: "Customer Service läuft jetzt 24/7 automatisch. Die AI beantwortet 80% der Anfragen perfekt, und wir haben Zeit für strategische Themen. Endlich wieder Unternehmer sein!",
      results: "80% automatische Antworten",
      avatar: "/images/testimonial-3.jpg"
    },
    {
      name: "Tom Weber",
      role: "Founder, HomeDecor",
      revenue: "8-stellig",
      content: "Dank der automatisierten Kampagnen-Optimierung haben wir unseren ROAS um 40% gesteigert. Die AI findet Patterns, die wir nie gesehen hätten. Brilliant!",
      results: "40% ROAS Steigerung",
      avatar: "/images/testimonial-4.jpg"
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Social Proof
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Andere D2C-Founder sind bereits dabei
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sieh dir an, was andere 7- und 8-stellige Brands mit AI-Automation erreicht haben
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600" />
                </div>

                {/* Content */}
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Results highlight */}
                <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-l-green-500">
                  <p className="font-semibold text-green-800">
                    Ergebnis: {testimonial.results}
                  </p>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.revenue} Umsatz
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">D2C-Brands automatisiert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15h</div>
              <div className="text-gray-700">Durchschnittlich pro Woche gespart</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-700">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
