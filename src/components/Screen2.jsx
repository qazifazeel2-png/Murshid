import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cake } from "lucide-react";
import PhotoCard from "./PhotoCard.jsx";
import Confetti from "./Confetti.jsx";
import FloatingHearts from "./FloatingHearts.jsx";
import { photos, screen2Content } from "../data/birthdayData.js";

export default function Screen2({ onNext }) {
  const [stage, setStage] = useState(0); // 0: line1, 1: line2, 2: reveal

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1600);
    const t2 = setTimeout(() => setStage(2), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden bg-gradient-to-b from-ink via-plum to-ink flex flex-col items-center justify-center px-6 py-16">
      <FloatingHearts count={12} />
      {stage === 2 && <Confetti pieces={50} />}

      {/* Photo collage */}
      <div className="relative z-10 flex items-end justify-center gap-4 mb-10 w-full max-w-sm">
        <PhotoCard
          src={photos.screen2[0]}
          className="w-[42%] aspect-[3/4]"
          rotate={-6}
          delay={0.1}
        />
        <PhotoCard
          src={photos.screen2[1]}
          className="w-[46%] aspect-[3/4] -mb-6"
          rotate={5}
          delay={0.3}
        />
      </div>

      {/* Staged text */}
      <div className="relative z-10 text-center min-h-[180px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {stage < 2 && (
            <motion.p
              key={stage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="font-display italic text-2xl sm:text-3xl text-blush"
            >
              {screen2Content.lines[stage]}
            </motion.p>
          )}
        </AnimatePresence>

        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display font-semibold text-5xl sm:text-7xl text-gold text-shadow-glow tracking-wide">
              {screen2Content.titleTop}
            </h1>
            <h1 className="font-display font-semibold text-5xl sm:text-7xl text-ivory mt-1">
              {screen2Content.titleBottom}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 font-body text-sm sm:text-base tracking-wide text-rose/90"
            >
              {screen2Content.subtext}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onNext}
              className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-ivory font-body tracking-wide hover:bg-white/15 transition-colors"
            >
              <Cake className="w-4 h-4 text-gold" />
              {screen2Content.cta}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
