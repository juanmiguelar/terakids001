import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "TheraKids",
  description:
    "Centro terapéutico infantil especializado en terapia de lenguaje, terapia ocupacional, psicología infantil y asesoría de lactancia en Costa Rica.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://therakids.com",
  logo: "/images/logo.webp",
  phone: "+506 2234-5678",
  email: "info@therakids.com",
  whatsapp: "+50622345678",
  socialMedia: {
    facebook: "https://facebook.com/therakidscr",
    instagram: "https://instagram.com/therakidscr",
    tiktok: "https://tiktok.com/@therakidscr",
  },
};
