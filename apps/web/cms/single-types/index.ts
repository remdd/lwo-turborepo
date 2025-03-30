import { type Web } from "@lwo/types";

// This file maps the CMS identifier for each single type
export const singleTypes: Record<Web.SingleTypeId, Web.SingleType> = {
  HERO_CAROUSEL: {
    cmsId: "hero-carousel",
  },
  GENERAL_ADMISSION: {
    cmsId: "general-admission",
  },
  FAQS_LIST: {
    cmsId: "faqs-list",
  },
  DIRECTIONS: {
    cmsId: "directions",
  },
} as const;
