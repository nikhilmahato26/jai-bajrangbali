export type FleetCategory = 'Ambulance' | 'Cars' | 'Traveller' | 'Bus';

export interface Vehicle {
  id: string;
  name: string;
  category: FleetCategory;
  typeBadge: string;
  image: string;
  description: string;
  isEmergency?: boolean;
  serviceTag?: string;
}

export const ambulanceFleet: Vehicle[] = [
  {
    id: 'amb-bolero',
    name: 'Bolero Ambulance',
    category: 'Ambulance',
    typeBadge: 'Medical Fleet',
    image: '/images/bolero_ambulance.jpg',
    description: 'Enquire for details regarding Bolero ambulance transportation.',
    isEmergency: true,
    serviceTag: 'Bolero Ambulance',
  },
  {
    id: 'amb-eco',
    name: 'Eco Ambulance',
    category: 'Ambulance',
    typeBadge: 'Medical Fleet',
    image: '/images/eco_ambulance.jpg',
    description: 'Enquire for details regarding Eco ambulance transportation.',
    isEmergency: true,
    serviceTag: 'Eco Ambulance',
  },
  {
    id: 'amb-force-traveller',
    name: 'Force Traveller Ambulance',
    category: 'Ambulance',
    typeBadge: 'Medical Fleet',
    image: '/images/force_traveller_ambulance.jpg',
    description: 'Enquire for details regarding Force Traveller ambulance transportation.',
    isEmergency: true,
    serviceTag: 'Force Traveller Ambulance',
  },
  {
    id: 'amb-tata-winger',
    name: 'Tata Winger Ambulance',
    category: 'Ambulance',
    typeBadge: 'Medical Fleet',
    image: '/images/tata_winger_ambulance.jpg',
    description: 'Enquire for details regarding Tata Winger ambulance transportation.',
    isEmergency: true,
    serviceTag: 'Tata Winger Ambulance',
  },
  {
    id: 'amb-omni',
    name: 'Omni Ambulance',
    category: 'Ambulance',
    typeBadge: 'Medical Fleet',
    image: '/images/omni_ambulance.jpg',
    description: 'Enquire for details regarding Omni ambulance transportation.',
    isEmergency: true,
    serviceTag: 'Omni Ambulance',
  },
];

export const travelFleet: Vehicle[] = [
  {
    id: 'travel-mahindra-bolero',
    name: 'Mahindra Bolero',
    category: 'Cars',
    typeBadge: 'Rugged SUV',
    image: '/images/bolero.jpg',
    description: 'Enquire for details regarding Mahindra Bolero travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-ford-ecosport',
    name: 'Ford EcoSport',
    category: 'Cars',
    typeBadge: 'Compact SUV',
    image: '/images/ecosport.jpg',
    description: 'Enquire for details regarding Ford EcoSport travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'Cars',
    typeBadge: 'Family MPV',
    image: '/images/maruti_ertiga.jpg',
    description: 'Enquire for details regarding Maruti Suzuki Ertiga travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-toyota-innova',
    name: 'Toyota Innova',
    category: 'Cars',
    typeBadge: 'Premium MUV',
    image: '/images/toyota_innova.jpg',
    description: 'Enquire for details regarding Toyota Innova travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-kia-carens',
    name: 'Kia Carens',
    category: 'Cars',
    typeBadge: 'Modern MPV',
    image: '/images/carens.jpg',
    description: 'Enquire for details regarding Kia Carens travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-maruti-dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Cars',
    typeBadge: 'Sedan',
    image: '/images/dzire.jpg',
    description: 'Enquire for details regarding Maruti Suzuki Dzire travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-hyundai-aura',
    name: 'Hyundai Aura',
    category: 'Cars',
    typeBadge: 'Compact Sedan',
    image: '/images/aura.png',
    description: 'Enquire for details regarding Hyundai Aura travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-mahindra-scorpio',
    name: 'Mahindra Scorpio',
    category: 'Cars',
    typeBadge: 'Power SUV',
    image: '/images/scorpio.jpg',
    description: 'Enquire for details regarding Mahindra Scorpio travel availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-audi',
    name: 'Audi',
    category: 'Cars',
    typeBadge: 'Luxury Sedan',
    image: '/images/audi.jpg',
    description: 'Enquire for details regarding Audi luxury car availability.',
    isEmergency: false,
    serviceTag: 'Car Service',
  },
  {
    id: 'travel-bus',
    name: 'Bus',
    category: 'Bus',
    typeBadge: 'Group Coach',
    image: '/images/bus.png',
    description: 'Enquire for details regarding Bus transportation services.',
    isEmergency: false,
    serviceTag: 'Bus Service',
  },
  {
    id: 'travel-traveller',
    name: 'Traveller',
    category: 'Traveller',
    typeBadge: 'Tour Van',
    image: '/images/traveller.jpg',
    description: 'Enquire for details regarding Traveller vehicle availability.',
    isEmergency: false,
    serviceTag: 'Traveller Service',
  },
];

// Unified Fleet Array for dynamic filtering
export const allFleetVehicles: Vehicle[] = [
  ...ambulanceFleet,
  ...travelFleet,
];

export const fleetFilterCategories: ('All' | FleetCategory)[] = [
  'All',
  'Ambulance',
  'Cars',
  'Traveller',
  'Bus',
];
