export declare namespace Web {
  export type Theme = "standard" | "dark";

  export type ContentBlockId = "OPENING_TIMES" | "FINDING_US";

  export type ContentBlock = {
    slug: string;
  };

  export type SingleTypeId =
    | "HERO_CAROUSEL"
    | "GENERAL_ADMISSION"
    | "FAQS_LIST"
    | "DIRECTIONS";

  export type SingleType = {
    cmsId: string;
  };
}
