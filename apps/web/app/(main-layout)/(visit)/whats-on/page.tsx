import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function WhatsOnPage() {
  return (
    <PageArea>
      <Heading>What's on page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
