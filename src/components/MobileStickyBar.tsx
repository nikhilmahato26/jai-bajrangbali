import React from 'react';
import { PhoneCall, Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const MobileStickyBar: React.FC = () => {
  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-sticky-action-bar" role="navigation" aria-label="Mobile Quick Action Bar">
        <a
          href={`tel:${businessInfo.phone1Raw}`}
          className="mobile-action-btn emergency"
          id="mobile-sticky-call-ambulance"
        >
          <PhoneCall size={18} />
          <span>Ambulance</span>
        </a>

        <a
          href={`tel:${businessInfo.phone2Raw}`}
          className="mobile-action-btn alternate"
          id="mobile-sticky-call-alternate"
        >
          <Phone size={18} />
          <span>Call Info</span>
        </a>

        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-action-btn whatsapp"
          id="mobile-sticky-whatsapp"
        >
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Floating WhatsApp Button for Desktop screens */}
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        id="desktop-floating-whatsapp"
        title="Chat on WhatsApp with Jay Bajrangbali"
      >
        <MessageSquare size={28} />
      </a>
    </>
  );
};
