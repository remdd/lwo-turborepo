import { Link, PageTitle } from "@lwo/ui/components";
import { MainLayout } from "layouts";
import { pages } from "routes";

export default async function AboutUs() {
  return (
    <MainLayout>
      <PageTitle>About page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </MainLayout>
  );
}
