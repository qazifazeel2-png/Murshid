# For Murshid ✨ — A Birthday Surprise

A cinematic, emotional, 3-screen birthday website built for Ammarah.

This is the first **3 of the planned 6 screens**:

1. **The Beginning** — a live clock, her photo, and a quiet build-up
2. **Happy Birthday Reveal** — a staged, dramatic title reveal with confetti
3. **Why You Are So Special** — messages that reveal one at a time over her photos

(Screens 4–6 — Memories gallery, the Letter, and the Final Surprise with the
cake — can be added the same way whenever you're ready; just ask.)

---

## 1. Install & run

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a production version you can upload anywhere:

```bash
npm run build
```

This creates a `dist/` folder — upload that to any static host (Vercel,
Netlify, GitHub Pages, etc.).

---

## 2. Add Ammarah's photos

Put her photos in `public/images/` using these filenames:

| File | Used on |
|---|---|
| `ammara1.jpg` | Screen 1 — full-screen background |
| `ammara2.jpg` | Screen 2 — left collage photo |
| `ammara3.jpg` | Screen 2 — right collage photo |
| `ammara4.jpg` | Screen 3 — photo trio, left |
| `ammara5.jpg` | Screen 3 — photo trio, center |
| `ammara6.jpg` | Screen 3 — photo trio, right |

That's it — no code changes needed. Until you add real photos, each spot
shows a soft gradient placeholder instead of a broken image.

Want different filenames or to rearrange which photo goes where? Open
**`src/data/birthdayData.js`** — every image path lives in one place there.

---

## 3. Add background music (optional)

Drop an MP3 into `public/music/` named exactly `birthday.mp3`. The floating
"Music" button in the bottom-right corner will play/pause it. If the file
isn't there, the button just does nothing — nothing breaks.

---

## 4. Edit the words

All of the text — the opening lines, the birthday titles, the "why you're
special" messages — lives in **`src/data/birthdayData.js`**. Change any
string there and it updates everywhere it's used.

Her name is set once, at the top of that file:

```js
export const herName = "Ammarah";
```

---

## 5. Change the clock

Screen 1 shows a **live** clock (updates every second, real device time) —
that's intentional, not something to configure. If you'd rather it show a
fixed countdown to a specific date/time instead, that's a quick follow-up
change to `src/components/Screen1.jsx` — just ask and it can be added.

---

## 6. Project structure

```text
ammarah-birthday/
├── src/
│   ├── components/
│   │   ├── Screen1.jsx           # The Beginning
│   │   ├── Screen2.jsx           # Happy Birthday Reveal
│   │   ├── Screen3.jsx           # Why You Are Special
│   │   ├── PhotoCard.jsx         # Photo frame w/ graceful fallback
│   │   ├── Particles.jsx         # Ambient floating gold specks
│   │   ├── FloatingHearts.jsx    # Rising hearts effect
│   │   ├── Confetti.jsx          # Lightweight confetti burst
│   │   ├── MusicButton.jsx       # Floating music on/off toggle
│   │   └── ProgressIndicator.jsx # "01 / 03" gold-thread indicator
│   ├── data/
│   │   └── birthdayData.js       # ALL editable text + photo paths
│   ├── App.jsx                   # Screen flow + transitions
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── images/                   # Put Murshid's photos here
│   └── music/                    # Put birthday.mp3 here
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 7. Design notes

- **Palette:** near-black ink, deep purple, rose/blush pink, and a muted
  gold accent — kept restrained rather than bright, for a premium,
  cinematic feel.
- **Type:** Cormorant Garamond (display/serif, for emotional headlines)
  paired with Jost (clean sans, for body and labels).
- **Signature element:** the "gold thread" progress indicator at the top —
  since this really is one continuous story told in order, not a menu.
- Every screen has its own visual rhythm (mystery → dramatic reveal →
  gentle message-by-message pacing) rather than repeating the same layout.
