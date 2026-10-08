import Link from "next/link";

import { Mark } from "@/components/Mark";
import { MobileMenu } from "@/components/MobileMenu";
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
 * A la derecha va la acción principal del sitio, la misma que en la portada y
 * en el cierre: un solo nombre para una sola cosa.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 px-(--gutter) pt-3 sm:pt-4">
      <div className="glass relative mx-auto flex h-14 w-full max-w-6xl items-center gap-4 rounded-2xl px-3 sm:h-16 sm:px-5">
        <Link
          href="/"
          className="press flex shrink-0 items-center gap-2.5"
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

        <a
          href={site.testerHref}
          className="press ml-auto hidden shrink-0 rounded-xl bg-lime px-4 py-2 font-display text-base tracking-wide text-ink sm:block md:ml-2"
        >
          QUIERO PROBARLA
        </a>

        <MobileMenu
          links={[...links, { href: "/privacidad", label: "Privacidad" }, { href: "/soporte", label: "Soporte" }]}
        />
      </div>
    </header>
  );
}
