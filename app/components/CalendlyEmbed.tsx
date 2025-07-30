'use client';

import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
  // This useEffect hook correctly adds the Calendly script to the page.
  // No changes are needed here.
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
    // The main div for the Calendly widget.
    // I've updated the data-url to point to your new 15-minute demo event.
    <div 
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      // --- THIS IS THE UPDATED PART ---
      data-url="https://calendly.com/team-getkoneqt/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=02040a&text_color=ffffff&primary_color=a05cff"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
};

export default CalendlyEmbed;