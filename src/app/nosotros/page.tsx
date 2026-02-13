import type { Metadata } from "next";
import Image from "next/image";

import { team, siteConfig } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CTASection } from "@/components/sections/CTASection";
import { getBreadcrumbJsonLd, getPersonJsonLd } from "@/lib/jsonLd";

/**
 * Metadata for the "About Us" page.
 */
export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce al equipo de TheraKids: profesionales en terapia de lenguaje, terapia ocupacional, psicología infantil y asesoría de lactancia en Costa Rica.",
  alternates: {
    canonical: `${siteConfig.url}/nosotros`,
  },
  openGraph: {
    title: "Quiénes Somos | TheraKids",
    description:
      "Conoce nuestra historia y al equipo de especialistas que acompaña el desarrollo de tus hijos.",
    url: `${siteConfig.url}/nosotros`,
  },
};

/**
 * The "About Us" page.
 * Presents the history of the clinic and profiles of the team members.
 *
 * @returns {JSX.Element} The about us page content.
 */
export default function NosotrosPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Inicio", url: siteConfig.url },
    { name: "Nosotros", url: `${siteConfig.url}/nosotros` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {team.map((member) => (
        <script
          key={member.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd(member)),
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto pt-8 pb-12 px-5">
        {/* Story section */}
        <section className="mb-12">
          <div className="relative mb-6">
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            <h1 className="relative text-3xl font-display font-bold text-text-main leading-tight">
              Nuestra <span className="text-primary">Historia</span>
            </h1>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] mb-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60 z-10" />
            <Image
              src="/images/hero2.png"
              alt="Fundadoras de TheraKids riendo juntas en el estudio"
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-white font-display font-bold text-xl">
                Ken y Majo
              </p>
              <p className="text-white/90 text-sm">Fundadoras</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-text-muted leading-relaxed">
              Todo comenzó con un sueño compartido entre dos amigas
              apasionadas. Ken y Majo imaginaron un espacio donde el
              desarrollo infantil fuera una aventura llena de amor,
              comprensión y ciencia.
            </p>
            <p className="text-text-muted leading-relaxed">
              En{" "}
              <span className="font-bold text-primary">TheraKids</span>,
              creemos que cada niño tiene un potencial infinito esperando
              florecer. Nuestro viaje es acompañarte a ti y a tu pequeño en
              cada paso del camino.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-gray-200 mb-10" />

        {/* Team section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1 block">
                Profesionales
              </span>
              <h2 className="text-2xl font-display font-bold text-text-main">
                Conoce al equipo
              </h2>
            </div>
            <div className="bg-primary/10 p-2 rounded-full">
              <MaterialIcon name="groups" className="text-primary" />
            </div>
          </div>

          <div className="space-y-8">
            {team.map((member) => (
              <div
                key={member.id}
                id={member.slug}
                className="relative bg-card-light rounded-2xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] p-4 overflow-visible group hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="absolute right-0 top-4 bottom-4 w-1/2 bg-primary rounded-l-2xl -z-0 opacity-90 group-hover:w-[55%] transition-all duration-500" />
                <div className="flex items-center relative z-10">
                  <div className="w-1/2 pr-2 py-4">
                    <h3 className="text-2xl font-display font-black text-primary uppercase leading-none mb-3">
                      {member.firstName}
                      <br />
                      {member.lastName}
                    </h3>
                    <p className="text-text-main text-sm font-medium leading-tight">
                      {member.role}
                    </p>
                    <p className="text-text-muted text-xs mt-1">
                      {member.specialty}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center items-end h-48">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      width={200}
                      height={250}
                      className="h-52 w-auto object-contain drop-shadow-xl transform -translate-y-2 group-hover:-translate-y-4 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <CTASection
            title="¿Buscas el especialista ideal?"
            description="Agenda una cita de valoración hoy mismo."
            buttonText="Agendar Cita"
            buttonHref="/contacto"
          />
        </div>
      </div>
    </>
  );
}
