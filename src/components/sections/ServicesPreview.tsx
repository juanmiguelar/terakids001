import Link from "next/link";
import { services } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

/**
 * Renders a preview section of the offered services.
 * Displays a horizontal scroll on mobile and a grid on desktop.
 *
 * @returns {JSX.Element} The services preview section.
 */
export function ServicesPreview() {
  const previewServices = services.slice(0, 4);

  return (
    <section className="mb-10">
      <div className="px-6 mb-4 flex justify-between items-end max-w-6xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-gray-800">
          Servicios
        </h2>
        <Link href="/servicios" className="text-primary text-sm font-semibold">
          Ver todos
        </Link>
      </div>

      {/* Mobile horizontal scroll */}
      <div className="flex overflow-x-auto gap-4 px-6 pb-4 hide-scrollbar snap-x snap-mandatory lg:hidden">
        {previewServices.map((service) => (
          <Link
            key={service.id}
            href={`/servicios#${service.slug}`}
            className="min-w-[160px] snap-start bg-surface-light p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 transition-colors"
          >
            <div
              className={`w-14 h-14 rounded-full ${service.iconBgColor} flex items-center justify-center ${service.iconTextColor}`}
            >
              <MaterialIcon name={service.icon} className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">
                {service.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {service.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden lg:grid grid-cols-4 gap-4 px-6 max-w-6xl mx-auto">
        {previewServices.map((service) => (
          <Link
            key={service.id}
            href={`/servicios#${service.slug}`}
            className="bg-surface-light p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div
              className={`w-14 h-14 rounded-full ${service.iconBgColor} flex items-center justify-center ${service.iconTextColor}`}
            >
              <MaterialIcon name={service.icon} className="text-2xl" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">
                {service.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {service.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
