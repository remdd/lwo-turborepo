import { DesktopNav } from "./desktop";
import { MobileNav } from "./mobile";
import { type Nav, type Page } from "./types";
export type { Nav, Page, Section } from "./types";

type Props = {
  nav: Nav;
  currentPage: Page;
  basketPage: Page;
  basketItems: number;
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
};

export function PrimaryNav(props: Props) {
  const {
    nav,
    currentPage,
    basketPage,
    basketItems,
    isMobileNavOpen,
    setIsMobileNavOpen,
  } = props;

  return (
    <>
      <DesktopNav
        nav={nav}
        currentPage={currentPage}
        basketPage={basketPage}
        basketItems={basketItems}
      />
      <MobileNav
        nav={nav}
        basketPage={basketPage}
        basketItems={basketItems}
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
      />
    </>
  );
}
