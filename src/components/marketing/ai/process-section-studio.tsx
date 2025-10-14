import { Card, CardContent } from "@/components/ui/card";
import { MotionPreset } from '@/components/ui/motion-preset';
import { CTAButton } from '@/components/ui/cta-button';
const processSteps = [
  {
    number: "01",
    title: "Analyse",
    description:
      "Wir analysieren deine aktuellen Prozesse und identifizieren die größten Automatisierungspotentiale in deinem Business – kostenlos und unverbindlich.",
  },
  {
    number: "02",
    title: "Umsetzung",
    description:
      "Wir integrieren die KI-Systeme in deine bestehende Infrastruktur und richten alles maßgeschneidert für dein Business ein.",
  },
  {
    number: "03",
    title: "Betreuung",
    description:
      "Die Systeme gehen live und wir optimieren kontinuierlich basierend auf deinen Ergebnissen – laufende Unterstützung und Weiterentwicklung.",
  },
];

export default function AboutSectionProcess() {
  return (
    <section className="container mx-auto space-y-8 px-4 py-24 md:px-6 2xl:max-w-[1400px]">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">So funktioniert's</h2>

        <MotionPreset
              component='p'
              className='text-muted-foreground mb-12 mx-auto max-w-4xl text-xl sm:mb-16 lg:mb-24'
              fade
              blur
              slide={{ direction: 'up', offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.6}
            >
               Von der ersten Analyse bis zur vollständigen Automatisierung in 3 einfachen Schritten – ohne komplizierte Technik oder lange Wartezeiten.
            </MotionPreset>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <Card
            key={step.number}
            className="bg-accent/50 relative overflow-hidden border-none p-0"
          >
            <div className="text-primary/10 absolute -top-4 -right-4 text-8xl font-bold">
              {step.number}
            </div>
            <CardContent className="relative z-10 space-y-3 p-6">
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-6 text-lg">
          Bereit für den ersten Schritt?
        </p>
        <CTAButton className="items-center" />
      </div>
    </section>
  );
}
