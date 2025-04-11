"use client";

import { PageTransition } from "@lwo/ui/components";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function Template(props: Props) {
  const { children } = props;

  return <PageTransition>{children}</PageTransition>;
}
