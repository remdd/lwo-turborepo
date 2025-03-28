import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export function ContentRow(props: Props) {
  const { children } = props;

  return <section>{children}</section>;
}
