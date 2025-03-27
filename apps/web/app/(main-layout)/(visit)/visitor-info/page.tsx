import { Link, PageTitle } from "@lwo/ui/components";
import { getPageData } from "@lwo/utils/cms";
import { pages } from "routes";

export default async function VisitorInfoPage() {
  const data = await getPageData(pages.VISITOR_INFO.slug);
  console.log(data);

  return (
    <>
      <PageTitle>Visitor info page</PageTitle>

      <Link href={pages.HOME.path}>Home</Link>
    </>
  );
}
