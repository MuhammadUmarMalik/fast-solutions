import { SITE, lastmod } from "@/lib/content";
import { studies } from "@/lib/work";
import { topics, topicHref } from "@/lib/pages";

// Hand-written because Next 14's sitemap.ts drops <image:image> entries.
// lastmod comes from lib/content.ts (site-wide, home) and each Topic's `updated`. Bump those only when content really changes:
// a lastmod that moves on every build is ignored by Google.

export const dynamic = "force-static";

export function GET() {
  const page = (path: string, priority: number, images: string[] = [], date = lastmod.site) =>
    `<url><loc>${SITE.url}${path}</loc><lastmod>${date}</lastmod><priority>${priority}</priority>${images
      .map((src) => `<image:image><image:loc>${SITE.url}${src}</image:loc></image:image>`)
      .join("")}</url>`;

  const urls = [
    page("", 1, [], lastmod.home),
    ...topics.map((t) => page(topicHref(t), 0.9, [], t.updated)),
    page("/work", 0.8),
    // Image entries for our own screenshots only: remote stock covers aren't ours to index.
    ...studies.map((s) => page(`/work/${s.slug}`, 0.6, [s.img, ...(s.shots ?? []).map((x) => x.src)].filter((src) => src.startsWith("/")))),
    page("/contact", 0.5),
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls.join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
