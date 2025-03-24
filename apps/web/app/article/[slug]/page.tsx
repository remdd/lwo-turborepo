import { Link } from "components/link";
import { staticPages } from "routes";
import { getArticleFromSlug } from "utils/getArticleFromSlug";
import { notFound } from "next/navigation";

export default async function Article(props: App.PageProps<{ slug: string }>) {
  const { slug } = await props.params;
  const data = await getArticleFromSlug(slug);

  if (!data) {
    return notFound();
  }

  return (
    <>
      <h1>About page</h1>

      <p>{slug}</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <Link href={staticPages.HOME.path}>Home</Link>
    </>
  );
}
