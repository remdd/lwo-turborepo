import { Heading, Link, Loader, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";

export default async function ExperiencesPage() {
  return (
    <PageArea>
      <Heading>Experiences page</Heading>

      <Loader />

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
