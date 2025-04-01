import { type CMS } from "@lwo/cms";
import { RichText } from "../../";

type Props = {
  block: CMS.RichTextListItem;
};

export function ListItem(props: Props) {
  const {
    block: { children },
  } = props;

  return (
    <span>
      <RichText richText={children} />
    </span>
  );
}
