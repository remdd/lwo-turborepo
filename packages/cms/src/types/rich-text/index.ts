import type { Image } from "../";

export type RichText = RichTextBlock[];

export type RichTextBlockType =
  | "text"
  | "heading"
  | "paragraph"
  | "image"
  | "link"
  | "list"
  | "list-item";

export type RichTextBlock =
  | RichTextText
  | RichTextHeading
  | RichTextParagraph
  | RichTextImage
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

export type RichTextImage = {
  type: "image";
  image: Image;
};
