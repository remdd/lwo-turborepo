import axios from "axios";
import { getEmailList } from "../";
import type { Email, EmailInfo } from "../types";

export async function getEmail(code: string): Promise<Email | null> {
  try {
    const emails = await getEmailList();

    const email = emails.find((e: EmailInfo) => e.code === code);

    if (!email) {
      throw new Error(`No email found with code: ${code}`);
    }

    const { data } = await axios.get(
      `${process.env.CMS_ROOT}/emails/${email.documentId}?pLevel`,
    );

    return data.data;
  } catch (err) {
    console.warn(err);
    return null;
  }
}
