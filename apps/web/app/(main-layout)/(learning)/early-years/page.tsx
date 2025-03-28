import { ContentBlock, PageContent } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { notFound } from "next/navigation";
import { pages } from "routes";

export default async function EarlyYearsPage() {
  const pageData = await getPageData(pages.EARLY_YEARS.slug);

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
