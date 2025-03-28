import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ResearchPage() {
  return (
    <PageContent>
      <PageTitle>Research page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
