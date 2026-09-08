import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de uso",
  description:
    "Condiciones de uso de GymTrack: app gratuita, sin cuentas, entregada tal cual está. No sustituye el consejo de un profesional de la salud.",
  alternates: { canonical: "/terminos" },
};

export default function Terminos() {
  return (
    <LegalPage
      title="Términos de uso"
      lede="Reglas claras y cortas para usar GymTrack. Al instalar la app, aceptás lo que sigue."
    >
      <h2 id="que-es">Qué es GymTrack</h2>
      <p>
        GymTrack es una aplicación gratuita para Android que sirve para registrar
        entrenamientos de gimnasio y salidas a correr. No requiere cuenta, no
        tiene compras dentro de la app y funciona sin conexión a internet.
      </p>

      <h2 id="salud">No es consejo médico ni profesional</h2>
      <p>
        <strong>
          GymTrack es un cuaderno: anota lo que vos hacés. No prescribe
          entrenamientos ni evalúa si algo es seguro para vos.
        </strong>
      </p>
      <ul>
        <li>
          Las instrucciones de técnica y las animaciones del catálogo son
          material informativo de terceros y pueden no ajustarse a tu caso.
        </li>
        <li>
          Las sugerencias de progresión son un cálculo a partir de lo que
          registraste, no una indicación profesional.
        </li>
        <li>
          Entrenar implica riesgo de lesión. Consultá a un profesional de la
          salud antes de empezar un plan, especialmente si tenés una condición
          previa, estás embarazada o volvés de una lesión.
        </li>
      </ul>
      <p>
        Vos sos responsable de cómo entrenás y de los pesos que elegís. El
        desarrollador no responde por lesiones ni por consecuencias derivadas del
        uso de la app.
      </p>

      <h2 id="datos">Tus datos son tuyos, y también tu responsabilidad</h2>
      <p>
        Toda tu información vive en tu teléfono (ver la{" "}
        <Link href="/privacidad">política de privacidad</Link>). Eso tiene una
        contracara: <strong>no tenemos una copia</strong>. Si perdés el teléfono,
        lo formateás o desinstalás la app, esos datos se pierden.
      </p>
      <p>
        Hacé copias de seguridad con la exportación a JSON de la app y guardalas
        en un lugar seguro. La app también genera un backup automático, pero
        también vive en el mismo teléfono.
      </p>

      <h2 id="uso">Uso permitido</h2>
      <ul>
        <li>Podés usar la app para uso personal, todas las veces que quieras.</li>
        <li>
          No podés redistribuir la aplicación modificada, ni presentarla como
          propia, ni usar la marca GymTrack para otro producto.
        </li>
        <li>
          No podés usar la app para actividades ilegales ni intentar vulnerar el
          dispositivo de otra persona con ella.
        </li>
      </ul>

      <h2 id="contenido">Contenido de terceros</h2>
      <p>
        El catálogo de ejercicios (nombres, músculos, instrucciones y
        animaciones) proviene de bases de datos abiertas de terceros, entre ellas{" "}
        <a
          href="https://github.com/JahelCuadrado/ExerciseGymGifsDB"
          target="_blank"
          rel="noopener noreferrer"
        >
          ExerciseGymGifsDB
        </a>{" "}
        y{" "}
        <a
          href="https://github.com/yuhonas/free-exercise-db"
          target="_blank"
          rel="noopener noreferrer"
        >
          free-exercise-db
        </a>
        . Los mapas de las salidas usan datos de{" "}
        <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
          OpenStreetMap
        </a>{" "}
        y sus proveedores de mosaicos. Cada uno conserva su propia licencia y
        atribución.
      </p>

      <h2 id="garantia">Sin garantías</h2>
      <p>
        La app se entrega <strong>tal cual está</strong>, sin garantía de que
        funcione sin errores, de que esté siempre disponible ni de que los
        cálculos (volumen, 1RM estimado, distancia por GPS) sean exactos. La
        precisión del GPS depende de tu teléfono y del entorno.
      </p>
      <p>
        En la medida en que la ley lo permita, el desarrollador no será
        responsable por daños directos o indirectos derivados del uso o de la
        imposibilidad de usar la aplicación, incluida la pérdida de datos.
      </p>

      <h2 id="cambios">Cambios y disponibilidad</h2>
      <p>
        La app puede cambiar, incorporar funciones o dejar de actualizarse en
        cualquier momento. Si alguna versión futura incorporara funciones pagas,
        se avisará con claridad y nunca de forma retroactiva sobre lo que ya
        tenés instalado.
      </p>

      <h2 id="ley">Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República Argentina.
      </p>

      <h2 id="contacto">Contacto</h2>
      <p>
        Consultas sobre estos términos:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
