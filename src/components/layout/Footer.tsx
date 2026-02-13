import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <MaterialIcon name="spa" className="text-lg" />
              </div>
              <span className="font-display font-extrabold text-xl text-white">
                Thera<span className="text-secondary">Kids</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Centro terapéutico infantil especializado en el desarrollo
              integral de los niños. Terapia de lenguaje, ocupacional,
              psicología infantil y más en Costa Rica.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={siteConfig.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de TheraKids"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de TheraKids"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MaterialIcon name="photo_camera" className="text-sm" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MaterialIcon name="phone" className="text-primary text-lg" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MaterialIcon name="email" className="text-primary text-lg" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MaterialIcon name="location_on" className="text-primary text-lg mt-0.5" />
                <span>San José y Heredia, Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} TheraKids. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
