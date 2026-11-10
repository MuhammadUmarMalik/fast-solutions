// /llms-full.txt: the whole site as plain markdown for AI crawlers. Generated from the same data as the pages, so it can't drift.
import { SITE, answer, solution, process, stack, guarantees, faqs } from "@/lib/content";
import { studies } from "@/lib/work";
import { topics, topicHref } from "@/lib/pages";

export const dynamic = "force-static";

const list = (items: readonly { t: string; d: string }[]) => items.map((i) => `- ${i.t}: ${i.d}`).join("\n");
const qa = (items: readonly { q: string; a: string }[]) => items.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

export function GET() {
  const body = [
    `# ${SITE.name}`,
    `> ${answer.a}`,
    `Founder: ${SITE.founder}. Works remotely with clients worldwide.\nWebsite: ${SITE.url}\nBook a free 30-minute discovery call: ${SITE.cta}\nWhatsApp: ${SITE.whatsapp}`,

    `## Services\n${list(solution.services)}`,
    `## Process: ${process.h2}\n${process.steps.map((s) => `${s.n}. ${s.t}: ${s.d} Deliverables: ${s.out.join(", ")}.`).join("\n")}`,
    `## What every project includes\n${stack.rows.map((r) => `- ${r.t}: ${r.d}. ${r.o}`).join("\n")}`,
    `## Pricing\n${stack.price.h} ${stack.price.d}`,
    `## Guarantees\n${list(guarantees.list)}`,

    ...topics.map((t) => [
      `## ${t.title}\nURL: ${SITE.url}${topicHref(t)}\n\n${t.answer}`,
      `Problems it solves:\n${list(t.problems)}`,
      `What is built:\n${list(t.build)}`,
      qa(t.faqs),
    ].join("\n\n")),

    `## Case studies`,
    ...studies.map((s) => [
      `### ${s.name}\nURL: ${SITE.url}/work/${s.slug}\nType: ${s.kind}. Industry: ${s.industry}. Client: ${s.client}.${s.timeline ? ` Timeline: ${s.timeline}.` : ""} Role: ${s.role}.`,
      `Problem: ${s.problem}`,
      `Solution:\n${list(s.solution)}`,
      `Results:\n${s.results.map((r) => `- ${r}`).join("\n")}`,
      `Tech stack: ${s.tech.join(", ")}`,
    ].join("\n\n")),

    `## Frequently asked questions\n\n${qa(faqs)}`,
  ].join("\n\n");

  return new Response(body + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
