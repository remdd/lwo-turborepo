type BasePage = {
  title: string;
  path: string;
  slug: string;
};

export type SectionPage = BasePage & {
  id: SectionId;
};

export type SubSectionPage = BasePage & {
  parent: SectionId;
};

export type Page = SectionPage | SubSectionPage;

export type SectionId =
  | "HOME"
  | "VISIT"
  | "EXPLORE"
  | "EXPERIENCES"
  | "SUPPORT_US"
  | "LEARNING"
  | "CONTACT_US"
  | "SHOP";

export type PageId =
  | SectionId
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
  name: string;
  page?: Page;
  pages?: Page[];
};
