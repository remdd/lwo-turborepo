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
        return "text-lwo-orange mb-4 text-4xl [&:not(:first-child)]:mt-8";
      case 2:
        return "mb-3 text-3xl text-blue-600 [&:not(:first-child)]:mt-6";
      case 3:
        return "mb-2 text-2xl [&:not(:first-child)]:mt-6";
      case 4:
        return "text-lwo-orange mb-1 text-xl [&:not(:first-child)]:mt-4";
      case 5:
        return "mb-1 text-lg text-blue-600 [&:not(:first-child)]:mt-4";
      case 6:
        return "text-md mb-1 [&:not(:first-child)]:mt-2";
    }
  })();

  return (
    <h2 className={cx(title.className, classes)}>
      <RichText richText={children} />
    </h2>
  );
}
