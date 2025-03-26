import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function VisitorInfo() {
  return (
    <>
      <PageTitle>Visitor info</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
