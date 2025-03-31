import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function AboutUsPage() {
  return (
    <PageArea>
      <Heading>About us page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
