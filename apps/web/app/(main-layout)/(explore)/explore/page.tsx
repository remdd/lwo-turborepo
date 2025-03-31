import { pages } from "cms/pages";
import { redirect } from "next/navigation";

export default async function ExplorePage() {
  return redirect(pages.ZOO_MAP.path);
}
