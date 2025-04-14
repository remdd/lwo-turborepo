import { differenceInCalendarDays } from "date-fns";

export function getIsAfterLeadDays(
  booking_lead_days: number,
  date: Date,
  today: Date,
) {
  return differenceInCalendarDays(date, today) >= booking_lead_days;
}
