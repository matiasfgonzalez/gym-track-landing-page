import Link from "next/link";

import { Mark } from "@/components/Mark";
import { site } from "@/lib/site";

const links = [
  { href: "/#funciones", label: "Qué hace" },
  { href: "/#privacidad", label: "Tus datos" },
  { href: "/soporte", label: "Soporte" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.name}, inicio`}
        >
          <Mark className="h-6 w-auto" />
          <span className="display text-xl tracking-wide">
            GYM<span className="text-lime">TRACK</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 sm:flex">
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
          className="ml-auto text-sm font-medium text-muted transition-colors hover:text-text sm:ml-0"
        >
          Privacidad
        </Link>
      </div>
    </header>
  );
}
