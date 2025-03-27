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
        code && "rounded bg-gray-200 px-2 py-1 font-mono text-xs",
      )}
    >
      {text}
    </span>
  );
}
