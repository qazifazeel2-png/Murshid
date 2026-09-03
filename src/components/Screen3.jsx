import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhotoCard from "./PhotoCard.jsx";
import Particles from "./Particles.jsx";
import { photos, screen3Content } from "../data/birthdayData.js";

export default function Screen3({ onNext }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [showClosing, setShowClosing] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const messages = screen3Content.messages;

  useEffect(() => {
    if (msgIndex < messages.length - 1) {
      const t = setTimeout(() => setMsgIndex((i) => i + 1), 2200);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowClosing(true), 2200);
      return () => clearTimeout(t);
    }
  }, [msgIndex, messages.length]);

  useEffect(() => {
    if (showClosing) {
      const t = setTimeout(() => setShowFinal(true), 2400);
      return () => clearTimeout(t);
    }
  }, [showClosing]);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden bg-gradient-to-b from-ink via-[#1C0F30] to-ink px-6 py-20 flex flex-col items-center">
      <Particles count={16} />

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 font-display italic text-3xl sm:text-4xl text-gold text-center mb-10"
      >
        {screen3Content.title}
      </motion.h2>

      {/* Photo trio */}
      <div className="relative z-10 flex justify-center gap-3 mb-12 w-full max-w-md">
        <PhotoCard src={photos.screen3[0]} className="w-1/3 aspect-[3/4]" rotate={-4} delay={0.1} />
        <PhotoCard src={photos.screen3[1]} className="w-1/3 aspect-[3/4] mt-4" rotate={2} delay={0.25} />
        <PhotoCard src={photos.screen3[2]} className="w-1/3 aspect-[3/4]" rotate={5} delay={0.4} />
      </div>

      {/* Staged messages */}
      <div className="relative z-10 min-h-[140px] max-w-md w-full flex items-center justify-center text-center px-2">
        <AnimatePresence mode="wait">
          {!showClosing && (
            <motion.p
              key={msgIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.7 }}
              className="font-display italic text-xl sm:text-2xl text-blush leading-relaxed"
            >
              {messages[msgIndex]}
            </motion.p>
          )}

          {showClosing && !showFinal && (
            <motion.div
              key="closing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-2"
            >
              {screen3Content.closingLines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.5, duration: 0.6 }}
                  className="font-body text-sm sm:text-base tracking-wide text-rose/80 uppercase"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showFinal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center mt-4"
        >
          <h3 className="font-display font-semibold text-2xl sm:text-4xl text-gold text-shadow-glow max-w-lg leading-snug">
            {screen3Content.finalLine}
          </h3>

          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-goldsoft to-gold text-ink font-body font-medium tracking-wide shadow-glow"
          >
            {screen3Content.cta}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
