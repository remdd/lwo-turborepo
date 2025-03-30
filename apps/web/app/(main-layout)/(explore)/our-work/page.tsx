import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function OurWorkPage() {
  return (
    <PageContent>
      <Heading>Our work page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
