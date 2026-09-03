import { motion } from "framer-motion";

/**
 * The gold thread — a single line of light that runs through
 * the whole journey. Each screen lights up its own bead as you pass it,
 * so the "01 / 03" framing earns its place: this really is one
 * continuous story told in order, not a menu.
 */
export default function ProgressIndicator({ current, total = 3 }) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 select-none">
      <div className="flex items-center gap-2.5">
        {Array.from({ length: total }).map((_, i) => {
          const active = i + 1 === current;
          const passed = i + 1 < current;
          return (
            <motion.span
              key={i}
              initial={false}
              animate={{
                width: active ? 22 : 6,
                opacity: active || passed ? 1 : 0.35,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`h-[6px] rounded-full ${
                active || passed ? "bg-gold" : "bg-white/40"
              }`}
            />
          );
        })}
      </div>
      <span className="font-body text-[11px] tracking-[0.3em] text-gold/80">
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}
