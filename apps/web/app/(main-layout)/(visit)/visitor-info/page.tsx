import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function VisitorInfoPage() {
  return (
    <>
      <PageTitle>Visitor info page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
