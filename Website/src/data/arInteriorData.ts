import {
  ShowcaseProject,
  ServiceCategory,
  ListingItem,
  ArticleItem,
  StatItem,
  FooterLetterPreview
} from '../types';

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'shaazz-coastal',
    studioName: 'Shaazz Interior Studio',
    title: 'Luxury Glass Wardrobe',
    location: 'Lahore, Punjab',
    description: 'Simple and beautiful wardrobe design made with strong wood, glass, and warm lights.',
    price: 'Rs. 1,950,000',
    imageUrl: '/showcase-1.png',
    hotspotTitle: 'Glass Door View',
    hotspotDesc: 'Big glass doors with clear inside view',
    hotspotImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'private-sanctuary',
    studioName: 'Eloria Architectural Studio',
    title: 'Modern Table Kitchen',
    location: 'Islamabad',
    description: 'A clean modern kitchen with table island, strong marble top, and neat wooden cabinets.',
    price: 'Rs. 2,800,000',
    imageUrl: '/showcase-2.png',
    hotspotTitle: 'Wooden Ceiling & Light',
    hotspotDesc: 'Warm ceiling lights with wood panels',
    hotspotImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'penthouse-serenity',
    studioName: 'Aethel Luxury Concepts',
    title: 'Comfortable VIP Lounge',
    location: 'Faisalabad, Punjab',
    description: 'Beautiful living room with marble walls, soft sofa seats, and warm wall lights.',
    price: 'Rs. 4,250,000',
    imageUrl: '/showcase-3.png',
    hotspotTitle: 'Marble Wall Design',
    hotspotDesc: 'Real marble wall with back light',
    hotspotImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'modern-wardrobe',
    studioName: 'Aethel Luxury Concepts',
    title: 'Smart TV & Wall Unit',
    location: 'Sargodha, Punjab',
    description: 'Modern TV wall unit with LED lights and smooth wooden sheet finish.',
    price: 'Rs. 1,500,000',
    imageUrl: '/showcase-4.png',
    hotspotTitle: 'LED Strip Lighting',
    hotspotDesc: 'Hidden LED lights for bright look',
    hotspotImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&q=80'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'residential',
    name: 'Modern Kitchens',
    projects: [
      {
        number: '01',
        title: 'Modern Classic Kitchen',
        description: '',
        imageUrl: '/Kitchen-1.png'
      },
      {
        number: '02',
        title: 'Luxury Marble Kitchen',
        description: '',
        imageUrl: '/Kitchen-2.jpg'
      },
      {
        number: '03',
        title: 'Wooden Cabinet Kitchen',
        description: '',
        imageUrl: '/Kitchen-3.jpg'
      }
    ]
  },
  {
    id: 'commercial',
    name: 'Spacious Wardrobes',
    projects: [
      {
        number: '01',
        title: 'Modern Glass Wardrobe',
        description: '',
        imageUrl: '/wardrobe-1.png'
      },
      {
        number: '02',
        title: 'Walk-in Closet',
        description: '',
        imageUrl: '/wardrobe-2.png'
      },
      {
        number: '03',
        title: 'Wooden Wardrobe',
        description: '',
        imageUrl: '/wardrobe-3.png'
      }
    ]
  },
  {
    id: 'furniture',
    name: 'Media TV Walls',
    projects: [
      {
        number: '01',
        title: 'Contemporary TV Wall',
        description: '',
        imageUrl: '/Media-wall-1.png'
      },
      {
        number: '02',
        title: 'Simple Media Center',
        description: '',
        imageUrl: '/Media-wall-2.png'
      },
      {
        number: '03',
        title: 'Luxury TV Lounge',
        description: '',
        imageUrl: '/Media-wall-3.png'
      }
    ]
  },
  {
    id: 'lighting',
    name: 'Interior Designs',
    projects: [
      {
        number: '01',
        title: 'Simple Interior Design',
        description: '',
        imageUrl: '/interior-design-1.png'
      },
      {
        number: '02',
        title: 'Luxury Lounge Design',
        description: '',
        imageUrl: '/showcase-2.png'
      },
      {
        number: '03',
        title: 'Bedroom Interior Design',
        description: '',
        imageUrl: '/showcase-3.png'
      }
    ]
  }
];

export const LISTINGS_DATA: ListingItem[] = [
  {
    id: 'wardrobe-1',
    title: 'Modern Glass Wardrobe',
    location: 'Lahore, Punjab',
    imageUrl: '/wardrobe-1.png',
    category: 'Wardrobes',
    features: [
      'Tinted Black Glass Doors',
      'Strong Aluminum Frame',
      'Warm Hanger LED Lights',
      'Soft Velvet Drawers'
    ]
  },
  {
    id: 'wardrobe-2',
    title: 'Luxury Walk-in Closet',
    location: 'Sargodha, Punjab',
    imageUrl: '/wardrobe-2.png',
    category: 'Wardrobes',
    features: [
      'Open Clothes Hanging Racks',
      'Full Length Wall Mirror',
      'Tactile Wooden Finish Sheet',
      'Soft Close Drawer System'
    ]
  },
  {
    id: 'wardrobe-3',
    title: 'Wooden Sheet Wardrobe',
    location: 'Islamabad',
    imageUrl: '/wardrobe-3.png',
    category: 'Wardrobes',
    features: [
      'High Quality MDF Board Sheet',
      'Stainless Steel Handles',
      'Adjustable Storage Shelves',
      'Built-in Locker Box'
    ]
  },
  {
    id: 'wardrobe-4',
    title: 'Display Wardrobe with Lights',
    location: 'Faisalabad, Punjab',
    imageUrl: '/wardrobe-4.png',
    category: 'Wardrobes',
    features: [
      'Glass Shelves for Display',
      'Sensor Touch Light Strip',
      'High Gloss UV Sheet',
      'Double Door Storage Area'
    ]
  },
  {
    id: 'media-wall-1',
    title: 'Modern TV Media Wall',
    location: 'Sargodha, Punjab',
    imageUrl: '/Media-wall-1.png',
    category: 'Media Walls',
    features: [
      'Marble Fluted Wall Panels',
      'Floating Lower Console',
      'Hidden Wire & Cable Box',
      'Warm LED Backlight'
    ]
  },
  {
    id: 'media-wall-2',
    title: 'Simple Media Center',
    location: 'Lahore, Punjab',
    imageUrl: '/Media-wall-2.png',
    category: 'Media Walls',
    features: [
      'Matte Finish MDF Panel',
      'Set-Top Box Drawers',
      'Side Display Shelves',
      'Clean Wall TV Mount'
    ]
  },
  {
    id: 'media-wall-3',
    title: 'Luxury TV Lounge Wall',
    location: 'Islamabad',
    imageUrl: '/Media-wall-3.png',
    category: 'Media Walls',
    features: [
      'Large Marble Sheet Panel',
      'Electric Fireplace Space',
      'Glass Display Cabinets',
      'LED Profile Lighting'
    ]
  },
  {
    id: 'media-wall-4',
    title: 'Entertainment TV Unit',
    location: 'Multan, Punjab',
    imageUrl: '/Media-wall-4.png',
    category: 'Media Walls',
    features: [
      'Textured Wood Strip Panel',
      'Storage Drawers & Cabinets',
      'Soundbar Speaker Slot',
      'Durable Frame Base'
    ]
  },
  {
    id: 'kitchen-1',
    title: 'Modern Classic Kitchen',
    location: 'Lahore, Punjab',
    imageUrl: '/Kitchen-1.png',
    category: 'Kitchens',
    features: [
      'White Marble Countertop',
      'Soft Close Door Hinges',
      'Steel Sink & Water Tap',
      'Built-in Microwave Space'
    ]
  },
  {
    id: 'kitchen-2',
    title: 'Luxury Marble Kitchen',
    location: 'Sargodha, Punjab',
    imageUrl: '/Kitchen-2.jpg',
    category: 'Kitchens',
    features: [
      'Dark Granite Top Surface',
      'High Gloss Acrylic Sheet',
      'Under-Cabinet LED Strip',
      'Pull-Out Basket Drawers'
    ]
  },
  {
    id: 'kitchen-3',
    title: 'Wooden Cabinet Kitchen',
    location: 'Islamabad',
    imageUrl: '/Kitchen-3.jpg',
    category: 'Kitchens',
    features: [
      'Wood Grain Sheet Cabinets',
      'Quartz Countertop Surface',
      'Cutlery Storage Drawers',
      'Corner Rack Storage'
    ]
  },
  {
    id: 'kitchen-4',
    title: 'Simple Open Kitchen',
    location: 'Faisalabad, Punjab',
    imageUrl: '/Kitchen-4.jpg',
    category: 'Kitchens',
    features: [
      'Compact L-Shape Counter',
      'Easy Clean PVC Edge Banding',
      'Exhaust Fan Hood Space',
      'Waterproof Sink Base'
    ]
  },
  {
    id: 'kitchen-5',
    title: 'Island Table Kitchen',
    location: 'Rawalpindi, Punjab',
    imageUrl: '/Kitchen-5.jpg',
    category: 'Kitchens',
    features: [
      'Center Table Island Counter',
      'Dual Marble Top Counter',
      'Trash Can & Bottle Rack',
      'High Spout Water Fitting'
    ]
  },
  {
    id: 'kitchen-6',
    title: 'Chef Style Kitchen',
    location: 'Sargodha, Punjab',
    imageUrl: '/Kitchen-6.PNG',
    category: 'Kitchens',
    features: [
      'Deep Steel Kitchen Sink',
      'Double Marble Countertop',
      'Gas Stove Counter Top',
      'Tall Pantry Storage Unit'
    ]
  }
];

const getDailyProjects = () => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return 10 + (seed % 11);
};

export const STATS_DATA: StatItem[] = [
  {
    id: 'years',
    targetValue: 12,
    suffix: '+',
    label: 'Years of Interior Experience'
  },
  {
    id: 'satisfaction',
    targetValue: 95,
    suffix: '%',
    label: 'Satisfied Valued Clients'
  },
  {
    id: 'projects',
    targetValue: getDailyProjects(),
    suffix: '+',
    label: 'Active Interior Projects'
  },
  {
    id: 'clients',
    targetValue: 1,
    suffix: 'K+',
    label: 'Happy Clients'
  }
];

