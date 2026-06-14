import type { CSSProperties } from "react";

type ConfettiPetal = {
  x: number;
  y: number;
  rotate: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  hue: "blush" | "cream" | "red";
};

const BURST_PETALS: ConfettiPetal[] = [
  { x: -95, y: -110, rotate: 220, size: 14, opacity: 0.42, delay: 0, duration: 1.35, hue: "blush" },
  { x: 88, y: -98, rotate: 140, size: 11, opacity: 0.36, delay: 0.03, duration: 1.25, hue: "cream" },
  { x: -72, y: 85, rotate: 310, size: 16, opacity: 0.38, delay: 0.05, duration: 1.4, hue: "red" },
  { x: 105, y: 72, rotate: 45, size: 10, opacity: 0.34, delay: 0.02, duration: 1.2, hue: "blush" },
  { x: -120, y: 12, rotate: 190, size: 9, opacity: 0.3, delay: 0.06, duration: 1.15, hue: "cream" },
  { x: 118, y: -18, rotate: 75, size: 13, opacity: 0.4, delay: 0.04, duration: 1.3, hue: "blush" },
  { x: -40, y: -125, rotate: 260, size: 12, opacity: 0.35, delay: 0.07, duration: 1.28, hue: "red" },
  { x: 52, y: 108, rotate: 120, size: 15, opacity: 0.37, delay: 0.01, duration: 1.38, hue: "cream" },
  { x: -130, y: -55, rotate: 200, size: 8, opacity: 0.28, delay: 0.08, duration: 1.1, hue: "blush" },
  { x: 130, y: 40, rotate: 30, size: 11, opacity: 0.33, delay: 0.05, duration: 1.22, hue: "red" },
  { x: 0, y: -135, rotate: 180, size: 17, opacity: 0.44, delay: 0, duration: 1.45, hue: "blush" },
  { x: -18, y: 120, rotate: 340, size: 10, opacity: 0.32, delay: 0.06, duration: 1.18, hue: "cream" },
  { x: 70, y: -115, rotate: 95, size: 9, opacity: 0.31, delay: 0.09, duration: 1.12, hue: "red" },
  { x: -105, y: 65, rotate: 250, size: 12, opacity: 0.36, delay: 0.04, duration: 1.26, hue: "blush" },
];

function PetalShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.12} viewBox="0 0 24 28" aria-hidden="true">
      <path d="M12 1.5 C6.5 8.5, 4.5 15.5, 12 26.5 C19.5 15.5, 17.5 8.5, 12 1.5 Z" fill="currentColor" />
    </svg>
  );
}

export function EnvelopeConfetti({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="envelope-confetti" aria-hidden="true">
      {BURST_PETALS.map((petal, index) => (
        <span
          key={index}
          className={`envelope-confetti__petal envelope-confetti__petal--${petal.hue}`}
          style={
            {
              "--confetti-x": `${petal.x}px`,
              "--confetti-y": `${petal.y}px`,
              "--confetti-rotate": `${petal.rotate}deg`,
              "--confetti-opacity": petal.opacity,
              "--confetti-delay": `${petal.delay}s`,
              "--confetti-duration": `${petal.duration}s`,
            } as CSSProperties
          }
        >
          <PetalShape size={petal.size} />
        </span>
      ))}
    </div>
  );
}
