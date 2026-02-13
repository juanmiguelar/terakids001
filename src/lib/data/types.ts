export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  iconBgColor: string;
  iconTextColor: string;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Sede {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl: string;
  latitude: number;
  longitude: number;
  icon: string;
  iconBgColor: string;
  iconTextColor: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  whatsapp: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}
