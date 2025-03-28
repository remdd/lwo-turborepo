import { ContentBlock, PageContent, PageTitle } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { pages } from "routes";

export default async function VisitorInfoPage() {
  const data = await getPageData(pages.VISITOR_INFO.slug);
  console.log(data);

  return (
    <PageContent>
      <PageTitle>Visitor info page</PageTitle>

      {data?.content_blocks.map((block, index) => (
        <ContentBlock
          theme={block.theme}
          key={index}
          richText={block.body}
          className="mb-8"
        />
      ))}
    </PageContent>
  );
}
