import { getPage } from "@lwo/cms";
import { PageContent } from "cms/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function FaqsPage() {
  const page = await getPage(pages.FAQS.slug);

  if (!page) {
    return notFound();
  }

  return <PageContent page={page} />;
}
