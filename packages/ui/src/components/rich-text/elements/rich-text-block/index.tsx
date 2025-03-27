import { type CMS } from "@lwo/types";
import { Heading, Link, List, ListItem, Paragraph, Text } from "..";

type Props = {
  block: CMS.RichTextBlock;
};

export function RichTextBlock(props: Props) {
  const { block } = props;

  switch (block.type) {
    case "text":
      return <Text block={block} />;
    case "heading":
      return <Heading block={block} />;
    case "paragraph":
      return <Paragraph block={block} />;
    case "list":
      return <List block={block} />;
    case "list-item":
      return <ListItem block={block} />;
    case "link":
      return <Link block={block} />;
    default:
      console.warn(`Unknown block type: ${block.type}`);
      return null;
  }
}
