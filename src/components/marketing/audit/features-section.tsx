import { ArrowRight, Check, X, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const comparisonData = [
  {
    feature: 'Wir setzen klare Ziele für 3 Monate und schreiben auf, was zuerst gemacht wird.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Jeder weiß, wer was bis wann erledigt.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Passt der Preis? Können wir Bundles machen? Wo holen wir mehr pro Bestellung raus?',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Produktseite, Warenkorb, Kasse, Vertrauen, Geschwindigkeit – Lecks schließen.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '✓'
  },
  {
    feature: 'Wir sammeln Hooks/Angles, testen Bilder/Videos und lernen daraus.',
    mitMir: '✓',
    performanceAgentur: '✓',
    shopAgentur: '✕'
  },
  {
    feature: 'Wie viel auf Meta/Google/TikTok? Was bringt neue Kunden am besten?',
    mitMir: '✓',
    performanceAgentur: '✓',
    shopAgentur: '✕'
  },
  {
    feature: 'Pixel/CAPI/UTMs richtig setzen, Zahlen prüfen, damit wir wissen, was wirkt.',
    mitMir: '✓',
    performanceAgentur: '✓',
    shopAgentur: '△'
  },
  {
    feature: 'Pflicht-Flows (Willkommen, Abbruch, Post-Purchase) + einfacher Kampagnen-Plan.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Winback, Bewertungen, Treueprogramm, passende Zusatz-Angebote.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Welche Apps brauchen wir wirklich? Doppelt? Teuer? Zusammenlegen und sparen.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Lieferzeit, Retouren, Versand-Logik – reibungslos und klar kommuniziert.',
    mitMir: '✓',
    performanceAgentur: '✕',
    shopAgentur: '△'
  },
  {
    feature: 'Ein Dashboard, kurze Wochen-Updates, ein Monats-Review mit Entscheidungen.',
    mitMir: '✓',
    performanceAgentur: '✓',
    shopAgentur: '△'
  },
  {
    feature: 'Kurze Anleitungen/Checklisten, damit es wiederholbar ist.',
    mitMir: '✓',
    performanceAgentur: '✕',
    shopAgentur: '✕'
  },
  {
    feature: 'Kurze Trainings und Loom-Videos, damit alle wissen, wie es geht.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Du, ich, dein Team oder Partner – wir wählen, was am meisten Sinn macht.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  },
  {
    feature: 'Du bekommst ehrliches Founder-Feedback ohne Agentur-Blabla.',
    mitMir: '✓',
    performanceAgentur: '△',
    shopAgentur: '△'
  }
];

const getIcon = (value: string) => {
  switch (value) {
    case '✓':
      return <Check className="h-4 w-4 text-green-600" />;
    case '△':
      return <Minus className="h-4 w-4 text-yellow-600" />;
    case '✕':
      return <X className="h-4 w-4 text-red-600" />;
    default:
      return null;
  }
};

export default function FeaturesSection() {
  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Was du in der Zusammenarbeit mit mir bekommst
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Nach dem Audit setzen wir gemeinsam um: klare Roadmap, Prioritäten, Sprints – mit Fokus auf Umsatz & Profit.
          </p>
        </div>

        {/* Legende */}
        <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span> enthalten</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="h-4 w-4 text-yellow-600" />
            <span> teilweise/optional</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-red-600" />
            <span> nicht Fokus</span>
          </div>
        </div>

        {/* Vergleichstabelle */}
        <div className="mb-12 overflow-hidden rounded-xl border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[400px]">Vergleichspunkt</TableHead>
                <TableHead className="text-center">Mit mir</TableHead>
                <TableHead className="text-center">Performance-Agentur</TableHead>
                <TableHead className="text-center">Shop-Agentur</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-sm">
                    {row.feature}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      {getIcon(row.mitMir)}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      {getIcon(row.performanceAgentur)}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      {getIcon(row.shopAgentur)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>



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
          
          {/* Trust Hooks */}
          <div className="mt-2 text-center">
            <p className="text-sm text-muted-foreground">
              Ergebnis in 48h · 100% kostenlos & unverbindlich
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
