import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SITE, faqs, process, answer, keywords, solution } from "@/lib/content";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"], display: "swap", weight: ["400", "500", "600", "700", "800"] });
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap", weight: ["400", "500"] });

const title = "Softex Solutions | Websites & Automation for Local Businesses";
const description = "Fast Next.js websites, local SEO, automation and custom software for local service businesses. Fixed price, design approved first, live in 12-22 days.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url), title, description, keywords,
  authors: [{ name: SITE.founder, url: SITE.linkedin }], creator: SITE.founder, category: "technology",
  alternates: { canonical: "/" },
  openGraph: { title, description, url: SITE.url, siteName: SITE.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { themeColor: "#f6f5ee" };

const org = `${SITE.url}/#org`;
const person = `${SITE.url}/#founder`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": org }, inLanguage: "en" },
    { "@type": "WebPage", "@id": `${SITE.url}/#webpage`, url: SITE.url, name: title, description, isPartOf: { "@id": `${SITE.url}/#website` }, about: { "@id": org }, inLanguage: "en",
      primaryImageOfPage: `${SITE.url}/opengraph-image` },
    { "@type": ["Organization", "ProfessionalService"], "@id": org, name: SITE.name, url: SITE.url, description: answer.a,
      logo: `${SITE.url}/apple-icon`, image: `${SITE.url}/opengraph-image`, telephone: SITE.phone, priceRange: "$$",
      address: { "@type": "PostalAddress", addressCountry: SITE.country },
      contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: SITE.phone, url: SITE.cta, availableLanguage: "English" },
      founder: { "@id": person }, sameAs: [SITE.linkedin, SITE.instagram, SITE.github], areaServed: "Worldwide", knowsAbout: keywords,
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Services",
        itemListElement: solution.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.t, description: s.d, provider: { "@id": org } } })) } },
    { "@type": "Person", "@id": person, name: SITE.founder, jobTitle: "Software Engineer & Designer", image: `${SITE.url}/umar.png`,
      worksFor: { "@id": org }, sameAs: [SITE.linkedin, SITE.github, SITE.instagram] },
    { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "HowTo", name: "How a Softex Solutions project runs, from audit to launch", totalTime: "P22D",
      step: process.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.t, text: s.d })) },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
