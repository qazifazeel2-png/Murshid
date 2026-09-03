// ============================================================
// EVERYTHING YOU'D WANT TO EDIT LIVES IN THIS ONE FILE
// ============================================================

// Her name — shown throughout the site
export const herName = "Ammarah";

// -------------------------------------------------------------
// PHOTOS
// Drop your images into /public/images/ using these exact
// filenames, or change the paths below to match your own files.
// If an image fails to load, each screen gracefully falls back
// to a soft gradient placeholder so nothing ever looks broken.
// -------------------------------------------------------------
export const photos = {
  screen1: "/images/ammara1.jpg",
  screen2: ["/images/ammara2.jpg", "/images/ammara3.jpg"],
  screen3: ["/images/ammara4.jpg", "/images/ammara5.jpg", "/images/ammara6.jpg"],
};

// -------------------------------------------------------------
// SCREEN 1 — THE BEGINNING
// -------------------------------------------------------------
export const screen1Content = {
  eyebrow: "Something special is about to begin...",
  subtext: "For someone very special ❤️",
  cta: "Begin The Surprise ✨",
};

// -------------------------------------------------------------
// SCREEN 2 — HAPPY BIRTHDAY REVEAL
// -------------------------------------------------------------
export const screen2Content = {
  lines: ["Today is not just another day...", "Because today..."],
  titleTop: "HAPPY BIRTHDAY",
  titleBottom: `${herName} ❤️🎂`,
  subtext: "A very special day for a very special person.",
  cta: "Continue ❤️",
};

// -------------------------------------------------------------
// SCREEN 3 — WHY YOU ARE SPECIAL
// -------------------------------------------------------------
export const screen3Content = {
  title: "Why You Are So Special",
  messages: [
    "You are not just a friend...",
    "You are one of the reasons behind many of my happiest moments.",
    "Your presence makes ordinary moments feel special.",
    "And your smile can make a difficult day better.",
  ],
  closingLines: ["Some people become memories...", "But some people become a beautiful part of your life."],
  finalLine: `You are one of those people, ${herName}. ❤️`,
  cta: "There is more... ✨",
};
