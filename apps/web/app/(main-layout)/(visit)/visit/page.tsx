import { pages } from "cms/pages";
import { redirect } from "next/navigation";

export default async function VisitPage() {
  return redirect(pages.VISITOR_INFO.path);
}
