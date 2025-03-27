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
    <nav className="sticky top-0 z-50 flex w-full flex-col justify-center">
      <div className="z-10 flex w-full justify-center bg-blue-700">
        <ul className="w-full max-w-screen-lg">
          {primaryLinks.map((link) => (
            <li className="inline-block" key={link.href}>
              <Link
                className={cx(
                  "block px-4 py-2 transition-colors duration-200 lg:py-4",
                  link.isSelected
                    ? "text-lwo-yellow bg-blue-600"
                    : "hover:text-lwo-yellow text-white hover:bg-blue-600",
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
            className="z-0 flex w-full justify-center border-b border-blue-200 bg-blue-100"
          >
            <ul className="w-full max-w-screen-lg">
              {secondaryLinks.map((link) => (
                <li className="inline-block" key={link.href}>
                  <Link
                    className={cx(
                      "block px-4 py-2 transition-colors duration-200 lg:py-4",
                      link.isSelected ? "bg-blue-200" : "hover:bg-blue-200",
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
