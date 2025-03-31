import { getPage } from "@lwo/cms";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";
import { PageContent } from "web-components";

export default async function SchoolsPage() {
  const page = await getPage(pages.SCHOOLS.slug);

  if (!page) {
    return notFound();
  }

  return <PageContent page={page} />;
}
