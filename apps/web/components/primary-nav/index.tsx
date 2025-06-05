"use client";

import { PrimaryNav as PrimaryNavComponent } from "@lwo/ui/components";
import { basketPage, nav, pages } from "cms/pages";
import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import { useBasketStore } from "store";

export function PrimaryNav() {
  const pathname = usePathname();
  const currentPage = Object.values(pages).find(
    (page) => pathname.split("/")[1] === page.path.split("/")[1],
  );
  // const { items } = useBasketStore();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

  useEffect(() => {
    setIsMobileNavOpen(false);
    document.body.classList.remove("scroll-lock");
  }, [pathname]);

  if (!currentPage) {
    return notFound();
  }

  return (
    <PrimaryNavComponent
      nav={nav}
      currentPage={currentPage}
      basketPage={basketPage}
      // basketItems={items.length}
      basketItems={1}
      isMobileNavOpen={isMobileNavOpen}
      setIsMobileNavOpen={setIsMobileNavOpen}
    />
  );
}
