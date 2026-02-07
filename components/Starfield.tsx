"use client";

import { useEffect, useState } from "react";

const STAR_COUNT = 80;

export function Starfield() {
  const [stars, setStars] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: STAR_COUNT }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2,
      }))
    );
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="fixed inset-0 z-0 opacity-30 pointer-events-none" aria-hidden>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
