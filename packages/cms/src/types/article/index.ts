import type {
  ArticleTag,
  Author,
  CollectionType,
  Image,
  WebContentBlocks,
  WebContentRow,
  WebFaqCollection,
} from "../";

type DynamicArticleContent =
  | WebContentRow
  | WebContentBlocks
  | WebFaqCollection;

export type Article = CollectionType<{
  slug: string;
  title: string;
  cover_image?: Image;
  author: Author;
  article_tags: ArticleTag[];
  content: DynamicArticleContent[];
  summary?: string;
}>;

export type ArticleInfo = Exclude<
  Article,
  "content" | "author" | "cover_image"
>;
