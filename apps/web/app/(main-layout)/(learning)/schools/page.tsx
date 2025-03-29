import { ContentBlock, PageContent } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function SchoolsPage() {
  const pageData = await getPageData(pages.SCHOOLS.slug);

  if (!pageData) {
    return notFound();
  }

  const { content_blocks } = pageData;

  return (
    <PageContent>
      {content_blocks.map((block) => (
        <ContentBlock block={block} key={block.documentId} />
      ))}
    </PageContent>
  );
}
