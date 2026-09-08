/**
 * Los datos del sitio, en un solo lugar.
 *
 * ⚠️ COMPLETAR ANTES DE PUBLICAR: la URL definitiva (`url`). Google Play pide
 * que la política de privacidad esté en una dirección pública que funcione de
 * verdad cuando revisen la ficha.
 */
export const site = {
  name: "GymTrack",
  tagline: "Entrená. Registrá. Progresá.",
  description:
    "Registrá tus entrenamientos, tus récords y tus salidas a correr. Todo vive en tu teléfono: sin cuentas, sin nube y sin publicidad.",

  /** Cambiar por el dominio real; se usa en el sitemap y en las metaetiquetas. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gymtrack.example.com",

  /** El correo de soporte que se publica en la ficha de Play y en el sitio. */
  email: "matiasgonzalez.652@gmail.com",

  /** El identificador de la app; el link a Play recién funciona al publicarla. */
  packageName: "com.matutech.gymtrack",
  get playUrl() {
    return `https://play.google.com/store/apps/details?id=${this.packageName}`;
  },

  /** Última revisión de los textos legales. */
  legalUpdated: "7 de septiembre de 2026",
} as const;

/** Los únicos servicios con los que la app habla. Se usa en la política y en la home. */
export const thirdParties = [
  {
    name: "jsDelivr",
    what: "Descarga las animaciones de los ejercicios del catálogo.",
    receives: "Tu dirección IP y qué archivo pediste.",
    href: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net",
  },
  {
    name: "OpenStreetMap, CARTO y Esri",
    what: "Dibujan el mapa del recorrido de tus salidas.",
    receives: "Tu IP y la zona del mapa que se está dibujando.",
    href: "https://osmfoundation.org/wiki/Privacy_Policy",
  },
  {
    name: "Expo (EAS Update)",
    what: "Busca actualizaciones de la app.",
    receives: "Tu IP, el sistema operativo y la versión instalada.",
    href: "https://expo.dev/privacy",
  },
  {
    name: "Google Play",
    what: "Distribuye e instala la app.",
    receives: "Lo que Google recolecta según su propia política.",
    href: "https://policies.google.com/privacy",
  },
] as const;
