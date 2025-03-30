import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function SecondaryAndFePage() {
  return (
    <PageContent>
      <Heading>Secondary and FE page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
