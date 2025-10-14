'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Check,
  LucideIcon,
  Settings,
  TrendingUp,
  Sparkles,
  Headphones,
  CalendarCheck2,
  Mail,
  Boxes
} from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  image: string;
  imageAlt: string;
  status: 'Performance Marketing' | 'Retention' | 'Einkauf' | 'Strategie' | 'Kundenservice' | null;
  statusColor?: string;
}

const features: Feature[] = [
  {
    id: 'analytics',
    title: 'Performance Analyst',
    description:
      'Der Agent, der deine wichtigsten Kennzahlen täglich analysiert – automatisch und zuverlässig. Er liefert dir täglich die Zahlen, die wirklich zählen, erkennt Abweichungen und gibt klare Handlungsempfehlungen.',
    icon: TrendingUp,
    benefits: [
      'Automatische Tages-, Wochen- & Monatsreports (Umsatz, MER, ROAS, AOV, CAC)',
      'Erkennt Trends, Anomalien und Performance-Leaks in Echtzeit',
      'Sendet Alerts bei Budgetüberschreitung oder Zielabweichungen',
      'Kombiniert Daten aus Shopify, Meta Ads, Google Ads und Klaviyo',
      'Liefert klare Empfehlungen – kein Datenchaos, sondern Fokus',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Analytics dashboard with charts and graphs',
    status: 'Performance Marketing',
    statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white',
  },
  {
    id: 'api',
    title: 'Creative Strategist',
    description: 'Der Agent, der aus deinen Daten echte Marketing-Insights macht – und neue Creative-Ansätze liefert. Er analysiert deine Werbeanzeigen, Creatives und Hook-Strukturen und zeigt, welche Ideen wirklich verkaufen.',
    icon: Sparkles,
    benefits: [
      'Analysiert Ad-Performance auf Hook-, Format- und Zielgruppenebene',
      'Erkennt Muster: Welche Emotionen, Stile oder Formate funktionieren',
      'Erstellt neue Ad-Copy- und Hook-Vorschläge basierend auf Daten',
      'Erkennt Creative Fatigue frühzeitig',
      'Optional: Generiert kreative Briefings für dein Content-Team',
    ],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Developer writing code on multiple screens',
    status: 'Performance Marketing',
    statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white',
  },
  {
    id: 'security',
    title: 'Customer Service Agent',
    description:
      'Dein KI-gestützter First-Level-Support – 24/7, markenkonform und lernfähig. Er beantwortet häufige Kundenanfragen automatisch, im Ton deiner Marke, und übergibt komplexe Fälle an dein Team.',
    icon: Headphones,
    benefits: [
      'Zugriff auf Produktdaten, Policies und frühere Chats',
      'Automatische Antworten zu Versand, Produkten, Retouren etc.',
      'Lernfähig durch tägliche Konversationen',
      'Spart bis zu 70 % Supportzeit',
      'Integrierbar in deine Helpdesk Software',
    ],
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Security interface showing protection features',
    status: 'Kundenservice',
    statusColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-white',
  },
  {
    id: 'automation',
    title: 'Executive Assistant',
    description:
      'Dein persönlicher Founder-Assistent – fasst alles zusammen, was du wissen musst. Er scannt täglich deine wichtigsten Systeme und liefert dir ein präzises Briefing: Umsatz, Trends, Risiken, Chancen – in 2 Minuten gelesen.',
    icon: CalendarCheck2,
    benefits: [
      'Tägliches Slack-Briefing: Sales, MER, Top-Performer, Probleme',
      'Automatische Wochenreports & Entscheidungsempfehlungen',
      'Erkennt Prioritäten: „Das musst du heute wissen"',
      'Aggregiert Daten aus allen Agents & Tools',
      'Perfekt für Gründer, die Überblick statt Overload wollen',
    ],
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Automation workflow diagram',
    status: 'Strategie',
    statusColor: 'bg-orange-100 text-orange-800 dark:bg-orange-600 dark:text-white',
  },
  {
    id: 'collaboration',
    title: 'E-Mail Marketing Director',
    description:
      'Erkennt, welche Kampagnen und Flows Umsatz bringen – und wo Potenzial liegt. Er analysiert dein CRM, automatisiert deine Klaviyo-Flows und optimiert deine E-Mail-Performance mit echten Handlungsempfehlungen.',
    icon: Mail,
    benefits: [
      'Identifiziert Top-performing Segmente & Flows',
      'Automatisiert Trigger-Mails basierend auf Verhalten & Kaufdaten',
      'Optimiert Copy und Betreffzeilen mit AI',
      'Analysiert Öffnungs-, Klick- und Conversion-Rates im Kontext',
      'Gibt Vorschläge für neue Kampagnen und Automationen',
    ],
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Team collaborating around a table with laptops',
    status: 'Retention',
    statusColor: 'bg-green-100 text-green-800 dark:bg-green-600 dark:text-white',
  },
  {
    id: 'ai',
    title: 'Inventory Manager',
    description:
      'Behalte Lagerbestände, Nachbestellungen und Margen automatisch im Griff. Er erkennt frühzeitig, wann Produkte ausverkauft sind, welche SKUs nachbestellt werden müssen – und wie sich das auf deinen Cashflow auswirkt.',
    icon: Boxes,
    benefits: [
      'Echtzeit-Monitoring von Lagerbeständen & Abverkauf',
      'Forecasts für Nachbestellungen & Lieferzeiten',
      'Alerts bei Out-of-Stock oder Margenproblemen',
      'Automatische Reports für Einkauf & Fulfillment',
      'Integration mit deinen Einkaufstools',
    ],
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'AI visualization showing machine learning capabilities',
    status: 'Einkauf',
    statusColor: 'bg-purple-100 text-purple-800 dark:bg-purple-600 dark:text-white',
  },
 
  {
    id: 'customization',
    title: 'Custom Workflows',
    description:
      'Automatisiere deine individuellen Prozesse – 100 % auf deine Brand zugeschnitten. Nicht jede Brand funktioniert gleich. Deshalb bauen wir individuelle Automationen, die perfekt zu deinem Setup passen.',
    icon: Settings,
    benefits: [
      'Maßgeschneiderte n8n- oder Zapier-Flows für deine Abläufe',
      'Kombination mehrerer Tools (Shopify, Ads, Slack, ERP, Klaviyo)',
      'Logik- und Bedingungssteuerung: „Wenn X passiert, dann tue Y"',
      'Visualisierte Workflows zur Kontrolle & Wartung',
      'Kein Standard-System – echte Individualisierung',
    ],
    image:
      'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Customization interface with design options',
    status: null,
  },
];

export default function FeatureAccordion() {
  const [expandedFeature, setExpandedFeature] = useState<string>('analytics');
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  const activeFeature =
    features.find((f) => f.id === expandedFeature) || features[0];

  return (
    <section className="container mx-auto px-4 py-24 md:px-6 2xl:max-w-[1400px]">
    
      <div className="mb-16 space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Diese AI-Agents übernehmen deine wichtigsten Prozesse – vollautomatisch.
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Von Performance-Analyse über Customer Service bis Inventory Management:
        Unsere Systeme arbeiten im Hintergrund, damit du dich auf Wachstum konzentrieren kannst.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <Accordion
            type="single"
            value={expandedFeature}
            onValueChange={setExpandedFeature}
            collapsible
            className="w-full"
          >
            {features.map((feature) => (
              <AccordionItem
                key={feature.id}
                value={feature.id}
                className={cn(
                  'mb-3 rounded-lg border px-2',
                  expandedFeature === feature.id
                    ? 'border-primary shadow-sm'
                    : 'border-border'
                )}
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div
                      className={cn(
                        'flex-shrink-0 rounded-md p-2',
                        expandedFeature === feature.id
                          ? 'bg-primary/10'
                          : 'bg-muted'
                      )}
                    >
                      <feature.icon
                        className={cn(
                          'h-5 w-5',
                          expandedFeature === feature.id
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        )}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{feature.title}</h3>
                        {feature.status && (
                          <span
                            className={cn(
                              'rounded-full px-2 py-0.5 text-xs',
                              feature.statusColor || 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white'
                            )}
                          >
                            {feature.status}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground line-clamp-1 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pr-4 pb-4 pl-12">
                  <p className="text-muted-foreground mb-3">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm"
                        onMouseEnter={() => setHoveredBenefit(benefit)}
                        onMouseLeave={() => setHoveredBenefit(null)}
                      >
                        <div
                          className={cn(
                            'mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full',
                            hoveredBenefit === benefit
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-primary/10 text-primary'
                          )}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          
        </div>

        <div className="relative lg:col-span-3">
          <div className="sticky top-24">
            <div className="from-muted/50 to-muted rounded-2xl bg-gradient-to-br p-6 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-background rounded-full p-2">
                    <activeFeature.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {activeFeature.title}
                  </h3>
                </div>
                  {activeFeature.status && (
                    <span
                     className={cn(
                       'rounded-full px-2 py-0.5 text-xs',
                       activeFeature.statusColor || 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white'
                     )}
                  >
                    {activeFeature.status}
                  </span>
                  )}
              </div>



              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {activeFeature.description}
                </p>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {activeFeature.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <div className="bg-primary/10 text-primary mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 mt-24 rounded-xl p-8 lg:p-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Bereit, alle Automatisierungs-Features zu nutzen?
            </h3>
            <p className="text-muted-foreground">
              Starte mit deiner kostenlosen Potenzial-Analyse – unverbindlich.
            </p>
          </div>
          <CTAButton className="md:items-end" trustTextClassName="md:text-right" />
        </div>
      </div>
    </section>
  );
}
