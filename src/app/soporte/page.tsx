import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soporte",
  description:
    "Preguntas frecuentes sobre GymTrack y cómo contactarnos: dónde viven tus datos, cómo pasarlos a otro teléfono y por qué la app pide ubicación.",
  alternates: { canonical: "/soporte" },
};

const faqs = [
  {
    q: "¿Necesito internet para usarla?",
    a: "No. Los entrenamientos, el catálogo de 1.323 ejercicios y sus figuras vienen dentro de la app. Solo se usa internet para descargar la animación completa de un ejercicio, para dibujar el mapa de una salida y para buscar actualizaciones.",
  },
  {
    q: "¿Dónde quedan mis entrenamientos?",
    a: "En una base de datos dentro de tu teléfono. No hay cuenta ni servidor: nadie más los ve, tampoco nosotros.",
  },
  {
    q: "¿Cómo paso mis datos a otro teléfono?",
    a: "Ajustes → Copia de seguridad → exportar. Te genera un archivo JSON. En el teléfono nuevo, instalás GymTrack y usás importar. Se restaura todo: rutinas, historial, récords y ajustes.",
  },
  {
    q: "¿Por qué pide permiso de ubicación?",
    a: "Solo para medir tus salidas a correr: distancia, ritmo y recorrido. Se usa mientras la salida está en curso y los datos quedan en tu teléfono. Si nunca usás esa función, podés no dar el permiso y el resto de la app anda igual.",
  },
  {
    q: "¿Sigue midiendo con la pantalla apagada?",
    a: "Sí, mientras la salida está activa la app mantiene un servicio en primer plano con una notificación visible. Al terminar la salida, el GPS se apaga.",
  },
  {
    q: "¿Tiene publicidad o compras?",
    a: "No, y no está previsto. Tampoco hay analítica ni identificador de publicidad.",
  },
  {
    q: "¿Puedo usarla en iPhone?",
    a: "Por ahora no: GymTrack está disponible solo para Android.",
  },
  {
    q: "Encontré un error o se me ocurrió algo",
    a: "Escribinos contando qué celular tenés y qué pasó. Los reportes con el paso a paso para reproducir el problema son los que se arreglan más rápido.",
  },
];

export default function Soporte() {
  return (
    <LegalPage
      title="Soporte"
      updated={false}
      lede="Las preguntas que más se repiten. Si la tuya no está acá, escribinos: contesta una persona."
    >
      <p>
        Contacto:{" "}
        <a href={`mailto:${site.email}`}>
          <strong>{site.email}</strong>
        </a>
      </p>

      <h2 id="preguntas">Preguntas frecuentes</h2>
      {faqs.map((faq) => (
        <div key={faq.q}>
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      ))}

      <h2 id="testers">Probar la app antes que salga</h2>
      <p>
        GymTrack está en pruebas cerradas en Google Play antes de publicarse.
        Si querés entrar como tester, mandanos un correo con la dirección de
        Gmail con la que usás Play y te sumamos a la lista.
      </p>

      <h2 id="mas">Más información</h2>
      <ul>
        <li>
          <Link href="/privacidad">Política de privacidad</Link> — qué guarda la
          app y qué sale del teléfono.
        </li>
        <li>
          <Link href="/eliminar-datos">Eliminar mis datos</Link> — cómo borrar
          todo, con y sin desinstalar.
        </li>
        <li>
          <Link href="/terminos">Términos de uso</Link> — las condiciones, en
          criollo.
        </li>
      </ul>
    </LegalPage>
  );
}
