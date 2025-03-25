// @TODO - not sure how to make this useful
// import type ContentTypes from "@lwo/strapi/contentTypes";

export declare namespace CMS {
  export type CollectionType<T> = T & {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };

  export type Page = CollectionType<{
    slug: string;
    title: string;
    id: string;
    content_blocks: ContentBlock[];
  }>;

  // Utility for retrieving minimal ID data for items in a collection
  export type Minimal<T> = Pick<T, "id" | "slug" | "documentId" | "title">;

  export type ContentBlock = CollectionType<{
    body: RichTextElement[];
  }>;

  export type RichTextElementType =
    | "heading"
    | "paragraph"
    | "quote"
    | "list"
    | "image";

  export type RichTextElement =
    | RichTextHeading
    | RichTextParagraph
    | RichTextList;

  export type RichTextHeading = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  };

  export type ParagraphType =
    | "text"
    | "italic"
    | "bold"
    | "underline"
    | "strikethrough"
    | "code"
    | "quote"
    | "link";

  export type RichTextParagraph = {
    text: string;
    type?: ParagraphType;
  };

  export type RichTextList = {
    format: "ordered" | "unordered";
    items: string[];
  };

  // @TODO
  export type RichTextImage = null;

  export type Article = CollectionType<{
    slug: string;
    title: string;
    cover: Image;
  }>;

  export type Image = CollectionType<{
    alternativeText: string | null;
    caption: string | null;
    url: string;
    ext: string;
    // @TODO - resized image formats
    formats: any;
  }>;
}
