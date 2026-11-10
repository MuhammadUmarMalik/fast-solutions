"use client";
// Premium family: Quiet Tech, the same system as Landing.tsx. Plaster ground, soot ink, one cobalt accent.
// Radius system: pill buttons and chips, 28px enclosures with concentric cores.
// Theme lock: light page with one deliberate soot section (the results), mirroring the home page.
import Image from "next/image";
import Link from "next/link";
import { Frame, Reveal, Shell, BookCall, Arrow, Check, WorkRows, wrap, h2, eyebrow, ring } from "./Landing";
import { studies, work, type Study } from "@/lib/work";

export const h1 = "font-display text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance";

/** Closing band: one question, one CTA. Same ink enclosure as the price band on the home page. */
export function CtaBand() {
  return (
    <section className="pb-24 md:pb-32">
      <div className={wrap}>
        <Reveal>
          <div className="rounded-[2rem] bg-ink/[0.035] p-2 ring-1 ring-ink/[0.06]">
            <div className="grid gap-8 rounded-[calc(2rem-0.5rem)] bg-ink p-8 text-on-dark md:grid-cols-[1fr_auto] md:items-center md:gap-16 md:p-14">
              <h2 className="max-w-[24ch] font-display text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">{work.cta}</h2>
              <BookCall size="lg" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WorkIndex() {
  return (
    <Frame>
      <section className="pb-24 pt-36 md:pb-32 md:pt-44">
        <div className={wrap}>
          <Reveal>
            <h1 className={`${h1} max-w-[18ch]`}>{work.index.h1}</h1>
            <p className="mt-7 max-w-[56ch] text-pretty text-[17px] leading-[1.6] text-ink-soft md:text-lg">{work.index.sub}</p>
          </Reveal>
          <div className="mt-16 md:mt-20"><WorkRows items={studies} /></div>
        </div>
      </section>
      <CtaBand />
    </Frame>
  );
}

export function CaseStudy({ study: s }: { study: Study }) {
  const next = studies[(studies.findIndex((x) => x.slug === s.slug) + 1) % studies.length];
  const facts = [["Client", s.client], ["Timeline", s.timeline], ["Role", s.role], ["Type", s.kind]].filter((f): f is [string, string] => Boolean(f[1]));

  return (
    <Frame>
      <article>
        {/* hero */}
        <header className="pt-32 md:pt-40">
          <div className={wrap}>
            <Reveal>
              <Link href="/work" className={`group inline-flex h-11 items-center gap-2 rounded-full text-sm text-ink-soft transition-colors duration-200 hover:text-ink ${ring}`}>
                <Arrow className="h-3 w-3 -rotate-[135deg] transition-transform duration-300 ease-expo group-hover:-translate-x-0.5" />
                {work.all}
              </Link>
              <p className={`${eyebrow} mt-8 text-accent-ink`}>{s.industry}</p>
              <h1 className={`${h1} mt-5 max-w-[20ch]`}>{s.h1}</h1>
              <p className="mt-7 max-w-[52ch] text-pretty text-[17px] leading-[1.6] text-ink-soft md:text-lg">{s.sub}</p>
              <div className="mt-9"><BookCall size="lg" /></div>
            </Reveal>

            <Reveal delay={0.12} className="mt-14 md:mt-20">
              <Shell core="bg-putty">
                <div className="relative aspect-[4/3] md:aspect-[21/9]">
                  <Image src={s.img} alt={s.alt} fill priority sizes="(min-width: 1240px) 1108px, 100vw" className="object-cover" />
                </div>
              </Shell>
            </Reveal>

            {/* facts: one column on phones, two from sm, a single row from lg */}
            <dl className="mt-10 grid gap-x-10 gap-y-6 border-b border-line pb-10 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="mt-1.5 text-pretty font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* problem: a single statement, type does the work */}
        <section className="py-24 md:py-32">
          <div className={wrap}>
            <Reveal>
              <h2 className="font-display text-xl font-medium tracking-[-0.02em] text-ink-soft">The problem</h2>
              <p className="mt-6 max-w-[34ch] font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.025em] text-pretty">{s.problem}</p>
            </Reveal>
          </div>
        </section>

        {/* solution: sticky heading, hairline list. Stacks below md. */}
        <section className="border-y border-line bg-surface py-24 md:py-32">
          <div className={`${wrap} grid gap-12 md:grid-cols-12 md:gap-8 lg:gap-16`}>
            <div className="md:sticky md:top-32 md:col-span-5 md:self-start">
              <Reveal><h2 className={h2}>What we built</h2></Reveal>
            </div>
            <ol className="divide-y divide-line border-y border-line md:col-span-7">
              {s.solution.map((f, i) => (
                <li key={f.t}>
                  <Reveal delay={i * 0.05} className="grid grid-cols-[2.75rem_1fr] gap-x-4 py-8">
                    <span className="pt-1 font-mono text-sm text-muted tabular-nums">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">{f.t}</h3>
                      <p className="mt-2 max-w-[56ch] text-pretty text-ink-soft">{f.d}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* results: the one deliberate dark section */}
        <section className="on-dark mx-2 mt-24 rounded-[2.5rem] bg-dark py-24 text-on-dark md:mx-4 md:mt-32 md:py-32">
          <div className={wrap}>
            <Reveal><h2 className={h2}>The results</h2></Reveal>
            <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
              {s.results.map((r, i) => (
                <li key={r} className="border-t border-dark-line">
                  <Reveal delay={(i % 2) * 0.07} className="flex gap-4 py-8">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent"><Check className="h-3.5 w-3.5" /></span>
                    <p className="font-display text-xl font-medium leading-[1.25] tracking-[-0.02em] text-pretty md:text-2xl">{r}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* stack */}
        <section className="py-24 md:py-32">
          <div className={wrap}>
            <Reveal>
              <h2 className="font-display text-xl font-medium tracking-[-0.02em] text-ink-soft">Built with</h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tech.map((t) => (
                  <li key={t} className="rounded-full bg-surface px-4 py-2 text-[15px] ring-1 ring-line-strong">{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </article>

      <section aria-label="Next case study" className="pb-24 md:pb-32">
        <div className={wrap}>
          <h2 className="pb-6 font-display text-xl font-medium tracking-[-0.02em] text-ink-soft">Next case study</h2>
          <WorkRows items={[next]} />
        </div>
      </section>

      <CtaBand />
    </Frame>
  );
}
