"use client";

import { Link } from "@lwo/ui/components";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { FaBasketShopping } from "react-icons/fa6";

type Link = {
  label: ReactNode;
  href: string;
  isSelected?: boolean;
};

type Props = {
  primaryLinks: Link[];
  secondaryLinks: Link[];
  basketPath: string;
  basketItems: number;
};

export function PrimaryNav(props: Props) {
  const { primaryLinks, secondaryLinks, basketPath, basketItems } = props;
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-10 flex w-full flex-col justify-center">
      <div className="flex w-full justify-center bg-blue-700">
        <ul className="flex w-full max-w-screen-lg flex-row flex-wrap items-center justify-start">
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

          <li className="ml-auto inline-block justify-self-end px-4 py-2 lg:py-4">
            <Link href={basketPath}>
              <div className="flex items-center justify-center text-white">
                <AnimatePresence>
                  {basketItems > 0 && (
                    <motion.span
                      key="basket-count"
                      initial={{ scale: 0 }}
                      exit={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ ease: "easeOut", duration: 0.2 }}
                      className="mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-300"
                    >
                      {basketItems}
                    </motion.span>
                  )}
                </AnimatePresence>
                <FaBasketShopping
                  className={cx(
                    basketItems > 0 ? "text-white" : "text-blue-200",
                    "h-5 w-5",
                  )}
                />
              </div>
            </Link>
          </li>
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
            className="relative z-10 flex w-full justify-center border-b border-blue-200 bg-blue-100"
          >
            <ul className="w-full max-w-screen-lg">
              {secondaryLinks.map((link) => (
                <li className="inline-block" key={link.href}>
                  <Link
                    className={cx(
                      "block px-4 py-2 transition-colors duration-200",
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

      <AnimatePresence>
        {basketItems > 0 && pathname !== basketPath && (
          <motion.div
            key="basket-reminder"
            initial={{ y: -48, opacity: 0 }}
            exit={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="border-lwo-orange bg-lwo-yellow relative flex w-full justify-center border-b"
          >
            <Link href={basketPath}>
              <p className="px-8 py-2">
                You have items in your basket! Check out here to complete your
                purchase.
              </p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
