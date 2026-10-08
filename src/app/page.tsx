import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Check,
  CloudOff,
  Download,
  History,
  ListChecks,
  MapPin,
  PlayCircle,
  Repeat2,
  ShieldCheck,
  TrendingUp,
  Trophy,
} from "lucide-react";

import { Dial } from "@/components/Dial";
import { Mark } from "@/components/Mark";
import { Phone } from "@/components/Phone";
import { SectionHead } from "@/components/SectionHead";
import { StepsStory } from "@/components/StepsStory";
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
    title: "Abrís y ya sabés qué toca",
    body: "La rutina del día en la primera pantalla, con los ejercicios que trae y cuánto llevás esta semana. Un toque y arrancaste.",
    src: "/app/inicio.webp",
    alt: "Pantalla de inicio de GymTrack con la rutina del día, las figuras de sus ejercicios y el resumen de la semana.",
  },
  {
    title: "Registrás sin pensar",
    body: "Peso y reps con el pulgar, y al lado lo que levantaste la última vez. El descanso arranca solo cuando cerrás la serie.",
    src: "/app/serie.webp",
    alt: "Pantalla de entrenamiento con el peso en 35 kg, 13 repeticiones, la marca de la última vez y el descanso corriendo.",
  },
  {
    title: "Y ves si estás progresando",
    body: "Volumen por semana, récords personales y la evolución de cada ejercicio. Los números que dicen si el plan funciona.",
    src: "/app/progreso.webp",
    alt: "Pantalla de perfil con el peso corporal, la lista de récords personales y los accesos a progreso.",
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
    q: "¿En qué teléfonos funciona?",
    a: "En Android 7.0 o superior. Ocupa unos 40 MB y no tiene compras dentro de la app.",
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
      <section className="relative overflow-hidden px-(--gutter) pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <p className="rise glass-soft inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted">
              Pronto en Google Play · gratis y sin cuentas
            </p>

            <h1 className="rise display mt-6 max-w-[13ch] text-(length:--hero)" style={{ animationDelay: "60ms" }}>
              Tu cuaderno de entrenamiento, <span className="grad-lime">en tu teléfono.</span>
            </h1>

            <p className="rise mt-6 max-w-md text-(length:--lede) text-muted" style={{ animationDelay: "120ms" }}>
              Rutinas, series, récords y salidas a correr. Sin registro, sin nube y sin
              depender de la señal del gimnasio.
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "180ms" }}>
              <a
                href={site.testerHref}
                className="press glow-lime group inline-flex items-center gap-2.5 rounded-2xl bg-lime px-6 py-3.5 font-display text-lg tracking-wide text-ink"
              >
                QUIERO PROBARLA
                <ArrowRight
                  size={19}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <Link
                href="#video"
                className="press glass glass-hover inline-flex items-center gap-2.5 rounded-2xl px-5 py-3.5 text-sm font-semibold"
              >
                <PlayCircle size={19} strokeWidth={2} aria-hidden />
                Ver la app andando
              </Link>
            </div>
          </div>

          {/* La pantalla que mejor explica la app: la serie en curso */}
          <div className="rise relative mx-auto w-full max-w-[18rem]" style={{ animationDelay: "160ms" }}>
            <Phone
              src="/app/serie.webp"
              alt="Pantalla de entrenamiento de GymTrack: peso 35 kg, 13 repeticiones, la marca de la última vez y el descanso en 2:20."
              priority
              sizes="(min-width: 1024px) 18rem, 70vw"
            />

            {/* Dos cifras reales de esa misma pantalla, flotando sobre el canto.
                En pantallas chicas se esconden: encima del teléfono taparían lo
                que muestran. */}
            <div
              className="rise chip absolute -left-14 top-[30%] hidden rounded-2xl px-4 py-3 sm:block"
              style={{ animationDelay: "420ms" }}
            >
              <p className="text-[0.7rem] font-medium text-faint">La última vez</p>
              <p className="display tabular mt-0.5 text-2xl">35 × 13</p>
            </div>

            <div
              className="rise chip absolute -right-12 bottom-[24%] hidden rounded-2xl px-4 py-3 sm:block"
              style={{ animationDelay: "540ms" }}
            >
              <p className="text-[0.7rem] font-medium text-faint">Descanso</p>
              <p className="display tabular mt-0.5 text-2xl text-lime">2:20</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cifras                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-(--gutter)">
        <dl className="reveal mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-8 border-y border-white/8 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            /* el número primero a la vista; en el marcado manda el término, que es
               lo correcto para un dl y lo que lee un lector de pantalla */
            <div
              key={stat.label}
              className="flex flex-col items-center border-white/8 text-center even:border-l md:border-l md:first:border-l-0"
            >
              <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="display tabular order-1 text-5xl text-text sm:text-6xl">{stat.value}</dd>
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
            title="Tres pantallas y se terminó el cuaderno de papel."
            lede="Nada de configurar nada antes de empezar. Abrís, entrenás y la app se encarga de acordarse por vos."
          />
          <StepsStory steps={steps} />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Funciones                                                        */}
      {/* ---------------------------------------------------------------- */}
      {/* Un bento y no ocho tarjetas iguales: lo que más se usa entre serie y
          serie (el descanso y la última vez) ocupa más lugar, y cada pieza
          muestra la cifra de la app en vez de describirla. */}
      <section id="funciones" className="scroll-mt-24 px-(--gutter) pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHead
            title="Todo lo que hace falta entre serie y serie."
            lede="Cada cosa está porque resuelve algo del gimnasio, no porque quedaba bien en la lista de funciones."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Descanso: la pieza grande, con el dial de la app */}
            <article className="glass glass-hover reveal flex flex-col rounded-3xl p-6 sm:col-span-2 sm:p-8 lg:row-span-2">
              <Dial progress={0.62} className="mx-auto aspect-square w-full max-w-[16rem]">
                <p className="text-sm font-medium text-faint">Descanso</p>
                <p className="display tabular text-6xl text-lime">2:20</p>
              </Dial>
              <div className="mt-auto pt-8">
                <h3 className="display text-(length:--h3)">Descanso que avisa</h3>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted">
                  Arranca solo al cerrar la serie. Suena, vibra y te notifica aunque tengas la
                  pantalla apagada.
                </p>
              </div>
            </article>

            {/* La última vez: la comparación que la app pone al lado de cada serie */}
            <article className="glass glass-hover reveal flex flex-col justify-between gap-6 rounded-3xl p-6 sm:col-span-2 sm:flex-row sm:items-end sm:p-8">
              <div>
                <History size={21} strokeWidth={2} className="text-lime" aria-hidden />
                <h3 className="display mt-4 text-(length:--h3)">La última vez</h3>
                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted">
                  Cuánto levantaste la vez pasada, al lado de la serie que estás por hacer.
                </p>
              </div>
              <div className="neu-inset shrink-0 rounded-2xl px-5 py-4 sm:text-right">
                <p className="text-xs text-faint">Press de banca, serie 2</p>
                <p className="display tabular mt-1 text-4xl">
                  35 <span className="text-faint">×</span> 13
                </p>
              </div>
            </article>

            <article className="glass glass-hover tint-lime reveal rounded-3xl p-6">
              <TrendingUp size={21} strokeWidth={2} className="text-lime" aria-hidden />
              <h3 className="display mt-4 text-(length:--h3)">Te sugiere cuándo subir</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Si cerraste el rango de repeticiones, te propone el próximo peso. Solo cuando te
                lo ganaste.
              </p>
            </article>

            {/* el único ámbar del sitio, y significa lo mismo que adentro de la app */}
            <article className="glass glass-hover tint-amber reveal rounded-3xl p-6">
              <Trophy size={21} strokeWidth={2} className="text-amber" aria-hidden />
              <h3 className="display mt-4 text-(length:--h3)">Récords personales</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                El peso máximo, el 1RM estimado y el día que lo conseguiste.
              </p>
            </article>

            {/* Correr: la grilla de puntos hace de mapa sin dibujar uno falso */}
            <article className="glass glass-hover reveal relative overflow-hidden rounded-3xl p-6 sm:col-span-2 sm:p-8">
              <div
                className="grid-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(110deg,transparent_35%,black)]"
                aria-hidden
              />
              <div className="relative">
                <MapPin size={21} strokeWidth={2} className="text-lime" aria-hidden />
                <h3 className="display mt-4 text-(length:--h3)">Salir a correr</h3>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted">
                  GPS, ritmo, vueltas automáticas y el mapa del recorrido. Sigue midiendo con la
                  pantalla apagada.
                </p>
              </div>
            </article>

            <article className="glass glass-hover reveal rounded-3xl p-6">
              <ListChecks size={21} strokeWidth={2} className="text-lime" aria-hidden />
              <h3 className="display mt-4 text-(length:--h3)">Rutinas a tu manera</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Superseries, calentamiento que no suma volumen, RPE y plantillas listas.
              </p>
            </article>

            <article className="glass glass-hover reveal rounded-3xl p-6">
              <Download size={21} strokeWidth={2} className="text-lime" aria-hidden />
              <h3 className="display mt-4 text-(length:--h3)">El backup es tuyo</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Un JSON que te llevás a otro teléfono, y exportación a CSV para Excel.
              </p>
            </article>
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
                    <Check size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-lime" aria-hidden />
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
            title="Cuando rompés un récord, se nota."
            lede="Al terminar, la app arma una imagen lista para tus historias. Cinco plantillas: la sesión, el récord, el día pesado, la semana y el progreso de un ejercicio."
          />

          {/* escalonadas: las de los costados bajan, como una tira de historias */}
          <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:items-start">
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
            ].map((shot, i) => (
              <figure key={shot.src} className={`glass reveal rounded-3xl p-3 ${i === 1 ? "" : "sm:mt-16"}`}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={520}
                  height={924}
                  className="w-full rounded-2xl"
                  sizes="(min-width: 640px) 18rem, 90vw"
                />
                <figcaption className="py-3 text-center text-sm font-medium text-muted">{shot.caption}</figcaption>
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
                    {/* cada frase entera en su renglón: "Sin / nube" partido no se lee */}
                    <span className="whitespace-nowrap">Sin cuentas.</span>{" "}
                    <span className="whitespace-nowrap">Sin nube.</span>{" "}
                    <span className="whitespace-nowrap text-lime">Sin anuncios.</span>
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
                className="press glass glass-hover group mt-9 inline-flex items-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold"
              >
                Leer la política completa
                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>

            <div className="glass reveal rounded-4xl p-(--gutter) sm:p-8">
              <h3 className="display text-(length:--h3)">Lo único que sale del teléfono</h3>
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
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead title="Lo que más nos preguntan." />
            <p className="mt-5 text-muted">
              ¿Otra duda?{" "}
              <Link
                href="/soporte"
                className="text-text underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-lime"
              >
                En soporte están todas
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq glass group rounded-2xl px-5 py-4 sm:px-6">
                <summary className="press flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg tracking-wide marker:hidden">
                  {faq.q}
                  <span
                    className="neu grid h-7 w-7 shrink-0 place-items-center rounded-lg text-lime transition-transform duration-200 ease-out group-open:rotate-45"
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
        <div className="glass relative mx-auto w-full max-w-4xl overflow-hidden rounded-4xl px-(--gutter) py-16 text-center sm:py-20">
          <div
            className="grid-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_50%_0%,black,transparent)]"
            aria-hidden
          />
          <div className="relative">
            <Mark className="mx-auto h-9 w-auto" />
            <h2 className="display mx-auto mt-7 max-w-2xl text-(length:--h2)">{site.tagline}</h2>
            <p className="mx-auto mt-5 max-w-lg text-muted">
              GymTrack está en pruebas cerradas antes de llegar a Google Play. Si querés
              entrar como tester, escribinos y te sumamos.
            </p>
            <a
              href={site.testerHref}
              className="press glow-lime group mt-9 inline-flex items-center gap-2.5 rounded-2xl bg-lime px-6 py-3.5 font-display text-lg tracking-wide text-ink"
            >
              QUIERO PROBARLA
              <ArrowRight
                size={19}
                strokeWidth={2.4}
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
