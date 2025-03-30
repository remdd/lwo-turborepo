import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function WhatsOnPage() {
  return (
    <PageContent>
      <Heading>What's on page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
