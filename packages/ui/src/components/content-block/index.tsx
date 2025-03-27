// import { type CMS, type Web } from "@lwo/types";
import { Card, RichText } from "@lwo/ui/components";

type Props = {
  richText: CMS.RichText;
  className?: string;
  theme?: Web.Theme;
};

export function ContentBlock(props: Props) {
  const { richText, theme = "standard", className = "" } = props;

  return (
    <Card className={className}>
      <RichText richText={richText} />
    </Card>
  );
}
