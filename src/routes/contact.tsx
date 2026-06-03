import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, MapPin, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import banner from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — Palmetto Elite Detailing" },
      {
        name: "description",
        content:
          "Request a free quote for premium auto detailing, paint correction, or ceramic coatings in Lexington, Columbia, and the surrounding Midlands.",
      },
      { property: "og:title", content: "Get a Free Quote — Palmetto Elite Detailing" },
      {
        property: "og:description",
        content: "Premium detailing serving Lexington, Columbia, Irmo, Chapin and more.",
      },
      { property: "og:image", content: banner },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Interior Detailing",
  "Exterior Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Full Detail Package",
  "Other",
];

const areas = ["Lexington", "Columbia", "Irmo", "Chapin", "West Columbia", "Cayce"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Quote request received. We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <div className="min-h-screen">
      <Nav />
      <Toaster />

      {/* Banner */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={banner}
            alt=""
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-muted-foreground animate-fade-in">
            Contact
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-display font-semibold leading-[0.95] animate-fade-up">
            Get Your <span className="text-gradient-metallic">Free Quote</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto animate-fade-up delay-200">
            Tell us about your vehicle and the service you're interested in. We'll respond within
            one business day with pricing and availability.
          </p>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-10">
              {done ? (
                <div className="text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-primary/15 grid place-items-center mx-auto">
                    <Check className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-display font-semibold">Quote request received</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Thank you — we'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="mt-8 text-sm text-primary hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Phone Number" name="phone" type="tel" required />
                    <Field
                      label="Vehicle Year / Make / Model"
                      name="vehicle"
                      placeholder="2023 Porsche 911"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Requested Service
                    </label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-xl bg-input/60 border border-border/70 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
                    >
                      <option value="" disabled className="bg-card">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-card">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      maxLength={1000}
                      className="mt-2 w-full rounded-xl bg-input/60 border border-border/70 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition resize-none"
                      placeholder="Tell us about your vehicle's condition and what you're looking for…"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-metallic-glow px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_15px_45px_-12px_var(--metallic)] hover:scale-[1.02] transition-all disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send Request"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xs tracking-[0.25em] uppercase text-primary">Get In Touch</h3>
                <ul className="mt-6 space-y-5">
                  <InfoRow icon={Phone} label="Phone" value="(803) 555-0123" />
                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value="info@palmettoelitedetailing.com"
                  />
                </ul>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-xs tracking-[0.25em] uppercase text-primary">Business Hours</h3>
                <div className="mt-5 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  <ul className="text-sm space-y-1.5">
                    <li className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Mon – Fri</span>
                      <span>8 AM – 6 PM</span>
                    </li>
                    <li className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>8 AM – 4 PM</span>
                    </li>
                    <li className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-xs tracking-[0.25em] uppercase text-primary">Service Areas</h3>
                <div className="mt-5 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div className="flex flex-wrap gap-2">
                    {areas.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center rounded-full bg-secondary/70 border border-border/60 px-3 py-1 text-xs"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal>
          <div className="mx-auto max-w-7xl px-6 mt-16">
            <div className="rounded-3xl overflow-hidden border border-border/60 relative h-[420px]">
              <iframe
                title="Service area map — Lexington, SC"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-81.4%2C33.85%2C-80.85%2C34.15&layer=mapnik&marker=33.9826%2C-81.2362"
                className="w-full h-full grayscale contrast-110 brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-primary/10" />
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-xl bg-input/60 border border-border/70 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary transition"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 w-9 h-9 rounded-full bg-primary/15 grid place-items-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="text-sm mt-0.5 break-all">{value}</div>
      </div>
    </li>
  );
}
