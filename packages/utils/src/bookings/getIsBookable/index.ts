import { CMS } from "@lwo/cms";
import { getIsActive, getIsAfterLeadDays, getIsInWeeklyPattern } from "..";

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
  const isAfterLeadDays = getIsAfterLeadDays(
    activityTicket.activity_allocation.booking_lead_days,
    date,
    today,
  );

  return isActive && isInWeeklyPattern && isAfterLeadDays;
}
