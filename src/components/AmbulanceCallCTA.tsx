import React from 'react';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const AmbulanceCallCTA: React.FC = () => {
  return (
    <section className="ambulance-cta-section" id="ambulance-call-cta" aria-label="Ambulance Emergency Call to Action">
      <div className="container">
        <div className="ambulance-cta-inner">
          <div className="ambulance-cta-eyebrow">
            <ShieldAlert size={16} />
            <span>IMMEDIATE ASSISTANCE</span>
          </div>

          <h2 className="ambulance-cta-heading">
            NEED AN AMBULANCE?
          </h2>

          <p className="ambulance-cta-subtitle">
            Contact Jay Bajrangbali Travels and Ambulance Service for ambulance transportation enquiries.
          </p>

          <div className="ambulance-cta-buttons">
            <a
              href={`tel:${businessInfo.phone1Raw}`}
              className="btn-cta-phone-primary"
              id="ambulance-cta-primary-btn"
              title="Call Primary Helpline"
            >
              <PhoneCall size={22} />
              <span>CALL {businessInfo.phone1}</span>
            </a>

            <a
              href={`tel:${businessInfo.phone2Raw}`}
              className="btn-cta-phone-secondary"
              id="ambulance-cta-secondary-btn"
              title="Call Secondary Helpline"
            >
              <PhoneCall size={22} />
              <span>CALL {businessInfo.phone2}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
