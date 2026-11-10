import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { studies } from "@/lib/work";
import { topics, topicHref } from "@/lib/pages";

// Bump when page content actually changes. A lastmod that moves on every build is ignored by Google.
const lastModified = "2026-11-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number) => ({ url: `${SITE.url}${path}`, lastModified, priority });
  return [
    page("", 1),
    ...topics.map((t) => page(topicHref(t), 0.9)),
    page("/work", 0.8),
    ...studies.map((s) => page(`/work/${s.slug}`, 0.6)),
    page("/contact", 0.5),
  ];
}
