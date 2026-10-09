import React from 'react';
import { Phone, ArrowRight, Ambulance, Car, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper" id="hero" aria-label="Hero Section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Content Left */}
          <div className="hero-content">
            <div className="section-eyebrow">
              <ShieldCheck size={16} />
              <span>FM MEDICAL COLLEGE, BALASORE • ALL INDIA SERVICE</span>
            </div>

            <h1 className="hero-heading">
              <span className="red">Ambulance</span> & <span className="navy">Travel Services</span>, Wherever You Need Them
            </h1>

            <p className="hero-desc">
              Jay Bajrangbali Travels and Ambulance Service provides 24x7 ALS ICU & BLS ambulance transportation, oxygen concentrator support, specialized medical transit, cars, travellers, and buses across India.
            </p>

            <div className="hero-buttons">
              <a
                href={`tel:${businessInfo.phone1Raw}`}
                className="btn-primary-red"
                id="hero-call-ambulance-btn"
                title="Call for Ambulance"
              >
                <Phone size={18} />
                <span>CALL FOR AMBULANCE</span>
              </a>

              <a
                href="#travel-services"
                className="btn-secondary-navy"
                id="hero-travel-services-btn"
                title="View Travel Services"
              >
                <span>TRAVEL SERVICES</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Split Service Badges */}
            <div className="hero-service-split-badges">
              <div className="split-badge-card">
                <div className="split-badge-icon red">
                  <Ambulance size={20} />
                </div>
                <div>
                  <div className="split-badge-title">Emergency Medical</div>
                  <div className="split-badge-sub">ALS ICU, BLS & Oxygen Service</div>
                </div>
              </div>

              <div className="split-badge-card">
                <div className="split-badge-icon navy">
                  <Car size={20} />
                </div>
                <div>
                  <div className="split-badge-title">Travel Fleet</div>
                  <div className="split-badge-sub">Cars, Travellers & Buses</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Media Right */}
          <div className="hero-media-wrapper">
            <div className="hero-main-card">
              <img
                src="/images/hero_banner.jpg"
                alt="Jay Bajrangbali Ambulance and Travel Fleet"
                className="hero-main-img"
                loading="eager"
              />
              <div className="hero-media-overlay-tag">
                <div>
                  <strong>All India Operations</strong>
                  <div style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>Prompt coordination for medical & travel needs</div>
                </div>
                <div style={{ fontWeight: 800, color: '#F87171' }}>
                  24/7 HELPLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
