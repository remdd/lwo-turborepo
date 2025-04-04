import { type CMS } from "@lwo/cms";
import { ContentBlock, FaqCollection, PageArea } from "@lwo/ui/components";
import { ContentRow } from "cms/components/content-row";
import { PropsWithChildren } from "react";
import { StaticContent } from "../static-content";

type Props = PropsWithChildren<{
  page: CMS.Page;
}>;

export function PageContent(props: Props) {
  const {
    children,
    page,
    page: { content },
  } = props;

  console.log(page);

  return (
    <PageArea>
      {children}
      {content.map((item) => {
        switch (item.__component) {
          case "web.content-blocks":
            return item.content_blocks.map((block) => (
              <ContentBlock block={block} key={block.id} />
            ));
          case "web.static-content":
            return (
              <StaticContent
                static_content={item.static_component}
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
    </PageArea>
  );
}
