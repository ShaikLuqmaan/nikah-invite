"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount (above-the-fold content) instead of waiting for scroll */
  eager?: boolean;
}

export function FadeIn({ children, className = "", delay = 0, eager = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eager) {
      const timer = window.setTimeout(() => setVisible(true), 50);
      return () => window.clearTimeout(timer);
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div
      ref={ref}
      className={`fade-in${visible ? " fade-in--visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--fade-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
