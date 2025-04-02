import type { CollectionType } from "../";

export type DaysOfTheWeek = CollectionType<{
  name: string;
  code: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}>;
