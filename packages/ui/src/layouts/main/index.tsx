"use client";

import { Footer, Header, PrimaryNav } from "@lwo/ui/components";
import cx from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";
import "./main.css";

type Props = PropsWithChildren<{}> & ComponentProps<typeof PrimaryNav>;

export function MainLayout(props: Props) {
  const { children, links, basket } = props;

  return (
    <div
      className={cx(
        "main bg-lwo-blue-100 flex min-h-screen flex-col items-center justify-start",
      )}
    >
      <Header />
      <PrimaryNav links={links} basket={basket} />

      <main className="mt-4 flex w-full flex-grow justify-center">
        {children}
      </main>

      <Footer />
    </div>
  );
}
