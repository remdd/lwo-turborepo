import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function KeeperAcademyPage() {
  return (
    <>
      <PageTitle>Keeper academy page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
