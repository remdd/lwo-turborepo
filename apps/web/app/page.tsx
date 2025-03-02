import { Card } from "@lwo/ui/card";
import Image from "next/image";
import { type ApiArticleArticle } from "@lwo/strapi/contentTypes";

export const getData = async (): Promise<{
  articles: ApiArticleArticle["attributes"][];
}> => {
  try {
    const data = await fetch("http://localhost:1337/api/articles?populate=*");
    const { data: articles } = await data.json();
    return { articles };
  } catch (err) {
    console.error(err);
    return { articles: [] };
  }
};

export default async function Page() {
  const { articles } = await getData();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <h1>LWO website</h1>
      </div>

      <pre>{JSON.stringify(articles, null, 2)}</pre>

      <ul>
        {articles?.map((article) => (
          <li key={article.id}>
            {article.title}
            <Image
              src={`http://localhost:1337${article.cover.url}`}
              width={100}
              height={100}
              alt={article.cover.caption}
            />
          </li>
        ))}
      </ul>

      <Card title="Shared UI - Card component">This is shared UI!</Card>
    </main>
  );
}
