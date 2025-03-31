import type { CollectionType, Image } from "../";

export type Article = CollectionType<{
  slug: string;
  title: string;
  cover: Image;
}>;

export type ArticleInfo = Pick<Article, "id" | "slug" | "documentId" | "title">;
