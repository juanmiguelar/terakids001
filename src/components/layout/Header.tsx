"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

/**
 * Renders the main site header with navigation and mobile menu.
 *
 * @returns {JSX.Element} The site header.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface-light/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-colors duration-300">
      <div className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight">
            <span className="text-primary">Thera</span>
            <span className="text-secondary">Kids</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary"
                  : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-primary text-white font-bold py-2 px-5 rounded-full text-sm shadow-md hover:bg-primary-dark transition-all active:scale-95"
          >
            Agendar Cita
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors text-text-main"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <MaterialIcon name={menuOpen ? "close" : "menu"} className="text-3xl" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-surface-light border-t border-gray-100 px-6 py-4 space-y-1 animate-in"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-text-muted hover:text-primary hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-secondary text-gray-900 font-bold py-3 px-4 rounded-xl text-sm text-center shadow-md mt-2"
          >
            Agendar Cita
          </Link>
        </nav>
      )}
    </header>
  );
}
