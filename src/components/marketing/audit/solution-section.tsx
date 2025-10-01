import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        <div className="mb-24 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            So kann ich dir helfen
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16">

          {/* Left Side - Content */}
          <div className="col-span-12 md:col-span-6 max-w-[560px]">

            <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">
              Ich kenne die Probleme – ich habe sie selbst durchlebt.
            </h3>

            <p className="text-neutral-600 mb-6 max-w-[52ch]">
              Ich habe WUNDERklein vor sieben Jahren gegründet. Heute machen wir siebenstellige Jahresumsätze. Auf dem Weg dorthin hatte ich genau die Themen von oben: mehr Ad-Budget ohne mehr Umsatz, Klicks ohne Käufe, einmalige Kunden.


            </p>
            <p className="text-neutral-600 mb-6 max-w-[52ch]">


              Ich kenne diese Bremsen – und ich weiß, wie man sie löst. Die Prinzipien dahinter sind immer gleich und lassen sich auf jede E-Commerce-Brand anwenden. Wenn dich das trifft, schauen wir uns deinen Shop an und ich zeige dir, welche Hebel bei dir den Unterschied machen.
            </p>

            {/* Cred-Bar als kompakte Badges */}
            <div className="flex flex-col gap-3 mb-8 md:flex-row md:flex-wrap md:gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span><span className="font-semibold">WUNDERklein:</span> 7-stelliger Jahresumsatz</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span><span className="font-semibold">Erfahrung:</span> 7+ Jahre im E-Commerce</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span><span className="font-semibold">Hands-on:</span> dieselben Probleme gelöst</span>
              </div>
            </div>

            {/* Mini-Proof-Text */}
            <p className="text-neutral-600 mb-6">
              Ich kann dir helfen, exakt diese Hebel zu finden.
            </p>

                {/* CTA-Gruppe */}
                <div>
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
                  <p className="text-sm text-neutral-500 mt-2">
                    Ergebnis in 48h · 100% kostenlos & unverbindlich
                  </p>
                </div>
          </div>

          {/* Right Side - Bild von dir */}
          <div className="col-span-12 md:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-primary/20">
              <img
                src="/images/alex-prennsberger-atelier.jpeg"
                alt="Alex Prennsberger - E-Commerce Expert"
                className="object-cover w-full h-full object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">+7 Mio. €</div>
                      <p className="text-sm text-muted-foreground">Umsatz</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">7+</div>
                      <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
