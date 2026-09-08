import { site } from "@/lib/site";

/** Marco común de las páginas de texto: título, fecha y una medida corta. */
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
    <article className="mx-auto w-full max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20">
      <header className="max-w-3xl">
        {updated ? (
          <p className="eyebrow">Actualizado el {site.legalUpdated}</p>
        ) : null}
        <h1 className="display mt-4 text-[length:var(--h2)]">{title}</h1>
        {lede ? <p className="mt-5 text-[length:var(--lede)] text-muted">{lede}</p> : null}
      </header>

      <div className="hairline my-10" />

      <div className="legal">{children}</div>
    </article>
  );
}
