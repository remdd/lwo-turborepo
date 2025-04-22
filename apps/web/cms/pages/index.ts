import { Pages } from "types";

export const pages: Record<Pages.PageId, Pages.Page> = {
  // Landing page
  HOME: {
    title: "Home",
    slug: "home",
    path: "/",
  },

  // Plan your visit
  VISIT: {
    title: "Plan your visit",
    slug: "visit",
    path: "/visit",
  },
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

  // Explore
  EXPLORE: {
    title: "Explore the zoo",
    slug: "explore",
    path: "/explore",
  },
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

  // Experiences
  EXPERIENCES: {
    title: "Experiences",
    slug: "experiences",
    path: "/experiences",
  },

  // Support
  SUPPORT_US: {
    title: "Support us",
    slug: "support-us",
    path: "/support-us",
  },

  // Learning
  LEARNING: {
    title: "Schools and learning",
    slug: "learning",
    path: "/learning",
  },
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

  // Shop
  SHOP: {
    title: "Shop",
    slug: "shop",
    path: "/shop",
  },
  BASKET: {
    title: "Your basket",
    slug: "basket",
    path: "/basket",
  },
} as const;

export const nav: Pages.Nav = [
  {
    page: pages.HOME,
  },
  {
    page: pages.VISIT,
    pages: [
      pages.VISITOR_INFO,
      pages.TICKETS,
      pages.WHATS_ON,
      pages.FAQS,
      pages.CAFE,
    ],
  },
  {
    page: pages.EXPLORE,
    pages: [pages.ZOO_MAP, pages.NEWS, pages.OUR_WORK, pages.ABOUT_US],
  },
  {
    page: pages.EXPERIENCES,
  },
  {
    page: pages.SUPPORT_US,
  },
  {
    page: pages.LEARNING,
    pages: [
      pages.SCHOOLS,
      pages.EARLY_YEARS,
      pages.SECONDARY_AND_FE,
      pages.KEEPER_ACADEMY,
      pages.RESEARCH,
    ],
  },
  {
    page: pages.CONTACT_US,
  },
];

export const basketPage = pages.BASKET;
