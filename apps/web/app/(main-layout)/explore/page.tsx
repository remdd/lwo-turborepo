import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function Explore() {
  return (
    <>
      <PageTitle>Explore the zoo page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
