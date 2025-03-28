import { redirect } from "next/navigation";
import { pages } from "routes";

export default async function LearningPage() {
  return redirect(pages.SCHOOLS.path);
}
