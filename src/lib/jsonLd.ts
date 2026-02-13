import { siteConfig } from "./data";
import { sedes } from "./data/sedes";
import type { BlogPost, TeamMember } from "./data/types";

/**
 * Generates the JSON-LD structured data for the Organization (TheraKids).
 * This structure helps search engines understand the organization's details,
 * including its name, URL, logo, contact information, and social media profiles.
 *
 * @returns {object} The JSON-LD object for the Organization.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo.startsWith("http") ? siteConfig.logo : `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [
      siteConfig.socialMedia.instagram,
      siteConfig.socialMedia.tiktok,
    ],
    address: sedes.map((sede) => ({
      "@type": "PostalAddress",
      addressLocality: sede.name.includes("Heredia") ? "Heredia" : "San José",
      addressCountry: "CR",
      streetAddress: sede.address,
    })),
  };
}

/**
 * Generates the JSON-LD structured data for the LocalBusiness (MedicalClinic).
 * It creates an array of objects, one for each "sede" (location).
 *
 * @returns {object[]} An array of JSON-LD objects for each location.
 */
export function getLocalBusinessJsonLd() {
  return sedes.map((sede) => ({
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `${siteConfig.name} - ${sede.name}`,
    url: siteConfig.url,
    telephone: sede.phone,
    email: sede.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: sede.address,
      addressLocality: sede.name.includes("Heredia") ? "Heredia" : "San José",
      addressCountry: "CR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: sede.latitude,
      longitude: sede.longitude,
    },
    openingHours: sede.hours,
    medicalSpecialty: [
      "Speech-Language Pathology",
      "Occupational Therapy",
      "Child Psychology",
    ],
    priceRange: "$$",
  }));
}

/**
 * Generates the JSON-LD structured data for a specific BlogPosting.
 *
 * @param {BlogPost} post - The blog post data.
 * @returns {object} The JSON-LD object for the BlogPosting.
 */
export function getBlogPostJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo.startsWith("http") ? siteConfig.logo : `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

/**
 * Generates the JSON-LD structured data for a BreadcrumbList.
 *
 * @param {Array<{ name: string; url: string }>} items - The list of breadcrumb items.
 * @returns {object} The JSON-LD object for the BreadcrumbList.
 */
export function getBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates the JSON-LD structured data for a Person (Team Member).
 *
 * @param {TeamMember} member - The team member data.
 * @returns {object} The JSON-LD object for the Person.
 */
export function getPersonJsonLd(member: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio.split("\n")[0],
    image: member.image,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
