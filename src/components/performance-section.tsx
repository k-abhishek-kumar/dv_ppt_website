"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { keyMetrics } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const PerformanceChart = dynamic(
  () => import("./performance-chart").then((mod) => mod.PerformanceChart),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-72 items-center justify-center text-sm text-muted md:h-80">
        Loading chart...
      </div>
    ),
  }
);

type Tab = "chart" | "metrics";

export function PerformanceSection() {
  const [tab, setTab] = useState<Tab>("chart");

  return (
    <section id="performance" className="border-y border-card-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Daily Performance
          </h2>
          <p className="mt-4 text-muted">
            Real-time tracking of our trading performance and key metrics
          </p>
        </div>

        <div className="mb-6 inline-flex rounded-full border border-card-border bg-background p-1">
          {(["chart", "metrics"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                tab === t
                  ? "bg-accent text-background"
                  : "text-muted hover:text-foreground"
              )}
            >
              {t === "chart" ? "Performance Chart" : "Key Metrics"}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-card-border bg-card p-6 md:p-8">
          {tab === "chart" ? (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">30-Day Performance</h3>
                <p className="text-sm text-muted">
                  Cumulative returns over the last month
                </p>
              </div>
              <PerformanceChart />
            </>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {keyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-card-border bg-background/50 p-5"
                >
                  <p className="text-sm text-muted">{metric.label}</p>
                  <p className="mt-1 text-2xl font-bold text-accent">{metric.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
