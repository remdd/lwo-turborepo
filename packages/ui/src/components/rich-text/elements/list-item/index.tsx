import { type CMS } from "@lwo/types";
import { RichTextBlock } from "../";

type Props = {
  block: CMS.RichTextBlock;
};

export function ListItem(props: Props) {
  const { block } = props;

  return (
    <li>
      <RichTextBlock block={block} />
    </li>
  );
}
