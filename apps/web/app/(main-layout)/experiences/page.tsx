import { Link, Loader, PageContent, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function ExperiencesPage() {
  return (
    <PageContent>
      <PageTitle>Experiences page</PageTitle>

      <Loader />

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
