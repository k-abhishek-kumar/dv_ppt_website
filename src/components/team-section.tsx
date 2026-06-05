"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/site-data";

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Team</h2>
          <p className="mt-4 text-muted">
            Expert quantitative researchers and developers driving innovation in
            algorithmic trading
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              className="rounded-2xl border border-card-border bg-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-lg font-semibold text-accent">
                {member.initials}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
