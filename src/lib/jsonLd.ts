import { siteConfig } from "./data";
import { sedes } from "./data/sedes";
import type { BlogPost, TeamMember } from "./data/types";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [
      siteConfig.socialMedia.facebook,
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
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

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
