import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function SecondaryAndFePage() {
  return (
    <PageContent>
      <PageTitle>Secondary and FE page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
