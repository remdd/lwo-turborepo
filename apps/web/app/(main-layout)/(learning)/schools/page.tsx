import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function SchoolsPage() {
  return (
    <>
      <PageTitle>Schools page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
