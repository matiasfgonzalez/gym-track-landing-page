import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { site, thirdParties } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "GymTrack no tiene cuentas ni servidores: tus entrenamientos viven en tu teléfono. Acá está, en detalle, qué guarda la app, qué permisos usa y qué es lo único que sale del dispositivo.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <LegalPage
      title="Política de privacidad"
      lede="GymTrack no tiene cuentas ni servidores. Tus entrenamientos viven en tu teléfono y no los podemos ver ni nosotros."
    >
      <h2 id="resumen">En dos líneas</h2>
      <p>
        <strong>
          No recolectamos ningún dato personal. No hay registro, no hay servidor
          y no hay publicidad.
        </strong>{" "}
        Todo lo que anotás —entrenamientos, rutinas, récords, peso corporal y el
        recorrido de tus salidas— se guarda en una base de datos dentro de tu
        teléfono y no se envía a ningún lado.
      </p>
      <p>
        Esta política explica qué guarda la app, para qué pide cada permiso y
        cuáles son los únicos pedidos que salen del dispositivo.
      </p>

      <h2 id="responsable">Quién es responsable</h2>
      <p>
        GymTrack es una aplicación desarrollada de forma independiente y
        distribuida en Google Play bajo el identificador{" "}
        <strong>{site.packageName}</strong>. Para cualquier consulta sobre esta
        política podés escribir a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2 id="que-guarda">Qué guarda la app y dónde</h2>
      <p>
        Todo lo siguiente se guarda <strong>únicamente en tu teléfono</strong>,
        en el almacenamiento privado de la aplicación:
      </p>
      <ul>
        <li>Rutinas, ejercicios, series, pesos, repeticiones, RPE y notas.</li>
        <li>Historial de entrenamientos, récords personales y 1RM estimado.</li>
        <li>Registros de peso corporal, si los cargás.</li>
        <li>
          Salidas a correr: distancia, tiempo, ritmo, vueltas y las coordenadas
          del recorrido.
        </li>
        <li>Ajustes, favoritos y los ejercicios que descargaste para ver sin internet.</li>
      </ul>
      <p>
        Esa información no se sincroniza, no se sube a la nube y no viaja a
        ningún servidor nuestro, porque no tenemos ninguno. Si desinstalás la
        app, se borra con ella.
      </p>

      <h2 id="que-no">Qué no hacemos</h2>
      <ul>
        <li>No pedimos cuenta, correo, teléfono ni nombre.</li>
        <li>No mostramos publicidad ni usamos identificador de publicidad (Advertising ID).</li>
        <li>No usamos analítica, rastreo de uso ni herramientas de perfilado.</li>
        <li>No vendemos ni compartimos datos con terceros con fines comerciales.</li>
        <li>No accedemos al micrófono ni a tus contactos.</li>
      </ul>

      <h2 id="permisos">Permisos y para qué se usan</h2>
      <table>
        <thead>
          <tr>
            <th>Permiso</th>
            <th>Para qué</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Ubicación</th>
            <td>
              Medir distancia, ritmo y recorrido de tus salidas a correr. Se usa
              solo mientras hay una salida en curso y los datos quedan en tu
              teléfono. Para seguir midiendo con la pantalla apagada, la app
              mantiene un servicio en primer plano con una notificación visible.{" "}
              <strong>
                No usamos ubicación en segundo plano: si cerrás la salida, el
                GPS se apaga.
              </strong>
            </td>
          </tr>
          <tr>
            <th>Cámara</th>
            <td>
              Sacar una foto en el momento para usarla de fondo en la imagen que
              compartís. La foto se procesa en el teléfono.
            </td>
          </tr>
          <tr>
            <th>Fotos y multimedia</th>
            <td>
              Elegir una foto de tu galería como fondo y guardar ahí la imagen
              del entrenamiento. Solo se accede a la foto que elegís.
            </td>
          </tr>
          <tr>
            <th>Notificaciones</th>
            <td>
              Avisarte cuando termina el descanso. Son notificaciones locales,
              generadas por la app; no recibimos ni enviamos notificaciones push.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        La app <strong>no pide permiso de micrófono</strong>: reproduce sonidos
        de aviso, pero no graba nada.
      </p>

      <h2 id="terceros">Lo único que sale del teléfono</h2>
      <p>
        Para funcionar, la app hace pedidos a estos servicios. En ninguno de
        ellos viajan tus entrenamientos: son pedidos de imágenes, de mosaicos de
        mapa y de actualizaciones.
      </p>
      <table>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Para qué</th>
            <th>Qué recibe</th>
          </tr>
        </thead>
        <tbody>
          {thirdParties.map((party) => (
            <tr key={party.name}>
              <th>
                <a href={party.href} target="_blank" rel="noopener noreferrer">
                  {party.name}
                </a>
              </th>
              <td>{party.what}</td>
              <td>{party.receives}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Como cualquier pedido por internet, esos servicios ven tu dirección IP.
        Cada uno se rige por su propia política de privacidad, enlazada arriba.
      </p>

      <h3>Sobre el mapa de las salidas</h3>
      <p>
        Cuando mirás el recorrido de una salida, la app descarga los mosaicos del
        mapa de esa zona. El proveedor del mapa ve qué zona se está dibujando,
        pero no recibe tu recorrido ni sabe que es tuyo. Podés evitar esos
        pedidos desde <strong>Ajustes → Bajar los mosaicos del mapa</strong>: con
        la opción apagada se dibuja solo la línea del recorrido.
      </p>

      <h2 id="backup">Copias de seguridad</h2>
      <p>
        La app puede exportar toda tu información en un archivo JSON, y tus
        entrenamientos en CSV. Esos archivos los generás vos y quedan donde vos
        los guardes. Si los compartís por mensajería, correo o los subís a un
        servicio en la nube, pasan a regirse por la política de privacidad de ese
        servicio.
      </p>

      <h2 id="menores">Menores de edad</h2>
      <p>
        GymTrack no está dirigida a menores de 13 años y no recolecta
        conscientemente datos de menores. Como la app no recolecta datos
        personales de nadie, tampoco lo hace de ellos.
      </p>

      <h2 id="derechos">Tus derechos sobre tus datos</h2>
      <p>
        Como toda la información está en tu dispositivo y bajo tu control
        exclusivo, ejercés tus derechos directamente: podés verla, exportarla,
        corregirla y borrarla desde la propia app, sin pedirnos permiso ni
        esperar respuesta.
      </p>
      <p>
        Los pasos exactos para borrar todo están en{" "}
        <Link href="/eliminar-datos">Eliminar mis datos</Link>.
      </p>

      <h2 id="seguridad">Seguridad</h2>
      <p>
        Los datos se guardan en el almacenamiento privado de la aplicación, al
        que otras apps del teléfono no pueden acceder. La seguridad de esa
        información depende, además, de las protecciones de tu dispositivo:
        bloqueo de pantalla, cifrado del sistema y de a quién le prestás el
        teléfono.
      </p>

      <h2 id="cambios">Cambios en esta política</h2>
      <p>
        Si en el futuro la app cambia lo que hace con los datos, esta página se
        actualiza y cambia la fecha del encabezado. Los cambios importantes se
        avisan también en las notas de la versión en Google Play.
      </p>

      <h2 id="contacto">Contacto</h2>
      <p>
        Dudas, reclamos o pedidos sobre esta política:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
