import type { CMS } from "@lwo/cms";
import {
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
} from "date-fns";

export function getIsInWeeklyPattern(
  weekly_pattern: CMS.WeeklyPattern | undefined,
  date: Date,
) {
  console.log(weekly_pattern);
  //  If no weekly pattern defined, we assume it's available every day
  if (!weekly_pattern) {
    return true;
  }

  //  Otherwise, we check the weekly pattern
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    weekly_pattern;

  return (
    (isMonday(date) && monday) ||
    (isTuesday(date) && tuesday) ||
    (isWednesday(date) && wednesday) ||
    (isThursday(date) && thursday) ||
    (isFriday(date) && friday) ||
    (isSaturday(date) && saturday) ||
    (isSunday(date) && sunday)
  );
}
