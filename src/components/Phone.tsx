import Image from "next/image";

/** Proporción real de las capturas, ya recortadas la barra de estado y la de Android. */
const W = 746;
const H = 1464;

/**
 * Una captura de la app dentro de un teléfono.
 *
 * El marco es de vidrio y no un modelo de teléfono dibujado: un iPhone en la
 * página de una app de Android envejece mal y además miente. Un canto iluminado
 * alcanza para que se lea como pantalla.
 */
export function Phone({
  src,
  alt,
  priority,
  className,
  sizes = "(min-width: 1024px) 22rem, 70vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`phone ${className ?? ""}`}>
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={W}
          height={H}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
