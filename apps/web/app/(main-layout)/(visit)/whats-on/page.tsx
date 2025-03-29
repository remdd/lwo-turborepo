import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function WhatsOnPage() {
  return (
    <PageContent>
      <PageTitle>What's on page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
