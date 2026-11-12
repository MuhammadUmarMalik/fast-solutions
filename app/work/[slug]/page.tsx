import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/Work";
import { JsonLd, ORG, crumbs } from "@/components/JsonLd";
import { studies, byId, meta } from "@/lib/work";
import { SITE } from "@/lib/content";

type Props = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => studies.map((s) => ({ slug: s.slug }));

export function generateMetadata({ params }: Props) {
  const s = byId(params.slug);
  return s ? meta(s.name, s.sub, `/work/${s.slug}`, { url: s.img, alt: s.alt }) : {};
}

export default function Page({ params }: Props) {
  const s = byId(params.slug);
  if (!s) notFound();
  const url = `${SITE.url}/work/${s.slug}`;
  // Cover first, then the extra screens. Captions reuse the alt text so Google Images gets the same description as screen readers.
  const images = [{ src: s.img, alt: s.alt }, ...(s.shots ?? [])].map((i) => ({ "@type": "ImageObject", contentUrl: new URL(i.src, SITE.url).href, caption: i.alt }));
  return (
    <>
      <JsonLd graph={[
        { "@type": "Article", "@id": `${url}#article`, headline: s.name, alternativeHeadline: s.h1, description: s.sub, image: images, url, ...(s.url && { about: { "@type": "WebSite", url: s.url } }),
          mainEntityOfPage: url, author: ORG, publisher: ORG, articleSection: s.industry, keywords: s.tech.join(", "), inLanguage: "en" },
        crumbs(["Case studies", "/work"], [s.name, `/work/${s.slug}`]),
      ]} />
      <CaseStudy study={s} />
    </>
  );
}
