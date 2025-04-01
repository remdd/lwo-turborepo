import { CollectionType, Faq } from "../";

export type FaqCollection = CollectionType<{
  title: string;
  faqs: Faq[];
}>;
