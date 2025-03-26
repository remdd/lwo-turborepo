import { Link, PageTitle } from "@lwo/ui/components";
import { pages } from "routes";

export default async function LearningPage() {
  return (
    <>
      <PageTitle>Learning page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
