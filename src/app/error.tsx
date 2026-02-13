"use client";

import { MaterialIcon } from "@/components/ui/MaterialIcon";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
          <MaterialIcon name="error_outline" className="text-red-500 text-4xl" />
        </div>
        <h1 className="text-2xl font-display font-bold text-text-main mb-2">
          Algo salió mal
        </h1>
        <p className="text-text-muted mb-6">
          Hubo un error al cargar esta página. Por favor intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-primary-dark transition-all active:scale-95"
        >
          <MaterialIcon name="refresh" />
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
