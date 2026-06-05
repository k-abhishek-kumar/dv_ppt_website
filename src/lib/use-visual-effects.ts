"use client";

import { useEffect, useState } from "react";

type VisualEffects = {
  particles: boolean;
  marquee: boolean;
};

const DEFAULT: VisualEffects = { particles: false, marquee: true };

export function useVisualEffects(): VisualEffects {
  const [effects, setEffects] = useState<VisualEffects>(DEFAULT);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 768px)");

    const update = () => {
      const reduce = reducedMotion.matches;
      setEffects({
        particles: !reduce && !narrow.matches,
        marquee: !reduce,
      });
    };

    update();
    reducedMotion.addEventListener("change", update);
    narrow.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      narrow.removeEventListener("change", update);
    };
  }, []);

  return effects;
}
