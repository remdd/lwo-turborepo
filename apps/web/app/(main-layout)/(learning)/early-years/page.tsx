import { getPage } from "@lwo/cms";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";
import { PageContent } from "web-components";

export default async function EarlyYearsPage() {
  const page = await getPage(pages.EARLY_YEARS.slug);

  if (!page) {
    return notFound();
  }

  return <PageContent page={page} />;
}
