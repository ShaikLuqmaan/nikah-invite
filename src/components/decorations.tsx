interface MonogramLogoProps {
  groom: string;
  bride: string;
}

const RED = "#9b2335";
const CREAM = "#ddd4c4";

/** Minimal heart mark — always fixed size via width/height attrs */
export function HeartIcon({
  className,
  size = 14,
  useCssSize = false,
}: {
  className?: string;
  size?: number;
  useCssSize?: boolean;
}) {
  return (
    <svg
      className={className}
      {...(!useCssSize ? { width: size, height: size } : {})}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 20.5 S4 14.8 4 9.2 A4.2 4.2 0 0 1 12 7.5 A4.2 4.2 0 0 1 20 9.2 C20 14.8 12 20.5 12 20.5 Z"
        fill={RED}
      />
    </svg>
  );
}

/** Mihrab-style frame with initials and heart */
export function MonogramLogo({ groom, bride }: MonogramLogoProps) {
  return (
    <div className="monogram-logo">
      <svg
        className="monogram-logo-frame"
        viewBox="0 0 88 88"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6 72 V34 Q44 8 82 34 V72"
          fill="none"
          stroke={CREAM}
          strokeWidth="0.75"
        />
        <path
          d="M14 72 V38 Q44 16 74 38 V72"
          fill="none"
          stroke={RED}
          strokeWidth="0.75"
          opacity="0.45"
        />
        <path
          d="M44 28 C44 28 38 22.5 38 19.2 A3.2 3.2 0 0 1 44 17 A3.2 3.2 0 0 1 50 19.2 C50 22.5 44 28 44 28 Z"
          fill={RED}
          opacity="0.65"
        />
        <circle cx="44" cy="72" r="1.5" fill={RED} opacity="0.5" />
      </svg>
      <div className="monogram-logo-letters" aria-hidden="true">
        <span className="monogram-groom">{groom}</span>
        <HeartIcon className="monogram-logo-heart-icon" useCssSize />
        <span className="monogram-bride">{bride}</span>
      </div>
    </div>
  );
}

/** Hero heart illustration */
export function HeartIllustration() {
  return (
    <svg
      className="heart-illustration"
      width="52"
      height="46"
      viewBox="0 0 80 72"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M40 64 C40 64 10 44 10 26.5 C10 16.8 17.8 10 27 10 C32.5 10 37.5 12.8 40 17 C42.5 12.8 47.5 10 53 10 C62.2 10 70 16.8 70 26.5 C70 44 40 64 40 64 Z"
        fill="none"
        stroke={RED}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M40 56 C40 56 18 40 18 27.5 C18 20.5 23.5 16 29 16 C33 16 36.5 18 40 22 C43.5 18 47 16 51 16 C56.5 16 62 20.5 62 27.5 C62 40 40 56 40 56 Z"
        fill={RED}
        opacity="0.1"
      />
    </svg>
  );
}

export function OrnamentDivider() {
  return (
    <div className="ornament-divider" aria-hidden="true">
      <span className="ornament-line" />
      <HeartIcon className="ornament-heart" size={10} />
      <span className="ornament-line" />
    </div>
  );
}

export function AyahCorner() {
  return (
    <svg
      className="ayah-corner"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 20 V8 Q4 4 8 4 H20" fill="none" stroke={RED} strokeWidth="0.8" opacity="0.35" />
      <circle cx="8" cy="8" r="1.5" fill={RED} opacity="0.35" />
    </svg>
  );
}

export function PageWatermark({ groom, bride }: MonogramLogoProps) {
  return (
    <div className="page-watermark" aria-hidden="true">
      <span className="page-watermark-groom">{groom}</span>
      <HeartIcon size={28} />
      <span className="page-watermark-bride">{bride}</span>
    </div>
  );
}
