import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Wie läuft das ab und wie schnell bekomme ich Ergebnisse?",
    answer:
      "Ich starte mit einem kostenlosen Audit: Shop & Zahlen check, klare Findings. Danach bekommst du eine Roadmap (90 Tage, priorisiert) und wir besprechen sie im 1:1-Call. Wenn’s passt, setzen wir gemeinsam um. Ergebnis-Zusammenfassung hast du i. d. R. innerhalb von 48 Stunden.",
  },
  {
    question: "Was bekomme ich konkret – und was ist nicht drin?",
    answer:
      "Du bekommst: Analyse, klare Roadmap mit Prioritäten, Verantwortlichkeiten, KPIs, plus Sparring bei Offer, Shop-CRO, Traffic, E-Mail/CRM, Stack & Ops. Nicht drin: Full-Service-Agenturarbeit „alles für dich erledigen“ ohne dein Team/Partner. Umsetzung machen wir gemeinsam, gezielt und messbar.",
  },
  {
    question: "Was kostet die Zusammenarbeit? Gibt’s Mindestlaufzeiten?",
    answer:
      "Kein Abo-Zwang. Nach dem Audit gibt es ein klares 90-Tage-Paket mit definierten Zielen, Deliverables und Preis – vorab transparent. Nach den 90 Tagen entscheiden wir gemeinsam, ob und wie wir weitermachen.",
  },
  {
    question: "Passt das für meinen Shop – oder bin ich (noch) zu klein/zu groß?",
    answer:
      "Ideal: 6- bis 7-stellig im Jahresumsatz, ambitioniert profitabel zu wachsen. Wenn du Werbekosten spürst, aber Umsatz/Profit hängen, bist du richtig. Nicht ideal: ganz frisch ohne Produkt-Market-Fit. Im Zweifel: kurz auditieren, dann entscheiden.",
  },
  {
    question: "Wer setzt das um – du, wir oder Partner?",
    answer:
      "Flexibel: Ich liefere Roadmap, Prioritäten, Reviews und laufe mit – dein Team oder Partner setzt um. Wo nötig, bringe ich Experten dazu (z. B. Dev/Creatives). Ziel: Tempo + Ownership bei dir, keine Abhängigkeit.",
  },
  {
    question: "Welche Daten/Zugriffe brauchst du? Ist das sicher?",
    answer:
      "Für den Audit benötige ich keine sensiblen Kundendaten. Ich arbeite ausschließlich mit Leserechten und aggregierten, anonymisierten Kennzahlen. Eine NDA unterschreibe ich bei Bedarf.",
  },
];

export default function FaqSection() {
  return (
    <div className="max-w-[85rem] bg-muted/50 container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="rounded-2xl">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Noch Fragen? Hier sind die Antworten.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ich zeige dir, was du bekommst, wie wir vorgehen und warum es für dich risikofrei ist.
          </p>
        </div>
        {/* End Title */}

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={faq.question}
                className="border rounded-lg px-6 bg-background shadow-sm"
              >
                <AccordionTrigger className="py-4 text-lg font-medium">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary hidden sm:block" />
                    <span className="text-start mr-3">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
