import { CollectionType, RichText } from "..";

export type Email = CollectionType<{
  name: string;
  code: string;
  body: RichText;
}>;

export type EmailInfo = Pick<Email, "id" | "documentId" | "code">;
