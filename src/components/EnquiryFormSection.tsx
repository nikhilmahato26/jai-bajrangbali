import { useState, useEffect } from 'react';
import { Phone, PhoneCall, Send, MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/businessData';
import { allFleetVehicles } from '../data/fleetData';

export const serviceOptionsList = [
  'ALS Ambulance',
  'BLS Ambulance',
  'Bolero Ambulance',
  'Eco Ambulance',
  'Force Traveller Ambulance',
  'Tata Winger Ambulance',
  'Omni Ambulance',
  'Freezer',
  'Horse Van',
  'Swarga Ratha',
  'Oxygen Concentrator',
  'Car Service',
  'Traveller Service',
  'Bus Service',
  'Other',
];

const ambulanceServicesSet = new Set([
  'ALS Ambulance',
  'BLS Ambulance',
  'Bolero Ambulance',
  'Eco Ambulance',
  'Force Traveller Ambulance',
  'Tata Winger Ambulance',
  'Omni Ambulance',
  'Freezer',
  'Swarga Ratha',
  'Oxygen Concentrator',
]);

interface EnquiryFormSectionProps {
  prefilledService?: string;
  prefilledVehicle?: string;
  onClearPrefill?: () => void;
}

export const EnquiryFormSection: React.FC<EnquiryFormSectionProps> = ({
  prefilledService,
  prefilledVehicle,
  onClearPrefill,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(serviceOptionsList[0]);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [preferredVehicle, setPreferredVehicle] = useState('Any Suitable Vehicle');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle prefill updates when user clicks "Enquire" on any card
  useEffect(() => {
    if (prefilledService) {
      // Find matching option or set exact
      const match = serviceOptionsList.find(
        (s) => s.toLowerCase() === prefilledService.toLowerCase()
      );
      if (match) {
        setServiceRequired(match);
      } else {
        setServiceRequired(prefilledService);
      }
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledVehicle) {
      setPreferredVehicle(prefilledVehicle);
    }
  }, [prefilledVehicle]);

  // Is urgent emergency service selected?
  const isEmergencyService = ambulanceServicesSet.has(serviceRequired);

  const generateWhatsAppMessage = () => {
    const lines = [
      'Hello Jay Bajrangbali Travels and Ambulance Service,',
      '',
      'I would like to enquire about your service.',
      '',
      `Name: ${fullName.trim() || 'Not specified'}`,
      `Phone: ${phoneNumber.trim() || 'Not specified'}`,
      `Service Required: ${serviceRequired}`,
      `Pickup Location: ${pickupLocation.trim() || 'Not specified'}`,
      `Destination: ${destination.trim() || 'Not specified'}`,
      `Date: ${travelDate || 'As soon as possible'}`,
      `Preferred Vehicle: ${preferredVehicle || 'Not specified'}`,
      `Message: ${message.trim() || 'None'}`,
    ];
    return lines.join('\n');
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMessage('Please fill in at least your Full Name and Phone Number to start WhatsApp chat.');
      return;
    }
    setErrorMessage('');
    const rawMsg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(rawMsg);
    const url = `https://wa.me/916372616946?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim() || !pickupLocation.trim() || !destination.trim()) {
      setErrorMessage('Please fill in all required fields: Full Name, Phone Number, Pickup Location, and Destination.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
    if (onClearPrefill) onClearPrefill();
  };

  const resetForm = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPickupLocation('');
    setDestination('');
    setTravelDate('');
    setMessage('');
    setPreferredVehicle('Any Suitable Vehicle');
    setSubmitted(false);
  };

  return (
    <section className="section enquiry-section" id="enquiry" aria-label="Booking and Enquiry">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Send size={16} />
            <span>DIRECT ENQUIRY & BOOKING</span>
          </div>
          <h2 className="section-title">TELL US WHAT YOU NEED</h2>
          <p className="section-subtitle">
            Fill in your transport details below for a fast response, or call our direct phone lines for immediate assistance.
          </p>
        </div>

        <div className="enquiry-card-wrapper">
          {/* Section 21: EMERGENCY FORM UX - If ambulance service selected */}
          {isEmergencyService && (
            <div className="emergency-urgent-alert-box" role="alert">
              <div className="alert-top-row">
                <AlertTriangle size={22} className="text-red-600 flex-shrink-0" />
                <span>For urgent ambulance requirements, please call directly:</span>
              </div>
              <div className="alert-phones-row">
                <a
                  href={`tel:${businessInfo.phone1Raw}`}
                  className="alert-phone-link"
                  id="urgent-call-phone1-btn"
                >
                  <PhoneCall size={16} />
                  <span>{businessInfo.phone1}</span>
                </a>
                <a
                  href={`tel:${businessInfo.phone2Raw}`}
                  className="alert-phone-link"
                  style={{ backgroundColor: '#0B132B' }}
                  id="urgent-call-phone2-btn"
                >
                  <Phone size={16} />
                  <span>{businessInfo.phone2}</span>
                </a>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="success-box">
              <div className="success-icon-wrap">
                <CheckCircle size={36} />
              </div>
              <h3 className="success-title">Enquiry Received</h3>
              <p className="success-desc">
                Thank you, <strong>{fullName}</strong>. Your enquiry for <strong>{serviceRequired}</strong> from <strong>{pickupLocation}</strong> to <strong>{destination}</strong> has been logged.
                Our coordinator will contact you promptly at <strong>{phoneNumber}</strong>.
              </p>
              <div className="success-actions">
                <a
                  href={`tel:${businessInfo.phone1Raw}`}
                  className="btn-primary-red"
                >
                  <PhoneCall size={18} />
                  <span>Call {businessInfo.phone1}</span>
                </a>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="btn-form-whatsapp"
                >
                  <MessageSquare size={18} />
                  <span>Confirm on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-card-enquire"
                  style={{ padding: '14px 20px' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {errorMessage && (
                <div style={{ color: '#DC2626', backgroundColor: '#FEE2E2', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.92rem' }}>
                  {errorMessage}
                </div>
              )}

              <div className="enquiry-form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="form-input"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    className="form-input"
                    required
                  />
                </div>

                {/* Email (Optional) */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="opt">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="form-input"
                  />
                </div>

                {/* Service Required (Dropdown) */}
                <div className="form-group">
                  <label htmlFor="serviceRequired" className="form-label">
                    Service Required <span className="req">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="form-select"
                    required
                  >
                    {serviceOptionsList.map((svc) => (
                      <option key={svc} value={svc}>
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pickup Location */}
                <div className="form-group">
                  <label htmlFor="pickupLocation" className="form-label">
                    Pickup Location <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="City, hospital, or address"
                    className="form-input"
                    required
                  />
                </div>

                {/* Destination */}
                <div className="form-group">
                  <label htmlFor="destination" className="form-label">
                    Destination <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Destination city, hospital, or address"
                    className="form-input"
                    required
                  />
                </div>

                {/* Date (Optional) */}
                <div className="form-group">
                  <label htmlFor="travelDate" className="form-label">
                    Date <span className="opt">(Optional / As required)</span>
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="form-input"
                  />
                </div>

                {/* Preferred Vehicle (Dropdown populated from fleet data) */}
                <div className="form-group">
                  <label htmlFor="preferredVehicle" className="form-label">
                    Preferred Vehicle <span className="opt">(Optional)</span>
                  </label>
                  <select
                    id="preferredVehicle"
                    name="preferredVehicle"
                    value={preferredVehicle}
                    onChange={(e) => setPreferredVehicle(e.target.value)}
                    className="form-select"
                  >
                    <option value="Any Suitable Vehicle">Any Suitable Vehicle</option>
                    {allFleetVehicles.map((veh) => (
                      <option key={veh.id} value={veh.name}>
                        {veh.name} ({veh.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message (Optional) */}
                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">
                    Message <span className="opt">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide any additional details or requirements..."
                    className="form-textarea"
                  />
                </div>

                {/* Action Buttons: Form Submit & WhatsApp Integration */}
                <div className="form-actions-row">
                  <button
                    type="submit"
                    className="btn-form-submit"
                    id="enquiry-submit-btn"
                  >
                    <Send size={18} />
                    <span>SEND ENQUIRY</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="btn-form-whatsapp"
                    id="enquiry-whatsapp-btn"
                    title="Send Details via WhatsApp"
                  >
                    <MessageSquare size={18} />
                    <span>ENQUIRE VIA WHATSAPP</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
