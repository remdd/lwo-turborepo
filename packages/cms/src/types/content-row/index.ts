import { CollectionType, ContentBlock, Image, StaticContent } from "..";

export type ContentRow = CollectionType<{
  left_basis: number;
  left_content_block?: ContentBlock;
  left_image?: Image;
  left_static_content?: StaticContent;
  right_content_block?: ContentBlock;
  right_image?: Image;
  right_static_content?: StaticContent;
}>;
