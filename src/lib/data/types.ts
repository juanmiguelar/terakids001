/**
 * Represents a service offered by TheraKids.
 */
export interface Service {
  id: string; // Unique identifier for the service
  slug: string; // URL-friendly string for the service page
  name: string; // Display name of the service
  shortDescription: string; // Brief description for cards/lists
  description: string; // Full description of the service
  icon: string; // Icon name (e.g., Material Icons)
  iconBgColor: string; // Tailwind class for icon background color
  iconTextColor: string; // Tailwind class for icon text color
  benefits: string[]; // List of key benefits of the service
}

/**
 * Represents a team member at TheraKids.
 */
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

/**
 * Represents a blog post.
 */
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

/**
 * Represents a physical location (Sede) of TheraKids.
 */
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

/**
 * Represents the general configuration for the site.
 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  phone: string;
  email: string;
  whatsapp: string;
  socialMedia: {
    instagram: string;
    tiktok: string;
  };
}
