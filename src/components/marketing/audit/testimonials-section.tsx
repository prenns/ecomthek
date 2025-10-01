import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, MessageSquare, Shield, Clock, EuroIcon, UsersIcon, TargetIcon, BriefcaseBusinessIcon, ZapIcon } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Warum du mir vertrauen kannst
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Credibility */}
          <div className="space-y-8">
            <Card className="rounded-xl border border-neutral-100 p-8 shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 rounded-full p-3">
                    <BriefcaseBusinessIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ich bin Gründer, kein Berater von außen.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ich habe WUNDERklein vor 7 Jahren gestartet. Heute machen wir siebenstellige Jahresumsätze – mit all den Problemen, die du oben siehst. Ich kenne die Praxis, weil ich sie selbst durchlebt und gelöst habe.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-neutral-100 p-8 shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 rounded-full p-3">
                    <TargetIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ich kenne beide Seiten.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Als Founder und als Auftraggeber von Agenturen weiß ich, wo es hakt – im Shop, in den Angeboten, in den Kampagnen und in den Prozessen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - What you get */}
          <div className="space-y-8">
            <Card className="rounded-xl border border-neutral-100 p-8 shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ZapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Was du von mir bekommst.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Klare Analyse, eine umsetzbare Roadmap für deinen Shop und ehrliches Sparring. Keine Spielchen, keine langen Erklärungen – wir arbeiten an den Punkten, die Umsatz und Gewinn bewegen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-neutral-100 p-8 shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 rounded-full p-3">
                    <UsersIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Umsetzung, wie sie zu dir passt.</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Du, dein Team oder Partner setzen um – ich steuere, priorisiere und gebe dir das Feedback, das dir Zeit und Geld spart.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pilot Info */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Zum Start: begrenzte Pilotplätze.</h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ich nehme zum Launch wenige Projekte an. Wenn die Roadmap für dich nicht klar ist, bekommst du dein Geld zurück.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8"
            asChild
          >
            <a href="#hero-form">
              Kostenlosen Audit starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Klarheit in 48h. Danach entscheidest du, ob wir zusammenarbeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
