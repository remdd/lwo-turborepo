import { type CMS } from "@lwo/types";
import { title } from "@lwo/ui/fonts";
import cx from "classnames";
import { RichText } from "../..";

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
        return "h1 mb-4 text-4xl [&:not(:first-child)]:mt-8";
      case 2:
        return "h2 mb-3 text-3xl [&:not(:first-child)]:mt-6";
      case 3:
        return "h3 mb-2 text-2xl [&:not(:first-child)]:mt-6";
      case 4:
        return "h4 mb-1 text-xl [&:not(:first-child)]:mt-4";
      case 5:
        return "h5 mb-1 text-lg [&:not(:first-child)]:mt-4";
      case 6:
        return "h6 mb-1 [&:not(:first-child)]:mt-2";
    }
  })();

  return (
    <h2 className={cx(title.className, classes)}>
      <RichText richText={children} />
    </h2>
  );
}
