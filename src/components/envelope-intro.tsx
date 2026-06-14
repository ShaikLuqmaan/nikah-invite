"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { EnvelopeConfetti } from "./envelope-confetti";
import {
  EnvelopeCardArch,
  EnvelopeCornerMotifs,
  EnvelopeGoldFrame,
  EnvelopeWaxSeal,
} from "./envelope-decor";
import { playEnvelopeOpenSound } from "@/lib/envelope-sound";

const OPEN_MS = 3400;

interface EnvelopeIntroProps {
  groom: string;
  bride: string;
  groomArabic: string;
  brideArabic: string;
  nikahDate: string;
  nikahVenue: string;
  children: ReactNode;
}

export function EnvelopeIntro({
  groom,
  bride,
  groomArabic,
  brideArabic,
  nikahDate,
  nikahVenue,
  children,
}: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<"pending" | "intro" | "opening" | "done">("pending");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase(reduced ? "done" : "intro");
  }, []);

  const open = useCallback(() => {
    if (phase !== "intro") return;
    setPhase("opening");
    playEnvelopeOpenSound();

    window.setTimeout(() => setPhase("done"), OPEN_MS);
  }, [phase]);

  if (phase === "pending") {
    return <div className="envelope-intro-placeholder" aria-hidden="true" />;
  }

  const opening = phase === "opening";
  const showIntro = phase === "intro" || opening;
  const showContent = opening || phase === "done";

  return (
    <>
      {showIntro && (
      <div
        className={`envelope-intro${opening ? " envelope-intro--opening envelope-intro--exit" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Invitation envelope"
      >
        <div className="envelope-scene">
          <EnvelopeConfetti active={opening} />

          <button
            type="button"
            className={`envelope envelope--portrait${opening ? " envelope--opening" : ""}`}
            onClick={open}
            disabled={opening}
            aria-label="Open invitation"
          >
            <span className="envelope__glow" aria-hidden="true" />

            {/* Body / back */}
            <span className="envelope__body" aria-hidden="true">
              <span className="envelope__body-texture" />
              <span className="envelope__liner" />
            </span>

            {/* Inner invitation card */}
            <span className="envelope__card">
              <span className="envelope__card-inner">
                <EnvelopeCardArch />
                <span className="envelope__card-initials" aria-hidden="true">
                  {groom}
                  <span className="envelope__card-heart">♥</span>
                  {bride}
                </span>
                <span className="envelope__card-peek">
                  <span className="envelope__card-date">{nikahDate}</span>
                  <span className="envelope__card-venue">{nikahVenue}</span>
                </span>
              </span>
            </span>

            {/* Front cover — slides down after thread breaks */}
            <span className="envelope__cover" aria-hidden="true">
              <span className="envelope__cover-texture" />
              <EnvelopeGoldFrame />
              <EnvelopeCornerMotifs />
              <span className="envelope__cover-watermark" lang="ar" aria-hidden="true">
                <span className="envelope__cover-watermark-letter">{groomArabic}</span>
                <span className="envelope__cover-watermark-heart" aria-hidden="true">
                  ♥
                </span>
                <span className="envelope__cover-watermark-letter envelope__cover-watermark-letter--bride">
                  {brideArabic}
                </span>
              </span>
            </span>

            {/* Thread bands + wax seal */}
            <span className="envelope__closure" aria-hidden="true">
              <span className="envelope__thread envelope__thread--upper">
                <span className="envelope__thread-strand envelope__thread-strand--left" />
                <span className="envelope__thread-strand envelope__thread-strand--right" />
              </span>
              <span className="envelope__thread envelope__thread--lower">
                <span className="envelope__thread-strand envelope__thread-strand--left" />
                <span className="envelope__thread-strand envelope__thread-strand--right" />
              </span>

              <span className="envelope__seal">
                <EnvelopeWaxSeal />
              </span>
            </span>
          </button>
        </div>

        {!opening && <p className="envelope-intro__cta">Tap to open</p>}
      </div>
      )}

      {showContent && (
        <div
          className={`envelope-content${opening ? " envelope-content--entering" : " envelope-content--visible"}`}
          aria-hidden={opening ? true : undefined}
        >
          {children}
        </div>
      )}
    </>
  );
}
