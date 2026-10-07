import React from 'react';
import { PhoneCall, ShieldAlert, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const EmergencyBar: React.FC = () => {
  return (
    <div className="emergency-strip" role="region" aria-label="Emergency Contact Bar">
      <div className="container">
        <div className="emergency-strip-inner">
          <div className="emergency-strip-label">
            <div className="emergency-pulse-indicator" aria-hidden="true">
              <ShieldAlert size={24} />
            </div>
            <div>
              <div className="emergency-strip-title">Ambulance Assistance</div>
              <div className="emergency-strip-subtitle">Direct emergency transportation contact across India</div>
            </div>
          </div>

          <div className="emergency-strip-phones">
            <a
              href={`tel:${businessInfo.phone1Raw}`}
              className="emergency-phone-box"
              id="emergency-bar-primary-phone"
              title="Call Ambulance Now"
            >
              <PhoneCall size={22} className="text-white" />
              <div>
                <span className="phone-tag">Call Now</span>
                <span className="phone-num">{businessInfo.phone1}</span>
              </div>
            </a>

            <a
              href={`tel:${businessInfo.phone2Raw}`}
              className="emergency-phone-box"
              id="emergency-bar-alternate-phone"
              title="Call Alternate Number"
            >
              <Phone size={22} className="text-white" />
              <div>
                <span className="phone-tag">Alternate Number</span>
                <span className="phone-num">{businessInfo.phone2}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
