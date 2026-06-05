"use client";

import { motion } from "framer-motion";

const symbols = ["∫", "π", "Σ", "α", "β", "∂", "∆", "λ", "∞"];

const positions = [
  { top: "8%", left: "6%", delay: 0 },
  { top: "15%", right: "10%", delay: 0.5 },
  { top: "35%", left: "4%", delay: 1 },
  { top: "55%", right: "6%", delay: 1.5 },
  { top: "72%", left: "12%", delay: 2 },
  { top: "85%", right: "15%", delay: 0.8 },
  { top: "25%", right: "20%", delay: 1.2 },
  { top: "45%", left: "18%", delay: 0.3 },
  { top: "65%", right: "25%", delay: 1.8 },
];

export function FloatingSymbols() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {symbols.map((symbol, i) => (
        <motion.span
          key={symbol}
          className="absolute font-mono text-2xl text-accent/20 sm:text-3xl md:text-5xl"
          style={positions[i]}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.12, 0.28, 0.12],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: positions[i].delay,
            ease: "easeInOut",
          }}
        >
          {symbol}
        </motion.span>
      ))}
    </div>
  );
}
