/**
 * El isotipo, con las mismas coordenadas que el ícono de la app.
 *
 * La G abre arriba a la derecha y baja hasta el espolón; las tres barras son el
 * gráfico de progreso, no un adorno: suben, y el color sube con ellas.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="19 75 572 362"
      className={className}
      role="img"
      aria-label="GymTrack"
      fill="none"
    >
      <path
        d="M 306 150 A 150 150 0 1 0 330 331"
        stroke="currentColor"
        strokeWidth={62}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 262 256 L 330 256 L 330 334"
        stroke="currentColor"
        strokeWidth={62}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(392 246) skewX(-9)">
        <rect x={0} y={30} width={36} height={92} rx={18} fill="#16A34A" />
        <rect x={56} y={-28} width={36} height={150} rx={18} fill="#22C55E" />
        <rect x={112} y={-96} width={36} height={218} rx={18} fill="#B8FF3C" />
      </g>
    </svg>
  );
}
