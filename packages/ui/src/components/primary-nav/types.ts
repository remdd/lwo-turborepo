export type Page = {
  title: string;
  path: string;
  slug: string;
};

export type Section = {
  page: Page;
  pages?: Page[];
};

export type Nav = Section[];
