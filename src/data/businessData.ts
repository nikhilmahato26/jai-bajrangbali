export interface BusinessContact {
  name: string;
  phone1: string;
  phone1Raw: string;
  phone2: string;
  phone2Raw: string;
  email: string;
  address: string;
  city: string;
  serviceArea: string;
  whatsappUrl: string;
}

export const businessInfo: BusinessContact = {
  name: 'Jay Bajrangbali Travels and Ambulance Service',
  phone1: '+91 6372616946',
  phone1Raw: '+916372616946',
  phone2: '+91 7064013879',
  phone2Raw: '+917064013879',
  email: 'biswojitbehera1204@gmail.com',
  address: 'FM Medical College, Balasore, 756001, Odisha',
  city: 'Balasore, Odisha',
  serviceArea: 'Balasore & All Over India',
  whatsappUrl: 'https://wa.me/916372616946',
};

export interface QuickServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'ambulance' | 'heart-pulse' | 'car' | 'shield-check';
  category: 'ambulance' | 'travel' | 'special';
  link: string;
}

export const quickServices: QuickServiceItem[] = [
  {
    id: 'als-ambulance-quick',
    title: 'ALS Ambulance Service',
    subtitle: 'Advanced ICU, cardiac care & oxygen support.',
    iconName: 'heart-pulse',
    category: 'ambulance',
    link: '#ambulance-services',
  },
  {
    id: 'bls-ambulance-quick',
    title: 'BLS Ambulance',
    subtitle: 'Basic life-support ambulance service.',
    iconName: 'ambulance',
    category: 'ambulance',
    link: '#ambulance-services',
  },
  {
    id: 'travel-services-quick',
    title: 'Travel Services',
    subtitle: 'Cars, travellers and buses.',
    iconName: 'car',
    category: 'travel',
    link: '#travel-services',
  },
  {
    id: 'special-transport-quick',
    title: 'Special Transportation',
    subtitle: 'Oxygen Concentrator, Freezer, Horse Van & Swarga Ratha.',
    iconName: 'shield-check',
    category: 'special',
    link: '#special-services',
  },
];

export interface SpecialServiceItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  ctaText: string;
  ctaType: 'call' | 'enquire' | 'contact';
}

export const specialServices: SpecialServiceItem[] = [
  {
    id: 'als-service',
    name: 'ALS Ambulance Service',
    badge: 'ICU & Cardiac Care',
    description: 'Advanced Life Support (ALS) ICU ambulance with oxygen support, cardiac care, stretcher service, and trained medical staff.',
    image: '/images/als_ambulance.jpg',
    ctaText: 'Call ALS Ambulance',
    ctaType: 'call',
  },
  {
    id: 'oxygen-service',
    name: 'Oxygen Concentrator Service',
    badge: 'Medical Oxygen Support',
    description: '24/7 Oxygen concentrator rental and supply service for patient respiratory therapy, in-transit oxygen, and home medical support.',
    image: '/images/oxygen_concentrator.jpg',
    ctaText: 'Enquire for Oxygen',
    ctaType: 'enquire',
  },
  {
    id: 'bls-service',
    name: 'BLS Ambulance',
    badge: 'Medical Transport',
    description: 'Ambulance transportation service for basic life-support requirements and patient transit.',
    image: '/images/force_traveller_ambulance.jpg',
    ctaText: 'Call for Ambulance',
    ctaType: 'call',
  },
  {
    id: 'freezer-service',
    name: 'Freezer Service',
    badge: 'Preservation & Transport',
    description: 'Freezer box service available for preservation, transportation, and related requirements.',
    image: '/images/freezer_service.jpg',
    ctaText: 'Enquire Now',
    ctaType: 'enquire',
  },
  {
    id: 'horse-van-service',
    name: 'Horse Van',
    badge: 'Specialized Transport',
    description: 'Horse Van transportation service. Contact us for availability and route scheduling.',
    image: '/images/horse_van.jpg',
    ctaText: 'Contact Us',
    ctaType: 'enquire',
  },
  {
    id: 'swarga-ratha-service',
    name: 'Swarga Ratha',
    badge: 'Dignified Transport',
    description: 'Respectful and dignified transportation service for final journey arrangements.',
    image: '/images/swarga_ratha.jpg',
    ctaText: 'Contact Us',
    ctaType: 'contact',
  },
];

export interface TravelServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const travelServicesList: TravelServiceCategory[] = [
  {
    id: 'car-service',
    name: 'Car Service',
    description: 'Travel using available car options for outstation journeys, personal travel, and long-distance transfers.',
    icon: 'car',
  },
  {
    id: 'traveller-service',
    name: 'Traveller Service',
    description: 'Traveller vehicles for group travel requirements with comfortable seating arrangements.',
    icon: 'van',
  },
  {
    id: 'bus-service',
    name: 'Bus Service',
    description: 'Bus transportation services for large group travel, family events, and extended journeys across India.',
    icon: 'bus',
  },
  {
    id: 'outstation-travel',
    name: 'Outstation Travel',
    description: 'Transportation services available across India, accommodating varied route and schedule requirements.',
    icon: 'map-pin',
  },
];

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    id: 'multiple-options',
    title: 'Multiple Transportation Options',
    description: 'Ambulances, cars, travellers and buses available under a single coordinated service.',
    icon: 'grid',
  },
  {
    id: 'all-india-service',
    title: 'All India Service',
    description: 'Services are available across India to suit intercity and interstate transportation requirements.',
    icon: 'globe',
  },
  {
    id: 'ambulance-options',
    title: 'Ambulance Options',
    description: 'ALS, BLS and multiple ambulance vehicle options tailored to patient needs.',
    icon: 'heart-pulse',
  },
  {
    id: 'special-transportation',
    title: 'Special Transportation',
    description: 'Freezer, Horse Van, Swarga Ratha and oxygen concentrator services handled respectfully.',
    icon: 'shield',
  },
  {
    id: 'easy-contact',
    title: 'Easy Contact',
    description: 'Two direct phone numbers for enquiries with immediate phone and WhatsApp connectivity.',
    icon: 'phone-call',
  },
  {
    id: 'travel-services',
    title: 'Travel Services',
    description: 'Vehicle options for different travel requirements from sedans and SUVs to travellers and buses.',
    icon: 'compass',
  },
];
