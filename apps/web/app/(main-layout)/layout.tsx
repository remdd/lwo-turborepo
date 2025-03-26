import { Footer, Header } from "@lwo/ui/components";
import "@lwo/ui/styles.css";
import cx from "classnames";
import { PrimaryNav } from "client-components";
import "./main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "main bg-lwo-blue-50 relative flex min-h-screen flex-col items-center justify-start",
      )}
    >
      <Header />
      <PrimaryNav />

      <main className="mt-4 flex w-full flex-grow justify-center">
        {children}
      </main>

      <Footer />
    </div>
  );
}
