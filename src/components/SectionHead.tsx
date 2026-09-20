/** El encabezado de cada sección: rótulo, título y una bajada opcional. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  center?: boolean;
}) {
  return (
    <header className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-4 text-(length:--h2)">{title}</h2>
      {lede ? <p className="mt-5 text-(length:--lede) text-muted">{lede}</p> : null}
    </header>
  );
}
