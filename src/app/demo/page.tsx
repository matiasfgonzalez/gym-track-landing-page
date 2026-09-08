import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

/** El archivo vive en `public/`, así que se sirve tal cual en esta ruta. */
const videoPath = "/video01.mp4";

export const metadata: Metadata = {
  title: "Video de la app",
  description:
    "Grabación de pantalla de GymTrack funcionando: registrar una serie, el catálogo de ejercicios y una salida a correr.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Video de la app — GymTrack",
    description: "Grabación de pantalla de GymTrack funcionando.",
    videos: [{ url: `${site.url}${videoPath}`, type: "video/mp4" }],
  },
};

export default function Demo() {
  return (
    <LegalPage
      title="Video de la app"
      updated={false}
      lede="Una grabación de pantalla de GymTrack andando en un teléfono Android, para quien quiera verla antes de instalarla."
    >
      <figure className="my-2">
        <video
          className="w-full max-w-md rounded-xl border border-line bg-ink"
          src={videoPath}
          controls
          playsInline
          preload="metadata"
        >
          Tu navegador no puede reproducir el video.{" "}
          <a href={videoPath}>Descargalo acá</a>.
        </video>
      </figure>

      <p>
        Si no se ve, el archivo está disponible directo en{" "}
        <a href={videoPath}>
          <strong>
            {site.url}
            {videoPath}
          </strong>
        </a>{" "}
        (MP4, sin login).
      </p>

      <h2 id="mas">Más información</h2>
      <ul>
        <li>
          <Link href="/soporte">Soporte y preguntas frecuentes</Link>
        </li>
        <li>
          <Link href="/privacidad">Política de privacidad</Link>
        </li>
      </ul>
    </LegalPage>
  );
}
