import { type CMS } from "@lwo/cms";
import { Card, RichText } from "@lwo/ui/components";

type Props = {
  block: CMS.ContentBlock;
  className?: string;
};

export function ContentBlock(props: Props) {
  const { block, className = "" } = props;
  const { body, theme } = block;

  return (
    <Card theme={theme} className={className}>
      <RichText richText={body} />
    </Card>
  );
}
