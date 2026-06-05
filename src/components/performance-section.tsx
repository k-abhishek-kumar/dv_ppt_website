"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { keyMetrics, performanceData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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

        <motion.div
          className="rounded-2xl border border-card-border bg-card p-6 md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {tab === "chart" ? (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">30-Day Performance</h3>
                <p className="text-sm text-muted">
                  Cumulative returns over the last month
                </p>
              </div>
              <div className="h-72 min-h-72 w-full min-w-0 md:h-80">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                  <AreaChart data={[...performanceData]}>
                    <defs>
                      <linearGradient id="returnGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#1c2433" strokeDasharray="4 4" />
                    <XAxis
                      dataKey="day"
                      tick={{ fill: "#8b9cb3", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#8b9cb3", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `${v}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#0d1117",
                        border: "1px solid #1c2433",
                        borderRadius: "8px",
                        color: "#f0f4f8",
                      }}
                      formatter={(value) => [`${value}%`, "Return"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="return"
                      stroke="#2dd4bf"
                      strokeWidth={2}
                      fill="url(#returnGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
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
        </motion.div>
      </div>
    </section>
  );
}
