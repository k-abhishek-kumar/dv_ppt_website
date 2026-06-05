const symbols = ["∫", "π", "Σ", "α", "β", "∂", "∆", "λ", "∞"];

const row = [...symbols, ...symbols];

export function SymbolMarquee() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-24 overflow-hidden opacity-60 md:top-28"
      aria-hidden
    >
      <div className="marquee-track flex w-max will-change-transform">
        {row.map((symbol, i) => (
          <span
            key={`a-${symbol}-${i}`}
            className="px-8 font-mono text-4xl text-accent/15 select-none sm:text-5xl"
          >
            {symbol}
          </span>
        ))}
        {row.map((symbol, i) => (
          <span
            key={`b-${symbol}-${i}`}
            className="px-8 font-mono text-4xl text-accent/15 select-none sm:text-5xl"
          >
            {symbol}
          </span>
        ))}
      </div>
    </div>
  );
}
