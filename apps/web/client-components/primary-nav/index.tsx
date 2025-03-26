"use client";

import { Web } from "@lwo/types";
import { PrimaryNav as PrimaryNavComponent } from "@lwo/ui/components";
import { notFound, usePathname } from "next/navigation";
import { pages } from "routes";

function isSubSectionPage(page: Web.Page): page is Web.SubSectionPage {
  return "parent" in page && typeof page.parent === "string";
}

function isSelected(
  page: Web.Page,
  currentPage: Web.Page,
  currentSection: Web.SectionId,
) {
  return (
    page === currentPage ||
    (!isSubSectionPage(page) && page.id === currentSection)
  );
}

export function PrimaryNav() {
  const pathname = usePathname();
  const currentPage = Object.values(pages).find(
    (page) => page.path === pathname,
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

  const siblingPages = isSubSectionPage(currentPage)
    ? Object.values(pages).filter(
        (p) => isSubSectionPage(p) && p.parent === currentPage.parent,
      )
    : [];

  const secondaryLinks = siblingPages.map((page) => ({
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
