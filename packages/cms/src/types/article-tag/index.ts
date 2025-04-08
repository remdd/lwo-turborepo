import { CollectionType } from "../general";

export type ArticleTag = CollectionType<{
  name: string;
  code: string;
}>;
