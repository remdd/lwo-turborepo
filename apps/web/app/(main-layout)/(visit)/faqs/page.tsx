import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function FAQsPage() {
  return (
    <>
      <PageTitle>FAQs page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
