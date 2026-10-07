import React, { useState } from 'react';
import { X, Phone, MessageSquare, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  vehicleName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  serviceName = '',
  vehicleName = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const titleService = vehicleName || serviceName || 'Transportation Service';
  const isEmergency =
    serviceName.toLowerCase().includes('ambulance') ||
    vehicleName.toLowerCase().includes('ambulance') ||
    serviceName.toLowerCase().includes('freezer') ||
    serviceName.toLowerCase().includes('swarga');

  const handleWhatsApp = () => {
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and phone number to send via WhatsApp.');
      return;
    }
    const text = [
      'Hello Jay Bajrangbali Travels and Ambulance Service,',
      '',
      `I would like to enquire about: ${titleService}`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Pickup Location: ${pickup.trim() || 'Not specified'}`,
      `Destination: ${destination.trim() || 'Not specified'}`,
      `Date: ${date || 'As required'}`,
      `Vehicle / Service: ${vehicleName || serviceName}`,
      `Message: ${message.trim() || 'None'}`,
    ].join('\n');

    const url = `https://wa.me/916372616946?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !pickup.trim() || !destination.trim()) {
      setError('Please fill in Name, Phone, Pickup Location and Destination.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setName('');
    setPhone('');
    setPickup('');
    setDestination('');
    setDate('');
    setMessage('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={handleClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Quick Enquiry</h3>
            <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
              Selected: <strong style={{ color: '#0B132B' }}>{titleService}</strong>
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {isEmergency && (
            <div className="emergency-urgent-alert-box" style={{ marginBottom: '16px', padding: '12px 16px' }}>
              <div className="alert-top-row" style={{ fontSize: '0.88rem' }}>
                <AlertTriangle size={18} className="text-red-600" />
                <span>For urgent requirements, please call directly:</span>
              </div>
              <div className="alert-phones-row">
                <a href={`tel:${businessInfo.phone1Raw}`} className="alert-phone-link" style={{ fontSize: '0.84rem', padding: '6px 12px' }}>
                  <Phone size={14} />
                  <span>{businessInfo.phone1}</span>
                </a>
                <a href={`tel:${businessInfo.phone2Raw}`} className="alert-phone-link" style={{ backgroundColor: '#0B132B', fontSize: '0.84rem', padding: '6px 12px' }}>
                  <Phone size={14} />
                  <span>{businessInfo.phone2}</span>
                </a>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="success-box" style={{ padding: '16px 0' }}>
              <div className="success-icon-wrap" style={{ width: '52px', height: '52px' }}>
                <CheckCircle size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Enquiry Logged</h4>
              <p style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '18px' }}>
                We have received your enquiry for <strong>{titleService}</strong>. Our team will contact you shortly at <strong>{phone}</strong>.
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <a href={`tel:${businessInfo.phone1Raw}`} className="btn-primary-red" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                  <Phone size={16} /> Call {businessInfo.phone1}
                </a>
                <button type="button" onClick={handleClose} className="btn-card-enquire" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {error && (
                <div style={{ color: '#DC2626', backgroundColor: '#FEE2E2', padding: '10px 14px', borderRadius: '6px', fontSize: '0.86rem' }}>
                  {error}
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Full Name <span className="req">*</span></label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number <span className="req">*</span></label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 9876543210"
                  className="form-input"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label">Pickup Location <span className="req">*</span></label>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup address"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Destination <span className="req">*</span></label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination address"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Date <span className="opt">(Optional)</span></label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Special Requirements / Message <span className="opt">(Optional)</span></label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any requirements or questions..."
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button type="submit" className="btn-form-submit" style={{ padding: '12px 18px', fontSize: '0.92rem' }}>
                  <Send size={16} />
                  <span>Submit Details</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="btn-form-whatsapp"
                  style={{ padding: '12px 18px', fontSize: '0.92rem' }}
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
