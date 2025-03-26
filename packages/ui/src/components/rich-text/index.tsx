import { type CMS } from "@lwo/types";
import { Heading, List, Paragraph, Text } from "./types";

type Props = {
  richText: CMS.RichText;
};

export function RichText(props: Props) {
  const { richText } = props;
  console.log(richText);

  return (
    <>
      {richText.map((block, index) => {
        switch (block.type) {
          case "text":
            return <Text block={block} key={index} />;
          case "heading":
            return <Heading block={block} key={index} />;
          case "paragraph":
            return <Paragraph block={block} key={index} />;
          case "list":
            return <List key={index} />;
          // case "image":
          //   return <img key={index} src={block.url} alt={block.alt} />;
          // case "link":
          //   return <a key={index} href={block.url}>{block.text}</a>;
          default:
            console.warn(`Unknown block type: ${block.type}`);
            return null;
        }
      })}

      {/* <pre className="mt-4">{JSON.stringify(richText, null, 2)}</pre> */}
    </>
  );
}
