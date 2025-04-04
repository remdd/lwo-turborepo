import type {
  ActivitySubcategory,
  ActivityTicket,
  CollectionType,
  Image,
  RichText,
} from "../";

export type ActivityCategory = CollectionType<{
  name: string;
  code: string;
  cover_image: Image;
  is_enabled: boolean;
  description: RichText;
  activity_subcategories: ActivitySubcategory[];
  activity_tickets?: ActivityTicket[];
  summary: string;
}>;
