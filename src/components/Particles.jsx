import { useMemo } from "react";

/**
 * Soft drifting gold specks used as ambient atmosphere.
 * Pure CSS animation — cheap, and never blocks interaction.
 */
export default function Particles({ count = 22, className = "" }) {
  const specks = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 8,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {specks.map((s) => (
        <span
          key={s.id}
          className="particle"
          style={{
            left: `${s.left}%`,
            top: `${20 + Math.random() * 60}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
