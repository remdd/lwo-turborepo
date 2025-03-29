import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ExplorePage() {
  return (
    <PageContent>
      <PageTitle>Explore the zoo page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
