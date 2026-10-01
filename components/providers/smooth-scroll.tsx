"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
