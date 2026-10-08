"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { site } from "@/lib/site";

/**
 * El menú de pantallas chicas.
 *
 * Sigue siendo un `<details>`: abre y cierra sin JavaScript y el teclado lo
 * maneja el navegador. Lo único que se agrega es lo que `<details>` no hace
 * solo: cerrarse al elegir un enlace (los anclas no cambian de página, así que
 * el menú quedaba abierto tapando la sección), al tocar afuera y con Escape.
 */
export function MobileMenu({ links }: { links: readonly { href: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const menu = ref.current;
      if (menu?.open && !menu.contains(event.target as Node)) menu.open = false;
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const menu = ref.current;
      if (event.key !== "Escape" || !menu?.open) return;
      menu.open = false;
      menu.querySelector("summary")?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  return (
    <details ref={ref} className="group ml-auto shrink-0 sm:ml-0 md:hidden">
      <summary
        className="neu press grid h-10 w-10 cursor-pointer list-none place-items-center rounded-xl text-text"
        aria-label="Abrir el menú"
      >
        <Menu size={18} strokeWidth={2.2} aria-hidden />
      </summary>

      <div className="glass menu-panel absolute left-0 right-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-2xl p-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className="press rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-text active:bg-white/5"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={site.testerHref}
          onClick={close}
          className="press mt-1 rounded-xl bg-lime px-4 py-3 text-center font-display text-base tracking-wide text-ink"
        >
          QUIERO PROBARLA
        </a>
      </div>
    </details>
  );
}
