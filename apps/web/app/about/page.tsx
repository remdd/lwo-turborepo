import { Link } from "@lwo/ui/components";
import { MainLayout } from "@lwo/ui/layouts";
import { staticPages } from "routes";

export default async function About() {
  return (
    <MainLayout>
      <h1>About page</h1>

      <Link href={staticPages.HOME.path}>Home</Link>
    </MainLayout>
  );
}
