import { getPage } from "@lwo/cms";
import { Heading } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { PageContent } from "components";
import { notFound } from "next/navigation";

export default async function SchoolsPage() {
  const page = await getPage(pages.SCHOOLS.slug);

  if (!page) {
    return notFound();
  }

  return (
    <PageContent page={page}>
      <Heading>{page.title}</Heading>
    </PageContent>
  );
}
