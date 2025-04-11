"use client";

import { CMS } from "@lwo/cms";
import { Calendar } from "@lwo/ui/components";
import cx from "classnames";
import { isEqual } from "date-fns";
// import { useQuery } from "@tanstack/react-query";

type Props = {
  activityTicket: CMS.ActivityTicket;
};

function tileContent({
  date,
  activeStartDate,
}: {
  date: Date;
  activeStartDate: Date;
}) {
  const isCurrentDate = isEqual(new Date(date), new Date());

  console.log(activeStartDate);
  // const label =

  return (
    <div
      className={cx(
        isCurrentDate && "bg-red-500",
        "bg-lwo-blue-100 flex h-full w-full items-center justify-center rounded",
      )}
    >
      {date.toString()}
    </div>
  );
}

export function BookingCalendar(props: Props) {
  const { activityTicket } = props;

  console.log(activityTicket);

  // const { data, isLoading } = useQuery({
  //   queryKey: ["experience", ticket_code],
  //   queryFn: () =>
  //     fetch(`http://localhost:3100/bookings`).then((res) => res.json()),
  // });

  return <Calendar tileContent={tileContent} view="month" />;
}
