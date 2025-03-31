import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function TicketsPage() {
  return (
    <PageArea>
      <Heading>Tickets page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
