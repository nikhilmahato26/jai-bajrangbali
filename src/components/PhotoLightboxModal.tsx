import React, { useEffect } from 'react';
import { X, Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export interface LightboxData {
  imageUrl: string;
  title: string;
  subtitle?: string;
  regNo?: string;
  badge?: string;
}

interface PhotoLightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (data) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="als-lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo Preview: ${data.title}`}
    >
      <div
        className="als-lightbox-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="als-lightbox-close"
          onClick={onClose}
          aria-label="Close photo preview"
        >
          <X size={24} />
        </button>

        <div className="als-lightbox-body">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="als-lightbox-img"
          />
          <div className="als-lightbox-caption">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '6px' }}>
              <div className="als-lightbox-title">{data.title}</div>
              {data.regNo && (
                <span className="verified-unit-pill" style={{ fontSize: '0.74rem' }}>
                  Reg: {data.regNo}
                </span>
              )}
            </div>

            {data.subtitle && (
              <div className="als-lightbox-sub">
                {data.subtitle}
              </div>
            )}

            <div className="als-lightbox-actions">
              <a
                href={`tel:${businessInfo.phone1Raw}`}
                className="btn-primary-red"
                style={{ padding: '8px 16px', fontSize: '0.88rem' }}
              >
                <Phone size={16} /> Call {businessInfo.phone1}
              </a>
              <a
                href={`https://wa.me/916372616946?text=${encodeURIComponent(`Hello Jay Bajrangbali, I am enquiring about ${data.title} (${data.regNo || 'Service'}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-form-whatsapp"
                style={{ padding: '8px 16px', fontSize: '0.88rem' }}
              >
                <MessageSquare size={16} /> WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
