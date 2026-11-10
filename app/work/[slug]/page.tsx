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
  return s ? meta(s.name, s.sub, `/work/${s.slug}`, s.img) : {};
}

export default function Page({ params }: Props) {
  const s = byId(params.slug);
  if (!s) notFound();
  const url = `${SITE.url}/work/${s.slug}`;
  return (
    <>
      <JsonLd graph={[
        { "@type": "Article", "@id": `${url}#article`, headline: s.name, alternativeHeadline: s.h1, description: s.sub, image: s.img, url,
          mainEntityOfPage: url, author: ORG, publisher: ORG, articleSection: s.industry, keywords: s.tech.join(", "), inLanguage: "en" },
        crumbs(["Case studies", "/work"], [s.name, `/work/${s.slug}`]),
      ]} />
      <CaseStudy study={s} />
    </>
  );
}
