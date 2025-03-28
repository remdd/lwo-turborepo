import { redirect } from "next/navigation";
import { pages } from "routes";

export default async function VisitPage() {
  return redirect(pages.VISITOR_INFO.path);
}
