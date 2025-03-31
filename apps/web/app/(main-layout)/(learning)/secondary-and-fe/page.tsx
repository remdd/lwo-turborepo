import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function SecondaryAndFePage() {
  return (
    <PageArea>
      <Heading>Secondary and FE page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
