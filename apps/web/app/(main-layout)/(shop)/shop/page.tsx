import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ShopPage() {
  return (
    <PageContent>
      <Heading>Shop page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
