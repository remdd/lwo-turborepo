import { Card } from "@repo/ui/card";

type Article = {
  title: string;
  id: string;
};

export const getData = async (): Promise<{ articles: Article[] }> => {
  try {
    const data = await fetch("http://localhost:1337/api/articles");
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

      {JSON.stringify(articles)}

      <ul>
        {articles?.map((article) => <li key={article.id}>{article.title}</li>)}
      </ul>

      <Card title="Shared UI - Card component">This is shared UI!</Card>
    </main>
  );
}
