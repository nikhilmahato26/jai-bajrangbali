import React, { useState } from 'react';
import { Phone, CalendarCheck, Shield, Eye } from 'lucide-react';
import { ambulanceFleet, type Vehicle } from '../data/fleetData';
import { businessInfo } from '../data/businessData';
import { PhotoLightboxModal, type LightboxData } from './PhotoLightboxModal';

interface AmbulanceVehiclesProps {
  onEnquire: (vehicleName: string) => void;
}

export const AmbulanceVehiclesSection: React.FC<AmbulanceVehiclesProps> = ({ onEnquire }) => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const getVehicleReg = (vehicle: Vehicle) => {
    if (vehicle.id === 'amb-als') return 'CG15DT4039';
    if (vehicle.id === 'amb-omni') return 'OR 19F 5225';
    if (vehicle.id === 'amb-dead-body-van') return 'OD02DJ8138';
    return undefined;
  };

  const isVerifiedVehicle = (vehicle: Vehicle) => {
    return vehicle.id === 'amb-als' || vehicle.id === 'amb-omni' || vehicle.id === 'amb-dead-body-van';
  };

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
            Dedicated ambulance vehicles and mortal preservation vans stationed at FM Medical College, Balasore & operating across India.
          </p>
        </div>

        <div className="fleet-cards-grid">
          {ambulanceFleet.map((vehicle) => {
            const verified = isVerifiedVehicle(vehicle);
            const regNo = getVehicleReg(vehicle);

            return (
              <div key={vehicle.id} className="fleet-card" id={`amb-veh-${vehicle.id}`}>
                <div
                  className="fleet-card-media"
                  style={{ cursor: verified ? 'pointer' : 'default', position: 'relative' }}
                  onClick={() => {
                    if (verified) {
                      setLightboxData({
                        imageUrl: vehicle.image,
                        title: vehicle.name,
                        subtitle: `${vehicle.description} • Balasore & All India`,
                        regNo,
                      });
                    }
                  }}
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="fleet-card-img"
                    loading="lazy"
                  />
                  <span className="fleet-card-category-tag ambulance">Ambulance</span>

                  {verified && (
                    <button
                      type="button"
                      className="als-card-zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxData({
                          imageUrl: vehicle.image,
                          title: vehicle.name,
                          subtitle: `${vehicle.description} • Balasore & All India`,
                          regNo,
                        });
                      }}
                      title="View verified photo"
                    >
                      <Eye size={13} />
                      <span>View Photo</span>
                    </button>
                  )}
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
            );
          })}
        </div>
      </div>

      <PhotoLightboxModal
        data={lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </section>
  );
};
