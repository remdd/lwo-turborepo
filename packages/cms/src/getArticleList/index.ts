import axios from "axios";
import type { ArticleInfo } from "../types";

export interface Options {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
}

export async function getArticleList(
  options?: Options,
): Promise<ArticleInfo[]> {
  try {
    const {
      sortBy,
      sortOrder = "asc",
      page = 1,
      pageSize = 25,
    } = options || {};

    let params = "";
    if (sortBy) {
      params += `?sort=${sortBy}:${sortOrder}`;
    }
    if (page) {
      params += `${params ? "&" : "?"}pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    }
    const list = await axios.get(`${process.env.CMS_ROOT}/articles${params}`);

    return list.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
