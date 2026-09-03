import { useMemo } from "react";
import { motion } from "framer-motion";

const COLORS = ["#D8B979", "#E8A6C1", "#F6D9E6", "#FAF5EE", "#B98FD1"];

export default function Confetti({ pieces = 40, active = true, cannon = false }) {
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }).map((_, i) => ({
        id: i,
        side: Math.random() > 0.5 ? 1 : -1,
        left: cannon ? (Math.random() * 10 + (Math.random() > 0.5 ? 90 : 0)) : Math.random() * 100,
        color: COLORS[i % COLORS.length],
        size: 5 + Math.random() * 6,
        delay: Math.random() * 0.8,
        duration: 2.6 + Math.random() * 1.8,
        rotate: Math.random() * 360,
        drift: (Math.random() - 0.5) * 120,
      })),
    [pieces]
  );

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {bits.map((b) => (
        <motion.span
          key={b.id}
          initial={{ y: cannon ? "0vh" : "-10%", x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: cannon ? ["0vh", "-68vh", "28vh"] : "110%",
            x: cannon ? [0, -b.side * 120, b.drift] : b.drift,
            opacity: [0, 1, 1, 0],
            rotate: b.rotate,
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            ease: cannon ? ["easeOut", "easeIn"] : "easeIn",
          }}
          style={{
            position: "absolute",
            left: `${b.left}%`,
            top: cannon ? "78%" : 0,
            width: b.size,
            height: b.size * 0.5,
            backgroundColor: b.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}
