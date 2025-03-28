import { Link, PageContent } from "@lwo/ui/components";
import { getArticle } from "@lwo/utils/cms";
import { notFound } from "next/navigation";
import { pages } from "routes";

export default async function ArticlePage(
  props: App.PageProps<{ slug: string }>,
) {
  const { slug } = await props.params;
  const data = await getArticle(slug);

  if (!data) {
    return notFound();
  }

  const { title } = data;

  console.log(data);

  return (
    <PageContent>
      <h1>{title}</h1>

      <Link href={pages.HOME.path}>Home</Link>
    </PageContent>
  );
}
