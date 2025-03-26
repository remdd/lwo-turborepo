import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function AboutUs() {
  return (
    <>
      <PageTitle>About us page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
