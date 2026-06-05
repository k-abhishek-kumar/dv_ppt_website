"use client";

import { FloatingSymbols } from "./floating-symbols";
import { ParticleNetwork } from "./particle-network";
import { SymbolMarquee } from "./symbol-marquee";

export function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="glow-orb absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2" />
      <div className="glow-orb absolute top-1/3 -right-20 h-[420px] w-[420px] opacity-70" />
      <div className="glow-orb absolute bottom-0 left-1/3 h-[480px] w-[600px] opacity-50" />

      <ParticleNetwork />
      <SymbolMarquee />
      <FloatingSymbols />
    </div>
  );
}
