import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CTASection } from "@/components/sections/CTASection";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de terapia de lenguaje, terapia ocupacional, psicología infantil, asesoría de lactancia, evaluaciones del desarrollo y talleres para padres en TheraKids Costa Rica.",
  alternates: {
    canonical: `${siteConfig.url}/servicios`,
  },
  openGraph: {
    title: "Nuestros Servicios | TheraKids",
    description:
      "Apoyamos el desarrollo integral de tus hijos con especialistas dedicados en terapia de lenguaje, terapia ocupacional y más.",
    url: `${siteConfig.url}/servicios`,
  },
};

export default function ServiciosPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Inicio", url: siteConfig.url },
    { name: "Servicios", url: `${siteConfig.url}/servicios` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="pt-8 pb-6 px-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h1 className="text-2xl font-display font-bold text-gray-800">
              Nuestros Servicios
            </h1>
          </div>
          <p className="mt-2 text-sm text-text-muted leading-relaxed ml-4">
            Apoyamos el desarrollo integral de tus hijos con especialistas
            dedicados.
          </p>
        </header>

        {/* Service list */}
        <div className="px-6 space-y-5 pb-8">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.slug}
              className="group bg-card-light rounded-xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-transparent hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-xl" />
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0 text-primary`}
                >
                  <MaterialIcon name={service.icon} className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-primary font-bold uppercase tracking-wide text-sm mb-1 group-hover:underline decoration-2 underline-offset-4">
                    {service.name}
                  </h2>
                  <p className="text-sm text-text-muted mb-3 line-clamp-2">
                    {service.description.split(".")[0]}.
                  </p>
                  <Link
                    href={`/contacto`}
                    className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    Consultar{" "}
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-sm ml-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <CTASection
          title="¿Dudas sobre qué servicio necesitas?"
          description="Agenda una consulta inicial de valoración con nuestro equipo."
          buttonText="Contáctanos"
          buttonHref="/contacto"
        />
      </div>
    </>
  );
}
