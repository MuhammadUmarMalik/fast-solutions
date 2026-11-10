"use client";
import { Frame, Reveal, BookCall, Arrow, Check, wrap, eyebrow, ring } from "./Landing";
import { h1 } from "./Work";
import { SITE, contact } from "@/lib/content";

const field = `mt-2 w-full rounded-2xl bg-surface px-4 py-3 text-[16px] ring-1 ring-line-strong placeholder:text-muted ${ring}`;

// ponytail: no backend. The form opens WhatsApp with the message pre-filled, so the lead arrives on the owner's phone.
// Swap for a POST to an email/CRM endpoint when leads need to be stored or the visitor has no WhatsApp.
function send(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const text = [
    `Hi, I'm ${f.get("name")}.`,
    `Website: ${f.get("website") || "none yet"}`,
    `Biggest problem: ${f.get("problem")}`,
    f.get("details") && `Details: ${f.get("details")}`,
  ].filter(Boolean).join("\n");
  window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

export function ContactPage() {
  return (
    <Frame>
      <section className="pb-24 pt-32 md:pb-32 md:pt-40">
        <div className={`${wrap} grid gap-14 md:grid-cols-12 md:gap-8 lg:gap-16`}>
          <Reveal className="md:col-span-6">
            <p className={`${eyebrow} text-accent-ink`}>{contact.eyebrow}</p>
            <h1 className={`${h1} mt-5 max-w-[14ch]`}>{contact.h1}</h1>
            <p className="mt-7 max-w-[48ch] text-pretty text-[17px] leading-[1.6] text-ink-soft md:text-lg">{contact.sub}</p>
            <ul className="mt-8 space-y-3">
              {contact.list.map((l) => (
                <li key={l} className="flex items-center gap-2 font-medium"><Check className="h-4 w-4 shrink-0 text-accent-ink" />{l}</li>
              ))}
            </ul>
            <div className="mt-12 border-t border-line pt-8">
              <p className="max-w-[44ch] text-pretty text-ink-soft">{contact.call}</p>
              <div className="mt-5"><BookCall /></div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6">
            <form onSubmit={send} className="rounded-[1.75rem] bg-bg p-7 ring-1 ring-line-strong md:p-9">
              <label className="block font-medium">
                Your name
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="mt-5 block font-medium">
                Current website
                <input name="website" inputMode="url" autoComplete="url" placeholder="yourbusiness.com, or leave empty" className={field} />
              </label>
              <label className="mt-5 block font-medium">
                Biggest problem right now
                <select name="problem" className={field}>
                  {contact.problems.map((p) => <option key={p}>{p}</option>)}
                </select>
              </label>
              <label className="mt-5 block font-medium">
                Anything else? <span className="font-normal text-muted">(optional)</span>
                <textarea name="details" rows={3} className={field} />
              </label>
              <button type="submit" className={`group mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-ink text-base font-medium text-bg transition-transform duration-300 ease-expo hover:-translate-y-px active:scale-[0.98] ${ring}`}>
                {contact.submit}
                <Arrow className="h-3.5 w-3.5 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <p className="mt-4 text-center text-sm text-muted">{contact.micro}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </Frame>
  );
}
