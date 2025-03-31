import { getArticle } from "@lwo/cms";
import { Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export default async function ArticlePage(props: any) {
  const { slug } = await props.params;
  const data = await getArticle(slug);

  if (!data) {
    return notFound();
  }

  const { title } = data;

  console.log(data);

  return (
    <PageArea>
      <h1>{title}</h1>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
