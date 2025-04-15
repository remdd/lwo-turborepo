import { Footer, Header } from "@lwo/ui/components";
import "@lwo/ui/styles.css";
import cx from "classnames";
import { PrimaryNav } from "components";
import { ToastContainer } from "react-toastify";
import "./main.css";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        "relative flex min-h-screen flex-col items-center justify-start bg-blue-50",
      )}
    >
      <div className="layout-bg fixed h-screen w-screen" />
      <Header />
      <PrimaryNav />

      <main className="z-10 flex w-full flex-grow justify-center">
        {children}
        <ToastContainer
          // autoClose={5000000}
          // autoClose={false}
          position="bottom-right"
        />
      </main>

      <Footer />
    </div>
  );
}
