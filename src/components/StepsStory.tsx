"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { H, Phone, W } from "@/components/Phone";

type Step = { title: string; body: string; src: string; alt: string };

/**
 * Los tres momentos de un entrenamiento, contados con el scroll.
 *
 * En pantallas grandes el teléfono queda fijo a la derecha y cambia de pantalla
 * según el paso que se está leyendo: se ve una sola app que avanza, no tres
 * capturas sueltas. El paso activo lo decide un IntersectionObserver sobre una
 * franja en el medio de la pantalla, sin escuchar el scroll cuadro a cuadro.
 *
 * En el teléfono no hay lugar para dos columnas: cada paso lleva su captura
 * arriba, en orden, y no se esconde nada.
 */
export function StepsStory({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const item of items.current) if (item) observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16 lg:grid lg:grid-cols-[1fr_19rem] lg:gap-24">
      <ol className="grid gap-20 lg:gap-0">
        {steps.map((step, i) => (
          <li
            key={step.title}
            ref={(el) => {
              items.current[i] = el;
            }}
            data-index={i}
            className="lg:flex lg:min-h-[64svh] lg:items-center"
          >
            <div
              className={`transition-opacity duration-300 ease-out ${
                active === i ? "" : "lg:opacity-35"
              }`}
            >
              <Phone src={step.src} alt={step.alt} className="mx-auto mb-9 max-w-[16rem] lg:hidden" />
              <h3 className="display text-(length:--h2)">{step.title}</h3>
              <p className="mt-4 max-w-md text-(length:--lede) text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Las tres capturas apiladas en la misma celda; se ve la del paso activo. */}
      <div className="hidden lg:block">
        <div className="phone sticky top-[max(6rem,calc(50svh-19.5rem))]">
          <div className="phone-screen grid">
            {steps.map((step, i) => (
              <Image
                key={step.src}
                src={step.src}
                alt={step.alt}
                width={W}
                height={H}
                sizes="19rem"
                aria-hidden={active !== i}
                className={`col-start-1 row-start-1 h-auto w-full transition-[opacity,transform] duration-500 ease-out ${
                  active === i ? "opacity-100" : "scale-[0.98] opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
