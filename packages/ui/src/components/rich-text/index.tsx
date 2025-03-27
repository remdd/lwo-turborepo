import { type CMS } from "@lwo/types";
import { RichTextBlock } from "./elements";

type RichTextProps = {
  richText: CMS.RichText;
};

export function RichText(props: RichTextProps) {
  const { richText } = props;
  console.log(richText);

  return (
    <>
      {richText.map((block, index) => (
        <RichTextBlock block={block} key={index} />
      ))}

      {/* <pre className="mt-4">{JSON.stringify(richText, null, 2)}</pre> */}
    </>
  );
}
