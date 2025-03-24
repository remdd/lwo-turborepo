type StaticPageId = "HOME" | "ABOUT" | "CONTACT";

type StaticPage = {
  title: string;
  path: string;
  slug: string;
};

export const staticPages: Record<StaticPageId, StaticPage> = {
  HOME: {
    title: "Home",
    slug: "home",
    path: "/",
  },
  ABOUT: {
    title: "About",
    slug: "about",
    path: "/about",
  },
  CONTACT: {
    title: "Contact us",
    slug: "contact",
    path: "/contact",
  },
} as const;
