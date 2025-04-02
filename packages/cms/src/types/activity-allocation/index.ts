import type { CollectionType, DaysOfTheWeek } from "../";

export type ActivityAllocation = CollectionType<{
  name: string;
  code: string;
  daily_allocation: number;
  days_of_the_week: DaysOfTheWeek;
}>;
