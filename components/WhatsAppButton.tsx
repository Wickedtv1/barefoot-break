'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = '523221409733';
  const whatsappMessage = encodeURIComponent(
    'Hi! I would like to know more about your surf lessons and tours.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-brown-brand text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-brown-brand"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl transition-all duration-300 pulse group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </a>

        {/* Pulsing Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></div>
      </div>
    </div>
  );
}
