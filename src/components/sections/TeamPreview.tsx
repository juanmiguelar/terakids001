import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function TeamPreview() {
  const previewTeam = team.slice(0, 3);

  return (
    <section className="px-6 mb-12 max-w-6xl mx-auto">
      <h2 className="font-display font-bold text-2xl text-gray-800 mb-4">
        Especialistas
      </h2>
      <div className="flex flex-col gap-4">
        {previewTeam.map((member) => (
          <Link
            key={member.id}
            href={`/nosotros#${member.slug}`}
            className="flex items-center gap-4 bg-surface-light p-3 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors"
          >
            <Image
              src={member.image}
              alt={member.imageAlt}
              width={64}
              height={64}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-primary">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
            <div className="p-2 rounded-full bg-gray-50 text-gray-400">
              <MaterialIcon name="chevron_right" />
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/nosotros"
        className="mt-4 text-primary font-bold text-sm flex items-center gap-1 hover:underline justify-center"
      >
        Ver todo el equipo{" "}
        <MaterialIcon name="arrow_forward" className="text-base" />
      </Link>
    </section>
  );
}
