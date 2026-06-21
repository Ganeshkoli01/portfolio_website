import { motion } from "framer-motion";
import { useState } from "react";

type Skill = { name: string; level: number };

export function SkillOrbit({ skills }: { skills: Skill[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const rings = [
    { r: 60, dur: 22 },
    { r: 110, dur: 32 },
  ];
  const grouped: Skill[][] = [skills.slice(0, 2), skills.slice(2)];

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {/* center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] glow-violet">
          <span className="font-display text-sm font-bold text-primary-foreground">Code</span>
        </div>
      </div>

      {/* orbit rings + items */}
      {rings.map((ring, ri) => (
        <div key={ri} className="absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-border/60"
            style={{ width: ring.r * 2, height: ring.r * 2, transform: "translate(-50%, -50%)" }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
          >
            {grouped[ri].map((s, i) => {
              const angle = (i / grouped[ri].length) * Math.PI * 2;
              const x = cx + Math.cos(angle) * ring.r;
              const y = cy + Math.sin(angle) * ring.r;
              return (
                <motion.div
                  key={s.name}
                  className="absolute"
                  style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
                >
                  <button
                    onMouseEnter={() => setHovered(s.name)}
                    onMouseLeave={() => setHovered(null)}
                    className="group relative grid h-14 w-14 place-items-center rounded-2xl border border-border bg-card/80 text-xs font-semibold backdrop-blur transition-all hover:scale-110 hover:border-[var(--violet)] hover:glow-soft"
                  >
                    {s.name}
                    {hovered === s.name && (
                      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background px-2 py-1 text-[10px] font-medium text-foreground shadow-lg ring-1 ring-border">
                        {s.level}% proficiency
                      </span>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
