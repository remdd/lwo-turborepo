import { pages } from "cms/pages";
import { redirect } from "next/navigation";

export default async function LearningPage() {
  return redirect(pages.SCHOOLS.path);
}
