import { ChevronRight, Check, Target } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import WorkflowAutomation from '@/components/shadcn-studio/blocks/bento-grid-07/worflow-automation-hero';
import SmartData from '@/components/shadcn-studio/blocks/bento-grid-07/smart-data-hero';
export default function SplitContentHero() {
  return (
    <div className="bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 2xl:max-w-[1400px]">
        <div className="grid items-center gap-8 md:grid-cols-12">
          {/* Left content */}
          <div className="flex flex-col space-y-4 md:col-span-7">
            <div className="focus:ring-ring bg-transparent text-primary hover:bg-primary/10 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
              <Target className="h-3.5 w-3.5" />
              <span>Für performance-orientierte D2C-Brands</span>
            </div>
            <h1 className="relative text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
               Profitables Wachstum
              </span>
              <span className="text-foreground"> ohne operativen Overhead.</span>
              {/* AI Beam Effect */}
              <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-blue-300/20 via-purple-400/20 to-purple-500/20 blur-3xl opacity-60"></div>
              <div className="absolute -inset-8 -z-20 bg-gradient-to-r from-blue-300/10 via-purple-400/10 to-purple-500/10 blur-2xl opacity-40"></div>
            </h1>
            <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Wir bauen KI Agenten, die deine E-Commerce Operations automatisieren. Weniger Personalkosten, mehr Zeit für Wachstum.
            </p>
            <CTAButton className="items-start" trustTextClassName="text-left" />

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">Wachstum ohne Headcount</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">80% weniger operative Arbeit</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">Entscheidungen auf Datenbasis</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">Agenten, die 24/7 für dich arbeiten</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex items-center justify-center lg:justify-end md:col-span-5">
          <SmartData />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="via-foreground/10 absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent"></div>
    </div>
  );
}
