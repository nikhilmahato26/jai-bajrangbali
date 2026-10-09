import React, { useState } from 'react';
import { Phone, CalendarCheck, HeartPulse, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/businessData';
import { PhotoLightboxModal, type LightboxData } from './PhotoLightboxModal';

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
  gallery?: { label: string; url: string }[];
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
    id: 'service-omni-amb',
    name: 'Omni Ambulance (OR 19F 5225)',
    tag: 'Rapid Transit / Stretcher',
    image: '/images/omni_ambulance.jpg',
    description: 'Dedicated Maruti Suzuki Omni ambulance equipped with emergency siren flasher beacon, patient stretcher bed, and oxygen support.',
    features: [
      'Odisha Registered: OR 19F 5225',
      'Emergency Siren & Blue Flasher Beacon',
      'Patient Stretcher Bed Setup',
      'Agile City & Rural Medical Transit',
    ],
    isVerified: true,
    registrationNumber: 'OR 19F 5225',
    baseStation: 'Balasore, Odisha',
    ctaText: 'Call Omni Ambulance',
    gallery: [
      { label: 'Side View', url: '/images/omni_ambulance.jpg' },
      { label: 'Front View', url: '/images/omni_ambulance_front.jpg' },
    ],
  },
  {
    id: 'service-dead-body-van',
    name: 'Dead Body Van & Freezer Box',
    tag: 'Mobile Mortuary Unit',
    image: '/images/freezer_service.jpg',
    description: 'Specialized Dead Body Van & Swarga Ratha equipped with built-in stainless steel mortuary freezer box, chrome glass body, and attendant seating.',
    features: [
      'Odisha Registered: OD02DJ8138',
      'Deep Mortuary Freezer Box Unit',
      'Comfortable Family Attendant Seating',
      'Dignified Long-Distance Transit Across India',
    ],
    isVerified: true,
    registrationNumber: 'OD02DJ8138',
    baseStation: 'Balasore, Odisha',
    ctaText: 'Enquire for Freezer Van',
    gallery: [
      { label: 'Exterior Van', url: '/images/freezer_service.jpg' },
      { label: 'Freezer Chamber', url: '/images/swarga_ratha.jpg' },
    ],
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
];

export const AmbulanceServicesSection: React.FC<AmbulanceServicesProps> = ({ onEnquire }) => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [activeCardImage, setActiveCardImage] = useState<Record<string, string>>({
    'service-omni-amb': '/images/omni_ambulance.jpg',
    'service-dead-body-van': '/images/freezer_service.jpg',
  });

  const handleSelectGalleryImage = (serviceId: string, url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardImage((prev) => ({ ...prev, [serviceId]: url }));
  };

  const getCurrentImage = (service: AmbulanceServiceItem) => {
    return activeCardImage[service.id] || service.image;
  };

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
            Reliable ALS, BLS, Omni Ambulances, Dead Body Freezer Vans & Oxygen Concentrator services with 24x7 readiness stationed at FM Medical College, Balasore & operating across India.
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
                onClick={() => setLightboxData({
                  imageUrl: '/images/als_ambulance.jpg',
                  title: 'Jay Bajrangbali ALS Ambulance Service',
                  subtitle: 'Apollo Hospitals Emergency Unit • FM Medical College, Balasore',
                  regNo: 'CG15DT4039',
                })}
                title="Click to view full photo banner"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setLightboxData({
                      imageUrl: '/images/als_ambulance.jpg',
                      title: 'Jay Bajrangbali ALS Ambulance Service',
                      subtitle: 'Apollo Hospitals Emergency Unit • FM Medical College, Balasore',
                      regNo: 'CG15DT4039',
                    });
                  }
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
          {ambulanceServicesData.map((service) => {
            const currentImg = getCurrentImage(service);
            const isClickable = !!service.isVerified || !!service.gallery;

            return (
              <div
                key={service.id}
                className={`ambulance-service-card ${service.id === 'service-als' ? 'featured-als-card' : ''}`}
                id={`card-${service.id}`}
              >
                <div
                  className="ambulance-card-media"
                  style={{ cursor: isClickable ? 'pointer' : 'default' }}
                  onClick={() => {
                    if (isClickable) {
                      setLightboxData({
                        imageUrl: currentImg,
                        title: service.name,
                        subtitle: `${service.description} • Stationed: ${service.baseStation || 'Balasore'}`,
                        regNo: service.registrationNumber,
                      });
                    }
                  }}
                >
                  <img
                    src={currentImg}
                    alt={service.name}
                    className="ambulance-card-img"
                    style={service.id === 'service-als' ? { objectPosition: 'center 30%' } : {}}
                    loading="lazy"
                  />
                  <span className="ambulance-card-tag">{service.tag}</span>

                  {isClickable && (
                    <button
                      type="button"
                      className="als-card-zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxData({
                          imageUrl: currentImg,
                          title: service.name,
                          subtitle: `${service.description} • Stationed: ${service.baseStation || 'Balasore'}`,
                          regNo: service.registrationNumber,
                        });
                      }}
                      title="View full official photo"
                    >
                      <Eye size={13} />
                      <span>View Photo</span>
                    </button>
                  )}

                  {/* Multi-photo switcher pill bar */}
                  {service.gallery && service.gallery.length > 1 && (
                    <div className="card-gallery-switcher">
                      {service.gallery.map((item, gIdx) => {
                        const isActive = currentImg === item.url;
                        return (
                          <button
                            key={gIdx}
                            type="button"
                            className={`gallery-switch-btn ${isActive ? 'active' : ''}`}
                            onClick={(e) => handleSelectGalleryImage(service.id, item.url, e)}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
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
            );
          })}
        </div>
      </div>

      {/* Shared Lightbox Modal */}
      <PhotoLightboxModal
        data={lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </section>
  );
};
