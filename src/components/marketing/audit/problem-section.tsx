import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProblemSection() {
  const problems = [
    {
      title: "Du erhöhst dein Ad-Budget – aber der Umsatz steigt nicht.",
      description: "Mehr Werbeausgaben führen nicht zu mehr Verkäufen."
    },
    {
      title: "Deine Besucher klicken – aber sie kaufen nicht.",
      description: "Hohe Klickraten, aber niedrige Conversion-Raten."
    },
    {
      title: "Deine Kunden kaufen einmal – und verschwinden.",
      description: "Keine Wiederholungskäufe trotz guter Produkte."
    }
  ];

  return (
    <section className="bg-background w-full py-12 md:py-24" aria-labelledby="problem-heading">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        
        {/* H1 Headline */}
        <div className="mb-24 flex flex-col items-center justify-center space-y-4 text-center">
          <h1 id="problem-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Darum wächst dein Umsatz nicht
          </h1>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="group overflow-hidden p-0 transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="space-y-6 flex flex-col h-full">
                  <div className="bg-red-500/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <X className="h-10 w-10 text-red-500" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8"
                aria-label="Kostenlosen Audit starten"
                asChild
              >
                <a href="#hero-form">
                  Kostenlosen Audit starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Ergebnis in 48h · 100% kostenlos & unverbindlich
              </p>
            </div>
      </div>
    </section>
  );
}
