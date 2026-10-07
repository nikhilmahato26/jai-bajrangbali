import React from 'react';
import { Layers, Globe, HeartPulse, Shield, PhoneCall, Car, Check } from 'lucide-react';
import { whyChoosePoints } from '../data/businessData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'multiple-options':
        return <Layers size={24} />;
      case 'all-india-service':
        return <Globe size={24} />;
      case 'ambulance-options':
        return <HeartPulse size={24} />;
      case 'special-transportation':
        return <Shield size={24} />;
      case 'easy-contact':
        return <PhoneCall size={24} />;
      case 'travel-services':
      default:
        return <Car size={24} />;
    }
  };

  return (
    <section className="section why-choose-section" id="why-choose-us" aria-label="Why Choose Us">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Check size={16} />
            <span>OUR STRENGTHS</span>
          </div>
          <h2 className="section-title">WHY CHOOSE JAY BAJRANGBALI?</h2>
          <p className="section-subtitle">
            Focused, dependable transportation solutions built around client safety, respectful care, and prompt response.
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChoosePoints.map((point) => (
            <div key={point.id} className="why-choose-card" id={`why-card-${point.id}`}>
              <div className="why-choose-icon-box">
                {getIcon(point.id)}
              </div>
              <div>
                <h3 className="why-choose-title">{point.title}</h3>
                <p className="why-choose-desc">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
