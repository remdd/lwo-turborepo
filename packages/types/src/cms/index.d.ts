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
    single_type?: string;
  }>;

  // @TODO - single type
  export type SingleTypeId = "HERO_CAROUSEL";

  export type HeroCarousel = CollectionType<{
    images: Image[];
  }>;

  type SingleTypeData = any;

  // Utility for retrieving minimal ID data for items in a collection
  export type Minimal<T> = Pick<T, "id" | "slug" | "documentId" | "title">;

  export type ContentBlock = CollectionType<{
    slug: string;
    body: RichText;
    theme: "standard" | "dark";
  }>;

  // Rich text
  export type RichText = RichTextBlock[];

  export type RichTextBlockType =
    | "text"
    | "heading"
    | "paragraph"
    | "link"
    | "list"
    | "list-item";

  export type RichTextBlock =
    | RichTextText
    | RichTextHeading
    | RichTextParagraph
    | RichTextLink
    | RichTextList
    | RichTextListItem;

  export type RichTextText = {
    type: "text";
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    text: string;
  };

  export type RichTextHeading = {
    type: "heading";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: RichTextBlock[];
  };

  export type RichTextParagraph = {
    type: "paragraph";
    children: RichTextBlock[];
  };

  export type RichTextLink = {
    type: "link";
    url: string;
    children: RichTextBlock[];
  };

  export type RichTextList = {
    type: "list";
    format: "ordered" | "unordered";
    children: RichTextBlock[];
  };

  export type RichTextListItem = {
    type: "list-item";
    children: RichTextBlock[];
  };
  // End rich text

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
    width: number;
    height: number;
    // @TODO - formats
    formats: any;
  }>;

  export type Faq = CollectionType<{
    question: string;
    answer: RichTextElement[];
  }>;
}
