import { getPage } from "@lwo/cms";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function SchoolsPage() {
  const page = await getPage(pages.SCHOOLS.slug);

  if (!page) {
    return notFound();
  }

  return <PageContent page={page} />;
}
