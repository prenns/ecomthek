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

export default function HeroFormEarlyAccess() {


  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-white dark:from-primary/20 dark:to-slate-900">
        {/* Background elements */}
        <div className="bg-grid-slate-200 dark:bg-grid-slate-800/20 absolute inset-0 bg-[size:24px_24px] opacity-10"></div>
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary via-primary to-primary"></div>
        <div className="absolute -top-80 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-20 blur-3xl dark:bg-primary/30"></div>
        <div className="absolute -bottom-80 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-20 blur-3xl dark:bg-primary/30"></div>

        <div className="relative z-10 container mx-auto px-4 pt-8 pb-16 md:px-6 lg:py-24 2xl:max-w-[1400px]">
          <div className="mx-auto grid max-6xl items-center gap-12 lg:grid-cols-2">
            {/* Badge - Mobile: over form, Desktop: over text */}
            <div className="order-1 lg:order-1 lg:hidden mb-[-40px] flex justify-center">
              <Badge
                variant="outline"
                className="mb-3 border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-primary"
              >
                <RocketIcon className="mr-1 h-3.5 w-3.5" />
                Für E-Com Founder, die mehr Gewinn wollen
              </Badge>
            </div>

            {/* Left column - Content */}
            <div className="text-center lg:text-left order-3 lg:order-1">
              <Badge
                variant="outline"
                className="mb-6 border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-primary hidden lg:inline-flex"
              >
                <RocketIcon className="mr-1 h-3.5 w-3.5" />
                Für performance-orientierte D2C-Brands
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight leading-tight lg:text-6xl lg:leading-tight">
              Wachse profitabel – während <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">KI deine operative Arbeit übernimmt.</span>
              </h1>

              <p className="text-muted-foreground mx-auto mb-8 max-w-lg text-xl lg:mx-0">
              KI Systeme automatisieren dein Reporting, Inventory und Customer Service – damit du wieder Zeit für Wachstum hast
              </p>

              <div className="mb-10 grid gap-8">
               

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <UsersIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold">
                      Wachstum ohne Headcount
                    </h3>
                    <p className="text-muted-foreground text-sm">
                    Skaliere auf die nächste Stufe, ohne dein Team zu verdoppeln.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <EuroIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold">80% weniger operative Arbeit</h3>
                    <p className="text-muted-foreground text-sm">
                    Deine wichtisten Prozesse laufen automatisch. Du gewinnst 15–20h pro Woche zurück.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                    <HourglassIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold">
                    Entscheidungen auf Datenbasis
                    </h3>
                    <p className="text-muted-foreground text-sm">
                    Die richtigen Daten zur richtigen Zeit, täglich – in 5 Minuten statt 5 Stunden.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="hidden lg:block">
                <div className="mb-6 flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=80',
                      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&auto=format&fit=crop&q=80',
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white dark:border-slate-900"
                      >
                        <img
                          src={src}
                          alt={`User ${index + 1}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-medium dark:border-slate-900 dark:bg-slate-800">
                      +2k
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Join over{' '}
                    <span className="text-foreground font-medium">2,000</span>{' '}
                    people already on the waitlist
                  </p>
                </div>
              </div> */}
            </div>

            {/* Right column - Form */}
            <div className="order-2 lg:order-2">
              <AuditSignupForm className="overflow-hidden border pb-0 shadow-lg dark:shadow-primary/10" />

            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
