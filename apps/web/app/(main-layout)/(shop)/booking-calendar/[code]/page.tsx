import { getActivityCategories } from "@lwo/cms";
import { Calendar, Heading, PageArea } from "@lwo/ui/components";

export async function generateStaticParams() {
  const activityCategories = await getActivityCategories();

  return activityCategories.map((category) => ({
    code: category.code,
  }));
}

export default async function BookingCalendarPage() {
  return (
    <PageArea>
      <Heading>Booking calendar page</Heading>
      <Calendar />
    </PageArea>
  );
}
