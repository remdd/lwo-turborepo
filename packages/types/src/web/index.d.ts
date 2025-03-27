export declare namespace Web {
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

  type BasePage = {
    title: string;
    path: string;
    slug: string;
  };

  type SectionPage = BasePage & {
    id: SectionId;
  };

  type SubSectionPage = BasePage & {
    parent: SectionId;
  };

  export type Page = SectionPage | SubSectionPage;

  export type Theme = "standard" | "dark";
}
