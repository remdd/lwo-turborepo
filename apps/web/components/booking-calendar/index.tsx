"use client";

import { CMS } from "@lwo/cms";
import { Calendar, Loader } from "@lwo/ui/components";
import { useQuery } from "@tanstack/react-query";
import cx from "classnames";
import { addWeeks, isSameDay, parseISO, subWeeks } from "date-fns";
import { useEffect } from "react";
import {
  getIsActive,
  getIsInWeeklyPattern,
  getIsWithinLeadDays,
} from "./utils";

type Props = {
  activityTicket: CMS.ActivityTicket;
};

export function BookingCalendar(props: Props) {
  const {
    activityTicket,
    activityTicket: {
      ticket_allocation,
      activity_allocation: { code },
    },
  } = props;

  function onChange(e) {
    console.log(e);
  }

  const today = new Date();
  const dateFrom = subWeeks(today, 6).toISOString();
  const dateTo = addWeeks(today, 6).toISOString();

  const { data: allocations, isLoading } = useQuery({
    queryKey: ["allocations", code],
    queryFn: () =>
      fetch(
        `http://localhost:3100/db/bookings/allocations?activity_allocation_code=${code}&date_from=${dateFrom}&date_to=${dateTo}`,
      ).then((res) => res.json()),
  });

  function tileContent({ date }: { date: Date }) {
    const isActive = getIsActive(activityTicket, date);
    const isInWeeklyPattern = getIsInWeeklyPattern(
      activityTicket.activity_allocation.weekly_pattern,
      date,
    );
    const isWithinLeadDays = getIsWithinLeadDays(
      activityTicket.activity_allocation.booking_lead_days,
      date,
      today,
    );

    const hasAllocation = allocations.some((a) =>
      isSameDay(parseISO(a.date), date),
    );

    return (
      <div
        className={cx(
          hasAllocation && "bg-red-200",
          isActive && "!border-blue-400",
          isInWeeklyPattern && "text-color:red-900",
          // isWithinLeadDays && "border-blue-300",
          "border-4",
          "bg-lwo-blue-100 flex h-full w-full items-center justify-center rounded",
        )}
      >
        LABEL
      </div>
    );
  }

  useEffect(() => {
    console.log(allocations);
  }, [allocations]);

  return isLoading ? (
    <Loader className="m-4 self-center" />
  ) : (
    <Calendar tileContent={tileContent} view="month" onChange={onChange} />
  );
}
