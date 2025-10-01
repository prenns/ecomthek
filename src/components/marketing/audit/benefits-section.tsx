
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MessageSquare, TrendingUp, CheckCircle, EuroIcon, BriefcaseBusinessIcon } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'Planbares Wachstum',
      description: 'Dein Umsatz steigt, ohne dass dein ROAS zusammenbricht.',
      benefit: 'Stetiges Wachstum ohne Risiko'
    },
    {
      icon: <EuroIcon className="h-10 w-10 text-primary" />,
      title: 'Höhere Profitabilität',
      description: 'Du machst endlich Gewinn statt nur Umsatz.',
      benefit: 'Echte Gewinne statt nur Umsatz'
    },
    {
      icon: <BriefcaseBusinessIcon className="h-10 w-10 text-primary" />,
      title: 'Ein richtiges Business',
      description: 'Dein Shop läuft stabil, unabhängig und wächst nachhaltig.',
      benefit: 'Nachhaltiges, stabiles Business'
    }
  ];

  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Das Ergebnis: Mehr Gewinn aus deinem Shop
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group overflow-hidden p-0 transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="space-y-6 flex flex-col h-full">
                  <div className="bg-primary/5 flex h-16 w-16 items-center justify-center rounded-full">
                    {benefit.icon}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="border-t border-border pt-6 mt-auto">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground text-lg font-semibold">
                        {benefit.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8"
            asChild
          >
            <a href="#hero-form">
              Kostenlosen Audit buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
        
        {/* Trust Hooks */}
        <div className="mt-2 text-center">
          <p className="text-sm text-muted-foreground">
            Ergebnis in 48h · 100% kostenlos & unverbindlich
          </p>
        </div>
      </div>
    </section>
  );
}
