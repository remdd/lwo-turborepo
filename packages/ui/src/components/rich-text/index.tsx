import { type CMS } from "@lwo/cms";
import { RichTextBlock } from "./elements";

type RichTextProps = {
  richText: CMS.RichText;
};

export function RichText(props: RichTextProps) {
  const { richText } = props;

  return (
    <>
      {richText.map((block, index) => (
        <RichTextBlock block={block} key={index} />
      ))}
    </>
  );
}
