import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { HelpCircle } from 'lucide-react'

export function FAQSection() {
  const faqs = [
    {
      question: "Wie lange dauert es, bis die AI-Systeme einsatzbereit sind?",
      answer: "Die Integration und das Setup dauern in der Regel 1-2 Wochen. Das hängt von der Komplexität deines bestehenden Systems ab. Wir starten mit den wichtigsten Automatisierungen und erweitern dann schrittweise."
    },
    {
      question: "Brauche ich technische Kenntnisse, um die Systeme zu bedienen?",
      answer: "Nein, absolut nicht. Wir richten alles so ein, dass es intuitiv bedienbar ist. Du bekommst ein einfaches Dashboard, in dem alle wichtigen Informationen auf einen Blick sichtbar sind. Zusätzlich gibt es eine ausführliche Schulung für dich und dein Team."
    },
    {
      question: "Was passiert mit meinen Daten? Sind sie sicher?",
      answer: "Datensicherheit hat für uns höchste Priorität. Wir nutzen Enterprise-Grade Verschlüsselung und arbeiten nur mit GDPR-konformen Anbietern. Deine Daten bleiben in deiner Kontrolle und werden nicht an Dritte weitergegeben."
    },
    {
      question: "Kann ich die Systeme auch wieder deaktivieren?",
      answer: "Ja, natürlich. Du behältst die volle Kontrolle. Die Systeme sind modular aufgebaut - du kannst einzelne Automatisierungen jederzeit pausieren oder komplett deaktivieren. Wir sind keine Lock-in-Lösung."
    },
    {
      question: "Wie viel kostet die AI-Automation?",
      answer: "Die Kosten hängen von der Größe deines Business und dem gewünschten Automatisierungsgrad ab. In der Regel amortisieren sich die Investitionen bereits nach 2-3 Monaten durch die Zeitersparnis. Lass uns das gerne in einem kostenlosen Gespräch durchrechnen."
    },
    {
      question: "Funktioniert das auch mit meinen bestehenden Tools?",
      answer: "Ja, wir integrieren uns in deine bestehende Infrastruktur. Shopify, Google Ads, Meta, Klaviyo, Zapier - wir arbeiten mit den Tools, die du bereits nutzt. Keine komplette Neuausrichtung nötig."
    },
    {
      question: "Was ist, wenn die AI Fehler macht?",
      answer: "Die AI-Systeme lernen kontinuierlich dazu und werden mit der Zeit immer präziser. Wichtig: Wir setzen auf 'Human-in-the-Loop' - kritische Entscheidungen werden immer von dir oder deinem Team überprüft. Die AI unterstützt, ersetzt aber nicht deine Expertise."
    },
    {
      question: "Wie sieht der Support aus?",
      answer: "Du arbeitest direkt mit mir zusammen, nicht mit einem anonymen Support-Team. Ich bin persönlich für dein Projekt verantwortlich und stehe dir bei Fragen zur Verfügung. Zusätzlich gibt es eine Wissensdatenbank und Video-Tutorials."
    },
    {
      question: "Kann ich die Systeme selbst anpassen?",
      answer: "Ja, du hast vollen Zugriff auf die Konfiguration. Wir zeigen dir, wie du Einstellungen anpassen kannst. Für komplexere Anpassungen sind wir natürlich da. Das Ziel ist, dass du unabhängig wirst."
    },
    {
      question: "Gibt es eine Mindestlaufzeit?",
      answer: "Nein, es gibt keine Mindestlaufzeit. Du kannst jederzeit kündigen. Allerdings empfehlen wir eine Mindestlaufzeit von 3 Monaten, damit die AI-Systeme genug Zeit haben, sich zu optimieren und ihre volle Wirkung zu entfalten."
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <HelpCircle className="mr-2 h-4 w-4" />
            Häufige Fragen
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            FAQ
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Die wichtigsten Fragen zur AI-Automation - beantwortet von einem, der es selbst gemacht hat
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Noch Fragen?
            </h3>
            <p className="text-gray-600 mb-6">
              Ich beantworte gerne alle deine Fragen in einem kostenlosen Gespräch. 
              Lass uns besprechen, wie AI-Automation dein Business transformieren kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm text-gray-500">
                💬 Persönliches Gespräch mit Alex
              </div>
              <div className="text-sm text-gray-500">
                ⏱️ 30 Minuten, kostenlos
              </div>
              <div className="text-sm text-gray-500">
                🎯 Keine Verpflichtungen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}