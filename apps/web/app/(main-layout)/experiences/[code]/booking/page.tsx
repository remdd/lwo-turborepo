"use client";

import { BackLink, Calendar, Heading, PageArea } from "@lwo/ui/components";
import { useQuery } from "@tanstack/react-query";
import { pages } from "cms/pages";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BookingPage() {
  const { code } = useParams<{ code: string }>();
  const [bookingDate, setBookingDate] = useState<Date>(new Date());

  const query = useQuery({
    queryKey: ["experience", code],
    queryFn: () =>
      fetch(`http://localhost:3100/bookings`).then((res) => res.json()),
  });

  function onChange(date: Date | null) {
    if (date) {
      setBookingDate(date);
    }
  }

  return (
    <PageArea>
      <BackLink href={pages.NEWS.path}>Back to experience page</BackLink>

      <Heading level={2}>Booking {code}</Heading>

      <Calendar />

      <pre>{JSON.stringify(query.data, null, 2)}</pre>
    </PageArea>
  );
}
