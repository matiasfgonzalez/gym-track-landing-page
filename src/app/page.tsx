import Image from "next/image";
import Link from "next/link";
import {
  BellRing,
  CloudOff,
  Download,
  Dumbbell,
  Flame,
  History,
  ListChecks,
  MapPin,
  PlayCircle,
  Repeat2,
  ShieldCheck,
  Timer,
  TrendingUp,
  Trophy,
} from "lucide-react";

import { Phone } from "@/components/Phone";
import { SectionHead } from "@/components/SectionHead";
import { site, thirdParties } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Contenido                                                           */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "1.323", label: "Ejercicios" },
  { value: "0", label: "Cuentas" },
  { value: "0", label: "Anuncios" },
  { value: "100%", label: "En tu teléfono" },
];

/** Los tres momentos de un entrenamiento, con la pantalla que le toca a cada uno. */
const steps = [
  {
    n: "01",
    title: "Abrís y ya sabés qué toca",
    body: "La rutina del día en la primera pantalla, con los ejercicios que trae y cuánto llevás esta semana. Un toque y arrancaste.",
    src: "/app/inicio.webp",
    alt: "Pantalla de inicio de GymTrack con la rutina del día, las figuras de sus ejercicios y el resumen de la semana.",
  },
  {
    n: "02",
    title: "Registrás sin pensar",
    body: "Peso y reps con el pulgar, y al lado lo que levantaste la última vez. El descanso arranca solo cuando cerrás la serie.",
    src: "/app/serie.webp",
    alt: "Pantalla de entrenamiento con el peso en 35 kg, 13 repeticiones, la marca de la última vez y el descanso corriendo.",
  },
  {
    n: "03",
    title: "Y ves si estás progresando",
    body: "Volumen por semana, récords personales y la evolución de cada ejercicio. Los números que dicen si el plan funciona.",
    src: "/app/progreso.webp",
    alt: "Pantalla de perfil con el peso corporal, la lista de récords personales y los accesos a progreso.",
  },
];

const features: {
  Icon: typeof History;
  title: string;
  body: string;
  tint?: string;
}[] = [
  {
    Icon: History,
    title: "La última vez",
    body: "Cuánto levantaste la vez pasada, al lado de la serie que estás por hacer. Sin ir a buscarlo al historial.",
  },
  {
    Icon: Timer,
    title: "Descanso que avisa",
    body: "Arranca solo al cerrar la serie. Suena, vibra y te notifica aunque tengas la pantalla apagada.",
  },
  {
    Icon: TrendingUp,
    title: "Te sugiere cuándo subir",
    body: "Si cerraste el rango de repeticiones, te propone el próximo peso. Conservador: solo cuando te lo ganaste.",
  },
  {
    Icon: Trophy,
    title: "Récords personales",
    body: "El peso máximo, el 1RM estimado y el día que lo conseguiste. El ámbar de la app es solo para eso.",
    // el único ámbar del sitio, y significa lo mismo que adentro de la app
    tint: "text-amber" as const,
  },
  {
    Icon: ListChecks,
    title: "Rutinas como las armás vos",
    body: "Superseries, calentamiento que no suma volumen, RPE y plantillas listas para empezar hoy.",
  },
  {
    Icon: MapPin,
    title: "Salir a correr",
    body: "GPS, ritmo, vueltas automáticas y el mapa del recorrido. Sigue midiendo con la pantalla apagada.",
  },
  {
    Icon: Flame,
    title: "Compartir el entrenamiento",
    body: "Cinco plantillas para historias, en 1080 × 1920. Cuando rompés un récord, se nota.",
  },
  {
    Icon: Download,
    title: "El backup es tuyo",
    body: "Un JSON que te llevás a otro teléfono cuando quieras, y exportación a CSV para abrirlo en Excel.",
  },
];

const faqs = [
  {
    q: "¿Necesito internet?",
    a: "No. El catálogo completo, las figuras de los ejercicios y todos tus datos viven adentro de la app. Internet se usa solo para la animación completa de un ejercicio, el mapa de una salida y buscar actualizaciones.",
  },
  {
    q: "¿Tengo que crearme una cuenta?",
    a: "No hay cuentas. Abrís la app y ya está: no pide correo, ni contraseña, ni número de teléfono.",
  },
  {
    q: "¿Cómo paso mis datos a otro teléfono?",
    a: "Exportás el backup en JSON desde Ajustes y lo importás en el teléfono nuevo. Se restaura todo: rutinas, historial, récords y ajustes.",
  },
  {
    q: "¿Tiene publicidad o compras dentro de la app?",
    a: "Ninguna de las dos, y no está previsto. Tampoco hay analítica ni identificador de publicidad.",
  },
];

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Portada                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden px-(--gutter) pb-20 pt-14 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="rise">
            <p className="glass-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
              ANDROID · GRATIS · SIN CUENTAS
            </p>

            <h1 className="display mt-6 text-(length:--hero)">
              Tu cuaderno de entrenamiento,{" "}
              <span className="grad-lime">en tu teléfono</span> y en ningún otro lado.
            </h1>

            <p className="mt-6 max-w-xl text-(length:--lede) text-muted">
              Rutinas, series, récords y salidas a correr. GymTrack abre, anota y
              cierra apoyado en el banco del gimnasio: sin registro, sin nube y sin
              depender de la señal que ahí abajo nunca hay.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span className="glow-lime inline-flex items-center gap-2.5 rounded-2xl bg-lime px-6 py-3.5 font-display text-lg tracking-wide text-ink">
                <Dumbbell size={20} strokeWidth={2.4} aria-hidden />
                PRONTO EN GOOGLE PLAY
              </span>
              <Link
                href="#video"
                className="glass glass-hover inline-flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-semibold"
              >
                <PlayCircle size={19} strokeWidth={2} aria-hidden />
                Ver la app andando
              </Link>
            </div>

            <p className="mt-5 text-sm text-faint">
              Android 7.0 o superior · unos 40 MB · sin compras dentro de la app.
            </p>
          </div>

          {/* La pantalla que mejor explica la app: la serie en curso */}
          <div className="rise relative mx-auto w-full max-w-[19rem]" style={{ animationDelay: "140ms" }}>
            <Phone
              src="/app/serie.webp"
              alt="Pantalla de entrenamiento de GymTrack: peso 35 kg, 13 repeticiones, la marca de la última vez y el descanso en 2:20."
              priority
              sizes="(min-width: 1024px) 19rem, 70vw"
            />

            {/* Dos cifras reales de esa misma pantalla, flotando. En pantallas
                chicas se esconden: encima del teléfono taparían lo que muestran. */}
            <div className="glass absolute -left-8 top-[22%] hidden rounded-2xl px-4 py-3 sm:block">
              <p className="eyebrow text-[0.6rem]">La última vez</p>
              <p className="display tabular mt-1 text-2xl">35 × 13</p>
            </div>

            <div className="glass absolute -right-6 bottom-[16%] hidden rounded-2xl px-4 py-3 sm:block">
              <p className="eyebrow text-[0.6rem]">Descanso</p>
              <p className="display tabular mt-1 text-2xl text-lime">2:20</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cifras                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-(--gutter)">
        <dl className="reveal mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            /* el número primero a la vista; en el marcado manda el término, que es
               lo correcto para un dl y lo que lee un lector de pantalla */
            <div key={stat.label} className="neu flex flex-col rounded-2xl px-4 py-6 text-center">
              <dt className="eyebrow order-2 mt-1.5 text-[0.62rem]">{stat.label}</dt>
              <dd className="display tabular order-1 text-4xl text-lime sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cómo se usa                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section id="producto" className="scroll-mt-24 px-(--gutter) py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHead
            eyebrow="Cómo se usa"
            title="Tres pantallas y se terminó el cuaderno de papel."
            lede="Nada de configurar nada antes de empezar. Abrís, entrenás y la app se encarga de acordarse por vos."
          />

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <article key={step.n} className="reveal">
                <Phone src={step.src} alt={step.alt} className="mx-auto max-w-[17rem]" />
                <div className="mt-7 flex items-start gap-4">
                  <span className="neu display grid h-11 w-11 shrink-0 place-items-center rounded-xl text-lg text-lime">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="display text-(length:--h3)">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Funciones                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-(--gutter) pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHead
            eyebrow="Qué trae"
            title="Todo lo que hace falta entre serie y serie."
            lede="Cada cosa está porque resuelve algo del gimnasio, no porque quedaba bien en la lista de funciones."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, body, tint }) => (
              <article key={title} className="glass glass-hover reveal rounded-3xl p-6">
                <span className={`neu grid h-12 w-12 place-items-center rounded-2xl ${tint ?? "text-lime"}`}>
                  <Icon size={21} strokeWidth={2} aria-hidden />
                </span>
                <h3 className="display mt-5 text-(length:--h3)">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Catálogo                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section id="catalogo" className="scroll-mt-24 px-(--gutter) pb-24 sm:pb-32">
        <div className="glass mx-auto w-full max-w-6xl overflow-hidden rounded-4xl p-(--gutter) sm:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <SectionHead
                eyebrow="El catálogo"
                title="Los buscás por cómo son, no por cómo se llaman."
                lede="Los 1.323 ejercicios muestran su figura en la lista, con el músculo que trabaja marcado. No hay que entrar a la ficha para saber si ese es el que hacés."
              />

              <Image
                src="/catalogo.webp"
                alt="Doce figuras de ejercicios del catálogo: press de banca, dominadas, elevaciones laterales, curl con barra y otras."
                width={860}
                height={650}
                className="mt-9 w-full rounded-2xl border border-white/10"
                sizes="(min-width: 1024px) 34rem, 100vw"
              />

              <ul className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-2">
                {[
                  "Técnica paso a paso, en español",
                  "Buscador por músculo y equipamiento",
                  "Favoritos y descarga para verlos sin señal",
                  "Animación completa en la ficha",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Phone
              src="/app/tecnica.webp"
              alt="Ficha de un ejercicio en GymTrack, con la figura del movimiento y la técnica paso a paso."
              className="mx-auto max-w-[17rem]"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Video                                                            */}
      {/* ---------------------------------------------------------------- */}
      <section id="video" className="scroll-mt-24 px-(--gutter) pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHead
            center
            eyebrow="En movimiento"
            title="Un minuto mirándola andar."
            lede="Grabación de pantalla real: registrar una serie, el catálogo y una salida a correr."
          />

          <figure className="glass reveal mx-auto mt-12 w-full max-w-sm overflow-hidden rounded-4xl p-3">
            {/* `preload="none"`: son 5 MB y la mayoría entra desde el celular con datos */}
            <video
              className="w-full rounded-[1.5rem] bg-ink"
              src="/video01.mp4"
              poster="/app/serie.webp"
              controls
              playsInline
              preload="none"
            >
              Tu navegador no puede reproducir el video.{" "}
              <a href="/video01.mp4">Descargalo acá</a>.
            </video>
          </figure>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Historias                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="historias" className="scroll-mt-24 px-(--gutter) pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHead
            eyebrow="Compartir"
            title="Cuando rompés un récord, se nota."
            lede="Al terminar, la app arma una imagen lista para tus historias. Cinco plantillas: la sesión, el récord, el día pesado, la semana y el progreso de un ejercicio."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              {
                src: "/historia-record.webp",
                alt: "Historia de un récord: 70 kg por 15 repeticiones en prensa de piernas, 10 kg más que la marca anterior.",
                caption: "Récord",
              },
              {
                src: "/historia-sesion.webp",
                alt: "Historia de una sesión: 7.703 kg de volumen total, 58 minutos, 16 series y 4 ejercicios.",
                caption: "Sesión",
              },
              {
                src: "/historia-semana.webp",
                alt: "Historia de la semana: 32.450 kg de volumen, 4 entrenamientos y 23 ejercicios, con una barra por día.",
                caption: "Semana",
              },
            ].map((shot) => (
              <figure key={shot.src} className="glass reveal rounded-3xl p-3">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={520}
                  height={924}
                  className="w-full rounded-2xl"
                  sizes="(min-width: 640px) 18rem, 90vw"
                />
                <figcaption className="eyebrow py-3 text-center">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Privacidad                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section id="privacidad" className="scroll-mt-24 px-(--gutter) pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHead
                eyebrow="Tus datos"
                title={
                  <>
                    Sin cuentas. Sin nube.{" "}
                    <span className="grad-lime">Sin anuncios.</span>
                  </>
                }
                lede="GymTrack no tiene servidor. Tus entrenamientos, tus récords y el recorrido de tus salidas viven en una base de datos adentro de tu teléfono, y de ahí no salen."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { Icon: CloudOff, label: "Cero servidores" },
                  { Icon: ShieldCheck, label: "Cero analítica" },
                  { Icon: Repeat2, label: "Backup que te llevás" },
                  { Icon: BellRing, label: "Cero notificaciones basura" },
                ].map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="neu inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold text-muted"
                  >
                    <Icon size={15} strokeWidth={2} className="text-lime" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>

              <Link
                href="/privacidad"
                className="glass glass-hover mt-9 inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold"
              >
                Leer la política completa
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="glass reveal rounded-4xl p-(--gutter) sm:p-8">
              <h3 className="eyebrow">Lo único que sale del teléfono</h3>
              <ul className="mt-6 divide-y divide-white/8">
                {thirdParties.map((party) => (
                  <li key={party.name} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-display text-lg tracking-wide">{party.name}</p>
                    <p className="mt-1 text-sm text-muted">{party.what}</p>
                    <p className="mt-0.5 text-sm text-faint">{party.receives}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-faint">
                Nada de eso incluye tus entrenamientos: son pedidos de imágenes, de
                mosaicos de mapa y de actualizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Preguntas                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-(--gutter) pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-3xl">
          <SectionHead center eyebrow="Dudas" title="Lo que más nos preguntan." />

          <div className="mt-12 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass group rounded-2xl px-5 py-4 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg tracking-wide marker:hidden">
                  {faq.q}
                  <span
                    className="neu grid h-7 w-7 shrink-0 place-items-center rounded-lg text-lime transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cierre                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-(--gutter) pb-24">
        <div className="glass mx-auto w-full max-w-4xl rounded-4xl px-(--gutter) py-16 text-center sm:py-20">
          <h2 className="display mx-auto max-w-2xl text-(length:--h2)">{site.tagline}</h2>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            GymTrack está en pruebas cerradas antes de llegar a Google Play. Si
            querés entrar como tester o tenés una duda, escribinos.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/soporte"
              className="glow-lime rounded-2xl bg-lime px-6 py-3.5 font-display text-lg tracking-wide text-ink"
            >
              QUIERO PROBARLA
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="glass glass-hover rounded-2xl px-5 py-3.5 text-sm font-semibold"
            >
              Escribirnos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
