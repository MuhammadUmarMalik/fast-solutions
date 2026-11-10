"use client";
// Service and industry landing pages. Same Quiet Tech system as Landing.tsx and Work.tsx.
import Link from "next/link";
import { Frame, Reveal, BookCall, Ghost, WorkRows, wrap, h2, eyebrow, ring } from "./Landing";
import { CtaBand, h1 } from "./Work";
import { studies } from "@/lib/work";
import { topics, topicHref, type Topic } from "@/lib/pages";
import { CTA } from "@/lib/content";

const label = "font-display text-xl font-medium tracking-[-0.02em] text-ink-soft";

/** Native disclosure: no JS, and the answer text stays in the HTML for crawlers. */
export function FaqList({ faqs }: { faqs: readonly { q: string; a: string }[] }) {
  return (
    <ul className="border-t border-line">
      {faqs.map((f) => (
        <li key={f.q} className="border-b border-line">
          <details className="group">
            <summary className={`flex cursor-pointer list-none items-center justify-between gap-6 rounded py-6 [&::-webkit-details-marker]:hidden ${ring}`}>
              <h3 className="font-display text-lg font-medium tracking-[-0.015em] md:text-xl">{f.q}</h3>
              <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ring-line-strong transition-transform duration-300 ease-expo group-open:rotate-45" aria-hidden="true">
                <span className="absolute h-px w-3 bg-ink" />
                <span className="absolute h-3 w-px bg-ink" />
              </span>
            </summary>
            <p className="max-w-[62ch] pb-6 text-pretty text-ink-soft">{f.a}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

export function TopicPage({ topic: t }: { topic: Topic }) {
  const related = studies.filter((s) => t.studies.includes(s.slug));
  const others = topics.filter((o) => o.slug !== t.slug);

  return (
    <Frame>
      <article>
        <header className="pt-32 md:pt-40">
          <div className={wrap}>
            <Reveal>
              <p className={`${eyebrow} text-accent-ink`}>{t.eyebrow}</p>
              <h1 className={`${h1} mt-5 max-w-[20ch]`}>{t.h1}</h1>
              <p className="mt-7 max-w-[52ch] text-pretty text-[17px] leading-[1.6] text-ink-soft md:text-lg">{t.sub}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <BookCall size="lg" />
                <Ghost href="/contact">{CTA.audit}</Ghost>
              </div>
            </Reveal>
          </div>
        </header>

        {/* answer capsule: the whole page in one quotable paragraph */}
        <section className="py-24 md:py-32">
          <div className={wrap}>
            <Reveal>
              <h2 className={label}>In short</h2>
              <p className="mt-6 max-w-[40ch] font-display text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-[1.25] tracking-[-0.02em] text-pretty">{t.answer}</p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-line bg-surface py-24 md:py-32">
          <div className={`${wrap} grid gap-12 md:grid-cols-12 md:gap-8 lg:gap-16`}>
            <div className="md:sticky md:top-32 md:col-span-5 md:self-start">
              <Reveal><h2 className={h2}>What goes wrong</h2></Reveal>
            </div>
            <ul className="divide-y divide-line border-y border-line md:col-span-7">
              {t.problems.map((p, i) => (
                <li key={p.t}>
                  <Reveal delay={i * 0.05} className="py-8">
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em] md:text-2xl">{p.t}</h3>
                    <p className="mt-2 max-w-[56ch] text-pretty text-ink-soft">{p.d}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className={`${wrap} grid gap-12 md:grid-cols-12 md:gap-8 lg:gap-16`}>
            <div className="md:sticky md:top-32 md:col-span-5 md:self-start">
              <Reveal><h2 className={h2}>What we build</h2></Reveal>
            </div>
            <ol className="divide-y divide-line border-y border-line md:col-span-7">
              {t.build.map((f, i) => (
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

        {related.length > 0 && (
          <section className="border-t border-line py-24 md:py-32">
            <div className={wrap}>
              <Reveal><h2 className={h2}>Related work</h2></Reveal>
              <div className="mt-14"><WorkRows items={related} /></div>
            </div>
          </section>
        )}

        <section className="border-t border-line py-24 md:py-32">
          <div className={`${wrap} grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-16`}>
            <Reveal className="md:sticky md:top-32 md:col-span-4 md:self-start">
              <h2 className={h2}>Questions, answered.</h2>
            </Reveal>
            <Reveal delay={0.08} className="md:col-span-8"><FaqList faqs={t.faqs} /></Reveal>
          </div>
        </section>
      </article>

      <nav aria-label="More services and industries" className="pb-24 md:pb-32">
        <div className={wrap}>
          <h2 className={label}>More from Softex Solutions</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={topicHref(o)} className={`inline-flex rounded-full bg-surface px-4 py-2 text-[15px] ring-1 ring-line-strong transition-colors duration-200 hover:bg-putty ${ring}`}>{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CtaBand />
    </Frame>
  );
}
