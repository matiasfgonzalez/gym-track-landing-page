import Link from "next/link";
import { Menu } from "lucide-react";

import { Mark } from "@/components/Mark";
import { site } from "@/lib/site";

const links = [
  { href: "/#producto", label: "Qué hace" },
  { href: "/#catalogo", label: "Ejercicios" },
  { href: "/#video", label: "Video" },
  { href: "/#privacidad", label: "Tus datos" },
];

/**
 * La barra de arriba, flotando sobre la aurora.
 *
 * Va en vidrio porque el fondo se mueve: una barra opaca cortaría la luz en
 * seco y se vería pegada encima. Con el desenfoque, el color de abajo la
 * atraviesa y la barra pertenece a la página.
 *
 * El menú de pantallas chicas es un `<details>` y no un botón con estado: abre
 * y cierra sin una línea de JavaScript, y el teclado lo maneja el navegador.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 px-(--gutter) pt-3 sm:pt-4">
      <div className="glass relative mx-auto flex h-14 w-full max-w-6xl items-center gap-4 rounded-2xl px-3 sm:h-16 sm:px-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name}, inicio`}
        >
          <Mark className="h-6 w-auto" />
          <span className="display text-xl tracking-wide">
            GYM<span className="text-lime">TRACK</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/privacidad"
          className="ml-auto hidden shrink-0 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-text transition-colors hover:border-lime/40 hover:text-lime sm:block md:ml-0"
        >
          Privacidad
        </Link>

        <details className="group ml-auto shrink-0 md:hidden">
          <summary
            className="neu grid h-10 w-10 cursor-pointer list-none place-items-center rounded-xl text-text"
            aria-label="Abrir el menú"
          >
            <Menu size={18} strokeWidth={2.2} aria-hidden />
          </summary>

          <div className="glass absolute left-0 right-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-2xl p-2">
            {[...links, { href: "/privacidad", label: "Privacidad" }, { href: "/soporte", label: "Soporte" }].map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </details>
      </div>
    </header>
  );
}
