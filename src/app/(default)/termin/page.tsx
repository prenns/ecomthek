import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kostenloses Erstgespräch buchen | Ecomthek',
    description: 'Buche deine kostenlose Analyse und erfahre, wie du mit KI-Agenten Operations, Support und Reporting automatisierst. Erkenne dein Automatisierungspotenzial.',
    openGraph: {
        title: 'Kostenloses Erstgespräch buchen | Ecomthek',
        description: 'Buche deine kostenlose Analyse und erfahre, wie du mit KI-Agenten Operations, Support und Reporting automatisierst.',
        type: 'website',
    },
};

export default function TerminPage() {
    return (
        <div className="min-h-screen bg-background py-16 px-4 md:py-24">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                        <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                            Lass uns dein Automatisierungspotenzial erkennen.
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Buche deine kostenlose Analyse und erfahre,
                        wie du mit KI-Agenten Operations, Support und Reporting automatisierst.
                    </p>
                </div>

                {/* Calendly Widget Container */}
                <div className="calendly-inline-widget"
                    data-url="https://calendly.com/a-prennsberger/30min?hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '700px' }}
                />
            </div>

            {/* Calendly Script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />
        </div>
    )
}
