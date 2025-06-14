"use client";

import { CMS } from "@lwo/cms";
import { Calendar, Card, Loader } from "@lwo/ui/components";
import { bookings } from "@lwo/utils";
import { useQuery } from "@tanstack/react-query";
import { addWeeks, isSameDay, subWeeks } from "date-fns";
import { useBasket } from "providers/basket";
import { addSuccessToast } from "providers/toast";
import React, { useEffect, useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import "./booking-calendar.css";
import { AddTicketModal } from "./ui";

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

// @TODO - type properly
type Allocation = any;

export function BookingCalendar(props: Props) {
  const {
    activityTicket,
    activityTicket: {
      ticket_allocation,
      activity_allocation: { code, daily_allocation },
    },
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTickets, setSelectedTickets] = useState(0);
  const { addItem } = useBasket();
  const today = new Date();
  const [calendarStartDate, setCalendarStartDate] = useState(today);

  // Placeholder - get allocations data
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

  const onActiveStartDateChange = ({
    activeStartDate,
    action,
  }: {
    activeStartDate: Date | null;
    action: string;
  }) => {
    if (!activeStartDate) return;
    if (action === "prev") {
      setCalendarStartDate(new Date(activeStartDate));
    } else if (action === "next") {
      setCalendarStartDate(new Date(activeStartDate));
    }
  };

  // Tile configuration & formatting
  function tileContent({ date }: { date: Date }) {
    const isBookable = bookings.getIsBookable({
      activityTicket,
      date,
      today,
    });

    // @TODO - type properly
    const allocationsOnDate =
      allocations.find((a: Allocation) => isSameDay(new Date(a.date), date))
        ?.allocation || 0;
    const dateHasAllocation = hasAllocation(
      daily_allocation,
      allocationsOnDate,
      ticket_allocation,
    );

    if (!isBookable) {
      return (
        <div className="tile-content unbookable">
          <FaRegCircleXmark className="icon mt-4 sm:mt-6" />
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
      allocations.find((a: Allocation) => isSameDay(new Date(a.date), date))
        ?.allocation || 0;

    return (
      !bookings.getIsBookable({ activityTicket, date, today }) ||
      !hasAllocation(daily_allocation, allocationsOnDate, ticket_allocation)
    );
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function onSelectDate(day: Date) {
    setSelectedDate(day);
    setSelectedTickets(1);
    setIsModalOpen(true);
  }

  function onAddToBasket(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e);
    addItem({
      activityTicket,
      date: selectedDate,
      quantity: selectedTickets,
    });
    addSuccessToast(`Ticket${selectedTickets > 1 ? "s" : ""} added to basket!`);
    closeModal();
  }

  const selectedDateAllocations =
    allocations?.find((a: Allocation) =>
      isSameDay(new Date(a.date), selectedDate),
    )?.allocation || 0;
  const selectedDateAvailableAllocations = Math.max(
    daily_allocation - selectedDateAllocations,
    0,
  );
  const selectedDateAvailableTickets = Math.floor(
    selectedDateAvailableAllocations / ticket_allocation,
  );

  // Return calendar
  return isLoading ? (
    <Loader className="m-4 self-center" />
  ) : (
    <Card>
      <Calendar
        tileContent={tileContent}
        tileDisabled={tileDisabled}
        view="month"
        onClickDay={(day) => onSelectDate(day)}
        activeStartDate={calendarStartDate}
        onActiveStartDateChange={onActiveStartDateChange}
      />
      <AddTicketModal
        isOpen={isModalOpen}
        onClose={closeModal}
        activityTicket={activityTicket}
        selectedDate={selectedDate}
        onAddToBasket={onAddToBasket}
        selectedDateAvailableTickets={selectedDateAvailableTickets}
        selectedTickets={selectedTickets}
        setSelectedTickets={setSelectedTickets}
      />
    </Card>
  );
}
