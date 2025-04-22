export type Page = {
  title: string;
  path: string;
  slug: string;
};

export type PageId =
  | "HOME"
  | "VISIT"
  | "EXPLORE"
  | "EXPERIENCES"
  | "SUPPORT_US"
  | "LEARNING"
  | "CONTACT_US"
  | "SHOP"
  | "VISITOR_INFO"
  | "TICKETS"
  | "WHATS_ON"
  | "FAQS"
  | "CAFE"
  | "ZOO_MAP"
  | "NEWS"
  | "OUR_WORK"
  | "ABOUT_US"
  | "SCHOOLS"
  | "EARLY_YEARS"
  | "SECONDARY_AND_FE"
  | "KEEPER_ACADEMY"
  | "RESEARCH"
  | "BASKET";

export type Section = {
  page: Page;
  pages?: Page[];
};

export type Nav = Section[];
