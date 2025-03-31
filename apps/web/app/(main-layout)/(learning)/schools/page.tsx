import { getPage } from "@lwo/cms";
import { ContentBlock, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function SchoolsPage() {
  const pageData = await getPage(pages.SCHOOLS.slug);

  if (!pageData) {
    return notFound();
  }

  const { content_blocks } = pageData;

  return (
    <PageArea>
      {content_blocks.map((block) => (
        <ContentBlock block={block} key={block.documentId} />
      ))}
    </PageArea>
  );
}
