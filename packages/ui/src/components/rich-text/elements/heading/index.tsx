import { type CMS } from "@lwo/cms";
import { title } from "@lwo/ui/fonts";
import cx from "classnames";
import Image from "next/image";
import { RichText } from "../..";
import frog from "./frog.svg";
import lemur from "./lemur.svg";

type Props = {
  block: CMS.RichTextHeading;
};

export function Heading(props: Props) {
  const {
    block: { level, children },
  } = props;

  const classes = (() => {
    switch (level) {
      case 1:
        return "h1 mb-4 text-3xl md:text-4xl [&:not(:first-child)]:mt-8";
      case 2:
        return "h2 mb-3 text-2xl md:text-3xl [&:not(:first-child)]:mt-6";
      case 3:
        return "h3 mb-3 text-xl md:text-2xl [&:not(:first-child)]:mt-6";
      // Headings 4-6 display text at the same size but may be coloured differently or accompanied by additional decoration, eg prefixed svgs
      case 4:
      case 5:
      case 6:
        return "h4 mb-3 text-lg md:text-xl [&:not(:first-child)]:mt-4";
    }
  })();

  return (
    <h2 className={cx(title.className, classes)}>
      {level === 4 && (
        <Image
          src={lemur}
          width={24}
          height={24}
          alt=""
          className="mr-4 inline-block -translate-y-1"
        />
      )}
      {level === 5 && (
        <Image
          src={frog}
          width={24}
          height={24}
          alt=""
          className="mr-4 inline-block -translate-y-1"
        />
      )}
      <RichText richText={children} />
    </h2>
  );
}
