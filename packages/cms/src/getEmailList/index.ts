import axios from "axios";
import type { EmailInfo } from "../types";

export async function getEmailList(): Promise<EmailInfo[]> {
  try {
    const slugs = await axios.get(`${process.env.CMS_ROOT}/email?fields=code`);

    return slugs.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
