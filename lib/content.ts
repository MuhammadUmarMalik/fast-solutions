// All visible copy lives here. Source of truth: LANDING_PAGE.md
const U = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&auto=format&fit=crop&q=75`;

export const SITE = {
  name: "Softex Solutions",
  founder: "Muhammad Umar Malik",
  url: "https://www.umarmalik-dev.com",
  cta: "https://calendly.com/umarmalik-cs711/30min",
  linkedin: "https://www.linkedin.com/in/umarmalik-dev",
  instagram: "https://www.instagram.com/umarmalik.dev/",
  whatsapp: "https://wa.me/923256238614",
  phone: "+923256238614",
  country: "PK",
  github: "https://github.com/MuhammadUmarMalik",
};

// One label per intent, used everywhere on the page.
export const CTA = { primary: "Book a call", secondary: "See the process" };

export const nav = [
  ["Problems", "#problems"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
] as const;

export const hero = {
  eyebrow: "For local service businesses",
  h1a: "Your website should bring",
  h1b: "customers, not excuses.",
  sub: "We fix slow sites, missing leads and manual busywork, then build the custom tools your business needs. Fixed price.",
  // Sample client build shown in the hero mockup. Illustrative, not a real client.
  mockup: {
    label:
      "Sample website built by Softex Solutions: a dental clinic site with online booking, shown on desktop and mobile, with an automatic booking confirmation.",
    url: "mapleandmaindental.com",
    brand: "Maple & Main",
    links: ["Treatments", "Team", "Prices"],
    cta: "Book online",
    call: "Call us",
    eyebrow: "Family and cosmetic dentistry",
    h: "Gentle dental care, booked in a minute.",
    p: "Same-week appointments, clear prices and text reminders, so a visit is never missed.",
    facts: ["Open Saturdays", "New patients welcome", "Free parking"],
    image: U("photo-1629909613654-28e377c37b09"),
    toast: { t: "New booking", d: "Tue 10:30, check-up. Confirmation sent." },
  },
};

export const marquee = [
  "Fast websites",
  "Lead generation",
  "SEO and AI visibility",
  "Business automation",
  "Custom software",
  "Design before code",
  "Fixed price",
];

export const problems = {
  h2: "You're great at what you do. Your website isn't.",
  intro:
    "You built a business people trust in person. Online, a different story is playing out.",
  list: [
    {
      t: "It's slow and it looks old.",
      d: "People judge trust in seconds. A slow, dated site tells them to call the next business on the list.",
    },
    {
      t: "You get visitors, not calls.",
      d: "People land, can't find the book button, and leave. You never even know they were there.",
    },
    {
      t: "Google sends customers to your competitors.",
      d: "Someone searches for your service near them and the business down the street shows up first. More and more, the same happens on ChatGPT and other AI assistants.",
    },
    {
      t: "You're buried in manual work.",
      d: "Copying leads into spreadsheets, chasing follow-ups by hand, rebuilding the same report every week. Hours you can't bill.",
    },
    {
      t: "Off-the-shelf software doesn't fit.",
      d: "You pay for five tools that each do 60% of the job, then patch the gaps with paper and memory.",
    },
  ],
  failed: {
    lead: "You've tried the DIY site builder. The cheap freelancer who disappeared halfway through. The agency that took three months and handed you something you can't edit.",
    punch:
      "It wasn't your fault. Nobody started by finding the actual problem.",
  },
};

export const outcome = {
  statement:
    "Your site loads fast, looks like the business you really are, and turns visitors into booked work while your follow-ups run themselves.",
  list: [
    {
      t: "Fast on every phone",
      d: "A site that loads quickly and looks as good as your work.",
    },
    {
      t: "One clear next step",
      d: "Every page leads visitors to call, book or request a quote.",
    },
    {
      t: "Found where people search",
      d: "Visible on Google and in AI answers for local searches.",
    },
    {
      t: "Leads in one place",
      d: "Follow-ups and reminders go out without you lifting a finger.",
    },
    {
      t: "Software that fits you",
      d: "Booking, quoting, portals and dashboards built around your workflow.",
    },
    {
      t: "Your evenings back",
      d: "Less admin, fewer tabs, more time for paid work.",
    },
  ],
  close: "Less chasing. More booked work.",
};

export const solution = {
  h2: "One team to fix it all, built around your business.",
  intro:
    "Softex Solutions is a small studio that builds fast websites, automations and custom software for local service businesses. No templates, no agency queue. We find the problem that's costing you money, design the fix, and build it properly.",
  services: [
    {
      t: "Fast, modern websites",
      d: "Custom Next.js sites built for speed, mobile and conversions.",
      img: U("photo-1547658719-da2b51169166"),
      alt: "Code editor open on a web development workstation",
    },
    {
      t: "Lead generation",
      d: "Clear funnels, booking flows and lead capture that turn visitors into enquiries.",
    },
    {
      t: "SEO and AI visibility",
      d: "The technical foundation that gets you found on Google and in AI assistants.",
    },
    {
      t: "Business automation",
      d: "Follow-ups, reminders, lead routing and reporting that run without you.",
    },
    {
      t: "Custom software",
      d: "Booking systems, quoting tools, client portals and internal dashboards built for how you work.",
      img: U("photo-1551836022-d5d88e9218df"),
      alt: "Small business team planning a custom software workflow",
    },
  ],
  objection: {
    q: "Not technical?",
    a: "You don't need to be. You make three decisions and we handle the rest.",
  },
};

export const process = {
  eyebrow: "The Softex Solutions method",
  h2: "Problem first. Code last.",
  sub: "Most projects fail because someone started building before anyone understood the problem. We work in the opposite order.",
  steps: [
    {
      n: "01",
      t: "Find the problem",
      q: "What's actually costing you?",
      d: "We audit your site, your lead flow and your competitors to find exactly where customers and hours are leaking.",
      out: [
        "Site audit",
        "Funnel and conversion analysis",
        "Competitor scan",
        "Prioritised problem list",
      ],
    },
    {
      n: "02",
      t: "Research and plan",
      q: "What's the smartest fix?",
      d: "A clear plan of what to fix, what to build, in what order and why.",
      out: [
        "Solution roadmap",
        "Tech recommendation",
        "Timeline and milestones",
        "Your fixed price",
      ],
    },
    {
      n: "03",
      t: "Design first",
      q: "Does this look and feel right?",
      d: "You see and approve the full design, mobile and desktop, before any code is written. No surprises.",
      out: ["Wireframes", "User flows", "High fidelity mockups"],
    },
    {
      n: "04",
      t: "Build",
      q: "Is it built to last?",
      d: "Your approved design becomes fast, clean, documented production code, with automations and custom tools wired in.",
      out: [
        "Production build",
        "Performance tuning",
        "SEO foundation",
        "CMS and backend integration",
      ],
    },
    {
      n: "05",
      t: "Test and launch",
      q: "Is everything working?",
      d: "We test on every device, check speed and accessibility, launch without downtime and hand everything over.",
      out: [
        "QA report",
        "Performance audit",
        "Go-live support",
        "Handover docs",
      ],
    },
  ],
  why: [
    {
      t: "Diagnosis before prescription",
      d: "You pay to fix the real problem, not the one someone guessed at.",
    },
    { t: "Design approval before code", d: "Changes cost minutes, not weeks." },
    {
      t: "One team, end to end",
      d: "No handoffs between a designer, a developer and an automation person.",
    },
  ],
  touchpoints: [
    "Confirm the problem",
    "Approve the design",
    "Sign off before launch",
  ],
};

export const stack = {
  eyebrow: "What you get",
  h2: "Everything you need. Nothing you don't.",
  rows: [
    {
      t: "Problem audit and roadmap",
      d: "Finds exactly what's losing you leads and hours",
      o: "You fix the right thing first",
    },
    {
      t: "Approved custom design",
      d: "Full mobile and desktop design, signed off before build",
      o: "You see exactly what you're getting",
    },
    {
      t: "Fast, conversion-built website",
      d: "Next.js site built for speed and clear calls to action",
      o: "Visitors turn into calls and bookings",
    },
    {
      t: "SEO and AI visibility foundation",
      d: "Technical SEO, structured data, local signals",
      o: "Customers find you, not your competitor",
    },
    {
      t: "Automation setup",
      d: "Lead capture, follow-ups, reminders, reporting",
      o: "Hours back every week",
    },
    {
      t: "Custom software, as needed",
      d: "Booking, quoting, portals and dashboards for your workflow",
      o: "Software that fits your business",
    },
    {
      t: "Full ownership handover",
      d: "Source code, design files, credentials, docs",
      o: "You own 100% of it. No lock-in.",
    },
    {
      t: "Go-live support",
      d: "Monitoring and fixes after launch",
      o: "A calm launch, not a stressful one",
    },
  ],
  price: {
    h: "One fixed price, agreed before any work starts.",
    d: "No hourly billing. No surprise invoices. Your exact scope and price are set on the discovery call, based on what your business actually needs.",
  },
};

export const proof = {
  h2: "Don't take our word for it. Judge the process.",
  points: [
    {
      t: "You see the problem before you pay to fix it.",
      d: "The discovery call alone shows you what's leaking leads.",
    },
    {
      t: "You see the design before we build.",
      d: "Nothing moves forward without your approval.",
    },
    {
      t: "You own everything at the end.",
      d: "If we weren't confident in the work, we wouldn't hand you the keys.",
    },
  ],
  founder: {
    role: "Founder, Softex Solutions",
    bio: "Software engineer and designer. I started Softex Solutions because I kept seeing great local businesses lose customers to bad websites and drown in manual work. Every project runs through me, from the first audit to launch day.",
  },
};

export const guarantees = {
  h2: "The Softex Solutions promise",
  list: [
    {
      t: "Design approval",
      d: "No code is written until you love the design. Revision rounds are included.",
    },
    {
      t: "Fixed price",
      d: "The price we agree is the price you pay. No hourly creep, no surprise invoices.",
    },
    {
      t: "Full ownership",
      d: "Code, design files, credentials and docs. 100% yours, no lock-in.",
    },
  ],
};

export const objections = [
  {
    q: "I don't have time for a big project.",
    a: "You give us three decisions. We do the rest. Most websites go live in 12 to 22 days.",
  },
  {
    q: "I've been burned by a developer before.",
    a: "That's why you approve the design before code, the price is fixed up front, and you own everything at the end.",
  },
  {
    q: "It's probably too expensive.",
    a: "One fixed price, agreed before we start, so there's no meter running. Compare it to the cost of one lost customer a week.",
  },
  {
    q: "Will this work for my type of business?",
    a: "If customers find you online and then call, book or ask for a quote, this is built for you.",
  },
  {
    q: "I already have a website.",
    a: "Good. We audit it first. Sometimes it needs a fix, not a rebuild, and we'll tell you which.",
  },
  {
    q: "I'm not technical.",
    a: "You don't need to be. We explain everything in plain English and hand over docs you can actually use.",
  },
];

export const faqs = [
  {
    q: "What is Softex Solutions?",
    a: "Softex Solutions is a web studio led by software engineer and designer Muhammad Umar Malik. It builds fast Next.js websites, lead generation funnels, local SEO and AI visibility, business automation and custom software for local service businesses such as clinics, dental practices, contractors, salons, law firms and home services. Projects are fixed price and most websites go live in 12 to 22 days.",
  },
  {
    q: "How much does a website cost?",
    a: "Every project has one fixed price, agreed on the free 30-minute discovery call before any work starts. The price depends on scope: a website fix costs less than a full rebuild, and custom software is quoted separately. No hourly billing.",
  },
  {
    q: "Do you do local SEO and AI search optimization?",
    a: "Yes. Every build includes technical SEO, structured data (schema.org), fast Core Web Vitals, local signals and content written so Google, ChatGPT, Perplexity, Gemini and other AI assistants can understand and cite your business.",
  },
  {
    q: "Who do you work with?",
    a: "Owner-run local service businesses with 1 to 50 staff that get customers through their website or by phone, anywhere in the world.",
  },
  {
    q: "How long does a project take?",
    a: "Most websites take 12 to 22 days: discovery and plan 2 to 4 days, design 3 to 5, build 5 to 10, launch 2 to 3. Custom software is scoped on the call.",
  },
  {
    q: "What if I don't like the design?",
    a: "We iterate until you do. Nothing gets built until you approve it.",
  },
  {
    q: "How involved do I need to be?",
    a: "Three touchpoints: confirm the problem, approve the design, sign off before launch.",
  },
  {
    q: "Do you charge fixed or hourly?",
    a: "Fixed, always. The scope and price are agreed before work starts.",
  },
  {
    q: "What do I get at the end?",
    a: "Source code, design files, credentials, CMS access and full documentation. You own all of it.",
  },
  {
    q: "Can you build custom software, not just websites?",
    a: "Yes. Booking systems, quoting tools, client portals and internal dashboards, built around how your business runs.",
  },
  {
    q: "Can you work with my existing site or tools?",
    a: "Yes. We audit what you have first and only rebuild what needs it.",
  },
];

export const final = {
  h2: "Find out what's costing you customers in 30 minutes.",
  lead: "On a free discovery call we look at your site and workflow together and show you:",
  list: [
    "Where you're losing leads",
    "What's eating your team's hours",
    "Exactly what we'd fix first, at a fixed price",
  ],
  note: "No obligation. If we're not the right fit, you still leave with a clear list of what to fix.",
  micro: "Free · 30 minutes · You approve everything before we build",
  urgency:
    "We take on a limited number of projects at a time so every build gets founder-level attention.",
};

// AEO answer capsule, used in structured data.
export const answer = {
  q: "What does Softex Solutions do for local service businesses?",
  a: "Softex Solutions, led by software engineer and designer Muhammad Umar Malik, fixes slow websites, missing leads, poor Google and AI visibility and manual workflows for local service businesses, and builds custom software when off-the-shelf tools don't fit. Every project follows five steps (find the problem, plan, design, build, launch) at a fixed price, and most websites go live in 12 to 22 days.",
};

export const keywords = [
  "Softex Solutions",
  "local service business website",
  "small business web design",
  "Next.js developer",
  "website speed optimization",
  "business automation",
  "custom software for small business",
  "lead generation website",
  "local SEO",
  "AI search optimization",
  "website for clinics",
  "website for contractors",
  "Muhammad Umar Malik",
];
