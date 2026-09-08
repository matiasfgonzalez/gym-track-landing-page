/**
 * El dial: el anillo técnico que rodea al número grande en las historias.
 *
 * Se trae acá porque es la firma visual de GymTrack, y como en la app las marcas
 * encendidas miden algo: acá, la proporción que se le pasa.
 */
export function Dial({
  progress = 0.78,
  className,
  children,
}: {
  progress?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const size = 400;
  const half = size / 2;
  const radius = half - 14;
  const total = 72;
  const filled = Math.min(1, Math.max(0, progress));

  const ticks = { on: "", off: "" };
  for (let i = 0; i < total; i += 1) {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    const long = i % 6 === 0;
    const inner = radius - (long ? 22 : 12);
    const segment =
      `M ${(half + Math.cos(angle) * inner).toFixed(1)} ${(half + Math.sin(angle) * inner).toFixed(1)} ` +
      `L ${(half + Math.cos(angle) * radius).toFixed(1)} ${(half + Math.sin(angle) * radius).toFixed(1)} `;
    if (i / total <= filled) ticks.on += segment;
    else ticks.off += segment;
  }

  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`relative isolate grid place-items-center ${className ?? ""}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx={half} cy={half} r={radius} stroke="rgba(255,255,255,0.10)" strokeWidth={2} fill="none" />
        <circle
          cx={half}
          cy={half}
          r={radius - 26}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={2}
          strokeDasharray="6 14"
          fill="none"
        />
        <path d={ticks.off} stroke="rgba(255,255,255,0.14)" strokeWidth={3} strokeLinecap="round" />
        <path d={ticks.on} stroke="#B8FF3C" strokeWidth={3} strokeLinecap="round" opacity={0.9} />
        <circle
          cx={half}
          cy={half}
          r={radius}
          stroke="#B8FF3C"
          strokeWidth={6}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circumference * filled} ${circumference}`}
          transform={`rotate(-90 ${half} ${half})`}
          opacity={0.85}
        />
      </svg>
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
}
