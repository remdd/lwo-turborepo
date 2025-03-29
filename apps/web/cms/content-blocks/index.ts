import { type Web } from "@lwo/types";

// This file maps the slugs for specific content blocks that want to be treated or formatted in a special way when rendered
export const contentBlocks: Record<Web.ContentBlockId, Web.ContentBlock> = {
  OPENING_TIMES: {
    slug: "opening-times",
  },
  FINDING_US: {
    slug: "finding-us",
  },
} as const;
