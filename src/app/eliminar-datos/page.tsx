import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eliminar mis datos",
  description:
    "Cómo borrar toda tu información de GymTrack. Como todo vive en tu teléfono, lo hacés vos y es inmediato: no hay que pedirle nada a nadie.",
  alternates: { canonical: "/eliminar-datos" },
};

export default function EliminarDatos() {
  return (
    <LegalPage
      title="Eliminar mis datos"
      lede="No hace falta pedirlo ni esperar respuesta: como toda tu información está en tu teléfono, el borrado lo hacés vos y es inmediato."
    >
      <h2 id="cuenta">No hay cuenta que dar de baja</h2>
      <p>
        GymTrack no tiene registro, usuario ni servidor. No existe una cuenta
        tuya en ningún lado, así que no hay nada que solicitar: alcanza con
        borrar los datos del dispositivo.
      </p>

      <h2 id="parcial">Borrar una parte</h2>
      <p>Desde la propia app, sin tocar el resto:</p>
      <ul>
        <li>
          <strong>Un entrenamiento:</strong> Historial → abrí la sesión → borrarla.
        </li>
        <li>
          <strong>Una rutina:</strong> Rutinas → mantené presionada la rutina →
          borrar. También podés archivarla si querés conservarla sin verla.
        </li>
        <li>
          <strong>Una salida:</strong> Historial → abrí la salida → borrarla.
        </li>
        <li>
          <strong>Los ejercicios descargados:</strong> Ajustes → Descargas →
          borrar las animaciones guardadas. Libera espacio y no toca tu
          historial.
        </li>
      </ul>

      <h2 id="todo">Borrar absolutamente todo</h2>
      <p>Dos formas, las dos definitivas:</p>
      <ol>
        <li>
          <strong>Desinstalar la app.</strong> Android borra con ella la base de
          datos y todos los archivos que la app haya guardado.
        </li>
        <li>
          <strong>Sin desinstalar:</strong> Ajustes de Android → Aplicaciones →
          GymTrack → Almacenamiento → <strong>Borrar datos</strong>. La app queda
          instalada y vacía, como recién bajada.
        </li>
      </ol>
      <p>
        <strong>Las dos son irreversibles.</strong> Si querés conservar tu
        historial, antes exportá el backup desde Ajustes → Copia de seguridad:
        te da un archivo JSON que después podés importar en otro teléfono.
      </p>

      <h2 id="fuera">Lo que queda fuera de la app</h2>
      <ul>
        <li>
          <strong>Las imágenes que guardaste en la galería</strong> al compartir
          un entrenamiento se borran desde la app de fotos: son tuyas y viven
          fuera de GymTrack.
        </li>
        <li>
          <strong>Los archivos de backup</strong> que hayas exportado quedan
          donde los guardaste. Borralos vos si ya no los querés.
        </li>
        <li>
          <strong>Lo que compartiste</strong> por mensajería o redes se borra
          desde esas aplicaciones.
        </li>
      </ul>

      <h2 id="nosotros">Qué tenemos que borrar nosotros</h2>
      <p>
        Nada. No guardamos ninguna información tuya, así que no hay ningún
        registro nuestro que eliminar. Podés confirmarlo en la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
      <p>
        Si tenés alguna duda sobre esto, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
