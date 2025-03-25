type StaticPageId =
  | "HOME"
  | "VISITOR_INFO"
  | "TICKETS"
  | "WHATS_ON"
  | "FAQS"
  | "CAFE"
  | "EXPERIENCES"
  | "ZOO_MAP"
  | "NEWS"
  | "OUR_WORK"
  | "ABOUT_US"
  | "SUPPORT_US"
  | "SCHOOLS"
  | "EARLY_YEARS"
  | "SECONDARY_AND_FE"
  | "KEEPER_ACADEMY"
  | "RESEARCH"
  | "CONTACT_US"
  | "BASKET";

type StaticPage = {
  title: string;
  path: string;
  slug: string;
};

export const pages: Record<StaticPageId, StaticPage> = {
  // Landing page
  HOME: {
    title: "Home",
    slug: "home",
    path: "/",
  },

  // Plan your visit
  VISITOR_INFO: {
    title: "Visitor info",
    slug: "visitor-info",
    path: "/visitor-info",
  },
  TICKETS: {
    title: "Tickets",
    slug: "tickets",
    path: "/tickets",
  },
  WHATS_ON: {
    title: "What's on",
    slug: "whats-on",
    path: "/whats-on",
  },
  FAQS: {
    title: "FAQs",
    slug: "faqs",
    path: "/faqs",
  },
  CAFE: {
    title: "Café",
    slug: "cafe",
    path: "/cafe",
  },

  // Experiences
  EXPERIENCES: {
    title: "Experiences",
    slug: "experiences",
    path: "/experiences",
  },

  // Explore
  ZOO_MAP: {
    title: "Zoo map",
    slug: "zoo-map",
    path: "/zoo-map",
  },
  NEWS: {
    title: "News",
    slug: "news",
    path: "/news",
  },
  OUR_WORK: {
    title: "Our work",
    slug: "our-work",
    path: "/our-work",
  },
  ABOUT_US: {
    title: "About us",
    slug: "about-us",
    path: "/about-us",
  },

  // Support
  SUPPORT_US: {
    title: "Support us",
    slug: "support-us",
    path: "/support-us",
  },

  // Learning
  SCHOOLS: {
    title: "Schools",
    slug: "schools",
    path: "/schools",
  },
  EARLY_YEARS: {
    title: "Early years, Key Stages 1 & 2",
    slug: "early-years",
    path: "/early-years",
  },
  SECONDARY_AND_FE: {
    title: "Secondary schools and FE",
    slug: "secondary-and-fe",
    path: "/secondary-and-fe",
  },
  KEEPER_ACADEMY: {
    title: "Keeper Academy",
    slug: "keeper-academy",
    path: "/keeper-academy",
  },
  RESEARCH: {
    title: "Research",
    slug: "research",
    path: "/research",
  },

  // Contact us
  CONTACT_US: {
    title: "Contact us",
    slug: "contact-us",
    path: "/contact-us",
  },

  // Basket
  BASKET: {
    title: "Your basket",
    slug: "basket",
    path: "/basket",
  },
} as const;
