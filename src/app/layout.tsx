import type { Metadata } from "next";
import { Nunito, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/lib/data";
import { getOrganizationJsonLd, getLocalBusinessJsonLd } from "@/lib/jsonLd";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

/**
 * Metadata configuration for the root layout.
 * Includes title, description, keywords, and Open Graph settings.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Centro Terapéutico Infantil en Costa Rica`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "terapia de lenguaje",
    "terapia ocupacional",
    "psicología infantil",
    "centro terapéutico infantil",
    "Costa Rica",
    "desarrollo infantil",
    "terapia del habla",
    "estimulación temprana",
    "asesoría de lactancia",
    "TheraKids",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Centro Terapéutico Infantil`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "TheraKids - Centro Terapéutico Infantil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Centro Terapéutico Infantil`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "google-site-verification": "",
  },
};

/**
 * Root Layout component that wraps all pages.
 * Handles fonts, global styles, and detailed JSON-LD structured data.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The page content.
 * @returns {JSX.Element} The root layout structure.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = getOrganizationJsonLd();
  const businessJsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="es" className={`${nunito.variable} ${openSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {businessJsonLd.map((biz, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(biz) }}
          />
        ))}
      </head>
      <body className="bg-background-light font-[var(--font-body)] text-text-main antialiased min-h-screen flex flex-col transition-colors duration-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
