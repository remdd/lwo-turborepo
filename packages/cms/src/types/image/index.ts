import type { CollectionType } from "../";

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
