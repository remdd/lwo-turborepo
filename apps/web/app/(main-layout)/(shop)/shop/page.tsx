import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ShopPage() {
  return (
    <>
      <PageTitle>Shop page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
