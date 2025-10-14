import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, HelpCircle } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";

const faqs = [
  {
    question: "Was genau bedeutet AI-Automation im E-Commerce-Kontext?",
    answer:
      "AI-Automation heißt, dass wiederkehrende Aufgaben und Entscheidungen nicht mehr manuell gemacht werden – sondern durch intelligente Systeme, die auf deinen Daten basieren. Beispiele: Reporting läuft automatisch, Kundenservice reagiert selbstständig auf Standardanfragen, oder Lagerwarnungen werden automatisch an dein Team gesendet. Du bekommst mehr Output – mit weniger operativem Aufwand.",
  },
  {
    question: "Muss ich technisch versiert sein, um die Systeme nutzen zu können?",
    answer:
      "Nein. Unsere Systeme laufen im Hintergrund und sind so aufgebaut, dass du sie einfach bedienen und verstehen kannst. Du bekommst eine klare Oberfläche, tägliche Reports und – wenn du willst – kurze Erklärungen zu jedem Prozess. Wir kümmern uns um Setup, Integration und Maintenance, damit du dich auf dein Business konzentrieren kannst.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Der Prozess ist einfach: 1. Du startest mit einem kostenlosen Erstgespräch, um Potenziale zu identifizieren. 2. Wir analysieren deinen aktuellen Setup (Shopify, Ads, CRM, etc.). 3. Du bekommst deinen individuellen Automation Blueprint mit konkreten Vorschlägen. 4. Danach setzen wir die Systeme um – schrittweise und transparent. Das Ziel: innerhalb weniger Wochen spürbare Entlastung in deinem Alltag.",
  },
  {
    question: "Welche Tools und Systeme werden integriert?",
    answer:
      "Wir arbeiten mit den Tools, die du bereits nutzt: Shopify, Meta Ads, Google Ads, Klaviyo, Slack, Gorgias, Notion, Google Sheets uvm. Unsere Automationen basieren auf Plattformen wie n8n, Supabase, OpenAI, Claude und Zapier – also Systeme, die sich nahtlos in deinen bestehenden Tech-Stack einfügen.",
  },
  {
    question: "Was kostet das Ganze?",
    answer:
      "Das hängt von deinem Setup und dem Umfang der Automationen ab. Der Einstieg ist immer ein kostenloser Audit-Call, in dem wir den konkreten Nutzen und das Potenzial berechnen. Danach bekommst du ein klares, transparentes Angebot – keine Stundensätze, keine Überraschungen. Ziel ist immer: Du sparst mehr Kosten und Zeit, als du investierst.",
  },
  {
    question: "Für wen ist das am besten geeignet?",
    answer:
      "Für performance orientierteD2C-Brands, die bereits funktionierende Strukturen haben – aber merken, dass ihr Wachstum zunehmend durch operative Belastung gebremst wird. Wenn du mehr Systeme als Mitarbeiter brauchst, bist du hier richtig.",
  },
];

export default function AccordionWithBackground() {
  return (
    <div className="max-w-[85rem] bg-muted/50 rounded-3xl container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="rounded-2xl">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-muted-foreground">
            Antworten auf die wichtigsten Fragen zu unseren Automations-Services
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Noch Fragen? Lass uns sprechen
          </h3>
          <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
            Buche jetzt deine kostenlose Potenzial-Analyse und erhalte Antworten auf alle deine individuellen Fragen.
          </p>
          <CTAButton className="items-center" />
        </div>
      </div>
    </div>
  );
}
