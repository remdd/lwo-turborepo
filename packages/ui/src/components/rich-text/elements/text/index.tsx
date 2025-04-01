import { type CMS } from "@lwo/cms";
import cx from "classnames";
import { replaceSpecials } from "./replaceSpecials";

type Props = {
  block: CMS.RichTextText;
};

export function Text(props: Props) {
  const {
    block: { text: inputText, bold, italic, underline, strikethrough, code },
  } = props;

  const text = replaceSpecials(inputText);

  if (!(bold || italic || underline || strikethrough || code)) {
    return <span>{text}</span>;
  }

  return (
    <span
      className={cx(
        bold && "font-bold",
        italic && "italic",
        underline && "underline",
        strikethrough && "line-through",
        code && "rounded bg-gray-200 px-2 py-1 font-mono text-xs text-black",
      )}
    >
      {text}
    </span>
  );
}
