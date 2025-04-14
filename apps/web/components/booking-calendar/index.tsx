"use client";

import { CMS } from "@lwo/cms";
import { Calendar, Card, Loader } from "@lwo/ui/components";
import { bookings } from "@lwo/utils";
import { useQuery } from "@tanstack/react-query";
import { addWeeks, isSameDay, subWeeks } from "date-fns";
import { useEffect } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

type Props = {
  activityTicket: CMS.ActivityTicket;
};

function hasAllocation(
  dailyAllocation: number,
  bookedAllocation: number,
  ticketAllocation: number,
) {
  return dailyAllocation - bookedAllocation >= ticketAllocation;
}

export function BookingCalendar(props: Props) {
  const {
    activityTicket,
    activityTicket: {
      ticket_allocation,
      activity_allocation: { code, daily_allocation },
    },
  } = props;

  // Placeholder - get allocations data
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

  useEffect(() => {
    console.log(allocations);
  }, [allocations]);

  // Placeholder change handler
  function onChange(e) {
    console.log(e);
  }

  // Tile configuration & formatting
  function tileContent({ date }: { date: Date }) {
    const isBookable = bookings.getIsBookable({
      activityTicket,
      date,
      today,
    });

    const allocationsOnDate =
      allocations.find((a) => isSameDay(new Date(a.date), date))?.allocation ||
      0;
    const dateHasAllocation = hasAllocation(
      daily_allocation,
      allocationsOnDate,
      ticket_allocation,
    );

    if (!isBookable) {
      return (
        <div className="tile-content unbookable">
          <FaRegCircleXmark className="icon mt-4" />
        </div>
      );
    }

    return dateHasAllocation ? (
      <div className="tile-content bookable">
        <div
          className="allocation"
          style={{
            height: `${Math.min(allocationsOnDate / daily_allocation, 1) * 100}%`,
          }}
        />
      </div>
    ) : (
      <div className="tile-content full" />
    );
  }

  function tileDisabled({ date }: { date: Date }) {
    const allocationsOnDate =
      allocations.find((a) => isSameDay(new Date(a.date), date))?.allocation ||
      0;

    return (
      !bookings.getIsBookable({ activityTicket, date, today }) ||
      !hasAllocation(daily_allocation, allocationsOnDate, ticket_allocation)
    );
  }

  // Return calendar
  return isLoading ? (
    <Loader className="m-4 self-center" />
  ) : (
    <Card>
      <Calendar
        tileContent={tileContent}
        tileDisabled={tileDisabled}
        view="month"
        onChange={onChange}
      />
    </Card>
  );
}
