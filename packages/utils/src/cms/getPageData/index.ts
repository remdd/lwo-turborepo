import { type CMS } from "@lwo/types";
import axios from "axios";
import { getPageList } from "../getPageList";

export async function getPageData(slug: string): Promise<CMS.Page | null> {
  try {
    const pages = await getPageList();

    console.log(pages);

    const page = pages.find((p: CMS.Minimal<CMS.Page>) => p.slug === slug);

    if (!page) {
      throw new Error(`No page found with slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/pages/${page.documentId}?populate=*`,
    );

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
