import { CollectionType, RichText } from "../";

export type Faq = CollectionType<{
  question: string;
  answer: RichText;
}>;
