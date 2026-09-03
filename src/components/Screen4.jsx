import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { photos, screen4Content } from "../data/birthdayData.js";

export default function Screen4({ onNext }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalPhotos = photos.screen4.length;

  /* =========================================================
     AUTO ROTATE
  ========================================================= */

  useEffect(() => {
    if (totalPhotos <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPhotos);
    }, 2800);

    return () => clearInterval(timer);
  }, [totalPhotos]);

  /* =========================================================
     CARD POSITION
  ========================================================= */

  const getPosition = (index) => {
    let diff = index - activeIndex;

    if (diff > totalPhotos / 2) {
      diff -= totalPhotos;
    }

    if (diff < -totalPhotos / 2) {
      diff += totalPhotos;
    }

    return diff;
  };

  /* =========================================================
     CARD STYLE
  ========================================================= */

  const getCardStyle = (position) => {
    if (position === 0) {
      return {
        x: "0%",
        scale: 1,
        opacity: 1,
        zIndex: 30,
        rotate: 0,
      };
    }

    if (position === -1) {
      return {
        x: "-62%",
        scale: 0.76,
        opacity: 0.72,
        zIndex: 20,
        rotate: -3,
      };
    }

    if (position === 1) {
      return {
        x: "62%",
        scale: 0.76,
        opacity: 0.72,
        zIndex: 20,
        rotate: 3,
      };
    }

    return {
      x: position < 0 ? "-140%" : "140%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      rotate: 0,
    };
  };

  return (
    <div
      className="
        relative
        w-full
        h-[100dvh]
        overflow-hidden
        bg-gradient-to-b
        from-ink
        via-plum
        to-ink
        flex
        flex-col
        items-center
        justify-center
        px-4
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          absolute
          top-[10%]
          left-1/2
          -translate-x-1/2
          w-[300px]
          h-[300px]
          rounded-full
          bg-gold/10
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          bottom-[5%]
          left-1/2
          -translate-x-1/2
          w-[250px]
          h-[250px]
          rounded-full
          bg-rose/10
          blur-[100px]
        "
      />

      {/* =====================================================
          SMALL DECORATION
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          top-5
          left-6
          text-xl
          opacity-70
        "
      >
        🌸
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-7
          right-6
          text-xl
          opacity-70
        "
      >
        🌷
      </motion.div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          text-center
          mb-3
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            font-body
            text-[9px]
            sm:text-[10px]
            uppercase
            tracking-[0.3em]
            text-gold/80
          "
        >
          <Sparkles className="w-3 h-3" />

          Special Memories

          <Sparkles className="w-3 h-3" />
        </div>

        <h1
          className="
            mt-1
            font-display
            text-2xl
            sm:text-4xl
            text-ivory
            text-shadow-glow
          "
        >
          {screen4Content?.title || "A Special Place in My Life"}
        </h1>
      </motion.div>

      {/* =====================================================
          THREE CARD SLIDER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-4xl
          h-[260px]
          sm:h-[350px]
          flex
          items-center
          justify-center
        "
        style={{
          perspective: "1200px",
        }}
      >
        {photos.screen4.map((photo, index) => {
          const position = getPosition(index);
          const style = getCardStyle(position);

          return (
            <motion.div
              key={`${photo}-${index}`}
              animate={style}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                w-[150px]
                h-[220px]
                sm:w-[220px]
                sm:h-[320px]
                rounded-[20px]
                overflow-hidden
                bg-black/30
                border
                border-white/15
                shadow-2xl
              "
            >
              {/* PHOTO */}

              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  select-none
                "
                draggable={false}
              />

              {/* DARK OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-black/10
                "
              />

              {/* CARD NUMBER */}

              <div
                className="
                  absolute
                  top-2
                  right-2
                  w-7
                  h-7
                  rounded-full
                  bg-black/30
                  backdrop-blur-md
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  text-white
                "
              >
                {index + 1}
              </div>

              {/* CENTER CARD BORDER */}

              {position === 0 && (
                <motion.div
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-[20px]
                    border-2
                    border-gold/50
                  "
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          SLIDER DOTS
      ===================================================== */}

      <div
        className="
          relative
          z-20
          flex
          items-center
          gap-1.5
          mt-1
        "
      >
        {photos.screen4.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500
              ${
                activeIndex === index
                  ? "w-7 bg-gold"
                  : "w-1.5 bg-white/30"
              }
            `}
          />
        ))}
      </div>

      {/* =====================================================
          DUA + SPECIAL FEELING
      ===================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            relative
            z-10
            text-center
            max-w-lg
            px-5
            mt-3
          "
        >
          {/* HEART */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="
              flex
              justify-center
              mb-1
            "
          >
            <Heart
              className="
                w-4
                h-4
                text-rose
                fill-current
              "
            />
          </motion.div>

          {/* DUA */}

          <p
            className="
              font-display
              italic
              text-sm
              sm:text-base
              leading-relaxed
              text-ivory/90
            "
          >
            {screen4Content?.dua ||
              "May Allah always keep you happy, healthy, protected and surrounded by endless blessings. Ameen. 🤲🏻❤️"}
          </p>

          {/* SPECIAL FEELING */}

          <p
            className="
              mt-1.5
              font-body
              text-[10px]
              sm:text-xs
              leading-relaxed
              text-gold/70
              tracking-wide
            "
          >
            {screen4Content?.specialMessage ||
              "You are truly special, and I pray that every beautiful dream in your heart becomes a reality. 🌸"}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          BUTTON
      ===================================================== */}

      <motion.button
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={onNext}
        className="
          relative
          z-20
          mt-3
          inline-flex
          items-center
          gap-2
          px-6
          py-2.5
          rounded-full
          bg-gradient-to-r
          from-gold
          via-goldsoft
          to-gold
          text-ink
          font-body
          text-xs
          sm:text-sm
          font-medium
          shadow-glow
        "
      >
        <Heart className="w-3.5 h-3.5 fill-current" />

        {screen4Content?.cta || "Continue Our Journey"}
      </motion.button>
    </div>
  );
}