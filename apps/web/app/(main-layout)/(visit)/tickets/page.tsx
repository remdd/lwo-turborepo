import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function TicketsPage() {
  return (
    <PageContent>
      <PageTitle>Tickets page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
