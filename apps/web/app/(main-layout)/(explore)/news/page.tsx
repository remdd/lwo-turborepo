import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function NewsPage() {
  return (
    <PageArea>
      <Heading>News page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
