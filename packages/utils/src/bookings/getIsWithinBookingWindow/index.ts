import { differenceInCalendarDays } from "date-fns";

export function getIsWithinBookingWindow(
  booking_min_advance_days: number,
  booking_max_advance_days: number,
  date: Date,
  today: Date,
) {
  return (
    differenceInCalendarDays(date, today) >= booking_min_advance_days &&
    differenceInCalendarDays(date, today) <= booking_max_advance_days
  );
}
