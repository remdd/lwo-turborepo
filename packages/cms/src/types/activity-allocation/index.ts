import type { CollectionType, WeeklyPattern } from "../";

export type ActivityAllocation = CollectionType<{
  name: string;
  code: string;
  daily_allocation: number;
  booking_min_advance_days: number;
  booking_max_advance_days: number;
  weekly_pattern?: WeeklyPattern;
}>;
