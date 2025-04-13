import { differenceInCalendarDays } from "date-fns";

export function getIsWithinLeadDays(
  booking_lead_days: number,
  date: Date,
  today: Date,
) {
  return differenceInCalendarDays(date, today) >= booking_lead_days;
}
