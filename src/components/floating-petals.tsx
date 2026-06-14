import type { CSSProperties } from "react";

type PetalHue = "red" | "blush" | "cream";
type PetalDepth = "near" | "mid" | "far";

type Petal = {
  left: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
  hue: PetalHue;
  depth: PetalDepth;
  drift: number;
  rotate: string;
};

const PETALS: Petal[] = [
  { left: "4%", delay: "0s", duration: "28s", size: 38, opacity: 0.24, hue: "blush", depth: "near", drift: 24, rotate: "420deg" },
  { left: "11%", delay: "-6s", duration: "32s", size: 9, opacity: 0.1, hue: "cream", depth: "far", drift: -14, rotate: "310deg" },
  { left: "17%", delay: "-12s", duration: "24s", size: 22, opacity: 0.18, hue: "red", depth: "mid", drift: 18, rotate: "360deg" },
  { left: "23%", delay: "-3s", duration: "30s", size: 44, opacity: 0.22, hue: "blush", depth: "near", drift: -20, rotate: "390deg" },
  { left: "29%", delay: "-18s", duration: "26s", size: 12, opacity: 0.12, hue: "cream", depth: "far", drift: 12, rotate: "340deg" },
  { left: "35%", delay: "-9s", duration: "22s", size: 16, opacity: 0.15, hue: "red", depth: "mid", drift: -16, rotate: "370deg" },
  { left: "41%", delay: "-21s", duration: "34s", size: 8, opacity: 0.09, hue: "blush", depth: "far", drift: 10, rotate: "300deg" },
  { left: "47%", delay: "-4s", duration: "27s", size: 30, opacity: 0.2, hue: "red", depth: "near", drift: 22, rotate: "400deg" },
  { left: "53%", delay: "-15s", duration: "25s", size: 14, opacity: 0.13, hue: "cream", depth: "mid", drift: -12, rotate: "350deg" },
  { left: "59%", delay: "-7s", duration: "31s", size: 36, opacity: 0.21, hue: "blush", depth: "near", drift: 26, rotate: "410deg" },
  { left: "65%", delay: "-24s", duration: "23s", size: 10, opacity: 0.11, hue: "red", depth: "far", drift: -10, rotate: "320deg" },
  { left: "71%", delay: "-2s", duration: "29s", size: 20, opacity: 0.17, hue: "cream", depth: "mid", drift: 16, rotate: "375deg" },
  { left: "77%", delay: "-13s", duration: "33s", size: 42, opacity: 0.23, hue: "red", depth: "near", drift: -24, rotate: "430deg" },
  { left: "83%", delay: "-10s", duration: "21s", size: 11, opacity: 0.1, hue: "blush", depth: "far", drift: 8, rotate: "330deg" },
  { left: "89%", delay: "-19s", duration: "26s", size: 26, opacity: 0.19, hue: "cream", depth: "mid", drift: -18, rotate: "385deg" },
  { left: "95%", delay: "-5s", duration: "30s", size: 7, opacity: 0.08, hue: "red", depth: "far", drift: 14, rotate: "290deg" },
  { left: "8%", delay: "-27s", duration: "35s", size: 18, opacity: 0.14, hue: "blush", depth: "mid", drift: -20, rotate: "355deg" },
  { left: "20%", delay: "-16s", duration: "28s", size: 34, opacity: 0.2, hue: "cream", depth: "near", drift: 20, rotate: "405deg" },
  { left: "32%", delay: "-8s", duration: "24s", size: 13, opacity: 0.12, hue: "red", depth: "far", drift: -8, rotate: "325deg" },
  { left: "44%", delay: "-22s", duration: "32s", size: 48, opacity: 0.25, hue: "blush", depth: "near", drift: 28, rotate: "440deg" },
  { left: "56%", delay: "-11s", duration: "27s", size: 15, opacity: 0.13, hue: "cream", depth: "mid", drift: -14, rotate: "365deg" },
  { left: "68%", delay: "-25s", duration: "29s", size: 28, opacity: 0.18, hue: "red", depth: "near", drift: 18, rotate: "395deg" },
  { left: "80%", delay: "-14s", duration: "23s", size: 9, opacity: 0.09, hue: "blush", depth: "far", drift: -12, rotate: "315deg" },
  { left: "92%", delay: "-20s", duration: "31s", size: 24, opacity: 0.16, hue: "cream", depth: "mid", drift: 16, rotate: "380deg" },
  { left: "50%", delay: "-28s", duration: "36s", size: 6, opacity: 0.07, hue: "red", depth: "far", drift: -6, rotate: "280deg" },
  { left: "62%", delay: "-1s", duration: "25s", size: 40, opacity: 0.22, hue: "blush", depth: "near", drift: -22, rotate: "415deg" },
];

function PetalIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.12} viewBox="0 0 24 28" aria-hidden="true">
      <path
        d="M12 1.5 C6.5 8.5, 4.5 15.5, 12 26.5 C19.5 15.5, 17.5 8.5, 12 1.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Soft drifting petals — Design 4 style */
export function FloatingPetals() {
  return (
    <div className="floating-petals" aria-hidden="true">
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className={`floating-petal floating-petal--${petal.hue} floating-petal--${petal.depth}`}
          style={
            {
              left: petal.left,
              "--petal-delay": petal.delay,
              "--petal-duration": petal.duration,
              "--petal-opacity": petal.opacity,
              "--petal-drift": petal.drift,
              "--petal-rotate": petal.rotate,
            } as CSSProperties
          }
        >
          <PetalIcon size={petal.size} />
        </span>
      ))}
    </div>
  );
}
