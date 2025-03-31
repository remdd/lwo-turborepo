import type { CollectionType, ContentBlock, StaticContentId } from "../";

export type Page = CollectionType<{
  slug: string;
  title: string;
  id: string;
  content: DynamicPageContent[];
  single_type?: string;
}>;

export type PageInfo = Pick<Page, "id" | "slug" | "documentId" | "title">;

export type DynamicPageContent =
  | PageAreaBlocks
  | PageStaticContent
  | PageFaqCollection;

export type PageAreaBlocks = {
  __component: "web.content-blocks";
  content_blocks: ContentBlock[];
};

export type PageStaticContent = {
  __component: "web.static-content";
  static_component: StaticContentId;
};

export type PageFaqCollection = {
  __component: "web.faq-collection";
  faq_collection: any;
};
