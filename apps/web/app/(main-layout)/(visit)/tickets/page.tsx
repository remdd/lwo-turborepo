import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function TicketsPage() {
  return (
    <PageContent>
      <PageTitle>Tickets page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
