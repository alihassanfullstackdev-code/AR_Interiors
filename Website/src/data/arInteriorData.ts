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
    title: 'Elegant Coastal Living Concept',
    location: 'Syracuse, Connecticut',
    description: 'Minimalist luxury interiors with premium materials, open spaces, and calming ocean-inspired elegance.',
    price: '$19,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    hotspotTitle: 'Infinity View Concept',
    hotspotDesc: 'Panoramic floor-to-ceiling glass architecture',
    hotspotImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'private-sanctuary',
    studioName: 'Eloria Architectural Studio',
    title: 'The Private Sanctuary',
    location: 'Coral Gables, FL',
    description: 'A perfect balance of modern design and tranquil textures, creating an elegant space for relaxation and high-end entertaining.',
    price: '$28,000.00',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    hotspotTitle: 'Architectural Light Well',
    hotspotDesc: 'Natural daylight integration with acoustic wood panels',
    hotspotImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'penthouse-serenity',
    studioName: 'Aethel Luxury Concepts',
    title: 'Skyline Penthouse Haven',
    location: 'Manhattan, New York',
    description: 'Custom marble finishes, bespoke Italian furniture, and ambient warm lighting tailored for cosmopolitan living.',
    price: '$42,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    hotspotTitle: 'Bespoke Marble Hearth',
    hotspotDesc: 'Hand-carved Calacatta Viola stone fireplace',
    hotspotImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'residential',
    name: 'Residential Design',
    projects: [
      {
        number: '01',
        title: 'Residential Living Space',
        description: 'Thoughtfully designed residential spaces that blend comfort, functionality, and modern aesthetics to enhance everyday lifestyle experiences.',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '02',
        title: 'High-Performance Collaboration',
        description: 'Bespoke home offices and creative suites engineered with ergonomic acoustics and integrated smart environment controls.',
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '03',
        title: 'Curated Private Art Collections',
        description: 'Museum-grade interior lighting and bespoke display walls tailored to highlight personal art and sculpture investments.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '04',
        title: 'Heritage Material Sourcing',
        description: 'Sustainably harvested hardwoods, aged stone, and hand-finished organic plasters sourced directly from European artisans.',
        imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '05',
        title: 'Minimalist Spatial Restoration',
        description: 'Restoring historic architecture into clean, breathable contemporary sanctuaries while preserving unique structural heritage.',
        imageUrl: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Spaces',
    projects: [
      {
        number: '01',
        title: 'Aethel Signature Living Concepts',
        description: 'Aethel Signature Living Concepts delivers refined luxury interiors blending elegance, comfort, innovation, and timeless sophistication style.',
        imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '02',
        title: 'Penthouse Architectural Planning',
        description: 'Spatial layout and luxury master planning for multi-level luxury hospitality and executive penthouses.',
        imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '03',
        title: 'Minimalist Spatial Restoration',
        description: 'Transforming commercial headquarters into high-end experience centers with refined wood joinery.',
        imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '04',
        title: 'High-End Textile & Material Sourcing',
        description: 'Acoustic velvet paneling, cashmere drapery, and custom brass metalwork for boutique hotel lounges.',
        imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '05',
        title: 'Bespoke Interior Styling & Decor',
        description: 'Final spatial layer styling with rare ceramics, sculpture, and custom furniture curation.',
        imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'furniture',
    name: 'Bespoke Furniture',
    projects: [
      {
        number: '01',
        title: 'Handcrafted Oak & Walnut Tables',
        description: 'Custom millwork dining tables with solid timber joins and natural oil patinas.',
        imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'
      },
      {
        number: '02',
        title: 'Custom Curved Bouclé Seating',
        description: 'Sculptural lounge sofas upholstered in wool bouclé and textured organic linen.',
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'lighting',
    name: 'Lighting Curation',
    projects: [
      {
        number: '01',
        title: 'Architectural Ambient Layering',
        description: 'Concealed LED cove channels paired with hand-blown alabaster glass sconces.',
        imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'art-decor',
    name: 'Art & Decor',
    projects: [
      {
        number: '01',
        title: 'Monochrome Sculpture & Vases',
        description: 'Curation of brutalist ceramics, plaster art panels, and tactile woven tapestry.',
        imageUrl: 'https://images.unsplash.com/photo-1582582621959-48d273528920?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const LISTINGS_DATA: ListingItem[] = [
  {
    id: 'dining-haven',
    title: 'Elegant Modern Dining Haven',
    location: 'Syracuse, Connecticut',
    price: '$19,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    category: 'Dining Room',
    specs: { beds: 3, baths: 3.5, sqft: '3,200 sqft' }
  },
  {
    id: 'luxury-lounge',
    title: 'Minimalist Luxury Lounge',
    location: 'Syracuse, Connecticut',
    price: '$19,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    category: 'Living Room',
    specs: { beds: 4, baths: 4, sqft: '4,100 sqft' }
  },
  {
    id: 'serenity-space',
    title: 'Bright Contemporary Serenity Space',
    location: 'Syracuse, Connecticut',
    price: '$39,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'Full Villa Interior',
    specs: { beds: 5, baths: 6, sqft: '5,800 sqft' }
  },
  {
    id: 'comfort-living',
    title: 'Warm Modern Comfort Living',
    location: 'Syracuse, Connecticut',
    price: '$19,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    category: 'Open Living',
    specs: { beds: 3, baths: 3, sqft: '2,900 sqft' }
  },
  {
    id: 'cozy-haven',
    title: 'Cozy Elegant Haven',
    location: 'Syracuse, Connecticut',
    price: '$19,500.00',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    category: 'Suite Living',
    specs: { beds: 2, baths: 2.5, sqft: '2,400 sqft' }
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'enduring-luxury',
    title: 'Enduring Luxury: Interiors Designed to Inspire',
    date: '12 Feb 2026',
    category: 'Interior Design',
    description: 'Designed with precision and refined aesthetics, our featured projects showcase modern elegance, functional design, curated textures, bespoke elements, and a timeless sense of luxury.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'elevating-modern',
    title: 'Elevating Modern Living with Minimalist Elegance',
    date: '8 Dec 2025',
    category: 'Residential',
    description: 'Explore how clean architectural lines and warm organic materials create harmonious living environments.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sustainable-luxury',
    title: 'Sustainable Luxury: Designing Eco-Conscious Interiors',
    date: '25 Jan 2026',
    category: 'Eco Design',
    description: 'Integrating solar orientation, natural ventilation, and non-toxic artisan materials into high-end residences.',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80'
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

export const FOOTER_LETTERS: FooterLetterPreview[] = [
  {
    letter: 'E',
    title: 'Executive Residence',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    letter: 'L',
    title: 'Lounge Architectural Concept',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  },
  {
    letter: 'O',
    title: 'Oasis Master Suite',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
  },
  {
    letter: 'R',
    title: 'Restored Heritage Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80'
  },
  {
    letter: 'I',
    title: 'Infinity View Lounge',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
  },
  {
    letter: 'A',
    title: 'Architectural Terrace',
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80'
  }
];
