import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type,
  strength = 0.3,
  style,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  strength?: number;
  style?: CSSProperties;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp: typeof motion.a = href ? motion.a : (motion.button as never);
  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      type={type}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, ...style }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
