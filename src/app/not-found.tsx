import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <MaterialIcon name="search_off" className="text-primary text-4xl" />
        </div>
        <h1 className="text-3xl font-display font-bold text-primary mb-2">
          Página no encontrada
        </h1>
        <p className="text-text-muted mb-6 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-primary-dark transition-all active:scale-95"
        >
          <MaterialIcon name="home" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
