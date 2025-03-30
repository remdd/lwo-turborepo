import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ExplorePage() {
  return (
    <PageContent>
      <Heading>Explore the zoo page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
