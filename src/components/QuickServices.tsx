import React from 'react';
import { HeartPulse, Ambulance, Car, Shield, ArrowRight } from 'lucide-react';

export const QuickServices: React.FC = () => {
  return (
    <section className="quick-services-section" aria-label="Quick Service Navigation">
      <div className="container">
        <div className="quick-cards-grid">
          {/* Card 1: ALS Ambulance */}
          <div className="quick-card ambulance" id="quick-card-als">
            <div className="quick-card-icon">
              <HeartPulse size={26} />
            </div>
            <h2 className="quick-card-title">ALS Ambulance Service</h2>
            <p className="quick-card-subtitle">Advanced ICU, cardiac care & oxygen support.</p>
            <a href="#ambulance-services" className="quick-card-link">
              <span>View Ambulance Fleet</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2: BLS Ambulance */}
          <div className="quick-card ambulance" id="quick-card-bls">
            <div className="quick-card-icon">
              <Ambulance size={26} />
            </div>
            <h2 className="quick-card-title">BLS Ambulance</h2>
            <p className="quick-card-subtitle">Basic life-support ambulance service.</p>
            <a href="#ambulance-services" className="quick-card-link">
              <span>Explore BLS Options</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 3: Travel Services */}
          <div className="quick-card travel" id="quick-card-travel">
            <div className="quick-card-icon">
              <Car size={26} />
            </div>
            <h2 className="quick-card-title">Travel Services</h2>
            <p className="quick-card-subtitle">Cars, travellers and buses.</p>
            <a href="#travel-services" className="quick-card-link">
              <span>View Travel Fleet</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 4: Special Transportation */}
          <div className="quick-card special" id="quick-card-special">
            <div className="quick-card-icon">
              <Shield size={26} />
            </div>
            <h2 className="quick-card-title">Special Transportation</h2>
            <p className="quick-card-subtitle">Oxygen Concentrator, Freezer, Horse Van & Swarga Ratha.</p>
            <a href="#special-services" className="quick-card-link">
              <span>View Special Services</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
