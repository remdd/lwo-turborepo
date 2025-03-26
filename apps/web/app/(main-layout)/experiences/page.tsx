import { Link, Loader, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ExperiencesPage() {
  return (
    <>
      <PageTitle>Experiences page</PageTitle>

      <Loader />

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
