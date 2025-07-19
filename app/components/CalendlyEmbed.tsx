'use client';

import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    // FIX: Added rounding and overflow hidden directly to the widget container
    <div 
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url="https://calendly.com/getkoneqt/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=02040a&text_color=ffffff&primary_color=a05cff"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
};

export default CalendlyEmbed;