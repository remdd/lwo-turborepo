import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function NewsPage() {
  return (
    <PageContent>
      <Heading>News page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
