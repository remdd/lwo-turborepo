import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ZooMapPage() {
  return (
    <>
      <PageTitle>Zoo map page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
