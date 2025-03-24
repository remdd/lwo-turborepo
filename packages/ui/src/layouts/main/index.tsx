import { type PropsWithChildren } from "react";
import { shadows } from "@lwo/ui/fonts";
import cx from "classnames";

type Props = PropsWithChildren<{}>;

export function MainLayout(props: Props) {
  const { children } = props;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen border-8 border-red">
      <h1 className={cx(shadows.className, "bg-orange-700")}>TEST</h1>
      {children}
    </div>
  );
}
