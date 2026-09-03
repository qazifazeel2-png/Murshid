import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * A photo frame that quietly falls back to a soft gradient + icon
 * if the image hasn't been added yet — so the site never looks broken
 * while you're still collecting Ammarah's photos.
 */
export default function PhotoCard({
  src,
  alt = "Ammarah",
  className = "",
  rounded = "rounded-2xl",
  rotate = 0,
  delay = 0,
  children,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: rotate - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden ${rounded} shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-gold/20 ${className}`}
    >
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
          draggable={false}
        />
      ) : (
        <div className="w-full h-full min-h-[140px] flex items-center justify-center bg-gradient-to-br from-plum via-plumlight to-ink">
          <Heart className="w-8 h-8 text-gold/60" strokeWidth={1.2} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[inherit]" />
      {children}
    </motion.div>
  );
}
