# GymTrack · sitio

Landing y páginas legales de la app. Next.js 16 (App Router) + Tailwind v4, todo
estático: no hay base de datos, formularios ni backend.

Existe por una razón concreta: **Google Play exige una URL pública de política de
privacidad** para poder publicar la app, y de paso resuelve el correo de soporte
y la explicación de cómo borrar los datos.

## Antes de publicarlo (2 minutos)

Queda un solo valor por completar en [`src/lib/site.ts`](src/lib/site.ts):

- **`url`** — el dominio real. Se usa en el sitemap y en las metaetiquetas para
  compartir. Se puede pasar por variable de entorno sin tocar el código:

  ```
  NEXT_PUBLIC_SITE_URL=https://tudominio.com
  ```

Cuando la app esté publicada, cambiá el cartel *"Pronto en Google Play"* de
[`src/app/page.tsx`](src/app/page.tsx) por un enlace a `site.playUrl`, que ya
apunta al identificador correcto.

## Correr y compilar

```bash
npm run dev     # http://localhost:3000
npm run build   # compila y prerenderiza las 5 páginas
npm start       # sirve lo compilado
```

## Publicar

Cualquier hosting de estáticos sirve. Lo más corto:

```bash
npx vercel        # primera vez, para crear el proyecto
npx vercel --prod
```

Después cargá `NEXT_PUBLIC_SITE_URL` en las variables de entorno del proyecto y
volvé a desplegar, para que el sitemap salga con el dominio bueno.

## Las URLs que pide Play Console

| Campo en Play | URL |
|---|---|
| Política de privacidad | `/privacidad` |
| Eliminación de datos | `/eliminar-datos` |
| Sitio web | `/` |
| Soporte | `/soporte` |

## Estructura

```
src/
├── app/
│   ├── page.tsx            landing
│   ├── privacidad/         política de privacidad (la que pide Play)
│   ├── terminos/           términos de uso, con el aviso de que no es consejo médico
│   ├── eliminar-datos/     cómo borrar todo, con y sin desinstalar
│   ├── soporte/            preguntas frecuentes y contacto
│   ├── globals.css         tokens de marca y estilos de las páginas de texto
│   ├── sitemap.ts robots.ts icon.png apple-icon.png
├── components/             Header, Footer, Mark (isotipo), Dial, LegalPage
└── lib/site.ts             ⚠️ los datos a completar
```

## Sobre los textos legales

Están escritos a partir de lo que la app **realmente hace**, auditado en el
código: qué guarda, qué permisos declara el manifiesto y a qué servicios se
conecta (jsDelivr, los mosaicos de mapa, EAS Update). Si mañana la app cambia
—se agrega analítica, una cuenta, publicidad— hay que actualizar
`/privacidad` **antes** de subir esa versión: la política tiene que describir la
app que está publicada.

No son un texto legal profesional. Para una app sin cuentas, sin cobros y sin
recolección de datos alcanzan; si en algún momento la app cobra o guarda datos en
un servidor, conviene que los revise alguien del rubro.

## Diseño

Los mismos tokens que la app: carbón `#0A0E0C` de fondo, lima `#B8FF3C` para la
acción, ámbar `#FFB020` reservado para los récords, y Barlow Condensed para los
números. El anillo de la portada es el mismo dial que llevan las imágenes que
genera la app para compartir, y las capturas de la sección "Compartir" son
salidas reales de esa función.
