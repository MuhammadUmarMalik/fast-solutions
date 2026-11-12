// Service and industry landing pages: /services/{slug} and /industries/{slug}. Content lives in lib/pages.ts.
import { notFound } from "next/navigation";
import { TopicPage } from "@/components/Topic";
import { JsonLd, ORG, crumbs, faqPage } from "@/components/JsonLd";
import { topics, topicBy, topicHref } from "@/lib/pages";
import { meta } from "@/lib/work";
import { SITE } from "@/lib/content";

type Props = { params: Promise<{ group: string; slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => topics.map((t) => ({ group: t.group, slug: t.slug }));

export async function generateMetadata({ params }: Props) {
  const { group, slug } = await params;
  const t = topicBy(group, slug);
  return t ? meta(t.title, t.description, topicHref(t)) : {};
}

export default async function Page({ params }: Props) {
  const { group, slug } = await params;
  const t = topicBy(group, slug);
  if (!t) notFound();
  const url = `${SITE.url}${topicHref(t)}`;
  return (
    <>
      <JsonLd graph={[
        { "@type": "Service", "@id": `${url}#service`, name: t.title, serviceType: t.name, description: t.answer, url, provider: ORG, areaServed: "Worldwide" },
        faqPage(t.faqs),
        crumbs([t.name, topicHref(t)]),
      ]} />
      <TopicPage topic={t} />
    </>
  );
}
