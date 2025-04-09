import type { CollectionType, DynamicWebContent } from "../";

export type Page = CollectionType<{
  slug: string;
  title: string;
  id: string;
  content: DynamicWebContent[];
  single_type?: string;
}>;

export type PageInfo = Pick<Page, "id" | "slug" | "documentId" | "title">;
