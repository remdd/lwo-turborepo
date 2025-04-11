"use client";

import { BackLink, Heading, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { useParams } from "next/navigation";

export default function BookingPage() {
  const { code } = useParams<{ code: string }>();

  return (
    <PageArea>
      <BackLink href={pages.NEWS.path}>Back to experience page</BackLink>

      <Heading level={2}>Booking {code}</Heading>
    </PageArea>
  );
}
