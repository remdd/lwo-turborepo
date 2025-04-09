import { getArticle, getArticleList } from "@lwo/cms";
import { BackLink, PageArea } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { ArticleContent } from "components";
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

  if (!article) {
    return notFound();
  }

  console.log(article);

  return (
    <PageArea>
      <BackLink href={pages.NEWS.path}>Back to news homepage</BackLink>

      <ArticleContent article={article} />
    </PageArea>
  );
}
