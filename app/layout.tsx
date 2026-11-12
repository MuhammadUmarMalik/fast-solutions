import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SITE, seo, answer, keywords, solution } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700", "800"] });
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: ["400", "500"] });

const { title, description } = seo;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url), title: { default: title, template: `%s | ${SITE.name}` }, description, keywords,
  authors: [{ name: SITE.founder, url: SITE.linkedin }], creator: SITE.founder, category: "technology",
  // No canonical here: a layout-level canonical would point every route at the home page. Each page sets its own.
  openGraph: { title, description, url: SITE.url, siteName: SITE.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { themeColor: "#f6f5ee" };

const org = `${SITE.url}/#org`;
const person = `${SITE.url}/#founder`;
// Site-wide entities only (who we are). Page-specific markup is emitted by each page via <JsonLd />.
const graph = [
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": org }, inLanguage: "en" },
    { "@type": ["Organization", "ProfessionalService"], "@id": org, name: SITE.name, url: SITE.url, description: answer.a,
      logo: `${SITE.url}/apple-icon`, image: `${SITE.url}/opengraph-image`, telephone: SITE.phone, priceRange: "$$",
      address: { "@type": "PostalAddress", addressCountry: SITE.country },
      contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: SITE.phone, url: `${SITE.url}/contact`, availableLanguage: "English" },
      founder: { "@id": person }, sameAs: [SITE.linkedin, SITE.instagram, SITE.github], areaServed: "Worldwide", knowsAbout: keywords,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Services",
        itemListElement: solution.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.t, description: s.d, url: `${SITE.url}${s.href}`, provider: { "@id": org } } })) } },
    { "@type": "Person", "@id": person, name: SITE.founder, jobTitle: "Software Engineer & Designer", image: `${SITE.url}/umar.webp`,
      worksFor: { "@id": org }, sameAs: [SITE.linkedin, SITE.github, SITE.instagram] },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <JsonLd graph={graph} />
        {children}
      </body>
    </html>
  );
}
