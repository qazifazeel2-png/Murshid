import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Screen1 from "./components/Screen1.jsx";
import Screen2 from "./components/Screen2.jsx";
import Screen3 from "./components/Screen3.jsx";
import Screen4 from "./components/Screen4.jsx";
import ProgressIndicator from "./components/ProgressIndicator.jsx";
import MusicButton from "./components/MusicButton.jsx";

const TOTAL_SCREENS = 4;

const pageVariants = {
  initial: { opacity: 0, scale: 1.02 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export default function App() {
  const [screen, setScreen] = useState(1);

  const goNext = () => setScreen((s) => (s < TOTAL_SCREENS ? s + 1 : 1));

  const screens = {
    1: <Screen1 onNext={goNext} />,
    2: <Screen2 onNext={goNext} />,
    3: <Screen3 onNext={goNext} />,
    4: <Screen4 onNext={goNext} />,
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-ink overflow-x-hidden">
      {screen > 1 && <ProgressIndicator current={screen} total={TOTAL_SCREENS} />}
      <MusicButton />

      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {screens[screen]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
