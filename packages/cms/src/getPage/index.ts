import axios from "axios";
import { getPageList } from "../getPageList";
import type { Page, PageInfo } from "../types";

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const pages = await getPageList();

    const page = pages.find((p: PageInfo) => p.slug === slug);

    console.log(page);

    if (!page) {
      throw new Error(`No page found with slug: ${slug}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/pages/${page.documentId}?populate[content][populate]=*`,
    );

    console.log(data);

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
