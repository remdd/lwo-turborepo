import axios from "axios";
import type { EmailInfo } from "../types";

export async function getEmailList(): Promise<EmailInfo[]> {
  try {
    const emails = await axios.get(
      `${process.env.CMS_ROOT}/emails?fields=code`,
    );

    return emails.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
