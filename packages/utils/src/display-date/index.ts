import { format } from "date-fns";

export function displayDate(date: string | Date): string {
  return format(new Date(date), "MMMM dd, yyyy");
}
