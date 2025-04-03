import { CMS } from "@lwo/cms";
import NextImage from "next/image";

type Props = {
  image: CMS.Image;
};

export function Image(props: Props) {
  const {
    image: { url, alternativeText },
  } = props;

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
