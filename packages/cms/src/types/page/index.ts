import type {
  CollectionType,
  ContentBlock,
  ContentRow,
  FaqCollection,
  StaticContent,
} from "../";

export type Page = CollectionType<{
  slug: string;
  title: string;
  id: string;
  content: DynamicPageContent[];
  single_type?: string;
}>;

export type PageInfo = Pick<Page, "id" | "slug" | "documentId" | "title">;

export type DynamicPageContent =
  | PageContentRow
  | PageAreaBlocks
  | PageStaticContent
  | PageFaqCollection;

export type PageContentRow = {
  __component: "web.content-row";
  id: number;
  content_row: ContentRow;
};

export type PageAreaBlocks = {
  __component: "web.content-blocks";
  id: number;
  content_blocks: ContentBlock[];
};

export type PageStaticContent = {
  __component: "web.static-content";
  id: number;
  static_content: StaticContent;
};

export type PageFaqCollection = {
  __component: "web.faq-collection";
  id: number;
  faq_collection: FaqCollection;
};
