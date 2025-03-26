import { type CMS } from "@lwo/types";
import cx from "classnames";

type Props = {
  block: CMS.RichTextText;
};

export function Text(props: Props) {
  const {
    block: { text, bold, italic, underline, strikethrough, code },
  } = props;

  if (!(bold || italic || underline || strikethrough || code)) {
    return <>{text}</>;
  }

  return (
    <span
      className={cx(
        bold && "font-bold",
        italic && "italic",
        underline && "underline",
        strikethrough && "line-through",
        code && "bg-gray-100 font-mono",
      )}
    >
      {text}
    </span>
  );
}
