import { type CMS } from "@lwo/types";
import { RichText } from "../../";

type Props = {
  block: CMS.RichTextListItem;
};

export function ListItem(props: Props) {
  const {
    block: { children },
  } = props;

  return <RichText richText={children} />;
}
