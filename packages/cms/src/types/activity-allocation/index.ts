import type { CollectionType, WeeklyPattern } from "../";

export type ActivityAllocation = CollectionType<{
  name: string;
  code: string;
  daily_allocation: number;
  booking_lead_days: number;
  weekly_pattern?: WeeklyPattern;
}>;
