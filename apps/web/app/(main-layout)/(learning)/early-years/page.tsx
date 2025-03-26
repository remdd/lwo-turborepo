import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function EarlyYearsPage() {
  return (
    <>
      <PageTitle>Early years page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
