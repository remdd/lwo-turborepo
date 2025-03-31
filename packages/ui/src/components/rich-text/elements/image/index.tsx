import { type CMS } from "@lwo/cms";
import NextImage from "next/image";

type Props = {
  block: CMS.RichTextImage;
};

export function Image(props: Props) {
  const {
    block: {
      image: { url, alternativeText },
    },
  } = props;

  /*
    @TODO - discriminate between internal and external links by looking at the url
    
    External links open in new tab
  */

  return (
    <div className="h-48 w-full border-2 border-gray-500">
      <NextImage
        src={url}
        alt={alternativeText || ""}
        fill
        className="object-cover"
      />
    </div>
  );
}
