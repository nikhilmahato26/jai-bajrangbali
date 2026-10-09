import React, { useState } from 'react';
import { Phone, CalendarCheck, HeartPulse, Eye, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface AmbulanceServicesProps {
  onEnquire: (serviceName: string) => void;
}

export interface AmbulanceServiceItem {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
  features?: string[];
  isVerified?: boolean;
  registrationNumber?: string;
  baseStation?: string;
  ctaText?: string;
}

export const ambulanceServicesData: AmbulanceServiceItem[] = [
  {
    id: 'service-als',
    name: 'ALS Ambulance Service',
    tag: 'Advanced Life Support / ICU',
    image: '/images/als_ambulance.jpg',
    description: 'Advanced Life Support (ALS) ICU Ambulance equipped with oxygen support, cardiac care, patient stretcher, and trained medical staff.',
    features: [
      '24x7 Ambulance Service',
      'Cardiac Care Support',
      'Oxygen Support',
      'Stretcher Service',
      'Trained Staff',
    ],
    isVerified: true,
    registrationNumber: 'CG15DT4039',
    baseStation: 'FM Medical College, Balasore',
    ctaText: 'Call ALS Ambulance',
  },
  {
    id: 'service-oxygen-conc',
    name: 'Oxygen Concentrator Service',
    tag: 'Medical Oxygen Support',
    image: '/images/oxygen_concentrator.jpg',
    description: '24/7 Oxygen Concentrator rental and supply service for medical respiratory support, critical breathing care, and patient transport.',
    features: [
      '24/7 Immediate Dispatch',
      'High Purity Oxygen Flow',
      'Home & In-Transit Care',
      'Continuous Breathing Support',
    ],
    ctaText: 'Enquire for Oxygen',
  },
  {
    id: 'service-bls',
    name: 'BLS Ambulance Service',
    tag: 'Basic Life Support',
    image: '/images/force_traveller_ambulance.jpg',
    description: 'Ambulance transportation service for basic life-support requirements, non-critical transfers, and clinical patient transit.',
    features: [
      'Basic Life Support',
      'Medical Oxygen Setup',
      'Foldable Patient Stretcher',
      'Prompt Coordination',
    ],
    ctaText: 'Call BLS Ambulance',
  },
  {
    id: 'service-bolero-amb',
    name: 'Bolero Ambulance',
    tag: 'Rugged Terrain',
    image: '/images/bolero_ambulance.jpg',
    description: 'Reliable Bolero ambulance transportation option for patient transfer across diverse terrains and rural routes.',
    features: ['High Ground Clearance', 'All-Terrain Transit', 'Stretcher Setup'],
  },
  {
    id: 'service-eco-amb',
    name: 'Eco Ambulance',
    tag: 'Rapid City Transport',
    image: '/images/eco_ambulance.jpg',
    description: 'Eco ambulance vehicle for quick patient transfers, routine medical visits, and agile city movements.',
    features: ['Rapid Response', 'City Hospital Transit', 'Patient Bed Setup'],
  },
  {
    id: 'service-traveller-amb',
    name: 'Force Traveller Ambulance',
    tag: 'Spacious Cabin',
    image: '/images/force_traveller_ambulance.jpg',
    description: 'Force Traveller ambulance vehicle suited for intercity medical transfers and spacious patient transit.',
    features: ['Wide Interior Space', 'Family Attendant Seating', 'Long-Distance Fit'],
  },
  {
    id: 'service-winger-amb',
    name: 'Tata Winger Ambulance',
    tag: 'Comfort Fleet',
    image: '/images/tata_winger_ambulance.jpg',
    description: 'Tata Winger ambulance vehicle for patient transportation and smooth interstate hospital coordination.',
    features: ['Smooth Suspension', 'Medical Equipment Space', 'Interstate Readiness'],
  },
  {
    id: 'service-omni-amb',
    name: 'Omni Ambulance',
    tag: 'Compact Van',
    image: '/images/omni_ambulance.jpg',
    description: 'Omni ambulance vehicle option for local and regional patient conveyance at affordable rates.',
    features: ['Compact & Agile', 'Affordable Local Transit', 'Quick Dispatch'],
  },
];

export const AmbulanceServicesSection: React.FC<AmbulanceServicesProps> = ({ onEnquire }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
            Reliable ALS, BLS & Oxygen Concentrator services with 24x7 readiness stationed at FM Medical College, Balasore & operating across India.
          </p>
        </div>

        {/* Featured ALS Unit Highlight Card */}
        <div className="als-highlight-banner" id="als-highlight-card">
          <div className="als-highlight-badge">
            <ShieldCheck size={16} />
            <span>OFFICIAL EMERGENCY UNIT SPOTLIGHT</span>
          </div>
          <div className="als-highlight-content">
            <div className="als-highlight-left">
              <h3 className="als-highlight-title">ALS Ambulance Service (Apollo Hospitals Unit)</h3>
              <p className="als-highlight-desc">
                Dedicated Force ICU Ambulance (CG15DT4039) stationed at FM Medical College, Balasore. 
                Equipped for advanced cardiac care, oxygen administration, emergency stretcher support, and inter-hospital patient transfers across India.
              </p>
              <div className="als-highlight-pills">
                <span className="als-pill">
                  <CheckCircle2 size={14} color="#EF4444" /> 24x7 Ambulance Service
                </span>
                <span className="als-pill">
                  <CheckCircle2 size={14} color="#EF4444" /> Stretcher Service
                </span>
                <span className="als-pill">
                  <CheckCircle2 size={14} color="#EF4444" /> Oxygen Support
                </span>
                <span className="als-pill">
                  <CheckCircle2 size={14} color="#EF4444" /> Cardiac Care Support
                </span>
                <span className="als-pill">
                  <CheckCircle2 size={14} color="#EF4444" /> Trained Staff
                </span>
              </div>
              <div className="als-highlight-actions">
                <a
                  href={`tel:${businessInfo.phone1Raw}`}
                  className="btn-primary-red"
                  id="als-spotlight-call-btn"
                >
                  <Phone size={17} />
                  <span>Call Emergency: {businessInfo.phone1}</span>
                </a>
                <button
                  type="button"
                  onClick={() => onEnquire('ALS Ambulance Service')}
                  className="btn-secondary-navy"
                  style={{ backgroundColor: '#0B132B', color: '#FFFFFF', border: '1px solid #1E293B' }}
                  id="als-spotlight-enquire-btn"
                >
                  <CalendarCheck size={17} />
                  <span>Book ALS Ambulance</span>
                </button>
              </div>
            </div>

            <div className="als-highlight-right">
              <div
                className="als-preview-frame"
                onClick={() => setLightboxImage('/images/als_ambulance.jpg')}
                title="Click to view full photo banner"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setLightboxImage('/images/als_ambulance.jpg');
                }}
              >
                <img
                  src="/images/als_ambulance.jpg"
                  alt="Jay Bajrangbali ALS Ambulance Service at Apollo Hospitals"
                  className="als-preview-img"
                  loading="eager"
                />
                <div className="als-preview-overlay">
                  <Eye size={20} />
                  <span>Click to View Full Photo Banner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="ambulance-cards-grid" style={{ marginTop: '36px' }}>
          {ambulanceServicesData.map((service) => (
            <div
              key={service.id}
              className={`ambulance-service-card ${service.id === 'service-als' ? 'featured-als-card' : ''}`}
              id={`card-${service.id}`}
            >
              <div
                className="ambulance-card-media"
                style={{ cursor: service.id === 'service-als' ? 'pointer' : 'default' }}
                onClick={() => {
                  if (service.id === 'service-als') {
                    setLightboxImage(service.image);
                  }
                }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="ambulance-card-img"
                  style={service.id === 'service-als' ? { objectPosition: 'center 30%' } : {}}
                  loading="lazy"
                />
                <span className="ambulance-card-tag">{service.tag}</span>

                {service.id === 'service-als' && (
                  <button
                    type="button"
                    className="als-card-zoom-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(service.image);
                    }}
                    title="View full official photo"
                  >
                    <Eye size={13} />
                    <span>View Photo</span>
                  </button>
                )}
              </div>

              <div className="ambulance-card-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <h3 className="ambulance-card-name">{service.name}</h3>
                  {service.isVerified && (
                    <span className="verified-unit-pill" title="Official Verified Vehicle">
                      Verified Unit
                    </span>
                  )}
                </div>

                <p className="ambulance-card-desc">{service.description}</p>

                {service.features && service.features.length > 0 && (
                  <ul className="service-features-list">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="service-feature-item">
                        <CheckCircle2 size={13} color="#C5161D" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="ambulance-card-actions" style={{ marginTop: 'auto' }}>
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

      {/* Lightbox Modal for Full Authentic Photo */}
      {lightboxImage && (
        <div
          className="als-lightbox-backdrop"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full Ambulance Photo View"
        >
          <div
            className="als-lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="als-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>

            <div className="als-lightbox-body">
              <img
                src={lightboxImage}
                alt="Jay Bajrangbali Travels and Ambulance Service - ALS Ambulance"
                className="als-lightbox-img"
              />
              <div className="als-lightbox-caption">
                <div className="als-lightbox-title">Jay Bajrangbali Travels and Ambulance Service</div>
                <div className="als-lightbox-sub">
                  ALS Ambulance Service • Force ICU Unit (CG15DT4039) • FM Medical College, Balasore
                </div>
                <div className="als-lightbox-actions">
                  <a href={`tel:${businessInfo.phone1Raw}`} className="btn-primary-red" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                    <Phone size={16} /> Call Primary: {businessInfo.phone1}
                  </a>
                  <a href={`tel:${businessInfo.phone2Raw}`} className="btn-secondary-navy" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                    <Phone size={16} /> Alternate: {businessInfo.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
