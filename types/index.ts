export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "safety" | "organization" | "travel" | "premium";
  comingSoon?: boolean;
}

export interface TravelChecklist {
  id: string;
  title: string;
  description: string;
  category: "domestic" | "us-border" | "international";
  items: TravelChecklistItem[];
}

export interface TravelChecklistItem {
  label: string;
  description?: string;
  required: boolean;
}

export interface WaitlistFormData {
  ownerName: string;
  email: string;
  petName: string;
  petType: "dog" | "cat" | "other";
  province: string;
  interests: string[];
}

export interface QRProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  comingSoon?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}
