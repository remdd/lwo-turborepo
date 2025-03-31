import { Heading, Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function KeeperAcademyPage() {
  return (
    <PageArea>
      <Heading>Keeper academy page</Heading>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
