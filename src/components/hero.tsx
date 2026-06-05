import { ArrowRight, BarChart3 } from "lucide-react";
import { stats } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-4 font-mono text-sm tracking-widest text-accent uppercase">
          Quantitative Trading Excellence
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          PaperTownResearch Capital
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Advanced derivatives trading and quantitative research firm specializing
          in algorithmic strategies, real-time monitoring, and risk-managed portfolio
          solutions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#performance"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Performance
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-card"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-card-border bg-card/80 p-6"
            >
              <div className="mb-2 flex items-center gap-2 text-accent">
                <BarChart3 className="h-4 w-4" />
                <span className="text-xs font-medium tracking-wide text-muted uppercase">
                  {stat.label}
                </span>
              </div>
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
