import { Heading, Link, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function KeeperAcademyPage() {
  return (
    <PageContent>
      <Heading>Keeper academy page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
