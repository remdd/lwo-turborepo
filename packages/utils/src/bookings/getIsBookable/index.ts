import { CMS } from "@lwo/cms";
import {
  getIsActive,
  getIsInWeeklyPattern,
  getIsWithinBookingWindow,
} from "..";

type Params = {
  activityTicket: CMS.ActivityTicket;
  date: Date;
  today: Date;
};

export function getIsBookable({ activityTicket, date, today }: Params) {
  const isActive = getIsActive(activityTicket, date);
  const isInWeeklyPattern = getIsInWeeklyPattern(
    activityTicket.activity_allocation.weekly_pattern,
    date,
  );
  const isAfterLeadDays = getIsWithinBookingWindow(
    activityTicket.activity_allocation.booking_min_advance_days,
    activityTicket.activity_allocation.booking_max_advance_days,
    date,
    today,
  );

  return isActive && isInWeeklyPattern && isAfterLeadDays;
}
