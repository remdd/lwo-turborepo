import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ZooMapPage() {
  return (
    <PageArea>
      <Heading>Zoo map page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
