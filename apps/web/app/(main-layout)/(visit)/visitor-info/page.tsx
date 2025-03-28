import { ContentBlock, PageContent, PageTitle } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { notFound } from "next/navigation";
import { pages } from "routes";

export default async function VisitorInfoPage() {
  const pageData = await getPageData(pages.VISITOR_INFO.slug);

  if (!pageData) {
    return notFound();
  }

  const { content_blocks } = pageData;

  return (
    <PageContent>
      <PageTitle>Visitor info page</PageTitle>

      {content_blocks.map((block) => (
        <ContentBlock block={block} key={block.documentId} />
      ))}
    </PageContent>
  );
}
