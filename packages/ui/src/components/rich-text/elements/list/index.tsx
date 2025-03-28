import { type CMS } from "@lwo/types";
import Image from "next/image";
import { RichTextBlock } from "../";

type Props = {
  block: CMS.RichTextList;
};

export function List(props: Props) {
  const {
    block: { format, children },
  } = props;

  return format === "unordered" ? (
    <ul className="mt-4">
      {children.map((child, index) => (
        <li className="mb-2 flex flex-row items-start" key={index}>
          <Image
            src="/img/silhouettes/lemur.svg"
            width={24}
            height={24}
            alt=""
            className="mr-2 -translate-y-2"
          />
          <RichTextBlock block={child} />
        </li>
      ))}
    </ul>
  ) : (
    <ol className="mt-2 list-inside list-decimal">
      {children.map((child, index) => (
        <li key={index} className="mb-2">
          <span className="ml-3.5">
            <RichTextBlock block={child} />
          </span>
        </li>
      ))}
    </ol>
  );
}
