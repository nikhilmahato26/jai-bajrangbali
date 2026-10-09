import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Ambulance } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-notice-bar" id="top">
        <div className="container">
          <div className="top-notice-inner">
            <div className="top-notice-left">
              <span className="top-info-item">
                <MapPin size={14} className="text-red-500" />
                <span>Base: <strong>FM Medical College, Balasore</strong> | <strong>All India Service</strong></span>
              </span>
              <span className="top-info-item">
                <Mail size={14} />
                <a href={`mailto:${businessInfo.email}`} id="top-email-link">
                  {businessInfo.email}
                </a>
              </span>
            </div>
            <div className="top-notice-right">
              <span className="top-info-item">
                <Phone size={14} />
                <a href={`tel:${businessInfo.phone1Raw}`} id="top-phone1-link">
                  {businessInfo.phone1}
                </a>
              </span>
              <span className="top-info-item">
                <Phone size={14} />
                <a href={`tel:${businessInfo.phone2Raw}`} id="top-phone2-link">
                  {businessInfo.phone2}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="main-header">
        <div className="container header-container">
          {/* Temporary Brand Treatment: Structured for easy replacement if real logo is provided */}
          <a href="#top" className="brand-identity" id="brand-logo-link" aria-label={businessInfo.name}>
            <div className="brand-icon-box" aria-hidden="true">
              <Ambulance size={26} strokeWidth={2.2} />
            </div>
            <div className="brand-text-block">
              <span className="brand-primary-name">JAY BAJRANGBALI</span>
              <span className="brand-secondary-name">TRAVELS & AMBULANCE SERVICE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            <a href="#ambulance-services" className="nav-link" id="nav-ambulance">Ambulance Services</a>
            <a href="#travel-services" className="nav-link" id="nav-travel">Travel Services</a>
            <a href="#fleet" className="nav-link" id="nav-fleet">Vehicle Fleet</a>
            <a href="#special-services" className="nav-link" id="nav-special">Special Services</a>
            <a href="#all-india" className="nav-link" id="nav-coverage">All India</a>
            <a href="#about" className="nav-link" id="nav-about">About</a>
            <a href="#enquiry" className="nav-link" id="nav-contact">Contact & Enquiry</a>
          </nav>

          {/* Header Action Button */}
          <div className="header-cta-group">
            <a
              href={`tel:${businessInfo.phone1Raw}`}
              className="btn-header-call"
              id="header-ambulance-call-btn"
              title="Call for Ambulance"
            >
              <Phone size={16} />
              <span>Call Ambulance</span>
            </a>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <nav className="mobile-nav-panel" aria-label="Mobile Navigation">
            <a href="#ambulance-services" onClick={() => setMobileMenuOpen(false)}>Ambulance Services</a>
            <a href="#travel-services" onClick={() => setMobileMenuOpen(false)}>Travel & Transportation</a>
            <a href="#fleet" onClick={() => setMobileMenuOpen(false)}>Vehicle Fleet (Ambulances & Cars)</a>
            <a href="#special-services" onClick={() => setMobileMenuOpen(false)}>Special Transportation</a>
            <a href="#all-india" onClick={() => setMobileMenuOpen(false)}>All India Coverage</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Business</a>
            <a href="#enquiry" onClick={() => setMobileMenuOpen(false)}>Book / Enquire</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px' }}>
              <a
                href={`tel:${businessInfo.phone1Raw}`}
                className="btn-primary-red"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
              >
                <Phone size={18} /> Call Ambulance: {businessInfo.phone1}
              </a>
              <a
                href={`tel:${businessInfo.phone2Raw}`}
                className="btn-secondary-navy"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
              >
                <Phone size={18} /> Alternate: {businessInfo.phone2}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
