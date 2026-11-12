// Case studies. Source of truth: "Portfolio Case Studies.md" (master versions, in the studio's "we" voice).
// Features come from the project code. Results are the client's, kept qualitative unless a real figure exists.
// Covers are real product mockups from /public where we have them, industry photography otherwise.
import type { Metadata } from "next";
import { SITE } from "./content";

const U = (id: string) => `https://images.unsplash.com/${id}?w=1600&auto=format&fit=crop&q=75`;

export type Study = {
  slug: string;
  name: string;
  kind: "Client project" | "University project";
  industry: string;
  h1: string;
  sub: string;
  result: string; // one line, shown in lists
  client: string;
  timeline?: string;
  url?: string; // live site, shown as a link in the facts row
  role: string;
  problem: string;
  solution: { t: string; d: string }[];
  results: string[];
  tech: string[];
  img: string;
  alt: string;
  shots?: { src: string; alt: string; h: number }[]; // extra screens, all 2800px wide
};

export const studies: Study[] = [
  {
    slug: "bathroom-remodeling-landing-page",
    name: "Bathroom remodeler lead generation landing page",
    kind: "Client project",
    industry: "Home services",
    h1: "One landing page. 20+ leads a month.",
    sub: "A fast, lead-focused page for a US bathroom remodeler, built in Next.js and scoring 90+ on PageSpeed.",
    result: "Brings in 20+ leads a month, scores 90+ on PageSpeed, and the client came back for more work.",
    client: "Shahbaz Murtaza, bathroom remodeling, USA",
    timeline: "Jun to Jul 2026",
    role: "Design and development",
    problem:
      "Home-service businesses live on enquiries. A slow or unclear site sends homeowners to the next company on Google. The client needed a fast page that builds trust and makes it easy to call or request a quote.",
    solution: [
      { t: "Easy to contact", d: "A lead form, click-to-call popup and consultation offer placed through the page." },
      { t: "Trust close to the form", d: "Reviews, trust badges, a project gallery and a \"why choose us\" section." },
      { t: "Local SEO", d: "Service-area pages so the business shows up in nearby searches." },
      { t: "Answers objections", d: "A problem section, a step-by-step process and an FAQ." },
      { t: "Fast by design", d: "Next.js with lazy-loaded sections, scoring 90+ on PageSpeed." },
    ],
    results: [
      "20+ leads and enquiries a month from the landing page",
      "A 90+ PageSpeed score",
      "The client came back for more work",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    img: "/bathroom-remodeling-landing-page.webp",
    alt: "Bathroom remodeling landing page for Bath Expert Team on a laptop, with the services and recent projects sections",
    shots: [
      { src: "/bathroom-remodeling-landing-page-full-scroll.webp", alt: "Full scroll of the bathroom remodeling landing page: hero, common problems, services, recent projects, benefits, reviews and service area", h: 2020 },
      { src: "/bathroom-remodeling-landing-page-sections.webp", alt: "Six sections of the bathroom remodeling landing page: hero, problems, services, project gallery, benefits and homeowner reviews", h: 1460 },
    ],
  },
  {
    slug: "devzoo-agency-website",
    name: "Devzoo: digital agency website in Next.js",
    kind: "Client project",
    industry: "Agency services",
    h1: "One clear site for a four-service agency.",
    sub: "A Next.js website for Devzoo, a digital agency for startups: web development, digital marketing, graphic design and video editing on one clear site.",
    result: "Live at thedevzoo.com. Four services explained on one site, with a call bookable from every page.",
    client: "Devzoo, a digital agency for startups and small businesses",
    timeline: "July 2026",
    url: "https://thedevzoo.com",
    role: "Design and development",
    problem:
      "An agency that offers four services can easily look scattered. Devzoo needed one site that explains everything it does in a few seconds and makes it easy for a startup founder to book a call.",
    solution: [
      { t: "Clear positioning", d: "A bold hero, \"Your Business. Digitized. Done Right.\", with two actions: book a call or see the work." },
      { t: "One roof, four services", d: "Web development, digital marketing, graphic design and video editing, each with its own page and call to action." },
      { t: "Trust built in", d: "A 4-step process section, proof points and client testimonials." },
      { t: "Easy to contact", d: "Calendly booking and a floating WhatsApp button on every page." },
      { t: "Fast and polished", d: "Next.js with Framer Motion animations, optimized for speed and SEO." },
    ],
    results: [
      "Live at thedevzoo.com",
      "All four services explained on one site, each with its own page",
      "A call can be booked from every page, by Calendly or WhatsApp",
    ],
    tech: ["Next.js", "React", "Framer Motion", "Calendly", "WhatsApp integration"],
    img: "/devzoo-agency-website.webp",
    alt: "Devzoo digital agency website home page on a laptop, with the services and proof sections",
    shots: [
      { src: "/devzoo-agency-website-process-testimonials.webp", alt: "Devzoo website process section and client testimonials section", h: 1500 },
      { src: "/devzoo-agency-website-sections.webp", alt: "Six sections of the Devzoo agency website: hero, services, process, proof, testimonials and call to action", h: 1192 },
    ],
  },
  {
    slug: "rice-mill-erp",
    name: "Rice mill ERP and accounting software",
    kind: "Client project",
    industry: "Agriculture and food processing",
    h1: "Month-end accounts in hours, not days.",
    sub: "One ERP replaced the paper registers at Hassan Waqar Rice Mills: operations, accounting and payroll in a single app.",
    result: "Month-end accounts went from days to hours, and the owner sees live profit and stock anytime.",
    client: "Hassan Waqar Rice Mills, Pakistan",
    timeline: "Dec 2025 to Oct 2026",
    role: "Full-stack build, start to finish",
    problem:
      "The mill ran everything on paper registers: paddy purchases, processing, stock, sales, cash and salaries. Closing the accounts each month took days, and the owner had no quick way to see profit or stock value.",
    solution: [
      { t: "One system for daily operations", d: "Purchases, processing batches, inventory, sales, gate passes and cheques, with accurate weight and charge calculations." },
      { t: "Full accounting built in", d: "Chart of accounts, ledgers, receipts, payments, journal vouchers and period locks, so closed months can't be edited by mistake." },
      { t: "HR and payroll", d: "Salary structures and payroll generation, approval and payment, with audit logs." },
      { t: "Owner dashboard", d: "Live purchases, sales, stock value, net profit, cash and bank balances and outstanding totals." },
      { t: "20+ reports", d: "Trial balance, profit and loss, day book, stock and outstanding, all printable or exportable to PDF." },
      { t: "Built for the people using it", d: "A bilingual English and Urdu interface with right-to-left support, packaged as a Windows desktop app that works without the internet." },
    ],
    results: [
      "Month-end accounts now take hours instead of days",
      "Paper registers replaced by one system for operations, accounts and payroll",
      "The owner checks live profit, stock value and outstanding balances anytime",
      "In daily use by the owner and the accountant",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Tailwind", "Radix UI", "React Query", "Zustand", "Express", "Drizzle ORM", "SQLite", "Playwright (PDF)", "Socket.io", "Electron", "Sentry"],
    img: "/rice-mill-erp-software.webp",
    alt: "Rice mill ERP software dashboard with a product stock chart, a stock report and a cash ledger",
    shots: [
      { src: "/rice-mill-erp-purchases-stock-report.webp", alt: "Rice mill ERP purchases list and stock report with quantities and closing values per paddy variety", h: 1560 },
      { src: "/rice-mill-erp-cash-receipts-cash-in-hand.webp", alt: "Rice mill ERP cash receipts list and cash in hand screen with the day's receipts and payments", h: 1560 },
      { src: "/rice-mill-erp-screens.webp", alt: "Six screens from the rice mill ERP: setup, purchases, products, stock report, cash receipts and cash in hand", h: 1278 },
    ],
  },
  {
    slug: "oil-agency-pos",
    name: "Secure POS for an oil and ghee agency",
    kind: "Client project",
    industry: "FMCG distribution and wholesale",
    h1: "From paper bills to closing in minutes.",
    sub: "A secure desktop POS for Al Imran Traders, a cooking oil and ghee agency in Pakistan.",
    result: "Daily closing takes minutes, billing is faster, and no discount goes through without the owner's PIN.",
    client: "Al Imran Traders, Pakistan",
    timeline: "Delivered July 2026",
    role: "Architecture, database design and development",
    problem:
      "Al Imran Traders ran sales, credit customers and supplier payments on paper registers. Bills were written by hand, discounts were given with no record, and closing the day meant adding up pages.",
    solution: [
      { t: "Fast billing", d: "A POS screen that replaces handwritten bills, with held sales and returns." },
      { t: "Owner PIN for discounts", d: "A cashier can't apply a discount without a one-time approval from the owner." },
      { t: "Clear credit and ledgers", d: "Customer and supplier balances, payments and the cashbook stay up to date automatically." },
      { t: "Daily closing in minutes", d: "The day's cash, sales and expenses close on one screen." },
      { t: "Stock you can trust", d: "Products with packings and batches, stock movements, damage entries and stock counts." },
      { t: "Security and audit trail", d: "Owner, Admin and Cashier roles, Argon2 hashing, lockout after 5 failed attempts, and logs of every login and user change. Runs locally, without the internet." },
    ],
    results: [
      "Daily closing now takes minutes instead of adding up register pages",
      "Billing is faster than handwritten bills",
      "No discount goes through without the owner's PIN",
      "Customer and supplier balances are always clear",
      "In daily use by 3 to 5 staff",
    ],
    tech: ["Electron", "React", "TypeScript", "React Hook Form", "Zod", "Zustand", "Express", "Prisma", "Argon2", "Helmet"],
    img: "/oil-agency-pos-software.webp",
    alt: "Oil and ghee agency POS software: sale screen with product details and accounting windows",
    shots: [
      { src: "/oil-agency-pos-supplier-purchases.webp", alt: "Oil agency POS purchase history and a supplier invoice with payments and the amount due", h: 1560 },
      { src: "/oil-agency-pos-trial-balance-balance-sheet.webp", alt: "Oil agency POS accounting: trial balance and balance sheet reports", h: 1560 },
      { src: "/oil-agency-pos-screens.webp", alt: "Six screens from the oil agency POS: sale, products, product details, purchases, trial balance and journals", h: 1268 },
    ],
  },
  {
    slug: "offline-first-pos",
    name: "Offline-first POS for a grocery store",
    kind: "Client project",
    industry: "Retail and grocery",
    h1: "A POS that keeps billing offline.",
    sub: "An offline-first desktop POS that replaced calculator-and-paper billing at a grocery store in Pakistan.",
    result: "Billing never stops when the internet drops, and stock and customer credit stay clear.",
    client: "A grocery store in Pakistan (name withheld)",
    timeline: "July 2026",
    role: "Product docs, architecture, design system and build",
    problem:
      "The store billed customers with a calculator and paper. Checkout was slow, stock ran out without warning, and customer credit was hard to track. Cloud POS wasn't an option, because the internet in the area drops often.",
    solution: [
      { t: "Offline by default", d: "Every sale, purchase and stock update saves instantly to a local SQLite database. No internet needed to bill." },
      { t: "Fast checkout", d: "Barcode scanning, cart, item and bill discounts, cash, card and credit payments, returns and thermal receipts." },
      { t: "Stock under control", d: "Products with barcode labels, stock in and out, and low-stock alerts on the dashboard." },
      { t: "Clear customer credit", d: "Dues tracked per customer, with a customer due report." },
      { t: "Reports the owner uses", d: "Daily sales, stock and profit and loss, with Excel export." },
      { t: "License activation", d: "A small cloud service activates the app on the store's device." },
    ],
    results: [
      "Billing never stops, even when the internet is down",
      "Barcode checkout replaced calculator-and-paper billing",
      "Low-stock alerts warn the owner before items run out",
      "Customer credit is clear and up to date",
      "In daily use at the store",
    ],
    tech: ["Electron", "React", "TypeScript", "TanStack Query", "TanStack Table", "React Hook Form", "Zod", "Zustand", "SQLite (better-sqlite3)", "ExcelJS", "Express"],
    img: U("photo-1604719312566-8912e9227c6a"),
    alt: "Grocery store aisle with stocked shelves on both sides",
  },
  {
    slug: "handicrafts-ecommerce-backend",
    name: "E-commerce backend for a handicrafts brand",
    kind: "Client project",
    industry: "E-commerce and handicrafts",
    h1: "The backend behind a brand's own store.",
    sub: "A complete e-commerce API with card and JazzCash payments, built for a handicrafts brand leaving the marketplace.",
    result: "A complete store backend with Stripe and JazzCash working, handed over for launch.",
    client: "A handicrafts brand in Pakistan (name withheld)",
    role: "Backend: API, database, payments and admin features, with a partner developer",
    problem:
      "The brand was selling through a marketplace and wanted its own online store. That store needed a secure backend that handles both local and international payments.",
    solution: [
      { t: "Local and international payments", d: "Stripe for cards and JazzCash for Pakistani customers, with payment status tracked per order." },
      { t: "Complete store API", d: "Products with multiple images, categories, search and filters, cart, checkout and order history." },
      { t: "Order tracking", d: "Customers check status by order number." },
      { t: "Admin features", d: "Order and payment status updates, customers, banners, review moderation, complaints and revenue statistics." },
      { t: "Notifications and email", d: "Real-time admin notifications and email through AdonisJS Mail." },
      { t: "Secure by design", d: "JWT authentication, role-based admin routes and server-side validation." },
    ],
    results: [
      "A complete e-commerce backend, with Stripe and JazzCash working, handed over for launch",
      "The base for the brand's own store instead of depending on a marketplace",
    ],
    tech: ["AdonisJS 5", "TypeScript", "Lucid ORM", "MySQL", "JWT auth", "Stripe", "JazzCash", "AdonisJS Mail"],
    img: U("photo-1565193566173-7a0ee3dbe261"),
    alt: "Three handmade ceramic vases against a dark wall",
  },
  {
    slug: "knowledge-exchange-marketplace",
    name: "Knowledge Exchange: books and tutoring marketplace",
    kind: "University project",
    industry: "Education and marketplace",
    h1: "One marketplace for books and tutors.",
    sub: "A two-sided marketplace for students of the University of Central Punjab, with admin-approved sellers and tutors.",
    result: "A working two-sided marketplace with four roles, admin approvals and Stripe payments.",
    client: "Students of the University of Central Punjab, Lahore",
    timeline: "2024",
    role: "Our founder led the project and built the backend, in a team of two",
    problem:
      "Students looking for affordable books and tutors have to search across scattered groups and pages. Sellers and tutors have no trusted place to list themselves, and nobody vets who's offering what.",
    solution: [
      { t: "Two marketplaces in one", d: "Buy books from sellers and find tutors, including tutors filtered by location." },
      { t: "Four roles", d: "Customer, seller, tutor and admin, each with their own screens and permissions." },
      { t: "Admin-approved sellers and tutors", d: "Users apply to become a seller or tutor, and the admin approves them, so listings stay trustworthy." },
      { t: "Seller tools", d: "List books with images, manage categories and handle incoming orders." },
      { t: "Orders and payments", d: "Order and payment status tracking, Stripe integration and email order notifications." },
    ],
    results: [
      "A two-person team led from planning to delivery",
      "A working two-sided marketplace delivered for UCP students",
    ],
    tech: ["React", "MobX", "React Router", "AdonisJS 5", "Lucid ORM", "MySQL", "Token auth", "Stripe", "AdonisJS Mail"],
    img: U("photo-1481627834876-b7833e8f5570"),
    alt: "Long library aisle lined with bookshelves under hanging lamps",
  },
  {
    slug: "salon-booking-platform",
    name: "Salon booking with AI hairstyle suggestions",
    kind: "University project",
    industry: "Beauty and salon services",
    h1: "Salon booking with AI style suggestions.",
    sub: "A university team project: calendar appointments, barber profiles, reviews and hairstyle suggestions from a face-shape model.",
    result: "A working booking platform with barber profiles, reviews and AI hairstyle suggestions.",
    client: "University project",
    timeline: "Jun to Jul 2024",
    role: "Our founder led the team and built the backend, in a team of three",
    problem:
      "Barber salons take bookings by phone and walk-in, which means double bookings, idle chairs and no record of customer feedback. Customers can't see which barber is free or what style might suit them.",
    solution: [
      { t: "Online appointments", d: "Customers book a barber and a time slot from a calendar." },
      { t: "Barber profiles", d: "Each barber has a profile customers can view before booking." },
      { t: "AI hairstyle suggestions", d: "Customers upload a photo, a face-shape detection model reads it, and the app suggests styles that suit them." },
      { t: "Hairstyle and services catalog", d: "Browse styles and services before visiting." },
      { t: "Reviews", d: "Customers rate and review their visit." },
      { t: "Admin and barber dashboards", d: "The admin manages barbers and users, and barbers have their own panel." },
    ],
    results: [
      "A three-person team led from planning to a working platform",
      "The backend for booking, reviews, users and AI hairstyle suggestions",
    ],
    tech: ["AdonisJS", "MySQL", "Face-shape detection model", "React", "Material UI", "MobX", "Day.js", "React Calendar", "Axios"],
    img: "/salon-booking-website.webp",
    alt: "Salon booking website home page with virtual closet and AI hairstyle suggestion screens",
    shots: [
      { src: "/salon-booking-website-pages.webp", alt: "Six customer screens from the salon platform: home, AI styles, virtual closet, barbers, booking and reviews", h: 1140 },
      { src: "/salon-booking-admin-barber-dashboard.webp", alt: "Salon booking platform admin barber list and barber dashboard with an appointment calendar", h: 1500 },
    ],
  },
];

export const work = {
  h2: "Real work, in daily use.",
  intro: "A landing page that brings in leads, and desktop software that replaced paper registers. Every project below is live and used by the client.",
  all: "All case studies",
  index: {
    title: "Case Studies",
    h1: "What we built, and what it changed.",
    sub: "Client software, websites and two university projects our founder led. Features come from the code. Results come from the clients.",
  },
  cta: "Need software built around how your business actually runs?",
};

export const byId = (slug: string) => studies.find((s) => s.slug === slug);

/** Per-page metadata. `title` is the bare page title: the root layout's template appends the site name. Open Graph isn't templated, so it gets the full string. */
export function meta(title: string, description: string, path: string, image?: { url: string; alt: string }): Metadata {
  const full = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: SITE.name, type: "article", locale: "en_US", ...(image && { images: [image] }) },
    twitter: { card: "summary_large_image", title: full, description, ...(image && { images: [image] }) },
  };
}
