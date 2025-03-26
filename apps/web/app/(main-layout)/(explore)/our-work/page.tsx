import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function OurWorkPage() {
  return (
    <>
      <PageTitle>Our work page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
