import React from 'react';
import { Phone, CalendarCheck, HeartPulse } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface AmbulanceServicesProps {
  onEnquire: (serviceName: string) => void;
}

export const ambulanceServicesData = [
  {
    id: 'service-als',
    name: 'ALS Ambulance',
    tag: 'Advanced Care',
    image: '/images/als_ambulance.jpg',
    description: 'Ambulance transportation service for requirements requiring advanced ambulance support.',
  },
  {
    id: 'service-bls',
    name: 'BLS Ambulance',
    tag: 'Basic Support',
    image: '/images/force_traveller_ambulance.jpg',
    description: 'Ambulance transportation service for basic life-support requirements.',
  },
  {
    id: 'service-bolero-amb',
    name: 'Bolero Ambulance',
    tag: 'Rugged Vehicle',
    image: '/images/bolero_ambulance.jpg',
    description: 'Reliable Bolero ambulance transportation option for patient transfer across diverse terrains.',
  },
  {
    id: 'service-eco-amb',
    name: 'Eco Ambulance',
    tag: 'Rapid Transport',
    image: '/images/eco_ambulance.jpg',
    description: 'Eco ambulance vehicle for patient transfers, routine medical visits, and city movements.',
  },
  {
    id: 'service-traveller-amb',
    name: 'Force Traveller Ambulance',
    tag: 'Spacious Cabin',
    image: '/images/force_traveller_ambulance.jpg',
    description: 'Force Traveller ambulance vehicle suited for intercity medical transfers and patient transit.',
  },
  {
    id: 'service-winger-amb',
    name: 'Tata Winger Ambulance',
    tag: 'Comfort Fleet',
    image: '/images/tata_winger_ambulance.jpg',
    description: 'Tata Winger ambulance vehicle for patient transportation and hospital coordination.',
  },
  {
    id: 'service-omni-amb',
    name: 'Omni Ambulance',
    tag: 'Compact Van',
    image: '/images/omni_ambulance.jpg',
    description: 'Omni ambulance vehicle option for local and regional patient conveyance.',
  },
];

export const AmbulanceServicesSection: React.FC<AmbulanceServicesProps> = ({ onEnquire }) => {
  return (
    <section className="section ambulance-services-section" id="ambulance-services" aria-label="Ambulance Services">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <HeartPulse size={16} />
            <span>EMERGENCY & MEDICAL TRANSPORT</span>
          </div>
          <h2 className="section-title">AMBULANCE SERVICES</h2>
          <p className="section-subtitle">
            Reliable ambulance transportation options for different requirements, with services available across India.
          </p>
        </div>

        <div className="ambulance-cards-grid">
          {ambulanceServicesData.map((service) => (
            <div key={service.id} className="ambulance-service-card" id={`card-${service.id}`}>
              <div className="ambulance-card-media">
                <img
                  src={service.image}
                  alt={service.name}
                  className="ambulance-card-img"
                  loading="lazy"
                />
                <span className="ambulance-card-tag">{service.tag}</span>
              </div>

              <div className="ambulance-card-body">
                <h3 className="ambulance-card-name">{service.name}</h3>
                <p className="ambulance-card-desc">{service.description}</p>

                <div className="ambulance-card-actions">
                  <a
                    href={`tel:${businessInfo.phone1Raw}`}
                    className="btn-card-call"
                    title={`Call for ${service.name}`}
                    id={`btn-call-${service.id}`}
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onEnquire(service.name)}
                    className="btn-card-enquire"
                    title={`Enquire for ${service.name}`}
                    id={`btn-enquire-${service.id}`}
                  >
                    <CalendarCheck size={15} />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
