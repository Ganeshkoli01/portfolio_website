import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.classList.add("has-custom-cursor");

    let rx = -100,
      ry = -100,
      tx = -100,
      ty = -100;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setPos({ x: tx, y: ty });
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, input, textarea, [data-cursor='hover']"));
    };
    let raf = 0;
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      setRing({ x: rx, y: ry });
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      />
      <div
        className={`cursor-ring ${hovering ? "hovering" : ""}`}
        style={{ transform: `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)` }}
      />
    </>
  );
}
