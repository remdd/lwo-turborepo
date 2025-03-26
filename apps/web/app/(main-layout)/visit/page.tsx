import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function Visit() {
  return (
    <>
      <PageTitle>Plan your visit</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
