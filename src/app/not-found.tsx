import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start px-5 py-28 sm:px-8">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-4 text-(length:--h2)">
        Esta página no existe.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Puede que la hayamos movido o que el enlace esté mal escrito.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-lime px-5 py-3 font-semibold text-ink transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
