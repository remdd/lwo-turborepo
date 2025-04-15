import { getActivityTicket } from "@lwo/cms";
import { BackLink, Heading, PageArea, Text } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { BookingCalendar } from "components";
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

      <Heading level={2} className="mb-4">
        Showing bookable dates for &quot;{activityTicket.name}&quot;:
      </Heading>
      <Text className="md-4 mb-6">
        Available dates appear blue, with any existing bookings for the day
        shown in a darker shade. Fully booked dates within the bookable window
        appear grey.
      </Text>

      <BookingCalendar activityTicket={activityTicket} />
    </PageArea>
  );
}
