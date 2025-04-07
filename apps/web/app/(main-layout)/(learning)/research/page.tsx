import { getPage } from "@lwo/cms";
import { Heading } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { PageContent } from "components";
import { notFound } from "next/navigation";

export default async function ResearchPage() {
  const page = await getPage(pages.RESEARCH.slug);

  if (!page) {
    return notFound();
  }

  return (
    <PageContent page={page}>
      <Heading>{page.title}</Heading>
    </PageContent>
  );
}
