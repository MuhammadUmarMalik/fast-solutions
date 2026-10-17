# SEO, AEO and GEO: what's in code, what's on you

## In code (done)
- Title (59 chars), description (154), canonical, OG/Twitter card with generated image (`app/opengraph-image.tsx`), favicon (`app/icon.svg`)
- `sitemap.xml` (`app/sitemap.ts`), `robots.txt` explicitly allowing AI crawlers, `llms.txt` with services, process and facts
- JSON-LD graph: WebSite, WebPage, Organization+ProfessionalService (services catalog, phone, sameAs), Person (founder), FAQPage, HowTo
- AEO: "What is Fast Solutions?", pricing, SEO and audience answers added as visible FAQs (same text feeds the schema)

## Do this week (fastest wins)
1. Deploy, then Google Search Console: verify domain, submit `/sitemap.xml`, request indexing. Same in Bing Webmaster Tools (feeds ChatGPT search and Copilot).
2. Validate: search.google.com/test/rich-results and validator.schema.org.
3. Google Business Profile: create as a service-area business (hide address), category "Website designer", add services, photos, the Calendly link. Then put the city in `SITE` and `address.addressLocality` in `app/layout.tsx` so the site and GBP match exactly.
4. PageSpeed Insights: aim for green Core Web Vitals on mobile. `public/umar.png` is 1.7 MB; next/image resizes it, but compress the source anyway.

## Off-page and local (ongoing)
- Same name, phone and URL everywhere (NAP consistency): LinkedIn company page, Instagram bio, GitHub profile, Clutch, GoodFirms, DesignRush, Upwork/Fiverr, Crunchbase, Bing Places, Apple Business Connect.
- Reviews: ask every client for a Google review and a Clutch review. Reviews drive the local map pack and LLM recommendations most.
- Backlinks: case studies on client sites ("Website by Fast Solutions" footer link), guest posts on small-business blogs, HARO/Qwoted/Featured answers, local business associations.

## GEO (getting cited by ChatGPT, Perplexity, Gemini, Claude)
- LLMs cite what third parties say: Clutch/G2-style listings, Reddit and Quora answers (r/smallbusiness, r/webdev), LinkedIn articles, YouTube.
- Keep a consistent one-line entity description everywhere: "Fast Solutions, led by Muhammad Umar Malik, builds fast websites, automation and custom software for local service businesses."
- Check monthly: ask each assistant "best web developer for local service businesses" and "who is Fast Solutions umarmalik-dev" and note whether you appear.

## Next on-page step when you want more traffic
One page ranks for one intent. Add pages per service ("website for dental clinics", "contractor website") and short case studies with real numbers. Each new page: add it to `app/sitemap.ts` and `public/llms.txt`.
