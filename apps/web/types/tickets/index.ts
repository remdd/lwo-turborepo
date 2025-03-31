export type TicketId =
  | "ADULT"
  | "ADULT_GA"
  | "CHILD"
  | "CHILD_GA"
  | "CONCESSION"
  | "CONCESSION_GA"
  | "FAMILY_2_2"
  | "FAMILY_2_2_GA"
  | "FAMILY_2_3"
  | "FAMILY_2_3_GA";

export type Ticket = {
  id: TicketId;
  name: string;
  price: number;
  gift_aid: boolean;
};
