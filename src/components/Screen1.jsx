import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Particles from "./Particles.jsx";
import Confetti from "./Confetti.jsx";
import { photos, screen1Content } from "../data/birthdayData.js";

function useLiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return { hours: hours.toString().padStart(2, "0"), minutes, period };
}

export default function Screen1({ onNext }) {
  const time = useLiveClock();
  const { hours, minutes, period } = formatTime(time);
  const [imgFailed, setImgFailed] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((value) => (value > 0 ? value - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-ink">
      {/* Background photo */}
      <div className="absolute inset-0 zoom-bg">
        {!imgFailed ? (
          <img
            src={photos.screen1}
            alt="Ammarah"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-plum via-ink to-black" />
        )}
      </div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

      <Particles count={26} />
      <Confetti pieces={100} active={countdown === 0} cannon />

      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gold/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="font-body text-[11px] text-gold/80 uppercase mb-8"
        >
          A little journey, just for you
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-center gap-2 font-display text-shadow-glow"
        >
          <span className="text-7xl sm:text-8xl text-ivory font-medium tabular-nums">
            {hours}:{minutes}
          </span>
          <span className="text-2xl sm:text-3xl text-gold mb-2 tracking-widest">{period}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 font-display italic text-xl sm:text-2xl text-blush/90"
        >
          {screen1Content.eyebrow}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-3 font-body text-sm tracking-[0.2em] uppercase text-gold/80"
        >
          {screen1Content.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-7 flex flex-col items-center gap-1 text-gold/80"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">The surprise begins in</span>
          <span className="font-display text-4xl text-ivory tabular-nums text-shadow-glow">{countdown}</span>
        </motion.div>

        {countdown === 0 && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-gold text-shadow-glow"
          >
            Happy Birthday Murshid
          </motion.h1>
        )}

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="mt-12 group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-goldsoft to-gold text-ink font-body font-medium tracking-wide shadow-glow"
        >
          <Sparkles className="w-4 h-4" />
          {screen1Content.cta}
        </motion.button>
      </div>
    </div>
  );
}
