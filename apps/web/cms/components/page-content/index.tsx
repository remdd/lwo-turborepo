import { type CMS } from "@lwo/cms";
import { PageArea } from "@lwo/ui/components";
import { StaticContent } from "cms/components";
import { ContentBlock } from "cms/components/content-block";

type Props = {
  page: CMS.Page;
};

export function PageContent(props: Props) {
  const {
    page: { content },
  } = props;

  return (
    <PageArea>
      {content.map((item, index) => {
        switch (item.__component) {
          case "web.content-blocks":
            return item.content_blocks.map((block) => (
              <ContentBlock block={block} key={block.id} />
            ));
          case "web.static-content":
            return <StaticContent id={item.static_component} key={index} />;
          case "web.faq-collection":
            return <>FAQ collection</>;
          default:
            return null;
        }
      })}
    </PageArea>
  );
}
