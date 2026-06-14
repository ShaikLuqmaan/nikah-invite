import { site } from "@/lib/content";

/** Design 7 — large faint starting Arabic letters on left/right borders */
export function CalligraphyBackground() {
  const { groomArabic, brideArabic } = site.monogram;

  return (
    <div className="calligraphy-bg" aria-hidden="true">
      <aside className="calligraphy-bg-side calligraphy-bg-side--left">
        <span className="calligraphy-border-letter calligraphy-border-letter--groom" lang="ar">
          {groomArabic}
        </span>
      </aside>

      <aside className="calligraphy-bg-side calligraphy-bg-side--right">
        <span className="calligraphy-border-letter calligraphy-border-letter--bride" lang="ar">
          {brideArabic}
        </span>
      </aside>
    </div>
  );
}
