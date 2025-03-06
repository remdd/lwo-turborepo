import { Card, RichText } from "@lwo/ui/components";
import { type CMS } from "@lwo/types";
// import { richTextResolver } from "@lwo/utils/resolvers/rich-text";

export const getData = async (): Promise<{
  pages: CMS.Page[];
}> => {
  try {
    const data = await fetch("http://localhost:1337/api/pages?populate=*");
    const { data: pages } = await data.json();
    return { pages };
  } catch (err) {
    console.error(err);
    return { pages: [] };
  }
};

export default async function Page() {
  const { pages } = await getData();

  test();

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <h1>LWO website</h1>
      </div>

      <pre>{JSON.stringify(pages, null, 2)}</pre>

      <ul>
        {pages?.map((page) => (
          <li key={page.id}>
            <h2>{page.title}</h2>
            {/* <RichText richText={page.content_blocks[0].body} /> */}
          </li>
        ))}
      </ul>

      <Card title="Shared UI - Card component">This is shared UI!</Card>
    </main>
  );
}
