import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function CafePage() {
  return (
    <PageArea>
      <Heading>Café page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
