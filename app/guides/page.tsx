import { GuidesIndex } from "@/components/Topic";
import { JsonLd, crumbs } from "@/components/JsonLd";
import { guidesHub, inGroup, topicHref } from "@/lib/pages";
import { meta } from "@/lib/work";
import { SITE } from "@/lib/content";

export const metadata = meta(guidesHub.title, guidesHub.description, "/guides");

export default function Page() {
  return (
    <>
      <JsonLd graph={[
        { "@type": "CollectionPage", "@id": `${SITE.url}/guides#webpage`, url: `${SITE.url}/guides`, name: guidesHub.title, description: guidesHub.description,
          mainEntity: { "@type": "ItemList", itemListElement: inGroup("guides").map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.title, url: `${SITE.url}${topicHref(g)}` })) } },
        crumbs(["Guides", "/guides"]),
      ]} />
      <GuidesIndex />
    </>
  );
}
