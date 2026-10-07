import { Phone, Mail, MapPin, MessageSquare, Ambulance } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const Footer = () => {
  return (
    <footer className="main-footer" id="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div className="brand-icon-box" style={{ width: '38px', height: '38px' }}>
                <Ambulance size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0, color: '#FFFFFF' }}>JAY BAJRANGBALI</h3>
                <p className="tagline" style={{ margin: 0 }}>TRAVELS & AMBULANCE SERVICE</p>
              </div>
            </div>
            <p className="footer-about-text">
              Jay Bajrangbali Travels and Ambulance Service provides ambulance transportation, special transportation services, cars, travellers and bus services across India.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-form-whatsapp"
                style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'inline-flex', minWidth: 'auto' }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Helpline</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#ambulance-services">Ambulance Services</a></li>
              <li><a href="#ambulance-vehicles">Ambulance Vehicles</a></li>
              <li><a href="#travel-services">Travel & Transportation</a></li>
              <li><a href="#fleet">Complete Vehicle Fleet</a></li>
              <li><a href="#special-services">Special Transportation</a></li>
              <li><a href="#all-india">All India Service</a></li>
              <li><a href="#about">About Our Services</a></li>
              <li><a href="#enquiry">Book & Enquire</a></li>
            </ul>
          </div>

          {/* Special Services Column */}
          <div className="footer-col">
            <h4>Special & Medical</h4>
            <ul className="footer-links-list">
              <li><a href="#ambulance-services">ALS Ambulance Service</a></li>
              <li><a href="#ambulance-services">BLS Ambulance Service</a></li>
              <li><a href="#special-services">Freezer Box Service</a></li>
              <li><a href="#special-services">Swarga Ratha Service</a></li>
              <li><a href="#special-services">Horse Van Service</a></li>
              <li><a href="#special-services">Oxygen Concentrator Enquiries</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h4>Direct Contact</h4>
            <div className="footer-contact-item">
              <Phone size={18} color="#EF4444" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <span className="label">Primary Ambulance & Booking</span>
                <a href={`tel:${businessInfo.phone1Raw}`}>{businessInfo.phone1}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} color="#38BDF8" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <span className="label">Alternate Phone Line</span>
                <a href={`tel:${businessInfo.phone2Raw}`}>{businessInfo.phone2}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} color="#CBD5E1" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <span className="label">Email Enquiries</span>
                <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} color="#F59E0B" style={{ marginTop: '3px', flexShrink: 0 }} />
              <div>
                <span className="label">Service Area</span>
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{businessInfo.serviceArea}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </div>
          <div>
            Dedicated medical & travel transit coordination across India.
          </div>
        </div>
      </div>
    </footer>
  );
};
