import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function HeroSection() {
  return (
    <section className="relative px-6 pt-8 pb-10 max-w-6xl mx-auto">
      <div className="absolute top-0 right-0 w-2/3 h-64 bg-primary/10 rounded-bl-[4rem] -z-10" />

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2">
          <span className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Bienvenidos a
          </span>
          <h1 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight text-primary mt-1 mb-6">
            CENTRO
            <br />
            TERAPÉUTICO
            <br />
            INFANTIL
          </h1>
          <p className="text-text-muted text-base mb-6 max-w-md">
            Acompañamos el desarrollo de tu hijo con un equipo de especialistas
            comprometidos con su bienestar integral.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-gray-900 font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all active:scale-95 w-full sm:w-auto"
          >
            <MaterialIcon name="calendar_today" />
            Agendar Cita
          </Link>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq7okqNf0WKeGnexlXKEyl6jrvcodjphRcNEV9GO4j2jrG--xzDu0JoEKroNQ8Z281fVgtbFSbYcxl3cQo4EM-E3hTwMeAJMnsBzUhD4HvK7gP0ombV77riyR4YptzmnvIByRWC8v52FmnEDio-ShRIoyGN_tNUFr9oNJqyX2Apdd7SrIauWCvPrLFEzmgZpV5lw1lyKywGXWljVNrrOe6XMlcZrA8w-eXv0Rcj6qlxsaYyfiePeKOVYBSnJuYHbAQl7lvG1VkfpXi"
              alt="Equipo fundador de TheraKids sonriendo en el estudio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">¡Conoce al equipo!</p>
              <p className="text-sm opacity-90">
                Expertos en desarrollo infantil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
