import { CollectionType, RichText } from "../";

export type ContentBlock = CollectionType<{
  slug: string;
  body: RichText;
  theme: "standard" | "dark";
}>;
