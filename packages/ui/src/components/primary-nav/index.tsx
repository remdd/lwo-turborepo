"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";

export type LinkProp = {
  label: ReactNode;
  href: string;
  isSelected?: boolean;
};

type Props = {
  primaryLinks: LinkProp[];
  secondaryLinks: LinkProp[];
  basketPath: string;
  basketItems: number;
};

export function PrimaryNav(props: Props) {
  const { primaryLinks, secondaryLinks, basketPath, basketItems } = props;
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

  return (
    <>
      <DesktopNav
        primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
        basketPath={basketPath}
        basketItems={basketItems}
        pathname={pathname}
      />
      <MobileNav
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
        primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
        basketPath={basketPath}
        basketItems={basketItems}
        pathname={pathname}
      />
    </>
  );
}
