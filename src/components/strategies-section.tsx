"use client";

import { motion } from "framer-motion";
import { Activity, Clock, LineChart, Shield } from "lucide-react";
import { strategies } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const icons = [Activity, Clock, LineChart, Shield];

export function StrategiesSection() {
  return (
    <section id="strategies" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Trading Strategies &amp; Systems
          </h2>
          <p className="mt-4 text-muted">
            Proprietary trading systems built for precision, reliability, and
            consistent performance
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {strategies.map((strategy, i) => {
            const Icon = icons[i];
            const isActive = strategy.status === "Active";

            return (
              <motion.article
                key={strategy.title}
                className="group rounded-2xl border border-card-border bg-card p-6 transition-colors hover:border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "bg-muted/10 text-muted"
                    )}
                  >
                    {strategy.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{strategy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {strategy.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
