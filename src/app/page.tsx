import Image from "next/image";
import Link from "next/link";

import { Dial } from "@/components/Dial";
import { site, thirdParties } from "@/lib/site";

const features = [
  {
    title: "La última vez",
    body: "Cuánto levantaste la vez pasada, al lado de la serie que estás por hacer. Sin ir a buscarlo al historial.",
  },
  {
    title: "Descanso que avisa",
    body: "El cronómetro arranca solo al cerrar la serie. Suena, vibra y te avisa aunque hayas salido de la app.",
  },
  {
    title: "1.323 ejercicios",
    body: "Con la figura del movimiento, los músculos que trabaja y la técnica paso a paso, en español.",
  },
  {
    title: "Récords personales",
    body: "El peso máximo, el 1RM estimado y el día que lo conseguiste. El ámbar está reservado para eso.",
  },
  {
    title: "Progreso de verdad",
    body: "Volumen por semana, evolución de cada ejercicio y ranking de lo que más entrenás.",
  },
  {
    title: "Salir a correr",
    body: "GPS, ritmo, vueltas automáticas y el mapa del recorrido. Sigue midiendo con la pantalla apagada.",
  },
  {
    title: "Rutinas como las armás vos",
    body: "Superseries, calentamiento que no suma volumen, RPE, plantillas y rutinas que se comparten por archivo.",
  },
  {
    title: "El backup es tuyo",
    body: "Un JSON que te llevás a otro teléfono cuando quieras, y exportación a CSV para abrirlo en Excel.",
  },
];

const stats = [
  { value: "1.323", label: "Ejercicios" },
  { value: "0", label: "Cuentas" },
  { value: "0", label: "Anuncios" },
  { value: "100%", label: "En tu teléfono" },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Portada                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-dots absolute inset-0 opacity-70" aria-hidden />
        <div
          className="absolute left-1/2 top-full h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.32), transparent 62%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rise">
            <p className="eyebrow">Android · Gratis · Sin cuentas</p>
            <h1 className="display mt-5 text-[length:var(--hero)]">
              Tu cuaderno de entrenamiento vive en tu teléfono.
            </h1>
            <p className="mt-6 max-w-xl text-[length:var(--lede)] text-muted">
              Rutinas, series, récords y salidas a correr. GymTrack abre, anota y
              cierra apoyado en el banco del gimnasio: sin registro, sin nube y
              sin depender de la señal que ahí abajo nunca hay.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-xl border border-lime/40 bg-lime/10 px-5 py-3 font-display text-lg tracking-wide text-lime">
                <span className="h-2 w-2 rounded-full bg-lime" aria-hidden />
                PRONTO EN GOOGLE PLAY
              </span>
              <Link
                href="/privacidad"
                className="rounded-xl border border-line-strong px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-text/40 hover:bg-surface"
              >
                Cómo se cuidan tus datos
              </Link>
            </div>

            <p className="mt-4 text-sm text-faint">
              Android 7.0 o superior · unos 40 MB · sin compras dentro de la app.
            </p>
          </div>

          {/* El dial, con las cifras de un entrenamiento real */}
          <div className="rise mx-auto w-full max-w-sm" style={{ animationDelay: "120ms" }}>
            <Dial className="aspect-square w-full">
              <p className="display tabular text-[clamp(3.4rem,11vw,5.2rem)]">7.703</p>
              <p className="eyebrow mt-2">
                <span className="text-lime">KG</span> · Volumen total
              </p>
            </Dial>

            <div className="panel mt-6 grid grid-cols-3 divide-x divide-line">
              {[
                { value: "58:33", label: "Tiempo" },
                { value: "16", label: "Series" },
                { value: "4", label: "Ejercicios" },
              ].map((item) => (
                <div key={item.label} className="px-3 py-4 text-center">
                  <p className="display tabular text-2xl">{item.value}</p>
                  <p className="eyebrow mt-1 text-[0.62rem]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cifras                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-line bg-ink">
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-y divide-line px-5 sm:px-8 md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            /* el número primero a la vista; en el marcado manda el término, que es
               lo correcto para un dl y lo que lee un lector de pantalla */
            <div key={stat.label} className="flex flex-col px-4 py-8 text-center">
              <dt className="eyebrow order-2 mt-1.5">{stat.label}</dt>
              <dd className="display tabular order-1 text-4xl text-lime">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Funciones                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="funciones" className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Qué hace</p>
        <h2 className="display mt-4 max-w-2xl text-[length:var(--h2)]">
          Lo que necesitás entre serie y serie, y nada más.
        </h2>
        <div className="hairline mt-8" />

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3 className="display text-[length:var(--h3)]">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Catálogo                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section id="catalogo" className="border-y border-line bg-ink/60 scroll-mt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">El catálogo</p>
            <h2 className="display mt-4 text-[length:var(--h2)]">
              Los buscás por cómo son, no por cómo se llaman.
            </h2>
            <p className="mt-5 text-muted">
              Cada uno de los 1.323 ejercicios muestra su figura en la lista, con el
              músculo que trabaja marcado en rojo. No hay que entrar a la ficha para
              saber si ese es el que hacés.
            </p>
            <p className="mt-4 text-muted">
              Las figuras vienen adentro de la app: se ven igual en el subsuelo del
              gimnasio, sin datos y sin wifi.
            </p>
          </div>

          <Image
            src="/catalogo.webp"
            alt="Doce figuras de ejercicios del catálogo: press de banca, dominadas, elevaciones laterales, curl con barra y otras."
            width={860}
            height={650}
            className="w-full rounded-2xl border border-line"
            sizes="(min-width: 1024px) 32rem, 100vw"
          />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Historias                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="historias" className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">Compartir</p>
          <h2 className="display mt-4 text-[length:var(--h2)]">
            Cuando rompés un récord, se nota.
          </h2>
          <p className="mt-5 text-muted">
            Al terminar, la app arma una imagen de 1080 × 1920 lista para tus
            historias. Cinco plantillas: la sesión completa, el récord, el día
            pesado, la semana y el progreso de un ejercicio. Elegís qué mostrar,
            el fondo, y si querés, una foto tuya.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { src: "/historia-record.webp", alt: "Historia de un récord: 70 kg por 15 repeticiones en prensa de piernas, con 10 kg más que la marca anterior.", caption: "Récord" },
            { src: "/historia-sesion.webp", alt: "Historia de una sesión: 7.703 kg de volumen total, 58 minutos, 16 series y 4 ejercicios.", caption: "Sesión" },
            { src: "/historia-semana.webp", alt: "Historia de la semana: 32.450 kg de volumen, 4 entrenamientos y 23 ejercicios, con una barra por día.", caption: "Semana" },
          ].map((shot) => (
            <figure key={shot.src}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={520}
                height={924}
                className="w-full rounded-2xl border border-line"
                sizes="(min-width: 640px) 18rem, 100vw"
              />
              <figcaption className="eyebrow mt-3 text-center">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Privacidad                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section id="privacidad" className="border-t border-line bg-ink scroll-mt-20">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Tus datos</p>
            <h2 className="display mt-4 text-[length:var(--h2)]">
              Sin cuentas. Sin nube. Sin anuncios.
            </h2>
            <p className="mt-5 text-muted">
              GymTrack no tiene servidor. Tus entrenamientos, tus récords y el
              recorrido de tus salidas viven en una base de datos adentro de tu
              teléfono, y de ahí no salen. No hay registro, no hay correo, no hay
              analítica y no hay identificador de publicidad.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="eyebrow">Lo único que sale del teléfono</h3>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {thirdParties.map((party) => (
                <li key={party.name} className="grid gap-1.5 py-5 sm:grid-cols-[13rem_1fr_1fr] sm:gap-6">
                  <p className="font-display text-lg tracking-wide">{party.name}</p>
                  <p className="text-sm text-muted">{party.what}</p>
                  <p className="text-sm text-faint">{party.receives}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-faint">
              Nada de eso incluye tus entrenamientos: son pedidos de imágenes, de
              mosaicos de mapa y de actualizaciones.
            </p>
          </div>

          <Link
            href="/privacidad"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-lime px-5 py-3 font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Leer la política completa
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cierre                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8">
        <h2 className="display mx-auto max-w-2xl text-[length:var(--h2)]">
          {site.tagline}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted">
          GymTrack está en pruebas cerradas antes de llegar a Google Play. Si
          querés entrar como tester o tenés una duda, escribinos.
        </p>
        <Link
          href="/soporte"
          className="mt-8 inline-flex rounded-xl border border-line-strong px-6 py-3 font-semibold transition-colors hover:border-text/40 hover:bg-surface"
        >
          Ir a soporte
        </Link>
      </section>
    </>
  );
}
