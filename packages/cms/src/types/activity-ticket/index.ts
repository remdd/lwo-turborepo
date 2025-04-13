import type { ActivityAllocation, CollectionType } from "../";

export type ActivityTicket = CollectionType<{
  name: string;
  activity_ticket_code: string;
  price: number;
  is_enabled: boolean;
  activity_allocation: ActivityAllocation;
  ticket_allocation: number;
  start_date?: string;
  end_date?: string;
}>;
