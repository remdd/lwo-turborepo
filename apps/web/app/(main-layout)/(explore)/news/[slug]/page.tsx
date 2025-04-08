import { getArticle, getArticleList } from "@lwo/cms";
import { Link, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articles = await getArticleList();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await getArticle(slug);

  console.log(article?.title);

  if (!article) {
    return notFound();
  }

  const { title } = article;

  console.log(article);

  return (
    <PageArea>
      <h1>{title}</h1>

      <Link href={pages.HOME.path}>Home</Link>
    </PageArea>
  );
}
