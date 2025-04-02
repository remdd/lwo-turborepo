import type { ActivityTicket, CollectionType, Image, RichText } from "../";

export type ActivitySubcategory = CollectionType<{
  name: string;
  code: string;
  description: RichText;
  cover_image: Image;
  is_enabled: boolean;
  activity_tickets: ActivityTicket[];
}>;
