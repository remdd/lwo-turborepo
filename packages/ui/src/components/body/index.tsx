import { body } from "@lwo/ui/fonts";
import cx from "classnames";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export function Body(props: Props) {
  const { children } = props;

  return (
    <body className={cx(body.className, "min-h-screen overflow-y-scroll")}>
      {children}
    </body>
  );
}
