export interface ShowcaseProject {
  id: string;
  studioName: string;
  title: string;
  location: string;
  description: string;
  price: string;
  imageUrl: string;
  hotspotTitle: string;
  hotspotDesc: string;
  hotspotImage: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  projects: {
    number: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export interface ListingItem {
  id: string;
  title: string;
  location: string;
  price?: string;
  imageUrl: string;
  category: string;
  specs?: {
    beds: number;
    baths: number;
    sqft: string;
  };
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface StatItem {
  id: string;
  targetValue: number;
  suffix: string;
  label: string;
}

export interface FooterLetterPreview {
  letter: string;
  title: string;
  imageUrl: string;
}
