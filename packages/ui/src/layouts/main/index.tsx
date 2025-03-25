import cx from "classnames";
import { type PropsWithChildren } from "react";
import "./main.css";

type Props = PropsWithChildren<{}>;

export function MainLayout(props: Props) {
  const { children } = props;

  return (
    <main
      className={cx(
        "main bg-lwo-blue-lighter flex min-h-screen flex-col items-center justify-start",
      )}
    >
      {children}
    </main>
  );
}
