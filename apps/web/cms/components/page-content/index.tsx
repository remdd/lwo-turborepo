import { type CMS } from "@lwo/cms";
import { FaqCollection, PageArea } from "@lwo/ui/components";
import { StaticContent } from "cms/components";
import { ContentBlock } from "cms/components/content-block";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  page: CMS.Page;
}>;

export function PageContent(props: Props) {
  const {
    children,
    page: { content },
  } = props;

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
            return <StaticContent id={item.static_component} key={item.id} />;
          case "web.faq-collection":
            return (
              <FaqCollection
                faq_collection={item.faq_collection}
                key={item.id}
              />
            );
          default:
            return null;
        }
      })}
    </PageArea>
  );
}
