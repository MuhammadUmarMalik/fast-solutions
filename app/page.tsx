import type { Metadata } from "next";
import Landing from "@/components/Landing";
import { JsonLd, ORG, faqPage } from "@/components/JsonLd";
import { SITE, seo, faqs, process } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// FAQ and HowTo markup live here, not in the layout: they describe content that is only visible on the home page.
export default function Page() {
  return (
    <>
      <JsonLd graph={[
        { "@type": "WebPage", "@id": `${SITE.url}/#webpage`, url: SITE.url, name: seo.title, description: seo.description,
          isPartOf: { "@id": `${SITE.url}/#website` }, about: ORG, inLanguage: "en", primaryImageOfPage: `${SITE.url}/opengraph-image` },
        faqPage(faqs),
        { "@type": "HowTo", name: "How a Softex Solutions project runs, from audit to launch", totalTime: "P22D",
          step: process.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
      ]} />
      <Landing />
    </>
  );
}
