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
    title: string;
    id: string;
    content_blocks: ContentBlock[];
  }>;

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
}
