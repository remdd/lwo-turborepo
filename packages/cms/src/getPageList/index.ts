import axios from "axios";
import type { PageInfo } from "../types";

export async function getPageList(): Promise<PageInfo[]> {
  try {
    const slugs = await axios.get(`${process.env.CMS_ROOT}/pages?fields=slug`);

    return slugs.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
