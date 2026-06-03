import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Truck, Star, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

import heroCar from "@/assets/hero-car.jpg";
import svcInterior from "@/assets/service-interior.jpg";
import svcExterior from "@/assets/service-exterior.jpg";
import svcPaint from "@/assets/service-paint.jpg";
import svcCeramic from "@/assets/service-ceramic.jpg";
import aboutImg from "@/assets/about-technician.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palmetto Elite Detailing — Premium Auto Detailing in Lexington, SC" },
      {
        name: "description",
        content:
          "Professional paint correction, ceramic coatings, and detailing in Lexington, South Carolina. Designed to restore, protect, and enhance your vehicle.",
      },
      { property: "og:title", content: "Palmetto Elite Detailing — Lexington, SC" },
      {
        property: "og:description",
        content: "Luxury detailing, paint correction, and ceramic coatings serving the Midlands.",
      },
      { property: "og:image", content: heroCar },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Sparkles, label: "Premium Products" },
  { icon: Truck, label: "Mobile & In-Shop" },
  { icon: Star, label: "5-Star Experience" },
];

const services = [
  {
    title: "Interior Detailing",
    desc: "Deep cleaning and restoration of carpets, leather, plastics, trim, and every interior surface.",
    img: svcInterior,
  },
  {
    title: "Exterior Detailing",
    desc: "Professional hand washing, decontamination, polishing, and lasting paint protection.",
    img: svcExterior,
  },
  {
    title: "Paint Correction",
    desc: "Removal of swirl marks, oxidation, water spots, and paint imperfections.",
    img: svcPaint,
  },
  {
    title: "Ceramic Coatings",
    desc: "Long-term paint protection with incredible gloss and hydrophobic performance.",
    img: svcCeramic,
  },
];

const work = [
  { src: w1, span: "row-span-2", alt: "Detailed wheel and fender" },
  { src: w2, span: "", alt: "Luxury SUV detail" },
  { src: w3, span: "", alt: "Detailed headlight" },
  { src: w4, span: "row-span-2", alt: "Red sports car" },
  { src: w5, span: "", alt: "Interior detail" },
  { src: w6, span: "", alt: "Top down luxury sedan" },
];

const reviews = [
  {
    quote:
      "The level of care was unreal. My car looked better than the day I drove it off the lot — every detail handled with precision.",
    name: "Marcus Reynolds",
    role: "AMG GT Owner · Lexington",
    initials: "MR",
  },
  {
    quote:
      "Their ceramic coating transformed the paint. Water sheets off, dirt won't stick — exactly what was promised, and then some.",
    name: "Sarah Calhoun",
    role: "BMW M4 Owner · Columbia",
    initials: "SC",
  },
  {
    quote:
      "Professional from the first call to the final reveal. The interior restoration on my Range Rover was nothing short of incredible.",
    name: "James Whitfield",
    role: "Range Rover Owner · Chapin",
    initials: "JW",
  },
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end pb-20 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroCar}
            alt="Freshly detailed luxury vehicle"
            width={1920}
            height={1080}
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-muted-foreground animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--metallic)]" />
              Lexington · South Carolina
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] animate-fade-up">
              Premium Auto<br />
              Detailing in <span className="text-gradient-metallic">Lexington</span>,<br />
              South Carolina
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-up delay-200">
              Professional paint correction, ceramic coatings, and detailing services designed to
              restore, protect, and enhance your vehicle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-metallic-glow px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_15px_45px_-12px_var(--metallic)] hover:shadow-[0_20px_55px_-10px_var(--metallic-glow)] transition-all hover:scale-[1.03]"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/5 transition-all"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl animate-fade-up delay-500">
              {trust.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl px-4 py-3 flex items-center gap-2.5"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-medium tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
                  Our Services
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-semibold max-w-2xl leading-tight">
                  Crafted care for every <span className="text-gradient-metallic">surface</span>.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-md">
                From concours-level paint correction to long-lasting ceramic protection, every
                service is tailored to your vehicle.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <article className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 hover-lift">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent pointer-events-none" />
                  <div className="relative p-8">
                    <h3 className="text-2xl font-display font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group/btn"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-32 bg-charcoal/40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Detailer at work"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="text-xs tracking-[0.25em] uppercase text-primary">About Us</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-display font-semibold leading-tight">
              Detailing<br />
              <span className="text-gradient-metallic">Done Right.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Palmetto Elite Detailing was founded on the belief that every vehicle deserves
              exceptional care. We focus on delivering professional-grade detailing services using
              premium products, advanced techniques, and meticulous attention to detail. Our goal
              is not simply to clean vehicles but to restore and protect them to the highest
              standard possible.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "IGL-certified ceramic coating installer",
                "Professional-grade polishers & products",
                "Service that respects your time and your investment",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 grid place-items-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-metallic-glow px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_15px_45px_-12px_var(--metallic)] hover:scale-[1.03] transition-all"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WORK */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
                Featured Work
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
                Results that speak<br />
                <span className="text-gradient-metallic">for themselves.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {work.map((w, i) => (
              <Reveal key={i} delay={i * 80} className={w.span}>
                <div className="group relative w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={w.src}
                    alt={w.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-xs tracking-[0.2em] uppercase text-primary">Project</div>
                    <div className="text-sm font-medium mt-1">Premium Detail · 2025</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative py-32 bg-gradient-to-b from-transparent via-charcoal/60 to-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs tracking-[0.25em] uppercase text-primary mb-4">
                Client Reviews
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
                Trusted by enthusiasts<br />
                <span className="text-gradient-metallic">across the Midlands.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <div className="h-full glass rounded-3xl p-8 flex flex-col">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-foreground/90 flex-1">
                    "{r.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-3 pt-6 border-t border-border/60">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-metallic-glow grid place-items-center font-display font-semibold text-primary-foreground">
                      {r.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem]">
            <img
              src={ctaBg}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />

            <div className="relative px-8 md:px-16 py-24 md:py-36 text-center">
              <Reveal>
                <h2 className="text-4xl md:text-7xl font-display font-semibold leading-tight max-w-4xl mx-auto">
                  Ready to restore your<br />
                  <span className="text-gradient-metallic">vehicle's shine?</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                  Request a free quote today and experience premium automotive detailing.
                </p>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-metallic-glow px-9 py-5 text-base font-semibold text-primary-foreground shadow-[0_20px_60px_-15px_var(--metallic)] hover:scale-[1.03] transition-all"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
