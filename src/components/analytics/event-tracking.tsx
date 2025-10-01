'use client';

import { useTrackEvent } from '@/hooks/use-analytics';

// Example component showing how to track events
export function TrackableButton({ 
  children, 
  eventName, 
  eventParameters 
}: { 
  children: React.ReactNode;
  eventName: string;
  eventParameters?: Record<string, string | number | boolean>;
}) {
  const { trackEvent } = useTrackEvent();

  const handleClick = () => {
    trackEvent(eventName, eventParameters);
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

// Example usage in your components:
/*
import { TrackableButton } from '@/components/analytics/event-tracking';

<TrackableButton 
  eventName="cta_click" 
  eventParameters={{ 
    button_location: 'hero', 
    button_text: 'Kostenloser Shop Audit' 
  }}
>
  Kostenloser Shop Audit
</TrackableButton>
*/
