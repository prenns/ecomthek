import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "Buche den kostenlosen Audit",
    description:
      "Trage dich ein und ich nehme deine aktuelle Website & Zahlen unter die Lupe. Du bekommst eine fundierte Analyse aller Optimierungspotenziale.",
  },
  {
    number: "02",
    title: "Ich entwickle dein individuelles Konzept",
    description:
      "Auf Basis der Analyse erstelle ich eine klare Roadmap mit den größten Hebeln – speziell zugeschnitten auf deinen Shop.",
  },
  {
    number: "03",
    title: "Persönlicher Call & nächste Schritte",
    description:
      "Wir gehen gemeinsam deine Ergebnisse durch und besprechen, wie du sie am besten umsetzt. Dabei entscheiden wir zusammen: Setzt du es selbst um – oder arbeiten wir direkt miteinander weiter.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">So läuft es ab</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          In nur 3 einfachen Schritten zu mehr Umsatz und weniger Werbekosten
        </p>
      </div>

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
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

        <div className="pt-12 text-center">
          <p className="text-muted-foreground mx-auto max-w-2xl">
          Ich liefere dir unabhängig vom weiteren Schritt eine Roadmap speziell für deinen Shop. Ob wir danach zusammenarbeiten oder du selbst umsetzt, entscheidest du – risikofrei für dich.
          </p>
        </div>
      </div>
    </section>
  );
}
