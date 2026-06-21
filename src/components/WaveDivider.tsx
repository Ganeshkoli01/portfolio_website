export function WaveDivider({
  flip = false,
  from = "transparent",
  to = "var(--background)",
}: {
  flip?: boolean;
  from?: string;
  to?: string;
}) {
  return (
    <div
      className="pointer-events-none relative h-16 w-full"
      aria-hidden
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wd" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="url(#wd)"
        />
      </svg>
    </div>
  );
}
