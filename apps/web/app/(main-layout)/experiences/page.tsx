import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ExperiencesPage() {
  return (
    <>
      <PageTitle>Experiences page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
