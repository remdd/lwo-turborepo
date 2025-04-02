import type { ActivityAllocation, CollectionType } from "../";

export type ActivityTicket = CollectionType<{
  name: string;
  code: string;
  price: number;
  is_enabled: boolean;
  activity_allocation: ActivityAllocation;
  ticket_allocation: number;
}>;
