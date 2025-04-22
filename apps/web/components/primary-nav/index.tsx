"use client";

import { PrimaryNav as PrimaryNavComponent } from "@lwo/ui/components";
import { pages, sections } from "cms/pages";
import { notFound, usePathname } from "next/navigation";
import { useBasketStore } from "store";
import * as Pages from "types/pages";

function isSubSectionPage(page: Pages.Page): page is Pages.SubSectionPage {
  return "parent" in page && typeof page.parent === "string";
}

function isSelected(
  page: Pages.Page,
  currentPage: Pages.Page,
  currentSection: Pages.SectionId,
) {
  return (
    page === currentPage ||
    (!isSubSectionPage(page) && page.id === currentSection)
  );
}

export function PrimaryNav() {
  const pathname = usePathname();
  const currentPage = Object.values(pages).find(
    (page) => pathname.split("/")[1] === page.path.split("/")[1],
  );
  const { items } = useBasketStore();

  if (!currentPage) {
    return notFound();
  }

  const currentSection = isSubSectionPage(currentPage)
    ? currentPage.parent
    : currentPage.id;

  const primaryLinks = [
    pages.HOME,
    pages.VISIT,
    pages.EXPLORE,
    pages.EXPERIENCES,
    pages.SUPPORT_US,
    pages.LEARNING,
    pages.CONTACT_US,
  ].map((page) => ({
    label: page.title,
    href: page.path,
    isSelected: isSelected(page, currentPage, currentSection),
  }));

  const sectionPages =
    Object.values(pages).filter(
      (p) => isSubSectionPage(p) && p.parent === currentSection,
    ) || [];

  const secondaryLinks = sectionPages.map((page) => ({
    label: page.title,
    href: page.path,
    isSelected: isSelected(page, currentPage, currentSection),
  }));

  return (
    <PrimaryNavComponent
      primaryLinks={primaryLinks}
      secondaryLinks={secondaryLinks}
      sections={sections}
      basketPath={pages.BASKET.path}
      basketItems={items.length}
    />
  );
}
