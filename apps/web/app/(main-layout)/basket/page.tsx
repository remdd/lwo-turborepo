import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function BasketPage() {
  return (
    <>
      <PageTitle>Basket page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
