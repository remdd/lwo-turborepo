import type {
  CollectionType,
  WebContentBlocks,
  WebContentRow,
  WebFaqCollection,
  WebStaticContent,
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
  | WebContentRow
  | WebContentBlocks
  | WebStaticContent
  | WebFaqCollection;
