"use client";

import { PrimaryNav as PrimaryNavComponent } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { notFound, usePathname } from "next/navigation";
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
    (page) =>
      pathname === page.path ||
      (pathname.includes(page.path) && page.path !== "/"),
  );

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
    />
  );
}
