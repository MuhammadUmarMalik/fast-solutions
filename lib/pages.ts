// Service and industry landing pages. One entry = one indexable page at /{group}/{slug}.
// Rules: no invented clients or numbers. Proof comes from the case studies listed in `studies` (slugs from lib/work.ts).

export type Topic = {
  group: "services" | "industries";
  slug: string;
  name: string; // short label for links
  title: string; // <title>, the layout appends " | Softex Solutions"
  description: string;
  eyebrow: string;
  h1: string;
  sub: string;
  answer: string; // answer capsule: the page in one quotable paragraph
  problems: { t: string; d: string }[];
  build: { t: string; d: string }[];
  faqs: { q: string; a: string }[];
  studies: string[];
};

export const topics: Topic[] = [
  {
    group: "services",
    slug: "web-design-development",
    name: "Web design and development",
    title: "Web Design & Development for Local Businesses",
    description: "Custom Next.js websites for local service businesses: fast on mobile and built to turn visitors into calls and bookings. Fixed price, live in 12-22 days.",
    eyebrow: "Web design and development",
    h1: "Web design for local businesses that brings in calls.",
    sub: "Custom Next.js websites, designed around one job: turning the people who find you into calls, bookings and quote requests.",
    answer: "Softex Solutions designs and builds custom Next.js websites for local service businesses. Every site is built for mobile speed, clear calls to action and local search, at one fixed price agreed before work starts. You approve the full design before any code is written, most websites go live in 12 to 22 days, and you own 100% of the code and design files.",
    problems: [
      { t: "The site is slow on phones.", d: "Most local searches happen on a phone. If the page takes seconds to appear, the visitor is already calling someone else." },
      { t: "There's no clear next step.", d: "Visitors land, can't find the phone number or the book button, and leave without a trace." },
      { t: "It looks like a template.", d: "A dated or generic site makes a trusted business look like a risky one." },
      { t: "You can't change or move it.", d: "The site is locked to a builder subscription or an agency's hosting, so every edit costs time or money." },
    ],
    build: [
      { t: "Design approved before code", d: "You see the full mobile and desktop design and sign it off first. Revision rounds are included." },
      { t: "Built in Next.js for speed", d: "Pre-rendered pages and optimised images, so the site loads fast on real phones. Our last landing page scores 90+ on PageSpeed." },
      { t: "A clear path to contact", d: "Click-to-call, booking flows and short quote forms placed where visitors decide." },
      { t: "SEO foundation included", d: "Clean page structure, metadata, structured data and a sitemap, so Google and AI assistants understand what you do and where." },
      { t: "Full handover", d: "Source code, design files, credentials and docs. No lock-in, host it anywhere." },
    ],
    faqs: [
      { q: "How much does a website for a local business cost?", a: "Every project has one fixed price, agreed on a free 30-minute discovery call before any work starts. The price depends on scope: fixing an existing site costs less than a full rebuild. There is no hourly billing." },
      { q: "How long does it take to build a website?", a: "Most websites take 12 to 22 days: discovery and plan 2 to 4 days, design 3 to 5, build 5 to 10, launch 2 to 3." },
      { q: "Why Next.js instead of WordPress, Wix or Squarespace?", a: "Next.js serves pre-rendered pages and optimised images without plugin overhead, which keeps the site fast on phones. You also own the code and can host it anywhere, instead of renting a site builder subscription." },
      { q: "Can you redesign my existing website?", a: "Yes. We audit it first. Sometimes it needs a fix, not a rebuild, and we'll tell you which." },
    ],
    studies: ["bathroom-remodeling-landing-page", "devzoo-agency-website"],
  },
  {
    group: "services",
    slug: "local-seo-ai-visibility",
    name: "Local SEO and AI visibility",
    title: "Local SEO & AI Search Visibility",
    description: "Technical SEO, structured data, service-area pages and AI-search readiness for local service businesses, so customers find you on Google and in AI answers.",
    eyebrow: "Local SEO and AI visibility",
    h1: "Get found on Google and in AI answers.",
    sub: "The technical foundation that helps a local business show up when someone nearby searches for what it does, on Google and in ChatGPT, Perplexity and Gemini.",
    answer: "Softex Solutions builds the technical SEO foundation for local service businesses: fast pages, clean structure, schema.org structured data, service and service-area pages, and content written so both Google and AI assistants such as ChatGPT, Perplexity and Gemini can understand and cite the business. It is included in every website build and available as a fix for an existing site.",
    problems: [
      { t: "Competitors show up first.", d: "Someone searches for your service near them and the business down the street gets the call." },
      { t: "One page tries to rank for everything.", d: "A single home page can't answer every service and every area you cover, so it ranks for none of them." },
      { t: "Search engines can't read the site.", d: "Missing titles, no structured data and slow pages leave Google guessing what you do and where." },
      { t: "AI assistants don't mention you.", d: "More people ask ChatGPT or Gemini for a recommendation. If your site doesn't state clear facts, you aren't in the answer." },
    ],
    build: [
      { t: "Technical SEO", d: "Titles, descriptions, canonical URLs, a sitemap, clean headings and internal links on every page." },
      { t: "Structured data", d: "schema.org markup for your business, services and FAQs, matched to what's visible on the page." },
      { t: "Service and service-area pages", d: "A dedicated page for each service and each area you cover, so every search has a page that answers it." },
      { t: "Speed and Core Web Vitals", d: "Fast loading on mobile, which both visitors and Google reward." },
      { t: "AI-search readiness", d: "Answer-first copy, plain facts, an llms.txt file and open access for AI crawlers, so assistants can quote you accurately." },
      { t: "Consistent business details", d: "The same name, address and phone on your site as on your Google Business Profile and directories." },
    ],
    faqs: [
      { q: "What is local SEO?", a: "Local SEO is the work that helps a business appear when people nearby search for its service, in Google's map results and in the regular results below them. It combines a fast, well-structured website, pages for each service and area, consistent business details and a complete Google Business Profile." },
      { q: "What is AI search optimization (AEO or GEO)?", a: "Answer engine optimization (AEO) and generative engine optimization (GEO) mean making a site easy for AI assistants such as ChatGPT, Perplexity and Gemini to read, trust and cite. In practice that is clear factual copy, question-and-answer content, structured data and allowing AI crawlers to access the site." },
      { q: "How long does SEO take to work?", a: "Technical fixes take effect once Google recrawls the site, usually within days to weeks. Ranking for competitive local searches typically takes a few months and also depends on competition, reviews and your Google Business Profile. We don't guarantee positions, because nobody honestly can." },
      { q: "Do I need a new website for SEO?", a: "Not always. We audit the current site first. If the foundation is sound we fix it. If it is slow or locked into a builder, a rebuild is usually cheaper than patching." },
    ],
    studies: ["bathroom-remodeling-landing-page"],
  },
  {
    group: "services",
    slug: "business-automation",
    name: "Business automation",
    title: "Business Automation for Small Businesses",
    description: "Automate lead capture, follow-ups, reminders and reporting for a small service business. Scoped to your workflow, at one fixed price.",
    eyebrow: "Business automation",
    h1: "Automate the follow-ups, reminders and reports.",
    sub: "We find the manual work that eats your week, then build the automations and tools that do it for you.",
    answer: "Softex Solutions automates repetitive work for small service businesses: capturing leads in one place, sending follow-ups and reminders, routing enquiries to the right person and producing reports without manual data entry. Each project starts with an audit of the current workflow and is delivered at one fixed price.",
    problems: [
      { t: "Leads live in five places.", d: "Calls, forms, WhatsApp and email each hold a piece, and some enquiries never get an answer." },
      { t: "Follow-ups depend on memory.", d: "The quote went out, nobody chased it, and the job went to whoever called back first." },
      { t: "The same report, rebuilt every week.", d: "Hours go into copying numbers between spreadsheets instead of paid work." },
      { t: "Closing the books takes days.", d: "Paper registers and manual totals make every day-end and month-end slow and error-prone." },
    ],
    build: [
      { t: "Leads in one place", d: "Every enquiry from the website lands in a single list with its source and status." },
      { t: "Automatic follow-ups", d: "Confirmations and follow-up messages go out on their own, so no lead waits on a busy day." },
      { t: "Reminders", d: "Appointment and payment reminders that cut no-shows and late payments." },
      { t: "Lead routing", d: "Enquiries go straight to the right person, with the details they need." },
      { t: "Reports that build themselves", d: "Sales, stock and outstanding balances calculated live instead of typed up by hand." },
    ],
    faqs: [
      { q: "What can a small business automate?", a: "The most common wins are lead capture, quote and booking follow-ups, appointment reminders, invoicing and payment reminders, and recurring reports. If a task is repeated the same way every week, it can usually be automated." },
      { q: "Do I have to replace the tools I already use?", a: "No. We audit what you have first and connect or extend it where that is the cheaper fix. We only build something new when existing tools don't fit." },
      { q: "How is automation priced?", a: "One fixed price, agreed before work starts, based on the workflows we agree to automate. No hourly billing." },
    ],
    studies: ["rice-mill-erp", "oil-agency-pos"],
  },
  {
    group: "services",
    slug: "custom-software",
    name: "Custom software, ERP and POS",
    title: "Custom Software, ERP & POS Development",
    description: "Custom ERP, POS, booking and accounting software for small businesses, including offline-first desktop apps. Fixed price, full code ownership.",
    eyebrow: "Custom software",
    h1: "Custom software built around how you work.",
    sub: "ERP, POS, booking and accounting systems for businesses that have outgrown paper registers and off-the-shelf tools.",
    answer: "Softex Solutions builds custom business software for small and mid-sized companies: ERP and accounting systems, point-of-sale apps, booking and quoting tools, client portals and dashboards. Recent projects include an ERP that replaced paper registers at a rice mill and offline-first desktop POS systems for a grocery store and a wholesale agency. Projects are fixed price and the client owns the source code.",
    problems: [
      { t: "Off-the-shelf software doesn't fit.", d: "You pay for several tools that each do part of the job, then patch the gaps with paper and memory." },
      { t: "Everything runs on registers.", d: "Sales, stock, credit and salaries live in notebooks, and closing a month takes days." },
      { t: "Cloud tools fail when the internet does.", d: "If the connection drops, billing stops." },
      { t: "No live picture of the business.", d: "Profit, stock value and who owes what are only known after someone adds it all up." },
    ],
    build: [
      { t: "ERP and accounting", d: "Purchases, production, inventory, sales, ledgers, vouchers and payroll in one system, with period locks and audit logs." },
      { t: "Point of sale", d: "Fast billing with barcode scanning, held sales, returns, thermal receipts and a day-end close on one screen." },
      { t: "Offline-first desktop apps", d: "Windows apps built with Electron and a local SQLite database, so work continues without the internet." },
      { t: "Booking, quoting and portals", d: "Web apps for appointments, quotes, orders and client access, with role-based permissions." },
      { t: "Payments and integrations", d: "Card payments through Stripe and local methods such as JazzCash, plus email notifications." },
      { t: "Owner dashboards and reports", d: "Live sales, stock, profit and outstanding balances, with PDF and Excel export." },
    ],
    faqs: [
      { q: "When does custom software make sense for a small business?", a: "When off-the-shelf tools force you to work around them: duplicate data entry, paper registers alongside the software, or features you pay for and never use. If a standard product fits, we'll say so." },
      { q: "Can custom software work without the internet?", a: "Yes. We build offline-first desktop apps that save every transaction to a local database, so billing and stock updates keep working when the connection drops." },
      { q: "How long does custom software take to build?", a: "It depends on scope, which we set on the discovery call. A single-store POS has taken us about a month. A full ERP covering operations, accounting and payroll ran over several months of phased delivery." },
      { q: "Who owns the software?", a: "You do. Source code, database, credentials and documentation are handed over at the end. No lock-in." },
    ],
    studies: ["rice-mill-erp", "oil-agency-pos", "offline-first-pos", "handicrafts-ecommerce-backend"],
  },
  {
    group: "industries",
    slug: "contractors-home-services",
    name: "Contractors and home services",
    title: "Contractor Websites & Lead Generation",
    description: "Websites and landing pages for contractors, remodelers and home service businesses, built to turn local searches into calls and quote requests.",
    eyebrow: "For contractors and home services",
    h1: "Contractor websites that turn searches into quote requests.",
    sub: "For remodelers, roofers, plumbers, HVAC and other home service businesses that live on enquiries.",
    answer: "Softex Solutions builds websites and lead generation landing pages for contractors and home service businesses. Pages are built in Next.js for mobile speed, with click-to-call, short quote forms, reviews and project galleries near the form, and service-area pages for local search. A landing page we built for a US bathroom remodeler brings in 20+ leads a month and scores 90+ on PageSpeed.",
    problems: [
      { t: "Homeowners call the first company that loads.", d: "A slow or confusing site hands the job to the next result on Google." },
      { t: "The site doesn't ask for the job.", d: "No visible phone number, a long form, or no form at all." },
      { t: "No proof near the form.", d: "Reviews, photos of finished work and guarantees are buried, so visitors hesitate." },
      { t: "You only show up in one town.", d: "Without service-area pages, searches in the next suburb never find you." },
    ],
    build: [
      { t: "Easy to contact", d: "Click-to-call, a short quote form and a consultation offer placed through the page." },
      { t: "Trust next to the form", d: "Reviews, badges, a project gallery and a clear \"why choose us\" section." },
      { t: "Service-area pages", d: "A page per area you cover, so nearby searches find you." },
      { t: "Objections answered", d: "A plain process section and an FAQ that deal with price, timing and mess before the call." },
      { t: "Fast by design", d: "Next.js with lazy-loaded sections, built to score well on PageSpeed on a phone." },
    ],
    faqs: [
      { q: "What should a contractor website include?", a: "A phone number and quote form visible without scrolling, the services and areas you cover, photos of finished projects, reviews, licences or guarantees, a simple explanation of your process and an FAQ. Above all it has to load fast on a phone." },
      { q: "How does a contractor website generate leads?", a: "By matching what a homeowner searched for, loading quickly, showing proof and making contact effortless. Each service and area gets its own page, and every page ends in a call or quote request." },
      { q: "Do you work with contractors outside Pakistan?", a: "Yes. We work remotely with businesses worldwide. Our contractor landing page case study is for a bathroom remodeler in the United States." },
    ],
    studies: ["bathroom-remodeling-landing-page"],
  },
  {
    group: "industries",
    slug: "dental-medical-clinics",
    name: "Dental and medical clinics",
    title: "Dental & Medical Clinic Website Design",
    description: "Fast, clear websites for dental practices, medical clinics and med spas, with online booking, treatment pages and local SEO. Fixed price.",
    eyebrow: "For dental and medical clinics",
    h1: "Clinic websites that fill the appointment book.",
    sub: "For dental practices, medical clinics and med spas that want new patients to book without phoning three times.",
    answer: "Softex Solutions designs websites for dental practices, medical clinics and med spas. Each site is built for mobile speed and has a clear path to book: online booking or click-to-call on every page, a page per treatment, team and pricing information, and the local SEO foundation that helps the clinic appear for searches nearby. Projects are fixed price and most go live in 12 to 22 days.",
    problems: [
      { t: "Booking means calling in office hours.", d: "Patients who look you up in the evening can't book, so they book somewhere they can." },
      { t: "Treatments are hidden in one long page.", d: "Someone searching for a specific treatment never lands on a page that answers them." },
      { t: "The site doesn't feel like the clinic.", d: "A dated site undersells a modern practice and makes nervous patients more nervous." },
      { t: "The front desk repeats itself.", d: "Hours, prices, parking and insurance questions fill the phone line all day." },
    ],
    build: [
      { t: "Booking on every page", d: "Online booking built in or connected to the system you already use, plus click-to-call on mobile." },
      { t: "A page per treatment", d: "Clear pages for each treatment, written to answer what patients actually search for." },
      { t: "Team, prices and practical details", d: "Who they'll see, what it costs, opening hours and how to get there, easy to find." },
      { t: "Local SEO foundation", d: "Structured data, consistent clinic details and fast pages, so you show up for searches nearby." },
      { t: "Reminders and confirmations", d: "Automatic booking confirmations and reminders to cut missed appointments." },
    ],
    faqs: [
      { q: "What should a dental or clinic website include?", a: "Online booking or a visible phone number on every page, a separate page for each treatment, the team, prices or price guidance, opening hours and location, reviews, and answers to common patient questions. It must load fast on a phone." },
      { q: "Can patients book appointments online?", a: "Yes. We either build booking into the site or connect the booking system your clinic already uses, so patients can book outside office hours." },
      { q: "How long does a clinic website take?", a: "Most websites take 12 to 22 days from the discovery call to launch, and you approve the full design before any code is written." },
    ],
    studies: [],
  },
  {
    group: "industries",
    slug: "salons-spas",
    name: "Salons and spas",
    title: "Salon & Spa Websites with Online Booking",
    description: "Websites and booking systems for salons, barbers and spas: online appointments, staff profiles, service menus and reviews. Fixed price.",
    eyebrow: "For salons and spas",
    h1: "Salon websites that take bookings while you work.",
    sub: "For salons, barber shops and spas that still take appointments by phone, message and walk-in.",
    answer: "Softex Solutions builds websites and booking systems for salons, barber shops and spas. Clients pick a service, a staff member and a time slot online, see prices and reviews, and get a confirmation without anyone answering the phone. Projects are fixed price, and the business owns the site and the code.",
    problems: [
      { t: "Bookings interrupt the work.", d: "Every call or message means stopping mid-appointment to check the diary." },
      { t: "Double bookings and empty chairs.", d: "A paper diary can't show clients what's free, so slots clash or go unused." },
      { t: "Instagram is the whole website.", d: "Your work looks great there, but prices, services and booking are nowhere to be found." },
      { t: "No record of feedback.", d: "Happy clients never get asked for a review, so new clients have nothing to go on." },
    ],
    build: [
      { t: "Online appointments", d: "Clients choose a service, a stylist and a time from a live calendar." },
      { t: "Staff profiles", d: "Each stylist or barber has a profile clients can view before booking." },
      { t: "Service and price menu", d: "Every service with its price and duration, easy to read on a phone." },
      { t: "Reviews", d: "Clients rate their visit, and the best reviews sit next to the book button." },
      { t: "Owner and staff dashboards", d: "The owner manages staff and services, and each staff member sees their own day." },
    ],
    faqs: [
      { q: "What should a salon website include?", a: "Online booking, a service menu with prices, staff profiles, photos of real work, reviews, opening hours and location. Booking should take under a minute on a phone." },
      { q: "Can you build a custom booking system for a salon?", a: "Yes. Our founder led a salon booking platform with calendar appointments, barber profiles, reviews and admin dashboards, so we build booking around how your salon actually runs rather than forcing a generic widget." },
      { q: "Can it connect to the booking app I already use?", a: "Usually. We audit what you have first and only replace it if it's holding you back." },
    ],
    studies: ["salon-booking-platform"],
  },
  {
    group: "industries",
    slug: "retail-wholesale-pos",
    name: "Retail and wholesale",
    title: "Retail & Wholesale POS Software",
    description: "Custom offline-first POS, inventory and ledger software for retail stores, wholesalers and distributors. Works without the internet. Fixed price.",
    eyebrow: "For retail and wholesale",
    h1: "POS software that keeps billing when the internet drops.",
    sub: "For shops, wholesalers and distributors replacing calculators, handwritten bills and paper ledgers.",
    answer: "Softex Solutions builds custom point-of-sale, inventory and ledger software for retail stores, wholesalers and distributors. The apps run on a Windows desktop with a local database, so billing continues without the internet, and cover barcode checkout, stock, customer credit, supplier ledgers, day-end closing and reports. Our POS systems are in daily use at a grocery store and at a cooking oil and ghee agency in Pakistan.",
    problems: [
      { t: "Billing by calculator and paper.", d: "Checkout is slow, and nothing is recorded until someone writes it up." },
      { t: "Stock runs out without warning.", d: "You find out an item is finished when a customer asks for it." },
      { t: "Credit lives in a notebook.", d: "Who owes what, and what you owe suppliers, is never quite clear." },
      { t: "Discounts with no record.", d: "Staff give discounts and the owner only sees the gap at the end of the month." },
    ],
    build: [
      { t: "Fast checkout", d: "Barcode scanning, held sales, returns, cash, card and credit payments, and thermal receipts." },
      { t: "Offline by default", d: "Every sale saves instantly to a local SQLite database. No internet needed to bill." },
      { t: "Stock you can trust", d: "Packings and batches, stock in and out, damage entries, stock counts and low-stock alerts." },
      { t: "Credit and ledgers", d: "Customer dues, supplier balances and the cashbook kept up to date automatically." },
      { t: "Owner controls", d: "Roles for owner, admin and cashier, PIN approval for discounts and a log of every login and change." },
      { t: "Day-end close and reports", d: "The day's cash, sales and expenses on one screen, with profit and loss and Excel export." },
    ],
    faqs: [
      { q: "Does the POS work offline?", a: "Yes. The app stores everything in a local database on the shop's computer, so billing, stock and credit keep working when the internet is down." },
      { q: "Why custom POS instead of a subscription POS?", a: "A subscription POS suits a standard shop with a reliable connection. Custom makes sense when you need to work offline, handle wholesale packings and credit ledgers, enforce owner approvals, or stop paying monthly fees for features you don't use." },
      { q: "Can it handle credit customers and suppliers?", a: "Yes. Customer and supplier balances, payments and the cashbook update automatically with every sale and purchase." },
    ],
    studies: ["offline-first-pos", "oil-agency-pos", "rice-mill-erp"],
  },
];

export const topicBy = (group: string, slug: string) => topics.find((t) => t.group === group && t.slug === slug);
export const inGroup = (group: Topic["group"]) => topics.filter((t) => t.group === group);
export const topicHref = (t: Topic) => `/${t.group}/${t.slug}`;
