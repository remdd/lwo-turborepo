import { Footer, Header } from "@lwo/ui/components";
import "@lwo/ui/styles.css";
import cx from "classnames";
import { PrimaryNav } from "cms/components";
import "./main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "main relative flex min-h-screen flex-col items-center justify-start bg-blue-50",
      )}
    >
      <Header />
      <PrimaryNav />

      <main className="flex w-full flex-grow justify-center">{children}</main>

      <Footer />
    </div>
  );
}
