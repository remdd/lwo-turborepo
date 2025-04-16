import { getActivityTicket } from "@lwo/cms";
import { BackLink, Card, Heading, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { BookingCalendar } from "components";
import { AvailabilityKey } from "components/booking-calendar/ui";
import { notFound } from "next/navigation";

export default async function BookingPage({
  params,
}: {
  params: Promise<{
    activity_category_code: string;
    activity_ticket_code: string;
  }>;
}) {
  const { activity_category_code, activity_ticket_code } = await params;
  const activityTicket = await getActivityTicket(activity_ticket_code);

  if (!activityTicket) {
    return notFound();
  }

  return (
    <PageArea>
      <BackLink href={`${pages.EXPERIENCES.path}/${activity_category_code}`}>
        Back to experience page
      </BackLink>

      <Card className="my-6">
        <Heading level={2} className="mb-4">
          Showing availability for &quot;{activityTicket.name}&quot;
        </Heading>
        <AvailabilityKey />
      </Card>

      <BookingCalendar activityTicket={activityTicket} />
    </PageArea>
  );
}
