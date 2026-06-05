"use client";

import { FormEvent, useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="border-t border-card-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted">
            Interested in learning more about our trading strategies? Reach out to
            our team
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-card-border bg-card p-6 md:p-8">
              <h3 className="text-lg font-semibold">Send us a message</h3>
              <p className="mt-1 text-sm text-muted">
                Fill out the form below and we&apos;ll get back to you shortly
              </p>

              {submitted ? (
                <p className="mt-8 rounded-xl border border-accent/30 bg-accent/10 px-4 py-6 text-sm text-accent">
                  Thank you! Your message has been received. We&apos;ll be in touch
                  soon.
                </p>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-sm text-muted">Name</span>
                      <input
                        name="name"
                        required
                        className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-sm text-muted">Email</span>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1.5 block text-sm text-muted">Phone</span>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm text-muted">Message</span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-card-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent/50"
                      placeholder="Tell us about your inquiry..."
                    />
                  </label>

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: Phone, label: "Phone", value: contactInfo.phone },
              { icon: MapPin, label: "Location", value: contactInfo.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex gap-4 rounded-2xl border border-card-border bg-card p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 font-medium transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
