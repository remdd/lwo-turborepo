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
    <span className="text-md whitespace-pre-line break-words lg:text-lg">
      <RichText richText={children} />
    </span>
  );
}
