import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function BookingCalendarPage() {
  return (
    <PageArea>
      <Heading>Booking calendar page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
