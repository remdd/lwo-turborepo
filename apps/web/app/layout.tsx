import { body } from "@lwo/ui/fonts";
import { MainLayout } from "@lwo/ui/layouts";
import "@lwo/ui/styles.css";
import cx from "classnames";
import { pages } from "routes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { label: "Home", href: pages.HOME.path },
    { label: "Info", href: pages.VISITOR_INFO.path },
  ];

  const basket = {
    label: "Basket",
    href: pages.BASKET.path,
  };

  return (
    <html lang="en">
      <body className={cx(body.className, "min-h-screen overflow-y-scroll")}>
        <MainLayout links={links} basket={basket}>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
