export declare namespace Web {
  /*
    Nav / routing
  */
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

  /*
    Theming
  */
  export type Theme = "standard" | "dark";

  /*
    Content blocks
  */
  export type ContentBlockId = "OPENING_TIMES" | "FINDING_US";
  export type ContentBlock = {
    slug: string;
  };

  /*
    Single types
  */
  export type SingleTypeId =
    | "HERO_CAROUSEL"
    | "GENERAL_ADMISSION"
    | "FAQS_LIST"
    | "DIRECTIONS";
  export type SingleType = {
    cmsId: string;
  };

  /*
    Tickets
  */
  export type TicketId =
    | "ADULT"
    | "ADULT_GA"
    | "CHILD"
    | "CHILD_GA"
    | "CONCESSION"
    | "CONCESSION_GA"
    | "FAMILY_2_2"
    | "FAMILY_2_2_GA"
    | "FAMILY_2_3"
    | "FAMILY_2_3_GA";
  export type Ticket = {
    name: string;
    price: number;
    gift_aid: boolean;
  };
}
