import { Link, PageContent, PageTitle } from "@lwo/ui/components";
import { redirect } from "next/navigation";
import { pages } from "routes";

export default async function VisitPage() {
  return redirect(pages.VISITOR_INFO.path);

  return (
    <PageContent>
      <PageTitle>Plan your visit</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
