import React, { useState } from 'react';
import { Shield, CalendarCheck, Phone, Eye } from 'lucide-react';
import { specialServices, businessInfo } from '../data/businessData';
import { PhotoLightboxModal, type LightboxData } from './PhotoLightboxModal';

interface SpecialTransportationProps {
  onEnquire: (serviceName: string) => void;
}

export const SpecialTransportationSection: React.FC<SpecialTransportationProps> = ({ onEnquire }) => {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [activeCardImage, setActiveCardImage] = useState<Record<string, string>>({
    'freezer-service': '/images/freezer_service.jpg',
    'swarga-ratha-service': '/images/swarga_ratha.jpg',
  });

  const cardGalleries: Record<string, { label: string; url: string }[]> = {
    'freezer-service': [
      { label: 'Exterior Van', url: '/images/freezer_service.jpg' },
      { label: 'Freezer Chamber', url: '/images/swarga_ratha.jpg' },
    ],
    'swarga-ratha-service': [
      { label: 'Attendant Cabin & Chamber', url: '/images/swarga_ratha.jpg' },
      { label: 'Exterior Van', url: '/images/freezer_service.jpg' },
    ],
  };

  const handleSelectGalleryImage = (serviceId: string, url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardImage((prev) => ({ ...prev, [serviceId]: url }));
  };

  const getCurrentImage = (serviceId: string, defaultImg: string) => {
    return activeCardImage[serviceId] || defaultImg;
  };

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
            Oxygen Concentrator rentals, Dead Body Freezer vans, Swarga Ratha, and specialized transit handled with utmost dignity and care across India.
          </p>
        </div>

        <div className="special-cards-grid">
          {specialServices.map((item) => {
            const currentImg = getCurrentImage(item.id, item.image);
            const gallery = cardGalleries[item.id];
            const isVerifiedUnit = item.id === 'freezer-service' || item.id === 'swarga-ratha-service' || item.id === 'als-service';

            return (
              <div key={item.id} className="special-service-card" id={`special-card-${item.id}`}>
                <div
                  className="special-card-media"
                  style={{ cursor: isVerifiedUnit ? 'pointer' : 'default', position: 'relative' }}
                  onClick={() => {
                    if (isVerifiedUnit) {
                      setLightboxData({
                        imageUrl: currentImg,
                        title: item.name,
                        subtitle: `${item.description} • Balasore & All Over India`,
                        regNo: item.id === 'freezer-service' || item.id === 'swarga-ratha-service' ? 'OD02DJ8138' : (item.id === 'als-service' ? 'CG15DT4039' : undefined),
                      });
                    }
                  }}
                >
                  <img
                    src={currentImg}
                    alt={item.name}
                    className="special-card-img"
                    loading="lazy"
                  />
                  <span className="special-badge-tag">{item.badge}</span>

                  {isVerifiedUnit && (
                    <button
                      type="button"
                      className="als-card-zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxData({
                          imageUrl: currentImg,
                          title: item.name,
                          subtitle: `${item.description} • Balasore & All Over India`,
                          regNo: item.id === 'freezer-service' || item.id === 'swarga-ratha-service' ? 'OD02DJ8138' : (item.id === 'als-service' ? 'CG15DT4039' : undefined),
                        });
                      }}
                      title="View full official photo"
                    >
                      <Eye size={13} />
                      <span>View Photo</span>
                    </button>
                  )}

                  {/* Multi-photo switcher pill bar */}
                  {gallery && gallery.length > 1 && (
                    <div className="card-gallery-switcher">
                      {gallery.map((gItem, gIdx) => {
                        const isActive = currentImg === gItem.url;
                        return (
                          <button
                            key={gIdx}
                            type="button"
                            className={`gallery-switch-btn ${isActive ? 'active' : ''}`}
                            onClick={(e) => handleSelectGalleryImage(item.id, gItem.url, e)}
                          >
                            {gItem.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="special-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <h3 className="special-card-name">{item.name}</h3>
                    {isVerifiedUnit && (
                      <span className="verified-unit-pill" style={{ fontSize: '0.7rem' }}>
                        Verified Unit
                      </span>
                    )}
                  </div>

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
