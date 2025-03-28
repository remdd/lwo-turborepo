import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function NewsPage() {
  return (
    <PageContent>
      <PageTitle>News page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
