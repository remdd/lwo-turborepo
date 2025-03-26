import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function NewsPage() {
  return (
    <>
      <PageTitle>News page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
