import BenefitsSection from "@/components/marketing/audit/benefits-section";
import FaqSection from "@/components/marketing/audit/faq-section";
import HomePageHero from "@/components/marketing/audit/homepage-hero";
import HowItWorksSection from "@/components/marketing/audit/howitworks-section";
import ProblemSection from "@/components/marketing/audit/problem-section";
import SolutionSection from "@/components/marketing/audit/solution-section";
import FeaturesSection from "@/components/marketing/audit/features-section";
import TestimonialsSection from "@/components/marketing/audit/testimonials-section";
import { ChevronDown } from "lucide-react";
import FinalCtaSection from "@/components/marketing/audit/finalcta-section";
import AuditHeader from "@/components/marketing/audit/audit-header";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umsatz-Leaks im Shop finden – Ergebnis in 48h | Ecomthek',
  description: 'Kostenlos starten. Klare Analyse und Roadmap für deinen Shop. Zusammenarbeit optional, kein Abo.',
  keywords: 'Shop Audit, E-Commerce Analyse, Umsatz Optimierung, Conversion Rate, Shopify Audit, Online Shop Beratung',
  openGraph: {
    title: 'Umsatz-Leaks im Shop finden – Ergebnis in 48h | Ecomthek',
    description: 'Kostenlos starten. Klare Analyse und Roadmap für deinen Shop. Zusammenarbeit optional, kein Abo.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Ecomthek',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umsatz-Leaks im Shop finden – Ergebnis in 48h | Ecomthek',
    description: 'Kostenlos starten. Klare Analyse und Roadmap für deinen Shop. Zusammenarbeit optional, kein Abo.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ecomthek.com',
  },
};

export default function Home() {
  return (
    <>
      <AuditHeader />

      <main className="container-page">

        <section id="hero-form" className="full-bleed">
          <HomePageHero />
        </section>

        <section id="problems">
          <ProblemSection />
        </section>

        {/* Arrow to Solution */}
        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        <section id="solution">
          <SolutionSection />
        </section>

        {/* Arrow to Benefits */}
        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        <section id="benefits">
          <BenefitsSection />
        </section>

        {/* Arrow to How it Works */}
        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        <section id="process">
          <HowItWorksSection />
        </section>

        {/* Arrow to Testimonials */}
        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        <TestimonialsSection />

        {/* Arrow to Features */}
        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        <section id="features">
          <FeaturesSection />
        </section>

        {/* Arrow to FAQ */}
        <div className="flex justify-center py-8">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>

        <section id="faq">
          <FaqSection />
        </section>

        <FinalCtaSection />


      </main>
    </>
  );
}
