import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function CafePage() {
  return (
    <PageContent>
      <PageTitle>Café page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
