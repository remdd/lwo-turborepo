import { CollectionType, EmailSender } from "..";

export type Email = CollectionType<{
  name: string;
  code: string;
  subject: string;
  body: string;
  email_sender: EmailSender;
}>;

export type EmailInfo = Pick<Email, "id" | "documentId" | "code">;
