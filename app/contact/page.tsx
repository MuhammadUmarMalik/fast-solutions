import { ContactPage } from "@/components/Contact";
import { JsonLd, ORG, crumbs } from "@/components/JsonLd";
import { meta } from "@/lib/work";
import { SITE, contact } from "@/lib/content";

export const metadata = meta(contact.title, contact.description, "/contact");

export default function Page() {
  return (
    <>
      <JsonLd graph={[
        { "@type": "ContactPage", "@id": `${SITE.url}/contact#webpage`, url: `${SITE.url}/contact`, name: contact.title, description: contact.description, about: ORG },
        crumbs(["Contact", "/contact"]),
      ]} />
      <ContactPage />
    </>
  );
}
