import React from 'react';
import { Phone, CalendarCheck, Shield } from 'lucide-react';
import { ambulanceFleet } from '../data/fleetData';
import { businessInfo } from '../data/businessData';

interface AmbulanceVehiclesProps {
  onEnquire: (vehicleName: string) => void;
}

export const AmbulanceVehiclesSection: React.FC<AmbulanceVehiclesProps> = ({ onEnquire }) => {
  return (
    <section className="section" id="ambulance-vehicles" style={{ backgroundColor: '#FFFFFF' }} aria-label="Our Ambulance Vehicles">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Shield size={16} />
            <span>SPECIALIZED MEDICAL FLEET</span>
          </div>
          <h2 className="section-title">OUR AMBULANCE VEHICLES</h2>
          <p className="section-subtitle">
            Dedicated ambulance vehicles maintained for patient transfer and hospital coordination across India.
          </p>
        </div>

        <div className="fleet-cards-grid">
          {ambulanceFleet.map((vehicle) => (
            <div key={vehicle.id} className="fleet-card" id={`amb-veh-${vehicle.id}`}>
              <div className="fleet-card-media">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="fleet-card-img"
                  loading="lazy"
                />
                <span className="fleet-card-category-tag ambulance">Ambulance</span>
              </div>

              <div className="fleet-card-content">
                <div className="fleet-card-header">
                  <h3 className="fleet-card-name">{vehicle.name}</h3>
                  <span className="fleet-type-badge">{vehicle.typeBadge}</span>
                </div>

                <p className="fleet-card-desc">{vehicle.description}</p>

                <div className="fleet-card-actions">
                  <button
                    type="button"
                    onClick={() => onEnquire(vehicle.name)}
                    className="btn-fleet-enquire"
                    title={`Enquire for ${vehicle.name}`}
                    id={`btn-enq-${vehicle.id}`}
                  >
                    <CalendarCheck size={15} />
                    <span>Enquire</span>
                  </button>

                  <a
                    href={`tel:${businessInfo.phone1Raw}`}
                    className="btn-fleet-call"
                    title={`Call for ${vehicle.name}`}
                    id={`btn-call-${vehicle.id}`}
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
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
