import { type CMS } from "@lwo/cms";
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
    <ul className="ml-4 mt-4">
      {children.map((child, index) => (
        <li className="mb-4 flex flex-row items-start" key={index}>
          <Image
            src="/img/silhouettes/lemur.svg"
            width={24}
            height={24}
            alt=""
            className="mr-4 -translate-y-1"
          />
          <RichTextBlock block={child} />
        </li>
      ))}
    </ul>
  ) : (
    <ol className="ml-4 mt-2 list-inside list-decimal">
      {children.map((child, index) => (
        <li key={index} className="mb-4">
          <span className="ml-5.5">
            <RichTextBlock block={child} />
          </span>
        </li>
      ))}
    </ol>
  );
}
