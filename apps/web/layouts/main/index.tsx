"use client";

import { Footer, Header, PrimaryNav } from "@lwo/ui/components";
import cx from "classnames";
import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import { pages } from "routes";
import "./main.css";

type Props = PropsWithChildren<{}>;

export function MainLayout(props: Props) {
  const { children } = props;

  const links = [
    { label: "Home", href: pages.HOME.path },
    { label: "Info", href: pages.VISITOR_INFO.path },
  ];

  const basket = {
    label: "Basket",
    href: pages.BASKET.path,
  };

  return (
    <div
      className={cx(
        "main bg-lwo-blue-lighter flex min-h-screen flex-col items-center justify-start",
      )}
    >
      <Header />
      <PrimaryNav links={links} basket={basket} />

      <main className="mt-4 flex w-full flex-grow justify-center p-4">
        <div className="w-full max-w-screen-lg">
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
