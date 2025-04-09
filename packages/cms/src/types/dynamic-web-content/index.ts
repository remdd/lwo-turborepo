import type {
  ContentBlock,
  ContentRow,
  FaqCollection,
  StaticContent,
} from "..";

export type WebContentRow = {
  __component: "web.content-row";
  id: number;
  content_row: ContentRow;
};

export type WebContentBlocks = {
  __component: "web.content-blocks";
  id: number;
  content_blocks: ContentBlock[];
};

export type WebStaticContent = {
  __component: "web.static-content";
  id: number;
  static_content: StaticContent;
};

export type WebFaqCollection = {
  __component: "web.faq-collection";
  id: number;
  faq_collection: FaqCollection;
};

export type DynamicWebContent =
  | WebContentRow
  | WebContentBlocks
  | WebStaticContent
  | WebFaqCollection;
