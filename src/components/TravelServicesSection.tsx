import React from 'react';
import { Car, Compass, Bus, MapPin, ArrowRight } from 'lucide-react';
import { travelServicesList } from '../data/businessData';

interface TravelServicesProps {
  onSelectCategory?: (category: string) => void;
}

export const TravelServicesSection: React.FC<TravelServicesProps> = ({ onSelectCategory }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'car-service':
        return <Car size={26} />;
      case 'traveller-service':
        return <Compass size={26} />;
      case 'bus-service':
        return <Bus size={26} />;
      case 'outstation-travel':
      default:
        return <MapPin size={26} />;
    }
  };

  return (
    <section className="section travel-services-section" id="travel-services" aria-label="Travel and Transportation Services">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow navy">
            <Car size={16} />
            <span>TRAVEL & LEISURE TRANSPORTATION</span>
          </div>
          <h2 className="section-title">TRAVEL & TRANSPORTATION SERVICES</h2>
          <p className="section-subtitle">
            Reliable, safe and comfortable vehicular transport for families, groups, tours and outstation journeys across India.
          </p>
        </div>

        <div className="travel-services-grid">
          {travelServicesList.map((service) => (
            <div key={service.id} className="travel-service-box" id={`travel-box-${service.id}`}>
              <div className="travel-service-icon-box">
                {getIcon(service.id)}
              </div>
              <h3 className="travel-service-name">{service.name}</h3>
              <p className="travel-service-desc">{service.description}</p>
              
              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <a
                  href="#fleet"
                  onClick={() => {
                    if (onSelectCategory) {
                      if (service.id === 'car-service') onSelectCategory('Cars');
                      else if (service.id === 'traveller-service') onSelectCategory('Traveller');
                      else if (service.id === 'bus-service') onSelectCategory('Bus');
                    }
                  }}
                  className="quick-card-link"
                >
                  <span>Explore Fleet Options</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
