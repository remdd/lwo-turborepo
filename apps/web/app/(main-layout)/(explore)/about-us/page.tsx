import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function AboutUsPage() {
  return (
    <PageContent>
      <Heading>About us page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
