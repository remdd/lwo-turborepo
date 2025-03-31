import { type CMS } from "@lwo/cms";
import { PageArea } from "@lwo/ui/components";
import { StaticContent } from "cms/components";
import { ContentBlock } from "cms/components/content-block";
import { Fragment } from "react";

type Props = {
  page: CMS.Page;
};

export function PageContent(props: Props) {
  const {
    page: { content },
  } = props;

  console.log(content);

  return (
    <PageArea>
      {content.map((item) => {
        switch (item.__component) {
          case "web.content-blocks":
            return item.content_blocks.map((block) => (
              <ContentBlock block={block} key={block.id} />
            ));
          case "web.static-content":
            return <StaticContent id={item.static_component} key={item.id} />;
          case "web.faq-collection":
            return <Fragment key={item.id}>FAQ collection</Fragment>;
          default:
            return null;
        }
      })}
    </PageArea>
  );
}
