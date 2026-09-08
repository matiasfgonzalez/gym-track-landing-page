import Link from "next/link";

import { Mark } from "@/components/Mark";
import { site } from "@/lib/site";

const columns = [
  {
    title: "La app",
    links: [
      { href: "/#funciones", label: "Qué hace" },
      { href: "/#catalogo", label: "Catálogo de ejercicios" },
      { href: "/#historias", label: "Compartir el entrenamiento" },
      { href: "/#privacidad", label: "Dónde viven tus datos" },
    ],
  },
  {
    title: "Legales",
    links: [
      { href: "/privacidad", label: "Política de privacidad" },
      { href: "/terminos", label: "Términos de uso" },
      { href: "/eliminar-datos", label: "Eliminar mis datos" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { href: "/soporte", label: "Soporte y preguntas" },
      { href: `mailto:${site.email}`, label: "Escribirnos" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark className="h-6 w-auto" />
              <span className="display text-xl tracking-wide">
                GYM<span className="text-lime">TRACK</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-faint">
              {site.tagline} Un cuaderno de entrenamiento que no necesita internet
              ni sabe quién sos.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="eyebrow">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Hecho en Argentina.
          </p>
          <p>
            Las animaciones de los ejercicios son de{" "}
            <a
              href="https://github.com/JahelCuadrado/ExerciseGymGifsDB"
              className="underline decoration-line-strong underline-offset-2 transition-colors hover:text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              ExerciseGymGifsDB
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
