import { useMemo } from "react";
import { Heart } from "lucide-react";

export default function FloatingHearts({ count = 10, className = "" }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        duration: 7 + Math.random() * 8,
        delay: Math.random() * 6,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="rising-heart"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          <Heart
            style={{ width: h.size, height: h.size }}
            className="text-rose/70 fill-rose/40"
          />
        </span>
      ))}
    </div>
  );
}
