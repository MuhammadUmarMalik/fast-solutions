import { WorkIndex } from "@/components/Work";
import { JsonLd, crumbs } from "@/components/JsonLd";
import { work, studies, meta } from "@/lib/work";
import { SITE } from "@/lib/content";

export const metadata = meta(work.index.title, work.index.sub, "/work");

export default function Page() {
  return (
    <>
      <JsonLd graph={[
        { "@type": "CollectionPage", "@id": `${SITE.url}/work#webpage`, url: `${SITE.url}/work`, name: work.index.title, description: work.index.sub,
          mainEntity: { "@type": "ItemList", itemListElement: studies.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${SITE.url}/work/${s.slug}` })) } },
        crumbs(["Case studies", "/work"]),
      ]} />
      <WorkIndex />
    </>
  );
}
