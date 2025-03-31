import { type CMS } from "@lwo/cms";
import { ContentBlock, PageArea } from "@lwo/ui/components";
import { StaticContent } from "web-components";

type Props = {
  page: CMS.Page;
};

export function PageContent(props: Props) {
  const {
    page: { content },
  } = props;

  return (
    <PageArea>
      {content.map((item) => {
        switch (item.__component) {
          case "web.content-blocks":
            return item.content_blocks.map((block) => (
              <ContentBlock block={block} key={block.id} />
            ));
          case "web.static-content":
            return <StaticContent id={item.static_component} />;
          default:
            return <>DEFAULT</>;
        }
      })}
    </PageArea>
  );
}
