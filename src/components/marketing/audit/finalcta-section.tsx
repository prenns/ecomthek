import { Badge } from '@/components/ui/badge';

import {  
  CheckIcon,
  RocketIcon,
  UsersIcon,
  ZapIcon,
  EuroIcon,
  HourglassIcon
} from 'lucide-react';
import AuditSignupForm from '../../features/signup-forms/audit-signup-form';

export default function FinalCtaSection() {
  return (
    <section className="bg-background w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Bereit für mehr Gewinn aus deinem Shop?
            </h2>

            <p className="text-muted-foreground mx-auto mb-8 max-w-lg text-xl lg:mx-0">
              Starte jetzt deinen kostenlosen Audit und finde heraus, wo dein Shop Geld verliert.
            </p>

            <div className="mb-10 grid gap-6">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0 rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                  <EuroIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold">Fokus auf Profit statt nur Umsatz</h3>
                  <p className="text-muted-foreground text-sm">
                    Ich zeige dir, wo Geld übrig bleibt – nicht nur, wie du mehr Umsatz machst.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0 rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                  <UsersIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold">
                    Praxis aus echter D2C-Brand
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Strategien, die ich selbst mit WUNDERklein umgesetzt habe.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0 rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                  <HourglassIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold">
                    Schnelle Analyse – konkrete Ergebnisse
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    In 48 Stunden weißt du, wo deine größten Umsatz-Leaks liegen und was du tun kannst.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <AuditSignupForm className="overflow-hidden border pb-0 shadow-lg dark:shadow-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
