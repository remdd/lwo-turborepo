import { getArticleList, getArticleTags, getPage } from "@lwo/cms";
import { Heading, PageArea, Text } from "@lwo/ui/components";
import { pages } from "cms/pages";
import { PageContent } from "components";
import { NewsArticles } from "components/news-articles";
import { notFound } from "next/navigation";

export default async function NewsPage() {
  const page = await getPage(pages.NEWS.slug);
  const articles = await getArticleList({
    sortBy: "createdAt",
    sortOrder: "desc",
    page: 1,
    pageSize: 25,
  });
  const articleTags = await getArticleTags();

  if (!page) {
    return notFound();
  }

  return (
    <>
      <PageContent page={page}>
        <Heading>{page.title}</Heading>
        <Text>Select an article below to read more.</Text>
      </PageContent>

      <PageArea className="pt-0">
        <NewsArticles articles={articles} articleTags={articleTags} />
      </PageArea>
    </>
  );
}
