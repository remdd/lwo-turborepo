import axios from "axios";
import type { Article } from "../types";

export interface Options {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
}

export async function getArticleList(options?: Options): Promise<Article[]> {
  try {
    const {
      sortBy,
      sortOrder = "asc",
      page = 1,
      pageSize = 25,
    } = options || {};

    let params = "?populate[0]=cover_image&populate[1]=article_tags";
    if (sortBy) {
      params += `&sort=${sortBy}:${sortOrder}`;
    }
    if (page) {
      params += `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    }
    console.log(params);
    const list = await axios.get(`${process.env.CMS_ROOT}/articles${params}`);

    return list.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
