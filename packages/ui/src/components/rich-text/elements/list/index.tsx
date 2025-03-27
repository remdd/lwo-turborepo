import { type CMS } from "@lwo/types";
import { RichTextBlock } from "../";

type Props = {
  block: CMS.RichTextList;
};

export function List(props: Props) {
  const {
    block: { format, children },
  } = props;

  console.log(format, children);

  return format === "unordered" ? (
    <ul>
      {children.map((child, index) => (
        <RichTextBlock block={child} key={index} />
      ))}
    </ul>
  ) : (
    <ol>
      {children.map((child, index) => (
        <RichTextBlock block={child} key={index} />
      ))}
    </ol>
  );
}
