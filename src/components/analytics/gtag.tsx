'use client';

import Script from 'next/script';

const GTM_ID = 'GTM-TKFHN8M3';

export function GoogleTagManager() {
  // Only load GTM in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  // Only load GTM in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}

// Utility functions for tracking events
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const gtag = {
  // Track page views
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GTM_ID, {
        page_path: url,
      });
    }
  },

  // Track custom events
  event: (action: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: action,
        ...parameters,
      });
    }
  },

  // Track conversions
  conversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency,
      });
    }
  },
};
