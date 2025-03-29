import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function OurWorkPage() {
  return (
    <PageContent>
      <PageTitle>Our work page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
