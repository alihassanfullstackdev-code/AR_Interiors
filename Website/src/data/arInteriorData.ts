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
    title: 'Luminary Luxury Wardrobe',
    location: 'Syracuse, Connecticut',
    description: 'Minimalist luxury interiors with premium materials, open spaces, and calming ocean-inspired elegance.',
    price: '$19,500.00',
    imageUrl: '/showcase-1.png',
    hotspotTitle: 'Infinity View Concept',
    hotspotDesc: 'Panoramic floor-to-ceiling glass architecture',
    hotspotImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'private-sanctuary',
    studioName: 'Eloria Architectural Studio',
    title: 'The Table Kitchen',
    location: 'Coral Gables, FL',
    description: 'A perfect balance of modern design and tranquil textures, creating an elegant space for relaxation and high-end entertaining.',
    price: '$28,000.00',
    imageUrl: '/showcase-2.png',
    hotspotTitle: 'Architectural Light Well',
    hotspotDesc: 'Natural daylight integration with acoustic wood panels',
    hotspotImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'penthouse-serenity',
    studioName: 'Aethel Luxury Concepts',
    title: 'The VIP Lounge',
    location: 'Manhattan, New York',
    description: 'Custom marble finishes, bespoke Italian furniture, and ambient warm lighting tailored for cosmopolitan living.',
    price: '$42,500.00',
    imageUrl: '/showcase-3.png',
    hotspotTitle: 'Bespoke Marble Hearth',
    hotspotDesc: 'Hand-carved Calacatta Viola stone fireplace',
    hotspotImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'modern-wardrobe',
    studioName: 'Aethel Luxury Concepts',
    title: 'The Smart TV Wall',
    location: 'Los Angeles, CA',
    description: 'A beautifully lit, glass-front wardrobe integrating subtle backlighting and elegant wood finishing.',
    price: '$15,000.00',
    imageUrl: '/showcase-4.png',
    hotspotTitle: 'Integrated Lighting',
    hotspotDesc: 'Concealed LED strips for ambient illumination',
    hotspotImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&q=80'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'residential',
    name: 'Luxury Kitchen',
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
        title: 'Bespoke Oak Kitchen',
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
        title: 'Luxury Walk-in Closet',
        description: '',
        imageUrl: '/wardrobe-2.png'
      },
      {
        number: '03',
        title: 'Bespoke Wooden Wardrobe',
        description: '',
        imageUrl: '/wardrobe-3.png'
      }
    ]
  },
  {
    id: 'furniture',
    name: 'Media Tv Walls',
    projects: [
      {
        number: '01',
        title: 'Contemporary Media Wall',
        description: '',
        imageUrl: '/Media-wall-1.png'
      },
      {
        number: '02',
        title: 'Minimalist Media Center',
        description: '',
        imageUrl: '/Media-wall-2.png'
      },
      {
        number: '03',
        title: 'Luxury Media Lounge',
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
        title: 'Minimalist Interior Design',
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
        title: 'Elegant Bedroom Design',
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
    location: 'Syracuse, Connecticut',
    imageUrl: '/wardrobe-1.png',
    category: 'Wardrobes'
  },
  {
    id: 'wardrobe-2',
    title: 'Luxury Walk-in Closet',
    location: 'Syracuse, Connecticut',
    imageUrl: '/wardrobe-2.png',
    category: 'Wardrobes'
  },
  {
    id: 'wardrobe-3',
    title: 'Bespoke Wooden Wardrobe',
    location: 'Syracuse, Connecticut',
    imageUrl: '/wardrobe-3.png',
    category: 'Wardrobes'
  },
  {
    id: 'wardrobe-4',
    title: 'Elegant Display Wardrobe',
    location: 'Syracuse, Connecticut',
    imageUrl: '/wardrobe-4.png',
    category: 'Wardrobes'
  },
  {
    id: 'media-wall-1',
    title: 'Contemporary Media Wall',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Media-wall-1.png',
    category: 'Media Walls'
  },
  {
    id: 'media-wall-2',
    title: 'Minimalist Media Center',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Media-wall-2.png',
    category: 'Media Walls'
  },
  {
    id: 'media-wall-3',
    title: 'Luxury Media Lounge',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Media-wall-3.png',
    category: 'Media Walls'
  },
  {
    id: 'media-wall-4',
    title: 'Bespoke Entertainment Unit',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Media-wall-4.png',
    category: 'Media Walls'
  },
  {
    id: 'kitchen-1',
    title: 'Modern Classic Kitchen',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Kitchen-1.png',
    category: 'Kitchens'
  },
  {
    id: 'kitchen-2',
    title: 'Luxury Marble Kitchen',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Kitchen-2.jpg',
    category: 'Kitchens'
  },
  {
    id: 'kitchen-3',
    title: 'Bespoke Oak Kitchen',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Kitchen-3.jpg',
    category: 'Kitchens'
  },
  {
    id: 'kitchen-4',
    title: 'Minimalist Open Kitchen',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Kitchen-4.jpg',
    category: 'Kitchens'
  },
  {
    id: 'kitchen-5',
    title: 'Contemporary Island Kitchen',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Kitchen-5.jpg',
    category: 'Kitchens'
  },
  {
    id: 'kitchen-6',
    title: 'Elegant Chef Kitchen',
    location: 'Syracuse, Connecticut',
    imageUrl: '/Kitchen-6.PNG',
    category: 'Kitchens'
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

