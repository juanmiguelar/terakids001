import type { Metadata } from "next";

import { sedes, siteConfig } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";
import { ContactForm } from "./ContactForm";

/**
 * Metadata for the Contact page.
 */
export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para agendar una cita en TheraKids. Sedes en San José y Heredia, Costa Rica. Terapia de lenguaje, terapia ocupacional, psicología infantil.",
  alternates: {
    canonical: `${siteConfig.url}/contacto`,
  },
  openGraph: {
    title: "Contacto | TheraKids",
    description:
      "Estamos aquí para escucharte y apoyar el desarrollo de tu pequeño. Contáctanos hoy.",
    url: `${siteConfig.url}/contacto`,
  },
};

/**
 * The Contact page.
 * Displays contact information, a contact form, and location details.
 *
 * @returns {JSX.Element} The contact page content.
 */
export default function ContactoPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Inicio", url: siteConfig.url },
    { name: "Contacto", url: `${siteConfig.url}/contacto` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-2xl mx-auto w-full px-6 py-8 space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-primary font-display">
            Contáctanos
          </h1>
          <p className="text-text-muted text-lg font-medium">
            Estamos aquí para escucharte y apoyar el desarrollo de tu pequeño.
          </p>
        </div>

        {/* Form */}
        <div className="bg-surface-light rounded-2xl p-6 shadow-lg shadow-primary/5 border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-text-main font-display flex items-center gap-2">
            <MaterialIcon name="mail_outline" className="text-primary" />
            Envíanos un mensaje
          </h2>
          <ContactForm />
        </div>

        {/* Locations */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main font-display text-center">
            Nuestras Sedes
          </h2>
          {sedes.map((sede) => (
            <div
              key={sede.id}
              className="bg-surface-light rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:border-primary/30 transition-colors"
            >
              <div
                className={`${sede.iconBgColor} p-3 rounded-full shrink-0 ${sede.iconTextColor}`}
              >
                <MaterialIcon name={sede.icon} className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-main font-display">
                  {sede.name}
                </h3>
                <p className="text-text-muted text-sm mt-1 mb-1 leading-relaxed">
                  {sede.address}
                </p>
                <p className="text-text-muted text-xs mb-2">{sede.hours}</p>
                <a
                  href={sede.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
                >
                  Ver en mapa{" "}
                  <MaterialIcon name="open_in_new" className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-surface-light rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <MaterialIcon name="phone" />
            </div>
            <span className="block text-sm font-bold text-text-main">
              Llamar
            </span>
            <span className="block text-xs text-text-muted mt-1">
              Lunes a Viernes
            </span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-surface-light rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <div className="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
              <MaterialIcon name="email" />
            </div>
            <span className="block text-sm font-bold text-text-main">
              Email
            </span>
            <span className="block text-xs text-text-muted mt-1">
              Respuesta 24h
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
