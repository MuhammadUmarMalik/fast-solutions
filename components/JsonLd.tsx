import { SITE } from "@/lib/content";

/** Page-level structured data. Only describe what is visible on the page that renders it. */
export function JsonLd({ graph }: { graph: readonly object[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const ORG = { "@id": `${SITE.url}/#org` };

/** Breadcrumb trail. Home is implied: crumbs(["Case studies", "/work"], ["Rice mill ERP", "/work/rice-mill-erp"]). */
export const crumbs = (...trail: [name: string, path: string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"] as [string, string], ...trail].map(([name, path], i) => ({
    "@type": "ListItem", position: i + 1, name, item: `${SITE.url}${path === "/" ? "" : path}`,
  })),
});

export const faqPage = (faqs: readonly { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
