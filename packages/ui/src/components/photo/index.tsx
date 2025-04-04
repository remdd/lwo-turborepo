import { CMS } from "@lwo/cms";
import cx from "classnames";
import NextImage from "next/image";
import { Text } from "../";

type Props = {
  image: CMS.Image;
  rotate?: "right" | "left";
};

export function Photo(props: Props) {
  const {
    rotate,
    image: { url, alternativeText, caption, width, height },
  } = props;

  return (
    <div
      className={cx(
        "relative flex h-auto w-full flex-col border-2 border-blue-100 bg-white p-2 shadow-md",
        rotate === "left" && "-rotate-3",
        rotate === "right" && "rotate-3",
      )}
    >
      <NextImage
        src={url}
        alt={alternativeText || ""}
        width={width}
        height={height}
        className="h-auto w-full"
      />
      {caption && <Text className="mt-4">{caption}</Text>}
    </div>
  );
}
