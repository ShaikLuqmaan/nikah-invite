const GOLD = "#c6a75e";
const GOLD_LIGHT = "#e8d5a3";
const MAROON = "#9b2335";

const W = 260;
const H = 380;

/** Hyderabadi-style gold corner arabesques — tall portrait envelope */
export function EnvelopeCornerMotifs() {
  return (
    <svg className="envelope__corners" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
      <g opacity="0.72" stroke={GOLD} strokeWidth="0.85" fill="none">
        <path d="M14 14 H36 M14 14 V36 M14 14 Q24 24 32 14" />
        <path d="M246 14 H224 M246 14 V36 M246 14 Q236 24 228 14" />
        <path d="M14 366 H36 M14 366 V344 M14 366 Q24 356 32 366" />
        <path d="M246 366 H224 M246 366 V344 M246 366 Q236 356 228 366" />
      </g>
      <g opacity="0.38" fill={GOLD}>
        <circle cx="24" cy="24" r="1.5" />
        <circle cx="236" cy="24" r="1.5" />
        <circle cx="24" cy="356" r="1.5" />
        <circle cx="236" cy="356" r="1.5" />
      </g>
    </svg>
  );
}

/** Gold foil frame — tall portrait */
export function EnvelopeGoldFrame() {
  return (
    <svg className="envelope__gold-frame" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
      <rect x="10" y="10" width="240" height="360" rx="8" fill="none" stroke="url(#envGoldGrad)" strokeWidth="1.1" />
      <rect x="16" y="16" width="228" height="348" rx="6" fill="none" stroke={MAROON} strokeWidth="0.55" opacity="0.28" />
      <defs>
        <linearGradient id="envGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={GOLD_LIGHT} />
          <stop offset="45%" stopColor={GOLD} />
          <stop offset="100%" stopColor="#a8894a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Mihrab arch on inner card */
export function EnvelopeCardArch() {
  return (
    <svg className="envelope__card-arch" viewBox="0 0 200 120" aria-hidden="true" focusable="false">
      <path d="M8 108 V52 Q100 8 192 52 V108" fill="none" stroke="url(#archGoldGrad)" strokeWidth="1.2" />
      <path d="M18 108 V56 Q100 18 182 56 V108" fill="none" stroke={MAROON} strokeWidth="0.65" opacity="0.35" />
      <path
        d="M100 28 C94 28 90 24 90 20 A4 4 0 0 1 100 16 A4 4 0 0 1 110 20 C110 24 106 28 100 28 Z"
        fill={MAROON}
        opacity="0.5"
      />
      <defs>
        <linearGradient id="archGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a8894a" />
          <stop offset="50%" stopColor={GOLD_LIGHT} />
          <stop offset="100%" stopColor="#a8894a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Plain maroon wax seal — no borders */
export function EnvelopeWaxSeal() {
  return (
    <svg className="envelope__seal-shape" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="waxGrad" x1="28%" y1="0%" x2="72%" y2="100%">
          <stop offset="0%" stopColor="#a8283a" />
          <stop offset="48%" stopColor="#9b2335" />
          <stop offset="100%" stopColor="#7e1c2b" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="26" fill="url(#waxGrad)" />
      <ellipse cx="24" cy="22" rx="8" ry="4.5" fill="rgba(255, 255, 255, 0.1)" transform="rotate(-20 24 22)" />
    </svg>
  );
}
