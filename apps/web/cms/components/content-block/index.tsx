import { type CMS } from "@lwo/cms";
import { ContentBlock as ContentBlockComponent } from "@lwo/ui/components";
import { FindingUs } from "./finding-us";
import { OpeningTimes } from "./opening-times";

type Props = {
  block: CMS.ContentBlock;
};

export function ContentBlock(props: Props) {
  const {
    block,
    block: { slug },
  } = props;

  switch (slug) {
    case "finding-us":
      return <FindingUs {...block} key={block.id} />;
    case "opening-times":
      return <OpeningTimes {...block} key={block.id} />;
    default:
      return <ContentBlockComponent block={block} key={block.id} />;
  }
}
