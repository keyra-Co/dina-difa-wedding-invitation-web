import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-06-07T09:30:00+07:00");

export function useCountdown() {
  const calculate = () => {
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) return { hari: 0, jam: 0, menit: 0, detik: 0 };

    return {
      hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
      jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
      menit: Math.floor((diff / (1000 * 60)) % 60),
      detik: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
