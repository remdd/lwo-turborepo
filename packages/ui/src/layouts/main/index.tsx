"use client";

import { Footer, Header, PrimaryNav } from "@lwo/ui/components";
import cx from "classnames";
import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import "./main.css";

type Props = PropsWithChildren<{}>;

export function MainLayout(props: Props) {
  const { children } = props;

  return (
    <div
      className={cx(
        "main bg-lwo-blue-lighter flex min-h-screen flex-col items-center justify-start",
      )}
    >
      <Header />
      <PrimaryNav />

      <main className="mt-4 w-full max-w-screen-lg flex-grow p-4">
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
