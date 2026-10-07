import React from 'react';
import { Shield, CalendarCheck, Phone } from 'lucide-react';
import { specialServices, businessInfo } from '../data/businessData';

interface SpecialTransportationProps {
  onEnquire: (serviceName: string) => void;
}

export const SpecialTransportationSection: React.FC<SpecialTransportationProps> = ({ onEnquire }) => {
  return (
    <section className="section special-section" id="special-services" aria-label="Special Transportation Services">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Shield size={16} />
            <span>SPECIALIZED & DIGNIFIED TRANSIT</span>
          </div>
          <h2 className="section-title">SPECIAL TRANSPORTATION SERVICES</h2>
          <p className="section-subtitle">
            Dignified, respectful, and specialized transportation services handled with utmost care across India.
          </p>
        </div>

        <div className="special-cards-grid">
          {specialServices.map((item) => (
            <div key={item.id} className="special-service-card" id={`special-card-${item.id}`}>
              <div className="special-card-media">
                <img
                  src={item.image}
                  alt={item.name}
                  className="special-card-img"
                  loading="lazy"
                />
                <span className="special-badge-tag">{item.badge}</span>
              </div>

              <div className="special-card-body">
                <h3 className="special-card-name">{item.name}</h3>
                <p className="special-card-desc">{item.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
                  <button
                    type="button"
                    onClick={() => onEnquire(item.name)}
                    className="btn-special-enquire"
                    title={`Enquire for ${item.name}`}
                    id={`btn-special-enq-${item.id}`}
                  >
                    <CalendarCheck size={16} />
                    <span>{item.ctaText}</span>
                  </button>

                  <a
                    href={`tel:${businessInfo.phone1Raw}`}
                    className="btn-fleet-call"
                    style={{ justifyContent: 'center' }}
                    title={`Call for ${item.name}`}
                    id={`btn-special-call-${item.id}`}
                  >
                    <Phone size={16} />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
