import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { MotionPreset } from '@/components/ui/motion-preset';
import { CTAButton } from '@/components/ui/cta-button';
export default function HeroSectionCustomerStoryShowcase() {
  return (
    <>
      {/* Hero */}
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        {/* Announcement */}
       
        {/* Title */}
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Von der Theorie zur Realität: Wie KI unser Business revolutioniert hat
          </h2>

          <MotionPreset
              component='p'
              className='text-muted-foreground mb-12 mx-auto max-w-4xl text-xl sm:mb-16 lg:mb-24'
              fade
              blur
              slide={{ direction: 'up', offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.6}
            >
             Echte Ergebnisse aus der Praxis – nicht nur Theorie. Sieh selbst, wie KI-Automatisierung ein 7-stelliges D2C-Business transformiert hat.
            </MotionPreset>
        </div>

        {/* Customer Story Card */}
        <div className="bg-card mx-auto max-w-4xl rounded-xl border shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Image/Photo */}
            <div className="relative h-64 md:h-auto">
              <img
                src="/images/tina-prennsberger-testimonial.png"
                alt="Tina Prennsberger"
                className="h-full w-full object-cover md:rounded-l-xl"
              />
              <div className="bg-background/80 absolute right-4 bottom-4 left-4 rounded-lg p-4 md:hidden">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                       src="/images/tina-profile.png"
                    alt="Tina Prennsberger"
                    />
                    <AvatarFallback>TP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Tina Prennsberger</p>
                    <p className="text-muted-foreground text-sm">
                      CEO, WUNDERklein GmbH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-8">
              {/* Company Logo */}
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/wk_white.png"
                  alt="WUNDERklein Logo"
                  className="h-12 w-auto opacity-90 dark:opacity-100"
                />
              </div>

              <QuoteIcon className="text-primary mb-4 h-8 w-8" />

              <blockquote className="mb-6 text-xl leading-relaxed font-medium">
                "Ich war skeptisch, ob KI wirklich funktioniert. Aber die Ergebnisse sprechen für sich: 80% weniger manuelle Reports, 15 Stunden pro Woche gewonnen und unsere Team-Produktivität um 300% gesteigert. Wir haben endlich wieder Zeit für strategisches Wachstum statt operatives Chaos."
              </blockquote>

              {/* Metrics */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-primary text-2xl font-bold">300%</p>
                  <p className="text-muted-foreground text-sm">
                  Team-Produktivität
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-primary text-2xl font-bold">80%</p>
                  <p className="text-muted-foreground text-sm">
                  Weniger manuelle Arbeit
                  </p>
                </div>
                <div className="text-center">
                  <div className="mb-1 flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Bewertung
                  </p>
                </div>
              </div>

              {/* Attribution */}
              <div className="mb-8 flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="/images/tina-profile.png"
                    alt="Tina Prennsberger"
                  />
                  <AvatarFallback>TP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Tina Prennsberger</p>
                  <p className="text-muted-foreground text-sm">
                    CEO, WUNDERklein GmbH
                  </p>
                </div>
              </div>

        
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Bist du bereit, mit KI dein Business zu transformieren?
          </p>
          <CTAButton className="items-center" />
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
