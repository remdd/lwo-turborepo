import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function KeeperAcademyPage() {
  return (
    <PageContent>
      <PageTitle>Keeper academy page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
