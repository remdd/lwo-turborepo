import axios from "axios";
import type { Faq } from "../types";

export async function getFaqs(): Promise<Faq[]> {
  try {
    const faqs = await axios.get(`${process.env.CMS_ROOT}/faqs`);

    return faqs.data.data;
  } catch (err) {
    console.warn(err);
    return [];
  }
}
