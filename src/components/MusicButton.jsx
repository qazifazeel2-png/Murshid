import { useEffect, useRef, useState } from "react";
import { Music, Music as MusicOff } from "lucide-react";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/song.mpeg");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (err) {
      // Autoplay/blocked or file missing — fail silently and quietly
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/30 text-ivory text-xs tracking-wide hover:bg-white/15 transition-colors"
    >
      {playing ? <Music className="w-3.5 h-3.5 text-gold" /> : <MusicOff className="w-3.5 h-3.5 text-gold/60" />}
      Music
    </button>
  );
}
