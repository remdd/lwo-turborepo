import { type CMS } from "@lwo/types";
import { Link as LinkComponent, RichText } from "@lwo/ui/components";

type Props = {
  block: CMS.RichTextLink;
};

export function Link(props: Props) {
  const {
    block: { url, children },
  } = props;

  /*
    @TODO - discriminate between internal and external links by looking at the url
    
    External links open in new tab
  */

  return (
    <LinkComponent href={url} className="link">
      <RichText richText={children} />
    </LinkComponent>
  );
}
