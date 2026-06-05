"use client";

const symbols = ["∫", "π", "Σ", "α", "β", "∂", "∆", "λ", "∞", "θ", "μ", "σ", "φ", "Ω"];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const row = [...symbols, ...symbols, ...symbols];

  return (
    <div
      className={`flex shrink-0 items-center gap-10 px-5 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {row.map((symbol, i) => (
        <span
          key={`${symbol}-${i}`}
          className="font-mono text-4xl text-accent/20 select-none sm:text-5xl md:text-6xl"
        >
          {symbol}
        </span>
      ))}
    </div>
  );
}

export function SymbolMarquee() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-24 overflow-hidden opacity-70 md:top-28"
      aria-hidden
    >
      <div className="flex w-max">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
      <div className="mt-6 flex w-max">
        <MarqueeTrack reverse />
        <MarqueeTrack reverse />
      </div>
    </div>
  );
}
