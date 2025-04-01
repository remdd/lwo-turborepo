import axios from "axios";
import type { Global } from "../types";

export async function getGlobal(): Promise<Global> {
  try {
    const { data } = await axios.get(`${process.env.CMS_ROOT}/global`);

    return data.data;
  } catch (err) {
    console.error(err);
    return {} as Global;
  }
}
