import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function HistorySection() {
  return (
    <section className="px-6 mb-10 max-w-6xl mx-auto">
      <div className="bg-surface-light p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <MaterialIcon name="favorite" className="text-primary" />
          <h2 className="font-display font-bold text-lg text-gray-800">
            Nuestra Historia
          </h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Somos Ken y Majo, fundadoras de TheraKids. Creemos en el potencial
          ilimitado de cada niño. Nuestro enfoque terapéutico es cálido, basado
          en el juego y centrado en la familia para potenciar el lenguaje y
          desarrollo.
        </p>
        <Link
          href="/nosotros"
          className="mt-4 text-primary font-bold text-sm flex items-center gap-1 hover:underline"
        >
          Leer más{" "}
          <MaterialIcon name="arrow_forward" className="text-base" />
        </Link>
      </div>
    </section>
  );
}
