import { getPage } from "@lwo/cms";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function VisitorInfoPage() {
  const page = await getPage(pages.VISITOR_INFO.slug);

  console.log(page);

  if (!page) {
    return notFound();
  }

  return <PageContent page={page} />;
}
