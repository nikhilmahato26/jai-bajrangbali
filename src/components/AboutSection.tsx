import React from 'react';
import { CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const AboutSection: React.FC = () => {
  return (
    <section className="section about-section" id="about" aria-label="About the Business">
      <div className="container">
        <div className="about-grid">
          {/* About Content */}
          <div className="about-content">
            <div className="section-eyebrow">
              <ShieldCheck size={16} />
              <span>ABOUT OUR SERVICES</span>
            </div>

            <h2 className="section-title">
              JAY BAJRANGBALI TRAVELS AND AMBULANCE SERVICE
            </h2>

            <p className="about-paragraph">
              Jay Bajrangbali Travels and Ambulance Service provides transportation services across India, covering ambulance requirements as well as travel and vehicle services.
            </p>

            <p className="about-paragraph">
              The service portfolio includes ALS and BLS ambulances, specialized transportation services, cars, travellers and buses.
            </p>

            <div className="about-pillars">
              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} color="#C5161D" />
                  <div className="about-pillar-title">Medical Readiness</div>
                </div>
                <div className="about-pillar-desc">
                  ALS and BLS ambulance vehicles available for urgent and planned patient transport.
                </div>
              </div>

              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} color="#C5161D" />
                  <div className="about-pillar-title">Diverse Travel Fleet</div>
                </div>
                <div className="about-pillar-desc">
                  Wide selection of cars, travellers, and buses for individual or group transportation.
                </div>
              </div>

              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Navigation size={18} color="#0B132B" />
                  <div className="about-pillar-title">All India Coverage</div>
                </div>
                <div className="about-pillar-desc">
                  Long-distance and intercity transportation across major national routes and corridors.
                </div>
              </div>

              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <ShieldCheck size={18} color="#0B132B" />
                  <div className="about-pillar-title">Respectful Services</div>
                </div>
                <div className="about-pillar-desc">
                  Dignified arrangements including Freezer boxes, Swarga Ratha, and Horse Van services.
                </div>
              </div>
            </div>
          </div>

          {/* About Image / Visual Card */}
          <div className="about-media-card">
            <img
              src="/images/tata_winger_ambulance.jpg"
              alt="Jay Bajrangbali Ambulance in Service"
              className="about-img"
              loading="lazy"
            />
            <div className="about-info-badge">
              <div className="about-info-badge-title">Direct Contact Coordination</div>
              <div className="about-info-badge-sub">
                Helplines: {businessInfo.phone1} / {businessInfo.phone2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
