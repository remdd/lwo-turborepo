import { getPage } from "@lwo/cms";
import { Heading } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { PageContent } from "components";
import { notFound } from "next/navigation";

export default async function OurWorkPage() {
  const page = await getPage(pages.OUR_WORK.slug);

  if (!page) {
    return notFound();
  }

  return (
    <PageContent page={page}>
      <Heading>{page.title}</Heading>
    </PageContent>
  );
}
