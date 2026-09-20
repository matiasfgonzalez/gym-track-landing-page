/**
 * El fondo de todo el sitio.
 *
 * Tres manchas de luz que se mueven despacio, en la familia de verdes de la
 * marca. Va fijo y detrás de todo: las tarjetas de vidrio lo toman con su
 * desenfoque y por eso cada una se ve distinta según dónde esté en la página.
 */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden>
      <span className="aurora-1" />
      <span className="aurora-2" />
      <span className="aurora-3" />
    </div>
  );
}
