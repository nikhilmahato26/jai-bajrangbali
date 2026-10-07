import { useState } from 'react';
import { Phone, CalendarCheck, Car } from 'lucide-react';
import { allFleetVehicles, fleetFilterCategories } from '../data/fleetData';
import type { FleetCategory, Vehicle } from '../data/fleetData';
import { businessInfo } from '../data/businessData';

interface FleetFilterSectionProps {
  onEnquireVehicle: (vehicle: Vehicle) => void;
  initialFilter?: 'All' | FleetCategory;
}

export const FleetFilterSection: React.FC<FleetFilterSectionProps> = ({
  onEnquireVehicle,
  initialFilter = 'All',
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | FleetCategory>(initialFilter);

  const filteredVehicles = selectedFilter === 'All'
    ? allFleetVehicles
    : allFleetVehicles.filter((v) => v.category === selectedFilter);

  const getCategoryCount = (category: 'All' | FleetCategory) => {
    if (category === 'All') return allFleetVehicles.length;
    return allFleetVehicles.filter((v) => v.category === category).length;
  };

  const getTagClass = (category: FleetCategory) => {
    switch (category) {
      case 'Ambulance':
        return 'ambulance';
      case 'Cars':
        return 'cars';
      case 'Traveller':
        return 'traveller';
      case 'Bus':
        return 'bus';
      default:
        return 'cars';
    }
  };

  return (
    <section className="section fleet-section" id="fleet" aria-label="Vehicle Fleet & Filter">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow navy">
            <Car size={16} />
            <span>COMPLETE VEHICLE FLEET</span>
          </div>
          <h2 className="section-title">TRAVEL VEHICLES & AMBULANCES</h2>
          <p className="section-subtitle">
            Browse our full fleet of ambulances, sedans, SUVs, travellers, and buses. Select a category to filter options.
          </p>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="fleet-filter-bar" role="tablist" aria-label="Fleet Categories">
          {fleetFilterCategories.map((category) => {
            const isActive = selectedFilter === category;
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(category)}
                className={`fleet-filter-btn ${isActive ? 'active' : ''}`}
                id={`filter-btn-${category.toLowerCase()}`}
              >
                <span>{category}</span>
                <span className="fleet-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Vehicles Grid */}
        <div className="fleet-cards-grid">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="fleet-card"
              id={`fleet-card-${vehicle.id}`}
            >
              <div className="fleet-card-media">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="fleet-card-img"
                  loading="lazy"
                />
                <span className={`fleet-card-category-tag ${getTagClass(vehicle.category)}`}>
                  {vehicle.category}
                </span>
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
                    onClick={() => onEnquireVehicle(vehicle)}
                    className="btn-fleet-enquire"
                    title={`Enquire for ${vehicle.name}`}
                    id={`btn-enquire-fleet-${vehicle.id}`}
                  >
                    <CalendarCheck size={15} />
                    <span>Enquire</span>
                  </button>

                  <a
                    href={`tel:${businessInfo.phone1Raw}`}
                    className="btn-fleet-call"
                    title={`Call for ${vehicle.name}`}
                    id={`btn-call-fleet-${vehicle.id}`}
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
