/**
 * El encabezado de cada sección: título y una bajada opcional.
 *
 * El rótulo de arriba es opcional a propósito: puesto en todas las secciones se
 * vuelve ruido de plantilla. Va en pocas, donde ayuda a ubicarse.
 */
export function SectionHead({
  eyebrow,
  title,
  lede,
  center,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  center?: boolean;
}) {
  return (
    <header className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="display text-(length:--h2)">{title}</h2>
      {lede ? <p className="mt-5 max-w-[60ch] text-(length:--lede) text-muted">{lede}</p> : null}
    </header>
  );
}
