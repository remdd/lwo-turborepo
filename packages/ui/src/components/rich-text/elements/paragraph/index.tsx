import { type CMS } from "@lwo/cms";
import { RichText, Text } from "@lwo/ui/components";

type Props = {
  block: CMS.RichTextParagraph;
};

export function Paragraph(props: Props) {
  const {
    block: { children },
  } = props;

  return (
    <Text className="[&:not(:last-child)]:mb-4">
      <RichText richText={children} />
    </Text>
  );
}
