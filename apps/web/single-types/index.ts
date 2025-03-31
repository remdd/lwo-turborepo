import { type CMS } from "@lwo/cms";

export const singleTypeSlugs: Record<CMS.SingleTypeId, string> = {
  GENERAL_ADMISSION: "general-admission",
  HERO_CAROUSEL: "hero-carousel",
} as const;
