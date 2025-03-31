import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function OurWorkPage() {
  return (
    <PageArea>
      <Heading>Our work page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
