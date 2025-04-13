import type { CMS } from "@lwo/cms";
import { isAfter, isBefore, isEqual } from "date-fns";

export function getIsActive(activityTicket: CMS.ActivityTicket, date: Date) {
  const { is_enabled, start_date, end_date } = activityTicket;

  const startDate = start_date ? new Date(start_date) : undefined;
  const endDate = end_date ? new Date(end_date) : undefined;

  return (
    is_enabled &&
    (!startDate || isEqual(date, startDate) || isAfter(date, startDate)) &&
    (!endDate || isEqual(date, endDate) || isBefore(date, endDate))
  );
}
