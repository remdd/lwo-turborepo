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
        "main relative flex min-h-screen flex-col items-center justify-start bg-blue-50",
      )}
    >
      <Header />
      <PrimaryNav />

      <main className="flex w-full flex-grow justify-center">
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
