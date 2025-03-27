import { type CMS } from "@lwo/types";
import { RichText } from "@lwo/ui/components";

type Props = {
  block: CMS.RichTextParagraph;
};

export function Paragraph(props: Props) {
  const {
    block: { children },
  } = props;

  return (
    <p className="[&:not(:last-child)]:mb-4">
      <RichText richText={children} />
    </p>
  );
}
