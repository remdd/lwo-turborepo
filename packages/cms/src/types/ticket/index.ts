import type { CollectionType } from "../";

export type Ticket = CollectionType<{
  name: string;
  code: string;
  price: number;
  gift_aid: boolean;
}>;
