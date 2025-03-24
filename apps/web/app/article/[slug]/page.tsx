import { Link } from "components/link";
import { staticPages } from "routes";
import { getArticleFromSlug } from "@lwo/utils/cms";
import { notFound } from "next/navigation";

export default async function Article(props: App.PageProps<{ slug: string }>) {
  const { slug } = await props.params;
  const data = await getArticleFromSlug(slug);

  if (!data) {
    return notFound();
  }

  const { title } = data;

  console.log(data);

  return (
    <>
      <h1>{title}</h1>

      <Link href={staticPages.HOME.path}>Home</Link>
    </>
  );
}
