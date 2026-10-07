import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBar } from './components/EmergencyBar';
import { QuickServices } from './components/QuickServices';
import { AboutSection } from './components/AboutSection';
import { AmbulanceServicesSection } from './components/AmbulanceServicesSection';
import { AmbulanceCallCTA } from './components/AmbulanceCallCTA';
import { AmbulanceVehiclesSection } from './components/AmbulanceVehiclesSection';
import { TravelServicesSection } from './components/TravelServicesSection';
import { FleetFilterSection } from './components/FleetFilterSection';
import { SpecialTransportationSection } from './components/SpecialTransportationSection';
import { AllIndiaServiceSection } from './components/AllIndiaServiceSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import type { Vehicle, FleetCategory } from './data/fleetData';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');
  const [modalVehicle, setModalVehicle] = useState('');

  // Form prefill state if user wants to scroll to form
  const [formPrefillService, setFormPrefillService] = useState<string | undefined>(undefined);
  const [formPrefillVehicle, setFormPrefillVehicle] = useState<string | undefined>(undefined);
  const [activeFleetFilter, setActiveFleetFilter] = useState<'All' | FleetCategory>('All');

  const handleOpenModal = (serviceName: string, vehicleName?: string) => {
    setModalService(serviceName);
    setModalVehicle(vehicleName || '');
    setModalOpen(true);
  };

  const handleEnquireVehicle = (vehicle: Vehicle) => {
    handleOpenModal(vehicle.serviceTag || vehicle.category, vehicle.name);
  };

  const handleSelectTravelCategory = (cat: string) => {
    if (cat === 'Cars' || cat === 'Traveller' || cat === 'Bus') {
      setActiveFleetFilter(cat as FleetCategory);
    }
    const fleetEl = document.getElementById('fleet');
    if (fleetEl) fleetEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* 1. Header & Navigation */}
      <Header />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Emergency Contact Bar */}
        <EmergencyBar />

        {/* 4. Quick Service Cards */}
        <QuickServices />

        {/* 5. About Section */}
        <AboutSection />

        {/* 6. Ambulance Services Section */}
        <AmbulanceServicesSection onEnquire={(svc) => handleOpenModal(svc)} />

        {/* 7. Ambulance Call CTA */}
        <AmbulanceCallCTA />

        {/* 8. Ambulance Vehicle Fleet Section */}
        <AmbulanceVehiclesSection onEnquire={(veh) => handleOpenModal('Ambulance Service', veh)} />

        {/* 9. Travel & Transportation Services Section */}
        <TravelServicesSection onSelectCategory={handleSelectTravelCategory} />

        {/* 10. Unified Fleet & Travel Vehicles with Dynamic Filter */}
        <FleetFilterSection
          onEnquireVehicle={handleEnquireVehicle}
          initialFilter={activeFleetFilter}
        />

        {/* 11. Special Transportation Section */}
        <SpecialTransportationSection onEnquire={(svc) => handleOpenModal(svc)} />

        {/* 12. All India Service Section */}
        <AllIndiaServiceSection />

        {/* 13. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 14. Booking & Enquiry Section with Emergency Form UX & WhatsApp */}
        <EnquiryFormSection
          prefilledService={formPrefillService}
          prefilledVehicle={formPrefillVehicle}
          onClearPrefill={() => {
            setFormPrefillService(undefined);
            setFormPrefillVehicle(undefined);
          }}
        />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Quick Enquiry Pop-up Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={modalService}
        vehicleName={modalVehicle}
      />

      {/* 17. Sticky Mobile Bar & Floating WhatsApp */}
      <MobileStickyBar />
    </div>
  );
}

export default App;
