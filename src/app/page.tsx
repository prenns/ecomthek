import { Metadata } from 'next'
import HeroSectionStudio  from '@/components/marketing/ai/hero-section-studio'
import TestimonialsSectionStudio from '@/components/marketing/ai/testimonials-section-studio'
import ProcessSectionStudio from '@/components/marketing/ai/process-section-studio'
import BentoGrid from '@/components/shadcn-studio/blocks/bento-grid-07/bento-grid-07'
import AboutUsPage from '@/components/shadcn-studio/blocks/about-us-page-07/about-us-page-07'
import LogoCloud from '@/components/shadcn-studio/blocks/logo-cloud-07/logo-cloud-07'
import Features from '@/components/shadcn-studio/blocks/features-section-06/features-section-06'
import SocialProof from '@/components/shadcn-studio/blocks/social-proof-03/social-proof-03'
import CTA from '@/components/shadcn-studio/blocks/cta-section-04/cta-section-04'
import { CheckCircleIcon, CreditCardIcon, WalletIcon, ZapIcon, SearchIcon, TrendingDownIcon, TrendingUpIcon, RocketIcon, TargetIcon, ClockIcon } from 'lucide-react'
import FeaturesDetail from '@/components/shadcn-studio/blocks/features-section-09/features-section-09'
import FAQ from '@/components/shadcn-studio/blocks/faq-component-01/faq-component-01'
import NavbarPage from '@/components/shadcn-studio/blocks/navbar-component-02/navbar-component-02'
import ProblemSection from '@/components/shadcn-studio/blocks/about-us-page-05/about-us-page-05'
import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-05/app-integration-05'

export const metadata: Metadata = {
  title: 'Automatisiere dein E-Commerce-Business mit KI-Agenten | Ecomthek',
  description: 'Wir bauen KI Agenten, die deine E-Commerce Operations automatisieren. Weniger Personalkosten, mehr Zeit für Wachstum.',
  openGraph: {
    title: 'Automatisiere dein E-Commerce-Business mit KI-Agenten | Ecomthek',
    description: 'Wir bauen KI Agenten, die deine E-Commerce Operations automatisieren. Weniger Personalkosten, mehr Zeit für Wachstum.',
    type: 'website',
  },
}


const navigationData = [
  {
    title: 'Vorteile',
    href: '/#features'
  },
  {
    title: 'Über Uns',
    href: '/#about'
  },
  {
    title: 'Prozess',
    href: '/#process'
  },
  {
    title: 'Leistungen',
    href: '/#services'
  },
  {
    title: 'FAQ',
    href: '/#faq'
  }
]


const integrationApps = [
  {
    name: 'OpenAI',
    image: '/images/openai.png'
  },
  {
    name: 'Claude',
    image: '/images/claude.png'
  },
  {
    name: 'n8n',
    image: '/images/neightn.png'
  },
  {
    name: 'Supabase',
    image: '/images/supabase-logo-icon.png'
  },
  {
    name: 'Zapier',
    image: '/images/zapier-icon.svg'
  },
  {
    name: 'Cursor',
    image: '/images/cursor.png'
  }
]

const features = [
  {
    icon: ZapIcon,
    title: 'Ertrinken im operativen Chaos',
    description: '10+ offene Tabs, 5 verschiedene Tools – und trotzdem keine klare Antwort. Du springst zwischen Shopify, Meta, Analytics hin und her. Am Ende des Tages: erschöpft, aber strategisch keinen Schritt weiter.',
    imageUrl: '/images/problem1.png',
    imageAlt: 'Operatives Chaos'
  },
  {
    icon: SearchIcon,
    title: 'Excel-Marathons statt Insights',
    description:
      'Shopify, Meta, Google, Klaviyo – die Daten sind überall. Aber wenn du entscheiden musst, sitzt du 2 Stunden vor Excel und vertraust am Ende doch deinem Bauchgefühl.',
    imageUrl: '/images/problem2.png',
    imageAlt: 'Daten-Overload'
  },
  {
    icon: TrendingDownIcon,
    title: 'Skalierung frisst deine Marge',
    description: 'Jede neue Umsatzstufe bedeutet einen neuen Hire: Ops Manager, Creative Strategist, E-Mail Marketing Director. Dein Umsatz wächst, deine Personalkosten steigen und deine Marge schrumpft.',
    imageUrl: '/images/problem3.png',
    imageAlt: 'Hohe Personalkosten'
  }
]

const benefits = [
  {
    icon: RocketIcon,
    title: 'Wachstum ohne Headcount',
    description: 'Skaliere auf die nächste Stufe, ohne dein Team zu verdoppeln. KI-Agenten übernehmen repetitive Tasks, die normalerweise neue Mitarbeiter erfordern würden.',
    imageUrl: '/images/benefit1.png',
    imageAlt: 'Team growth without hiring illustration'
  },
  {
    icon: TargetIcon,
    title: 'Entscheidungen auf Datenbasis',
    description: 'Die richtigen Daten zur richtigen Zeit, täglich – in 5 Minuten statt 5 Stunden. Automatisierte Reports und Echtzeit-Alerts sorgen für faktenbasierte Entscheidungen.',
    imageUrl: '/images/dashboard.png',
    imageAlt: 'Data-driven decisions illustration'
  },
  {
    icon: ClockIcon,
    title: '80% weniger operative Arbeit',
    description: 'Deine wichtigsten Prozesse laufen automatisch. Du gewinnst 15–20h pro Woche zurück für strategische Entscheidungen und echte Deep Work Sessions statt Routine-Tasks.',
    imageUrl: '/images/benefit3.png',
    imageAlt: 'Automated processes illustration'
  }
]



const statsData = [
  {
    label: 'Automatisierte Tasks',
    value: '50+'
  },
  {
    label: 'Zeit gespart',
    value: '100+ Stunden'
  },
  {
    label: 'Kostenreduktion',
    value: '-30%'
  },
  {
    label: 'Marge',
    value: '+30%'
  }
]


const logoData = [
  {
    image: '/images/roundnotion.png',
    alt: 'Notion',
    size: 'size-15'
  },
  {
    image: '/images/roundmeta.png',
    alt: 'Meta Ads',
    size: 'size-12'
  },
  {
    image: '/images/roundgads.png',
    alt: 'Google Ads',
    size: 'size-12.5'
  },
  {
    image: '/images/roundshopify.png',
    alt: 'Shopify',
    size: 'size-11'
  },
  {
    image: '/images/roundklaviyo.png',
    alt: 'Klaviyo',
    size: 'size-9.5'
  },
  {
    image: '/images/roundpaypal.png',
    alt: 'PayPal',
    size: 'size-15'
  },
  {
    image: '/images/roundzendesk.png',
    alt: 'Zendesk',
    size: 'size-12.5'
  },
  {
    image: '/images/roundga.png',
    alt: 'Google Analytics',
    size: 'size-15'
  },
  {
    image: '/images/roundslack.png',
    alt: 'Slack',
    size: 'size-15'
  }
]


const statCards = [
  {
    title: '7+ Jahre',
    description: 'E-Commerce-Erfahrung im Aufbau und Skalieren von D2C-Brands'
  },
  {
    title: '8 Mio € ',
    description: 'Umsätze mit meinen eigenen Brands – reale Praxis-Erfahrung aus dem operativen Alltag'
  },
  {
    title: '80% weniger',
    description: 'Operative Arbeit durch intelligente KI-Automatisierungen in unserem eigenen Business'
  },
  {
    title: '15+ Stunden',
    description: 'Pro Woche gewonnene strategische Zeit durch automatisierte Prozesse und Reporting'
  }
]

const featureCards = [
  {
    title: 'Warum wir?',
    description: 'Wir haben es zuerst für uns selbst gebaut – echte KI-Systeme, keine theoretischen Konzepte.'
  },
  {
    title: 'Unsere Vision',
    description: 'KI ist bereits heute möglich – du kannst sofort automatisieren, ohne auf die Zukunft zu warten. Die Tools existieren, sie müssen nur richtig kombiniert werden.'
  },
  {
    title: 'Unser Team',
    description: 'Gründer-Erfahrung trifft auf technische Expertise – wir verstehen dein Business, weil wir es leben.'
  }
]

export default function AiPage() {

  return (
    <div className="min-h-screen">
      <NavbarPage navigationData={navigationData}/>
      <HeroSectionStudio />
      <AppIntegration integrations={integrationApps} />
      <ProblemSection features={features} />
      <BentoGrid />
      <div id="about">
        <AboutUsPage statCards={statCards} featureCards={featureCards} />
      </div>
      <div id="features">
        <Features features={benefits} />
      </div>
      <SocialProof stats={statsData} />
      <LogoCloud logos={logoData} />
      <div id="process">
        <ProcessSectionStudio />
      </div>
      <TestimonialsSectionStudio />
      <div id="services">
        <FeaturesDetail  />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTA />
    </div>
  )
}

