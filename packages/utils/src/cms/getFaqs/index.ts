import { type CMS } from "@lwo/types";
import axios from "axios";

export async function getFaqs(): Promise<CMS.Faq[]> {
  try {
    const faqs = await axios.get(`${process.env.CMS_ROOT}/faqs`);

    return faqs.data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
