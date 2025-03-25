export declare namespace Web {
  export type PageId =
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

  export type Page = {
    title: string;
    path: string;
    slug: string;
  };
}
