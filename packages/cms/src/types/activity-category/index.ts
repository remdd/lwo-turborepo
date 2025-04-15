import type {
  ActivitySubcategory,
  ActivityTicket,
  CollectionType,
  Image,
  RichText,
} from "../";

export type ActivityCategory = CollectionType<{
  name: string;
  activity_category_code: string;
  cover_image: Image;
  is_enabled: boolean;
  description: RichText;
  activity_subcategories: ActivitySubcategory[];
  category_tickets: ActivityTicket[];
  summary: string;
}>;
