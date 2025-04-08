import { getArticleList, getPage } from "@lwo/cms";
import { Heading } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { PageContent } from "components";
import { notFound } from "next/navigation";

export default async function NewsPage() {
  const page = await getPage(pages.NEWS.slug);
  const articles = await getArticleList({
    sortBy: "publishedAt",
    sortOrder: "desc",
    page: 1,
    pageSize: 2,
  });

  if (!page) {
    return notFound();
  }

  return (
    <PageContent page={page}>
      <Heading>{page.title}</Heading>
      <pre>
        {JSON.stringify(
          articles.map((a) => a.title),
          null,
          2,
        )}
      </pre>
    </PageContent>
  );
}
