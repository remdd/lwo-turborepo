import { CollectionType } from "../general";

export type EmailSender = CollectionType<{
  name: string;
  email: string;
}>;
