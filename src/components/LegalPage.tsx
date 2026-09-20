import { site } from "@/lib/site";

/**
 * Marco común de las páginas de texto: título, fecha y una medida corta.
 *
 * Va sobre una hoja de vidrio, como el resto del sitio, pero con el texto en una
 * columna angosta: son páginas para leer de arriba abajo, no para impresionar.
 */
export function LegalPage({
  title,
  lede,
  updated = true,
  children,
}: {
  title: string;
  lede?: string;
  updated?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="px-(--gutter) pt-10 sm:pt-14">
      <div className="glass mx-auto w-full max-w-5xl rounded-4xl px-(--gutter) py-12 sm:px-12 sm:py-16">
        <header className="max-w-3xl">
          {updated ? <p className="eyebrow">Actualizado el {site.legalUpdated}</p> : null}
          <h1 className="display mt-4 text-(length:--h2)">{title}</h1>
          {lede ? <p className="mt-5 text-(length:--lede) text-muted">{lede}</p> : null}
        </header>

        <div className="hairline my-10" />

        <div className="legal">{children}</div>
      </div>
    </article>
  );
}
