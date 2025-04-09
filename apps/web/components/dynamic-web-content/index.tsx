import { type CMS } from "@lwo/cms";
import { ContentBlock, FaqCollection } from "@lwo/ui/components";
import { ContentRow, StaticContent } from "components";

type Props = {
  content: CMS.DynamicWebContent[];
};

export function DynamicWebContent(props: Props) {
  const { content } = props;

  return (
    <>
      {content.map((item) => {
        switch (item.__component) {
          case "web.content-blocks":
            return item.content_blocks.map((block) => (
              <ContentBlock block={block} key={block.id} className="mb-8" />
            ));
          case "web.static-content":
            return (
              <StaticContent
                static_content={item.static_content}
                key={item.id}
              />
            );
          case "web.faq-collection":
            return (
              <FaqCollection
                faq_collection={item.faq_collection}
                key={item.id}
              />
            );
          case "web.content-row":
            return <ContentRow content_row={item.content_row} key={item.id} />;
          default:
            return null;
        }
      })}
    </>
  );
}
