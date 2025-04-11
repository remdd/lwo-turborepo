import { getActivityTicket } from "@lwo/cms";
import { BackLink, Heading, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { BookingCalendar } from "components";

export default async function BookingPage({
  params,
}: {
  params: Promise<{
    activity_ticket_code: string;
  }>;
}) {
  const { activity_ticket_code } = await params;
  const activityTicket = await getActivityTicket(activity_ticket_code);

  console.log(activityTicket);

  return (
    <PageArea>
      <BackLink href={pages.NEWS.path}>Back to experience page</BackLink>

      <Heading level={2}>Booking {activity_ticket_code}</Heading>

      <BookingCalendar activityTicket={activityTicket} />
    </PageArea>
  );
}
