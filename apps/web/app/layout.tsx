import { body } from "@lwo/ui/fonts";
import "@lwo/ui/styles.css";
import cx from "classnames";
import { Providers } from "providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(body.className, "min-h-screen overflow-y-scroll")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
