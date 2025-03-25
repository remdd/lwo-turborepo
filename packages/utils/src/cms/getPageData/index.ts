import { type CMS } from "@lwo/types";
import axios from "axios";
import { getPageList } from "../getPageList";

export async function getPageData(slug: string): Promise<CMS.Article | null> {
  try {
    const pages = await getPageList();

    const page = pages.find((p: CMS.Minimal<CMS.Page>) => p.slug === slug);

    if (!page) {
      throw new Error(`No documentId found for slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/articles/${page.documentId}?populate=*`,
    );

    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
