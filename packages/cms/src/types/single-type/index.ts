import type { CollectionType, Image } from "../";

export type SingleTypeId = "HERO_CAROUSEL" | "GENERAL_ADMISSION";

export type HeroCarousel = CollectionType<{
  images: Image[];
}>;

export type SingleTypeData = any;
