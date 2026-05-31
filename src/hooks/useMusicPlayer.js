import { useRef, useEffect } from "react";

export function useMusicPlayer(src) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggle = (isPlaying) => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });
    } else {
      audioRef.current.pause();
    }
  };

  return { toggle };
}
