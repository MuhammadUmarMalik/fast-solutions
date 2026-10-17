"use client";
// Premium family: Quiet Tech, adapted from DESIGN.md (North). Plaster ground, soot ink, one cobalt accent (lifted to #8aa8ff inside the soot section via .on-dark).
// Radius system: pill buttons and chips, 28px enclosures with concentric cores (outer minus padding).
// Motion: blur-in once on the hero, whileInView reveals, scroll-linked hero media, statement and process rail.
import Image from "next/image";
import { useRef } from "react";
import { MotionConfig, motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { observer } from "mobx-react-lite";
import { uiStore as ui } from "@/store/uiStore";
import {
  SITE, CTA, nav, hero, marquee, problems, outcome, solution, process, stack, proof, guarantees, objections, faqs, final,
} from "@/lib/content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const wrap = "mx-auto w-full max-w-[1200px] px-6 md:px-10";
const h2 = "font-display font-semibold text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.04] tracking-[-0.03em] text-balance";
const eyebrow = "font-mono text-[11px] uppercase tracking-[0.16em]";
const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

/* ---------- primitives ---------- */

function Reveal({ children, delay = 0, className = "", y = 24 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
    <path d="M5 10.5l3.2 3L15 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function BookCall({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const pad = size === "sm" ? "h-10 pl-4 pr-1.5 text-sm" : size === "lg" ? "h-14 pl-7 pr-2 text-base" : "h-12 pl-6 pr-1.5 text-[15px]";
  const dot = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-9 w-9";
  return (
    <a
      href={SITE.cta}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full bg-accent font-medium text-on-accent shadow-soft transition-[transform,box-shadow] duration-300 ease-expo hover:-translate-y-px active:scale-[0.98] ${pad} ${ring}`}
    >
      {CTA.primary}
      <span className={`grid place-items-center rounded-full bg-on-accent/15 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${dot}`}>
        <Arrow className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

function Ghost({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center whitespace-nowrap rounded-full px-6 text-[15px] font-medium ring-1 transition-colors duration-300 ease-expo active:scale-[0.98] ${ring} ${
        dark ? "text-on-dark ring-dark-line hover:bg-dark-raised" : "text-ink ring-line-strong hover:bg-surface"
      }`}
    >
      {children}
    </a>
  );
}

/** Double-bezel enclosure: a core seated in a tray, concentric radii. */
function Shell({ children, className = "", core = "bg-surface" }: { children: React.ReactNode; className?: string; core?: string }) {
  return (
    <div className={`rounded-[1.75rem] bg-ink/[0.035] p-1.5 ring-1 ring-ink/[0.06] ${className}`}>
      <div className={`h-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ${core}`}>{children}</div>
    </div>
  );
}

const Logo = () => (
  <a href="#top" className={`flex items-center gap-2.5 rounded-full ${ring}`} aria-label="Fast Solutions home">
    <span className="relative grid h-8 w-8 place-items-center rounded-[10px] bg-ink font-display text-[15px] font-bold text-bg">
      F<span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-[2px] bg-accent" />
    </span>
    <span className="font-display text-[17px] font-semibold tracking-[-0.02em]">Fast Solutions</span>
  </a>
);

/** Page progress: tells the reader where they are in a long page. */
function ScrollBar() {
  const { scrollYProgress } = useScroll();
  return <motion.div aria-hidden="true" style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent" />;
}

/* ---------- nav ---------- */

const Nav = observer(function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="glass mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full bg-surface/75 pl-5 pr-2 shadow-soft ring-1 ring-ink/[0.06] backdrop-blur-xl">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className={`rounded text-sm text-ink-soft transition-colors duration-200 hover:text-ink ${ring}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block"><BookCall size="sm" /></div>
        <button
          type="button"
          onClick={ui.toggleMenu}
          aria-expanded={ui.menuOpen}
          aria-controls="mobile-menu"
          aria-label={ui.menuOpen ? "Close menu" : "Open menu"}
          className={`relative grid h-11 w-11 place-items-center rounded-full md:hidden ${ring}`}
        >
          <motion.span className="absolute h-[1.5px] w-5 bg-ink" animate={ui.menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }} transition={{ duration: 0.3, ease: EASE }} />
          <motion.span className="absolute h-[1.5px] w-5 bg-ink" animate={ui.menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }} transition={{ duration: 0.3, ease: EASE }} />
        </button>
      </div>

      <motion.div
        id="mobile-menu"
        initial={false}
        animate={ui.menuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -8, pointerEvents: "none" }}
        transition={{ duration: 0.35, ease: EASE }}
        className="glass mx-auto mt-2 max-w-[1200px] rounded-[1.75rem] bg-surface/95 p-6 shadow-soft ring-1 ring-ink/[0.06] backdrop-blur-xl md:hidden"
        aria-hidden={!ui.menuOpen}
      >
        <ul className="space-y-1">
          {nav.map(([label, href], i) => (
            <motion.li key={href} animate={ui.menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }} transition={{ duration: 0.4, ease: EASE, delay: ui.menuOpen ? 0.05 + i * 0.06 : 0 }}>
              <a href={href} onClick={ui.closeMenu} tabIndex={ui.menuOpen ? 0 : -1} className={`block rounded-lg py-3 font-display text-2xl font-medium tracking-[-0.02em] ${ring}`}>
                {label}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="mt-6" onClick={ui.closeMenu}><BookCall /></div>
      </motion.div>
    </header>
  );
});

/* ---------- hero mockup ---------- */

// A sample client site, coded rather than screenshotted so it stays crisp and weighs nothing.
// Every size inside a screen is in cqw (container width %), so it scales like an image at any viewport.
const screen = "[container-type:inline-size]";
const layered = "shadow-[0_1px_2px_-1px_rgb(28_27_23/0.08),0_12px_32px_-12px_rgb(28_27_23/0.16),0_40px_80px_-32px_rgb(28_27_23/0.24)]";

const Lock = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-3 w-3">
    <rect x="2.5" y="5.5" width="7" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 5.5V4a2 2 0 014 0v1.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const MiniMark = ({ className = "" }: { className?: string }) => (
  <span className={`grid shrink-0 place-items-center rounded-[22%] bg-ink font-display font-bold text-bg ${className}`}>M</span>
);

function HeroMockup() {
  const m = hero.mockup;
  return (
    <div role="img" aria-label={m.label} className="relative">
      <Shell core="bg-surface" className={layered}>
        {/* browser chrome */}
        <div aria-hidden="true" className="flex items-center gap-3 border-b border-line bg-bg px-3 py-2.5 md:px-4 md:py-3">
          <div className="flex w-12 gap-1.5">
            {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-line-strong" />)}
          </div>
          <div className="mx-auto flex h-7 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-surface px-3 font-mono text-[11px] text-muted ring-1 ring-line sm:max-w-[22rem]">
            <Lock />
            <span className="truncate">{m.url}</span>
          </div>
          <div className="hidden w-12 sm:block" />
        </div>

        {/* desktop site */}
        <div aria-hidden="true" className={`${screen} bg-surface`}>
          <div className="flex items-center justify-between px-[4cqw] py-[2.2cqw]">
            <div className="flex items-center gap-[0.9cqw]">
              <MiniMark className="h-[2.6cqw] w-[2.6cqw] text-[1.4cqw]" />
              <span className="font-display text-[1.45cqw] font-semibold tracking-[-0.02em]">{m.brand}</span>
            </div>
            <div className="flex items-center gap-[2.6cqw] text-[1.15cqw] text-ink-soft">
              {m.links.map((l) => <span key={l}>{l}</span>)}
              <span className="rounded-full bg-accent px-[1.8cqw] py-[0.85cqw] font-medium text-on-accent">{m.cta}</span>
            </div>
          </div>

          <div className="grid grid-cols-[1.05fr_1fr] items-center gap-[4cqw] px-[4cqw] pb-[4cqw] pt-[1.5cqw]">
            <div>
              <p className="font-mono text-[0.95cqw] uppercase tracking-[0.16em] text-accent-ink">{m.eyebrow}</p>
              <p className="mt-[1.4cqw] font-display text-[4.4cqw] font-semibold leading-[1] tracking-[-0.035em] text-balance">{m.h}</p>
              <p className="mt-[1.6cqw] max-w-[34ch] text-[1.35cqw] leading-[1.55] text-ink-soft">{m.p}</p>
              <div className="mt-[2.4cqw] flex gap-[1cqw] text-[1.2cqw] font-medium">
                <span className="rounded-full bg-accent px-[2.2cqw] py-[1.1cqw] text-on-accent">{m.cta}</span>
                <span className="rounded-full px-[2.2cqw] py-[1.1cqw] ring-1 ring-line-strong">{m.call}</span>
              </div>
              <ul className="mt-[3cqw] flex flex-wrap gap-x-[2.2cqw] gap-y-[0.8cqw] text-[1.05cqw] text-ink-soft">
                {m.facts.map((f) => (
                  <li key={f} className="flex items-center gap-[0.5cqw]"><Check className="h-[1.3cqw] w-[1.3cqw] text-accent-ink" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.6cqw] bg-putty">
              <Image src={m.image} alt="" fill priority sizes="(min-width: 1240px) 560px, 46vw" className="object-cover" />
            </div>
          </div>
        </div>
      </Shell>

      {/* phone: the same site on mobile */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
        className={`absolute -bottom-10 right-3 hidden w-[150px] rounded-[2rem] bg-ink p-1.5 sm:block md:-bottom-14 md:right-6 md:w-[190px] lg:-right-6 lg:w-[220px] ${layered}`}
      >
        <div className={`${screen} relative aspect-[9/19] overflow-hidden rounded-[calc(2rem-0.375rem)] bg-surface`}>
          <span className="absolute left-1/2 top-[3cqw] h-[5.5cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-ink" />
          <div className="flex items-center justify-between px-[7cqw] pb-[4cqw] pt-[14cqw]">
            <div className="flex items-center gap-[2.5cqw]">
              <MiniMark className="h-[8cqw] w-[8cqw] text-[4.5cqw]" />
              <span className="font-display text-[5cqw] font-semibold tracking-[-0.02em]">{m.brand}</span>
            </div>
            <span className="flex flex-col gap-[1.4cqw]"><span className="h-[0.8cqw] w-[6cqw] rounded-full bg-ink" /><span className="h-[0.8cqw] w-[6cqw] rounded-full bg-ink" /></span>
          </div>
          <div className="relative mx-[5cqw] aspect-[4/3] overflow-hidden rounded-[5cqw] bg-putty">
            <Image src={m.image} alt="" fill sizes="220px" className="object-cover" />
          </div>
          <div className="px-[7cqw] pt-[6cqw]">
            <p className="font-display text-[9.5cqw] font-semibold leading-[1.02] tracking-[-0.03em]">{m.h}</p>
            <p className="mt-[3.5cqw] text-[4.4cqw] leading-[1.5] text-ink-soft">{m.p}</p>
            <span className="mt-[5cqw] block rounded-full bg-accent py-[3.6cqw] text-center text-[4.6cqw] font-medium text-on-accent">{m.cta}</span>
          </div>
        </div>
      </motion.div>

      {/* automation: the booking lands and the confirmation goes out on its own */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
        className="absolute -bottom-6 left-4 hidden md:block lg:-left-8"
      >
        <div className={`rounded-[1.25rem] bg-ink/[0.035] p-1.5 ring-1 ring-ink/[0.06] ${layered}`}>
          <div className="flex items-center gap-3 rounded-[calc(1.25rem-0.375rem)] bg-surface py-3 pl-3 pr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-on-accent"><Check className="h-4 w-4" /></span>
            <span className="text-left">
              <span className="block text-sm font-medium">{m.toast.t}</span>
              <span className="block text-[13px] text-muted">{m.toast.d}</span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- hero ---------- */

function Hero() {
  const media = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: media, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const lift = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const line = (text: string, delay: number, accentWord?: string) => (
    <motion.span
      className="block"
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {accentWord ? (
        <>
          <span className="text-accent-ink">{accentWord}</span>
          {text.slice(accentWord.length)}
        </>
      ) : (
        text
      )}
    </motion.span>
  );

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col pt-36 md:pt-40">
      <div className={`${wrap} flex flex-col items-center text-center`}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className={`${eyebrow} inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-ink-soft ring-1 ring-line`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </motion.p>

        <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-balance">
          {line(hero.h1a, 0.08)}
          {line(hero.h1b, 0.18, "customers,")}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mt-7 max-w-[46ch] text-pretty text-[17px] leading-[1.6] text-ink-soft md:text-lg"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <BookCall size="lg" />
          <Ghost href="#process">{CTA.secondary}</Ghost>
        </motion.div>
      </div>

      <div ref={media} className="mx-auto mt-16 w-full max-w-[1240px] px-4 pb-16 md:mt-20 md:px-8 md:pb-24">
        <motion.div style={{ scale, y: lift }} className="origin-top will-change-transform">
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- marquee ---------- */

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <section aria-label="What we do" className="marquee mt-24 overflow-hidden border-y border-line py-7 md:mt-32">
      <ul className="sr-only">{marquee.map((m) => <li key={m}>{m}</li>)}</ul>
      <div className="marquee-track flex w-max items-center gap-10 md:gap-14" aria-hidden="true">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-medium tracking-[-0.02em] text-ink-soft md:gap-14 md:text-4xl">
            {m}
            <span className="h-2 w-2 rounded-[3px] bg-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- problems ---------- */

function Problems() {
  return (
    <section id="problems" className="py-28 md:py-40">
      <div className={`${wrap} grid gap-12 md:grid-cols-12 md:gap-8 lg:gap-16`}>
        <div className="md:sticky md:top-32 md:col-span-5 md:self-start">
          <Reveal>
            <h2 className={h2}>{problems.h2}</h2>
            <p className="mt-6 max-w-[42ch] text-pretty text-[17px] text-ink-soft">{problems.intro}</p>
          </Reveal>
        </div>

        <ol className="divide-y divide-line border-y border-line md:col-span-7">
          {problems.list.map((p, i) => (
            <li key={p.t}>
              <Reveal delay={i * 0.06} className="grid grid-cols-[2.75rem_1fr] gap-x-4 py-8 md:py-10">
                <span className="pt-1 font-mono text-sm text-muted tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">{p.t}</h3>
                  <p className="mt-2 max-w-[56ch] text-pretty text-ink-soft">{p.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Outside the grid so the sticky heading releases before this scrolls in. */}
      <div className={`${wrap} mt-16 md:mt-24`}>
        <Reveal>
          <Shell core="bg-putty">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:items-end md:gap-16 md:p-14">
              <p className="max-w-[52ch] text-pretty text-[17px] leading-[1.65] text-ink-soft">{problems.failed.lead}</p>
              <p className="font-display text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-balance md:text-[2.25rem]">{problems.failed.punch}</p>
            </div>
          </Shell>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- outcome ---------- */

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

function Statement({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  const cls = "max-w-[26ch] font-display text-[clamp(1.85rem,4.2vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.03em]";
  if (reduce) return <h2 className={cls}>{text}</h2>;
  return (
    <h2 ref={ref} className={cls} aria-label={text}>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
        ))}
      </span>
    </h2>
  );
}

function Outcome() {
  return (
    <section className="py-28 md:py-40">
      <div className={wrap}>
        <Statement text={outcome.statement} />

        <ul className="mt-20 grid gap-px overflow-hidden rounded-[1.75rem] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {outcome.list.map((o, i) => (
            <li key={o.t} className="bg-bg transition-colors duration-300 hover:bg-surface">
              <Reveal delay={(i % 3) * 0.07} className="p-8 md:p-10">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent-ink">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-[-0.02em]">{o.t}</h3>
                <p className="mt-2 text-pretty text-ink-soft">{o.d}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-20 text-center font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Less chasing. <span className="text-accent-ink">More booked work.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- solution (bento) ---------- */

function Solution() {
  const s = solution.services;
  const span = ["sm:col-span-2", "", "", "", ""];
  return (
    <section id="services" className="border-y border-line bg-surface py-28 md:py-40">
      <div className={wrap}>
        <Reveal>
          <h2 className={`${h2} max-w-[20ch]`}>{solution.h2}</h2>
          <p className="mt-6 max-w-[62ch] text-pretty text-[17px] text-ink-soft">{solution.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.map((item, i) => (
            <Reveal key={item.t} delay={(i % 3) * 0.07} className={span[i]}>
              <Shell core="bg-bg" className="group h-full">
                <div className={`flex h-full flex-col ${i === 0 ? "md:flex-row" : ""}`}>
                  {item.img && (
                    <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/10]"}`}>
                      <Image
                        src={item.img}
                        alt={item.alt ?? ""}
                        fill
                        loading="lazy"
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className={`flex flex-1 flex-col justify-end p-7 md:p-9 ${i === 0 ? "md:min-h-[320px]" : "min-h-[220px]"}`}>
                    <span className="font-mono text-sm text-muted tabular-nums">0{i + 1}</span>
                    <h3 className="mt-auto pt-10 font-display text-2xl font-medium tracking-[-0.02em]">{item.t}</h3>
                    <p className="mt-2 max-w-[44ch] text-pretty text-ink-soft">{item.d}</p>
                  </div>
                </div>
              </Shell>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-1 text-[17px] sm:flex-row sm:items-center sm:gap-3">
          <span className="font-display font-semibold">{solution.objection.q}</span>
          <span className="text-ink-soft">{solution.objection.a}</span>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- process (the one deliberate dark section) ---------- */

const StepRail = observer(function StepRail() {
  return (
    <ol className="mt-12 hidden space-y-1 md:block" aria-label="Process steps">
      {process.steps.map((s, i) => {
        const active = ui.activeStep === i;
        return (
          <li key={s.n}>
            <a
              href={`#step-${s.n}`}
              className={`flex items-center gap-4 rounded-lg py-2 transition-colors duration-300 ${active ? "text-on-dark" : "text-on-dark-muted hover:text-on-dark"} ${ring} focus-visible:ring-offset-dark`}
            >
              <span className="relative h-px w-8 overflow-hidden bg-dark-line">
                <span className={`absolute inset-0 origin-left bg-accent transition-transform duration-500 ease-expo ${active ? "scale-x-100" : "scale-x-0"}`} />
              </span>
              <span className="font-mono text-xs tabular-nums">{s.n}</span>
              <span className="text-[15px]">{s.t}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
});

const Process = observer(function Process() {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start 0.6", "end 0.6"] });

  return (
    <section id="process" className="on-dark mx-2 rounded-[2.5rem] bg-dark py-28 text-on-dark md:mx-4 md:py-40">
      <div className={`${wrap} grid gap-14 md:grid-cols-12 md:gap-8 lg:gap-16`}>
        {/* Column is ~760px tall: only pin it when the viewport can show all of it. */}
        <div className="md:col-span-5 md:self-start md:[@media(min-height:56rem)]:sticky md:[@media(min-height:56rem)]:top-32">
          <Reveal>
            <p className={`${eyebrow} text-accent`}>{process.eyebrow}</p>
            <h2 className={`${h2} mt-5`}>{process.h2}</h2>
            <p className="mt-6 max-w-[44ch] text-pretty text-[17px] text-on-dark-muted">{process.sub}</p>
          </Reveal>
          <StepRail />
          <Reveal className="mt-12">
            <div className="rounded-[1.25rem] bg-dark-raised p-6 ring-1 ring-dark-line">
              <p className="font-display text-lg font-medium">Your part: three touchpoints</p>
              <ol className="mt-4 space-y-2.5">
                {process.touchpoints.map((t, i) => (
                  <li key={t} className="flex items-center gap-3 text-on-dark-muted">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15 font-mono text-[11px] text-accent">{i + 1}</span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div ref={track} className="relative md:col-span-7">
          <div className="absolute bottom-0 left-[1.1875rem] top-0 w-px bg-dark-line" aria-hidden="true">
            <motion.div style={{ scaleY: scrollYProgress }} className="absolute inset-0 origin-top bg-accent" />
          </div>

          {process.steps.map((s, i) => (
            <motion.article
              key={s.n}
              id={`step-${s.n}`}
              onViewportEnter={() => ui.setStep(i)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
              className={`relative scroll-mt-32 pb-20 pl-16 transition-opacity duration-500 ease-expo last:pb-0 md:min-h-[52vh] md:pb-24 ${ui.activeStep === i ? "opacity-100" : "md:opacity-40"}`}
            >
              <span className="absolute left-0 top-0 grid h-[2.375rem] w-[2.375rem] place-items-center rounded-full bg-dark font-mono text-xs text-on-dark ring-1 ring-dark-line">
                {s.n}
              </span>
              <Reveal>
                <p className="pt-2 font-mono text-sm text-accent">{s.q}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] md:text-[2.5rem] md:leading-[1.05]">{s.t}</h3>
                <p className="mt-5 max-w-[52ch] text-pretty text-[17px] leading-[1.65] text-on-dark-muted">{s.d}</p>
                <p className="mt-8 text-sm text-on-dark-muted">You get</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.out.map((o) => (
                    <li key={o} className="rounded-full px-3.5 py-1.5 text-sm text-on-dark ring-1 ring-dark-line">{o}</li>
                  ))}
                </ul>
              </Reveal>
            </motion.article>
          ))}
        </div>
      </div>

      <div className={`${wrap} mt-24 md:mt-32`}>
        <ul className="grid gap-10 border-t border-dark-line pt-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-dark-line">
          {process.why.map((w, i) => (
            <li key={w.t} className="lg:px-10 lg:first:pl-0 lg:last:pr-0">
              <Reveal delay={i * 0.07}>
                <h3 className="font-display text-xl font-medium tracking-[-0.02em]">{w.t}</h3>
                <p className="mt-2 text-pretty text-on-dark-muted">{w.d}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-16 flex justify-center">
          <BookCall size="lg" />
        </Reveal>
      </div>
    </section>
  );
});

/* ---------- value stack ---------- */

function ValueStack() {
  return (
    <section className="py-28 md:py-40">
      <div className={wrap}>
        <Reveal>
          <p className={`${eyebrow} text-accent-ink`}>{stack.eyebrow}</p>
          <h2 className={`${h2} mt-5 max-w-[18ch]`}>{stack.h2}</h2>
        </Reveal>

        <div className="mt-16">
          <div className="hidden grid-cols-[1.15fr_1.3fr_1fr] gap-8 pb-4 font-mono text-xs text-muted md:grid">
            <span>Component</span><span>What it does</span><span>Outcome</span>
          </div>
          <ul className="border-b border-line">
            {stack.rows.map((r, i) => (
              <li key={r.t} className="border-t border-line">
                <Reveal y={16} delay={i * 0.04} className="grid gap-2 py-6 md:grid-cols-[1.15fr_1.3fr_1fr] md:items-baseline md:gap-8">
                  <h3 className="flex items-baseline gap-4 font-display text-lg font-medium tracking-[-0.015em]">
                    <span className="font-mono text-xs text-muted tabular-nums">0{i + 1}</span>
                    {r.t}
                  </h3>
                  <p className="text-ink-soft md:pl-0 pl-9">{r.d}</p>
                  <p className="flex items-start gap-2 pl-9 font-medium md:pl-0">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-ink" />
                    {r.o}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16">
          <div className="rounded-[2rem] bg-ink/[0.035] p-2 ring-1 ring-ink/[0.06]">
            <div className="grid gap-8 rounded-[calc(2rem-0.5rem)] bg-ink p-8 text-on-dark md:grid-cols-[1fr_auto] md:items-center md:gap-16 md:p-14">
              <div>
                <h3 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">{stack.price.h}</h3>
                <p className="mt-4 max-w-[58ch] text-pretty text-on-dark-muted">{stack.price.d}</p>
              </div>
              <BookCall size="lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- proof + founder ---------- */

function Proof() {
  return (
    <section className="border-t border-line py-28 md:py-40">
      <div className={`${wrap} grid gap-16 md:grid-cols-12`}>
        <div className="md:col-span-7">
          <Reveal><h2 className={`${h2} max-w-[18ch]`}>{proof.h2}</h2></Reveal>
          <ol className="mt-14 space-y-10">
            {proof.points.map((p, i) => (
              <li key={p.t}>
                <Reveal delay={i * 0.07} className="grid grid-cols-[2.75rem_1fr] gap-x-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-on-accent"><Check className="h-4 w-4" /></span>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">{p.t}</h3>
                    <p className="mt-1.5 text-ink-soft">{p.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1} className="md:col-span-5 md:pt-4">
          <Shell>
            <figure className="p-8 md:p-10">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-putty ring-1 ring-ink/[0.06]">
                  <Image src="/umar.png" alt={`${SITE.founder}, founder of Fast Solutions`} fill sizes="64px" className="object-cover object-top" />
                </span>
                <figcaption>
                  <p className="font-display text-lg font-semibold tracking-[-0.015em]">{SITE.founder}</p>
                  <p className="text-sm text-muted">{proof.founder.role}</p>
                </figcaption>
              </div>
              <p className="mt-7 text-pretty leading-[1.7] text-ink-soft">{proof.founder.bio}</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 text-sm">
                {[["LinkedIn", SITE.linkedin], ["Instagram", SITE.instagram], ["WhatsApp", SITE.whatsapp], ["GitHub", SITE.github]].map(([l, h]) => (
                  <a key={l} href={h} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-1.5 rounded font-medium ${ring}`}>
                    {l}
                    <Arrow className="h-3 w-3 text-muted transition-transform duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </figure>
          </Shell>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- guarantee ---------- */

function Guarantee() {
  return (
    <section className="pb-28 md:pb-40">
      <div className={wrap}>
        <Reveal><h2 className={h2}>{guarantees.h2}</h2></Reveal>
        <Reveal delay={0.08} className="mt-12">
          <Shell>
            <ul className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {guarantees.list.map((g, i) => (
                <li key={g.t} className="p-8 md:p-10">
                  <span className="font-mono text-sm text-accent-ink tabular-nums">0{i + 1}</span>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.025em]">{g.t} guarantee</h3>
                  <p className="mt-3 text-pretty text-ink-soft">{g.d}</p>
                </li>
              ))}
            </ul>
          </Shell>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- objections + faq ---------- */

const Faq = observer(function Faq() {
  return (
    <ul className="border-t border-line">
      {faqs.map((f, i) => {
        const open = ui.openFaq === i;
        return (
          <li key={f.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={open}
                aria-controls={`faq-a-${i}`}
                onClick={() => ui.toggleFaq(i)}
                className={`flex w-full cursor-pointer items-center justify-between gap-6 rounded py-6 text-left font-display text-lg font-medium tracking-[-0.015em] md:text-xl ${ring}`}
              >
                {f.q}
                <span className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ring-line-strong transition-transform duration-300 ease-expo ${open ? "rotate-45" : ""}`} aria-hidden="true">
                  <span className="absolute h-px w-3 bg-ink" />
                  <span className="absolute h-3 w-px bg-ink" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-expo ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 text-pretty text-ink-soft">{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
});

function Questions() {
  return (
    <section id="faq" className="border-t border-line py-28 md:py-40">
      <div className={wrap}>
        <Reveal><h2 className={h2}>Still deciding?</h2></Reveal>
        <dl className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {objections.map((o, i) => (
            <Reveal key={o.q} delay={(i % 2) * 0.07}>
              <dt className="font-display text-xl font-medium tracking-[-0.02em]">&ldquo;{o.q}&rdquo;</dt>
              <dd className="mt-2 max-w-[52ch] text-pretty text-ink-soft">{o.a}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-28 grid gap-10 md:mt-36 md:grid-cols-12 md:gap-8 lg:gap-16">
          <Reveal className="md:sticky md:top-32 md:col-span-4 md:self-start">
            <h2 className={h2}>Questions, answered.</h2>
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-8"><Faq /></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- final cta ---------- */

function FinalCta() {
  return (
    <section className="border-t border-line py-28 md:py-44">
      <div className={`${wrap} flex flex-col items-center text-center`}>
        <Reveal>
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">{final.h2}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-[52ch] text-pretty text-[17px] text-ink-soft">{final.lead}</p>
          <ul className="mt-6 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-8">
            {final.list.map((l) => (
              <li key={l} className="flex items-center gap-2 font-medium">
                <Check className="h-4 w-4 text-accent-ink" />
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.14} className="mt-12 flex flex-col items-center">
          <BookCall size="lg" />
          <p className="mt-5 text-sm text-muted">{final.micro}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-[56ch] text-pretty text-ink-soft">{final.note}</p>
          <p className="mx-auto mt-3 max-w-[56ch] text-pretty text-sm text-muted">{final.urgency}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line pt-16">
      <div className={`${wrap} grid gap-10 md:grid-cols-12`}>
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-[38ch] text-pretty text-ink-soft">Websites, automation and custom software for local service businesses. Led by {SITE.founder}.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="font-display font-semibold">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map(([l, h]) => (
              <li key={h}><a href={h} className={`rounded text-ink-soft transition-colors duration-200 hover:text-ink ${ring}`}>{l}</a></li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="font-display font-semibold">Talk to us</p>
          <ul className="mt-4 space-y-2.5">
            {[[CTA.primary, SITE.cta], ["LinkedIn", SITE.linkedin], ["Instagram", SITE.instagram], ["WhatsApp", SITE.whatsapp]].map(([l, h]) => (
              <li key={l}><a href={h} target="_blank" rel="noopener noreferrer" className={`rounded text-ink-soft transition-colors duration-200 hover:text-ink ${ring}`}>{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <Reveal y={40} className="mt-20 select-none px-4 md:px-8" >
        <p aria-hidden="true" className="whitespace-nowrap text-center font-display text-[clamp(2rem,11vw,12rem)] font-bold leading-[0.82] tracking-[-0.055em] text-ink">
          Fast Solutions<span className="text-accent">.</span>
        </p>
      </Reveal>

      <div className={`${wrap} flex flex-col gap-2 border-t border-line py-6 text-sm text-muted md:flex-row md:justify-between`}>
        <p>&copy; {new Date().getFullYear()} Fast Solutions. All rights reserved.</p>
        <p>Fixed price · Design before code · You own everything</p>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */

export default function Landing() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <ScrollBar />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Problems />
        <Outcome />
        <Solution />
        <Process />
        <ValueStack />
        <Proof />
        <Guarantee />
        <Questions />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
