import { CollectionType, Image } from "../";

export type Author = CollectionType<{
  name: string;
  avatar: Image;
}>;
