import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ExplorePage() {
  return (
    <PageArea>
      <Heading>Explore the zoo page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
