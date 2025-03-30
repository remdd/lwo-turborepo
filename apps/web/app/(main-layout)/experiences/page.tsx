import { Heading, Link, Loader, PageContent } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ExperiencesPage() {
  return (
    <PageContent>
      <Heading>Experiences page</Heading>

      <Loader />

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
