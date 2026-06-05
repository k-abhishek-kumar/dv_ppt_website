"use client";

import { useVisualEffects } from "@/lib/use-visual-effects";
import { ParticleNetwork } from "./particle-network";
import { SymbolMarquee } from "./symbol-marquee";

export function PageBackground() {
  const { particles, marquee } = useVisualEffects();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden [contain:strict] [transform:translateZ(0)]"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-25" />

      <div className="glow-orb absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2" />
      <div className="glow-orb absolute top-1/3 -right-20 h-[420px] w-[420px] opacity-60" />

      {particles && <ParticleNetwork />}
      {marquee && <SymbolMarquee />}
    </div>
  );
}
