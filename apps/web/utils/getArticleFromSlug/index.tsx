import axios from "axios";
import { type CMS } from "@lwo/types";

export async function getArticleFromSlug(
  slug: string
): Promise<CMS.Article | null> {
  try {
    const slugs = await axios.get(
      `${process.env.CMS_ROOT}/articles?fields=slug`
    );
    const { documentId } = slugs.data.data.find(
      (s: CMS.Article) => s.slug === slug
    );
    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/articles/${documentId}?populate=*`
    );
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
