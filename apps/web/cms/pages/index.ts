import * as Pages from "types/pages";

export const pages: Record<Pages.PageId, Pages.Page> = {
  // Landing page
  HOME: {
    title: "Home",
    slug: "home",
    path: "/",
    id: "HOME",
  },

  // Plan your visit
  VISIT: {
    title: "Plan your visit",
    slug: "visit",
    path: "/visit",
    id: "VISIT",
  },
  VISITOR_INFO: {
    title: "Visitor info",
    slug: "visitor-info",
    path: "/visitor-info",
    parent: "VISIT",
  },
  TICKETS: {
    title: "Tickets",
    slug: "tickets",
    path: "/tickets",
    parent: "VISIT",
  },
  WHATS_ON: {
    title: "What's on",
    slug: "whats-on",
    path: "/whats-on",
    parent: "VISIT",
  },
  FAQS: {
    title: "FAQs",
    slug: "faqs",
    path: "/faqs",
    parent: "VISIT",
  },
  CAFE: {
    title: "Café",
    slug: "cafe",
    path: "/cafe",
    parent: "VISIT",
  },

  // Explore
  EXPLORE: {
    title: "Explore the zoo",
    slug: "explore",
    path: "/explore",
    id: "EXPLORE",
  },
  ZOO_MAP: {
    title: "Zoo map",
    slug: "zoo-map",
    path: "/zoo-map",
    parent: "EXPLORE",
  },
  NEWS: {
    title: "News",
    slug: "news",
    path: "/news",
    parent: "EXPLORE",
  },
  OUR_WORK: {
    title: "Our work",
    slug: "our-work",
    path: "/our-work",
    parent: "EXPLORE",
  },
  ABOUT_US: {
    title: "About us",
    slug: "about-us",
    path: "/about-us",
    parent: "EXPLORE",
  },

  // Experiences
  EXPERIENCES: {
    title: "Experiences",
    slug: "experiences",
    path: "/experiences",
    id: "EXPERIENCES",
  },

  // Support
  SUPPORT_US: {
    title: "Support us",
    slug: "support-us",
    path: "/support-us",
    id: "SUPPORT_US",
  },

  // Learning
  LEARNING: {
    title: "Schools and learning",
    slug: "learning",
    path: "/learning",
    id: "LEARNING",
  },
  SCHOOLS: {
    title: "Schools",
    slug: "schools",
    path: "/schools",
    parent: "LEARNING",
  },
  EARLY_YEARS: {
    title: "Early years, Key Stages 1 & 2",
    slug: "early-years",
    path: "/early-years",
    parent: "LEARNING",
  },
  SECONDARY_AND_FE: {
    title: "Secondary schools and FE",
    slug: "secondary-and-fe",
    path: "/secondary-and-fe",
    parent: "LEARNING",
  },
  KEEPER_ACADEMY: {
    title: "Keeper Academy",
    slug: "keeper-academy",
    path: "/keeper-academy",
    parent: "LEARNING",
  },
  RESEARCH: {
    title: "Research",
    slug: "research",
    path: "/research",
    parent: "LEARNING",
  },

  // Contact us
  CONTACT_US: {
    title: "Contact us",
    slug: "contact-us",
    path: "/contact-us",
    id: "CONTACT_US",
  },

  // Shop
  SHOP: {
    title: "Shop",
    slug: "shop",
    path: "/shop",
    id: "SHOP",
  },
  BASKET: {
    title: "Your basket",
    slug: "basket",
    path: "/basket",
    parent: "SHOP",
  },
} as const;
