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
              Jay Bajrangbali Travels and Ambulance Service operates 24x7 from its base at FM Medical College, Balasore (Odisha), delivering rapid emergency medical transport and comprehensive travel services across India.
            </p>

            <p className="about-paragraph">
              Our services feature Advanced Life Support (ALS) ICU ambulances, BLS patient transit vans, 24/7 Oxygen Concentrator rentals, specialized dignified transport (Freezer box, Swarga Ratha, Horse Van), and a versatile travel fleet of cars, travellers, and buses.
            </p>

            <div className="about-pillars">
              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} color="#C5161D" />
                  <div className="about-pillar-title">Medical & ICU Readiness</div>
                </div>
                <div className="about-pillar-desc">
                  ALS ICU and BLS ambulances with cardiac support, oxygen, and trained staff for critical patient transfers.
                </div>
              </div>

              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} color="#C5161D" />
                  <div className="about-pillar-title">Oxygen & Equipment</div>
                </div>
                <div className="about-pillar-desc">
                  24/7 Oxygen Concentrator delivery, stretcher facilities, and medical support equipment.
                </div>
              </div>

              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Navigation size={18} color="#0B132B" />
                  <div className="about-pillar-title">All India Coverage</div>
                </div>
                <div className="about-pillar-desc">
                  Long-distance inter-state patient transfers and outstation journeys across all national corridors.
                </div>
              </div>

              <div className="about-pillar-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <ShieldCheck size={18} color="#0B132B" />
                  <div className="about-pillar-title">Dignified Special Transit</div>
                </div>
                <div className="about-pillar-desc">
                  Respectful arrangements including Freezer boxes, Swarga Ratha, and Horse Van services.
                </div>
              </div>
            </div>
          </div>

          {/* About Image / Visual Card */}
          <div className="about-media-card">
            <img
              src="/images/als_ambulance.jpg"
              alt="Jay Bajrangbali ALS Ambulance Service at Apollo Hospitals"
              className="about-img"
              style={{ objectPosition: 'center 25%' }}
              loading="lazy"
            />
            <div className="about-info-badge">
              <div className="about-info-badge-title">ALS Ambulance Unit (CG15DT4039)</div>
              <div className="about-info-badge-sub">
                FM Medical College, Balasore • Helplines: {businessInfo.phone1} / {businessInfo.phone2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
