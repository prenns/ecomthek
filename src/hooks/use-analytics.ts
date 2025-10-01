'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { gtag } from '@/components/analytics/gtag';

export function useAnalytics() {
  const pathname = usePathname();

  // Track page views on route changes
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      gtag.pageview(pathname);
    }
  }, [pathname]);
}

// Hook for tracking custom events
export function useTrackEvent() {
  const trackEvent = (action: string, parameters?: Record<string, string | number | boolean>) => {
    if (process.env.NODE_ENV === 'production') {
      gtag.event(action, parameters);
    }
  };

  return { trackEvent };
}
