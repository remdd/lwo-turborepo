import { CollectionType } from "../general";

export type StaticContentId =
  | "hero-carousel"
  | "general-admission-price-table"
  | "google-map";

export type StaticContent = CollectionType<{
  code: StaticContentId;
}>;
