import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export function PageArea(props: Props) {
  const { children } = props;

  return (
    <div className="flex w-full max-w-screen-lg flex-col p-4 pt-8">
      {children}
    </div>
  );
}
