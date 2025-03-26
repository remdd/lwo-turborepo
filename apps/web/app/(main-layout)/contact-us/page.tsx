import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ContactUsPage() {
  return (
    <>
      <PageTitle>Contact us page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
