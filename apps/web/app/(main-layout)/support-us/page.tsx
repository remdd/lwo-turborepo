import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function SupportUsPage() {
  return (
    <PageContent>
      <Heading>Support us page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
