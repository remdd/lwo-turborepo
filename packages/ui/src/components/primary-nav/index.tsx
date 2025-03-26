"use client";

import { Link } from "@lwo/ui/components";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode } from "react";

type Link = {
  label: ReactNode;
  href: string;
  isSelected?: boolean;
};

type Props = {
  primaryLinks: Link[];
  secondaryLinks: Link[];
  basketLink?: Link;
};

export function PrimaryNav(props: Props) {
  const { primaryLinks, secondaryLinks, basketLink } = props;

  return (
    <nav className="sticky top-0 flex w-full flex-col justify-center">
      <div className="bg-lwo-blue-700 z-10 flex w-full justify-center">
        <ul className="w-full max-w-screen-lg">
          {primaryLinks.map((link) => (
            <li className="inline-block" key={link.href}>
              <Link
                className={cx(
                  "block p-4 transition-colors duration-200",
                  link.isSelected
                    ? "bg-lwo-blue-600 text-lwo-yellow"
                    : "hover:bg-lwo-blue-600 hover:text-lwo-yellow text-white",
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {secondaryLinks.length > 0 && (
          <motion.div
            key="secondary-nav"
            initial={{ y: -48, opacity: 0 }}
            exit={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="bg-lwo-blue-100 z-0 flex w-full justify-center"
          >
            <ul className="w-full max-w-screen-lg">
              {secondaryLinks.map((link) => (
                <li className="inline-block" key={link.href}>
                  <Link
                    className={cx(
                      "block p-4 transition-colors duration-200",
                      link.isSelected
                        ? "bg-lwo-blue-200"
                        : "hover:bg-lwo-blue-200",
                    )}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
