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
        "relative flex h-auto max-w-fit flex-col rounded border border-blue-800 bg-white p-2 shadow-lg",
        rotate === "left" && "-rotate-3",
        rotate === "right" && "rotate-3",
      )}
    >
      <NextImage
        src={url}
        alt={alternativeText || ""}
        width={width}
        height={height}
        className="h-auto max-h-96 w-full object-contain"
      />
      {caption && <Text className="my-4">{caption}</Text>}
    </div>
  );
}
