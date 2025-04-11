"use client";

import { CMS } from "@lwo/cms";
import { Calendar, Loader } from "@lwo/ui/components";
import { useQuery } from "@tanstack/react-query";
import cx from "classnames";
import { addWeeks, isSameDay, parseISO, subWeeks } from "date-fns";
import { useEffect } from "react";

type Props = {
  activityTicket: CMS.ActivityTicket;
};

export function BookingCalendar(props: Props) {
  const {
    activityTicket: {
      activity_allocation: { code },
    },
  } = props;

  function onChange(e) {
    console.log(e);
  }

  const dateFrom = subWeeks(new Date(), 6).toISOString();
  const dateTo = addWeeks(new Date(), 6).toISOString();

  const { data: allocations, isLoading } = useQuery({
    queryKey: ["allocations", code],
    queryFn: () =>
      fetch(
        `http://localhost:3100/db/bookings/allocations?activity_allocation_code=${code}&date_from=${dateFrom}&date_to=${dateTo}`,
      ).then((res) => res.json()),
  });

  function tileContent({ date }: { date: Date }) {
    const hasAllocation = allocations.some((a) =>
      isSameDay(parseISO(a.date), date),
    );

    return (
      <div
        className={cx(
          hasAllocation && "bg-red-500",
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
