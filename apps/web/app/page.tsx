import { Card, Header } from "@lwo/ui/components";
import { type CMS } from "@lwo/types";
import { Link } from "components/link";
import { staticPages } from "routes";

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

export default async function Page(props: App.PageProps) {
  console.log(await props.params);
  console.log(await props.searchParams);
  const { pages } = await getData();

  return (
    <main>
      <Header />
      <h1>LWO website</h1>

      <Link href={staticPages.ABOUT.path}>{staticPages.ABOUT.title}</Link>

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
