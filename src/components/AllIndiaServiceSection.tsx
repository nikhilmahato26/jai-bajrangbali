import React from 'react';
import { Globe, MapPin, CheckCircle, PhoneCall, Info } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const AllIndiaServiceSection: React.FC = () => {
  return (
    <section className="section all-india-section" id="all-india" aria-label="All India Service Coverage">
      <div className="container">
        <div className="all-india-grid">
          {/* Content Left */}
          <div className="all-india-content">
            <div className="section-eyebrow navy">
              <Globe size={16} />
              <span>NATIONWIDE REACH</span>
            </div>

            <h2>SERVING CUSTOMERS ACROSS INDIA</h2>

            <p className="all-india-desc">
              Jay Bajrangbali Travels and Ambulance Service provides its listed transportation services across India.
            </p>

            <div className="all-india-note-box">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Info size={20} color="#38BDF8" style={{ marginTop: '2px', flexShrink: 0 }} />
                <p className="all-india-note-text">
                  <strong>Important Notice:</strong> Availability depends on the service and requirement. Contact us to enquire.
                </p>
              </div>
            </div>

            <div className="all-india-features">
              <div className="all-india-feat-item">
                <CheckCircle size={18} className="all-india-feat-icon" />
                <span className="all-india-feat-text">Inter-state patient medical transfers</span>
              </div>
              <div className="all-india-feat-item">
                <CheckCircle size={18} className="all-india-feat-icon" />
                <span className="all-india-feat-text">Outstation family & pilgrimage tours</span>
              </div>
              <div className="all-india-feat-item">
                <CheckCircle size={18} className="all-india-feat-icon" />
                <span className="all-india-feat-text">Group traveller & bus coordination</span>
              </div>
              <div className="all-india-feat-item">
                <CheckCircle size={18} className="all-india-feat-icon" />
                <span className="all-india-feat-text">Respectful long-distance mortal transfers</span>
              </div>
            </div>

            <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={`tel:${businessInfo.phone1Raw}`}
                className="btn-primary-red"
                id="all-india-call-btn"
              >
                <PhoneCall size={18} />
                <span>Enquire Routes: {businessInfo.phone1}</span>
              </a>
              <a
                href="#enquiry"
                className="btn-secondary-navy"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
                id="all-india-form-btn"
              >
                <span>Submit Location Details</span>
              </a>
            </div>
          </div>

          {/* Map Graphic Right */}
          <div className="all-india-map-container">
            <svg
              className="india-svg-map"
              viewBox="0 0 500 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Subtle map representation of India transit routes"
            >
              {/* Stylized background glow */}
              <circle cx="250" cy="280" r="180" fill="radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)" />

              {/* Simplified geographic boundary silhouette of India */}
              <path
                d="M195 45 C220 20, 270 30, 285 65 C305 75, 340 100, 320 135 C345 130, 395 140, 420 180 C440 205, 410 240, 390 230 C380 250, 350 250, 335 270 C350 290, 330 350, 300 390 C280 430, 250 490, 235 525 C225 490, 200 440, 180 390 C160 360, 145 320, 130 280 C110 260, 85 240, 95 210 C105 180, 135 180, 150 150 C160 120, 155 85, 195 45 Z"
                fill="#1E293B"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeDasharray="4 2"
                opacity="0.85"
              />

              {/* Major arterial transit corridors across India */}
              {/* North-South Corridor */}
              <path
                d="M235 90 L240 180 L235 280 L230 400 L235 500"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeDasharray="6 3"
                opacity="0.9"
              />

              {/* East-West Corridor */}
              <path
                d="M120 230 L220 240 L330 250 L400 210"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeDasharray="6 3"
                opacity="0.9"
              />

              {/* Diagonal Corridors */}
              <path
                d="M235 120 L330 270 L260 440"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.75"
              />
              <path
                d="M140 240 L240 290 L235 500"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.75"
              />

              {/* Major service transit hubs */}
              {/* North (Delhi/NCR area) */}
              <g transform="translate(235, 130)">
                <circle cx="0" cy="0" r="10" fill="rgba(239, 68, 68, 0.25)" />
                <circle cx="0" cy="0" r="5" fill="#EF4444" />
                <text x="14" y="4" fill="#FFFFFF" fontSize="12" fontWeight="700">North Region</text>
              </g>

              {/* Central (Central India) */}
              <g transform="translate(235, 260)">
                <circle cx="0" cy="0" r="10" fill="rgba(56, 189, 248, 0.25)" />
                <circle cx="0" cy="0" r="5" fill="#38BDF8" />
                <text x="14" y="4" fill="#FFFFFF" fontSize="12" fontWeight="700">Central Corridors</text>
              </g>

              {/* West */}
              <g transform="translate(145, 270)">
                <circle cx="0" cy="0" r="9" fill="rgba(245, 158, 11, 0.25)" />
                <circle cx="0" cy="0" r="5" fill="#F59E0B" />
                <text x="-85" y="4" fill="#FFFFFF" fontSize="12" fontWeight="700">Western Zone</text>
              </g>

              {/* East */}
              <g transform="translate(340, 265)">
                <circle cx="0" cy="0" r="9" fill="rgba(16, 185, 129, 0.25)" />
                <circle cx="0" cy="0" r="5" fill="#10B981" />
                <text x="14" y="4" fill="#FFFFFF" fontSize="12" fontWeight="700">Eastern Zone</text>
              </g>

              {/* South */}
              <g transform="translate(235, 450)">
                <circle cx="0" cy="0" r="9" fill="rgba(56, 189, 248, 0.25)" />
                <circle cx="0" cy="0" r="5" fill="#38BDF8" />
                <text x="14" y="4" fill="#FFFFFF" fontSize="12" fontWeight="700">Southern Zone</text>
              </g>
            </svg>

            <div className="map-badge-overlay">
              <MapPin size={16} color="#38BDF8" />
              <span>Service availability tailored to individual requirement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
